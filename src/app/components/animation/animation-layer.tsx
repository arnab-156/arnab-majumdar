"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

import { getMotion, motionToStyle, sideMotions, type MotionName } from "./motions";

/** `alternate` is resolved by the controller into `left` / `right` by DOM order. */
export type LayerMethod = MotionName | "alternate";

export type AnimationLayerConfig = {
  /** Default motion for children that do not name one. */
  method: LayerMethod;
  /** Travel distance in px. */
  distance: number;
  /** Transition duration in ms. */
  duration: number;
  /** Base delay in ms, before any stagger. */
  delay: number;
  /** Extra delay per child, in DOM order, in ms. */
  stagger: number;
  /** Fraction of the element that must be visible before it reveals. */
  threshold: number;
  /** IntersectionObserver rootMargin. */
  rootMargin: string;
  /** Reveal once and stay, or re-hide when scrolled back out. */
  once: boolean;
  /** CSS timing function. */
  easing: string;
  /** Below `compactBreakpoint`, side entrances become this. `null` keeps them. */
  compactMethod: LayerMethod | null;
  /** Distance multiplier below `compactBreakpoint`. */
  compactDistanceScale: number;
  /** Max width in px treated as compact. */
  compactBreakpoint: number;
  /** Render everything immediately, no animation. */
  disabled: boolean;
};

export const defaultAnimationLayerConfig: AnimationLayerConfig = {
  method: "alternate",
  distance: 56,
  duration: 700,
  delay: 0,
  stagger: 0,
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px",
  once: true,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  compactMethod: "bottom",
  compactDistanceScale: 0.5,
  compactBreakpoint: 767,
  disabled: false,
};

type Handlers = {
  setIndex: (index: number) => void;
  setShown: (shown: boolean) => void;
};

type LayerContextValue = {
  config: AnimationLayerConfig;
  compact: boolean;
  register: (node: Element, handlers: Handlers) => () => void;
};

const AnimationLayerContext = createContext<LayerContextValue | null>(null);

export function useAnimationLayer(): LayerContextValue | null {
  return useContext(AnimationLayerContext);
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function byDomOrder(a: Element, b: Element): number {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
}

/**
 * Server-rendered markup starts hidden, so if JavaScript never runs the page
 * would read as blank. The root layer ships this fallback to rule that out.
 */
const noScriptCss =
  "[data-reveal]{opacity:1 !important;transform:none !important;filter:none !important;}";

export type AnimationLayerProps = Partial<AnimationLayerConfig> & {
  children: ReactNode;
  /** Wrapper element. Omit to render no DOM of its own. */
  as?: ElementType;
  className?: string;
};

/**
 * The controller. Wrap a page (or any subtree) in it, then use `<Reveal>` for
 * the parts that should animate in. Layers nest: an inner layer inherits the
 * outer one's settings and overrides only what it names, which is how a grid of
 * cards gets its own stagger inside a page that alternates sides.
 */
export function AnimationLayer({ children, as, className, ...overrides }: AnimationLayerProps) {
  const parent = useContext(AnimationLayerContext);

  const nodesRef = useRef(new Map<Element, Handlers>());
  const [registrationTick, setRegistrationTick] = useState(0);
  const [compact, setCompact] = useState(false);

  const base = parent?.config ?? defaultAnimationLayerConfig;
  const config = useMemo<AnimationLayerConfig>(() => {
    const merged = { ...base };
    (Object.keys(overrides) as (keyof AnimationLayerConfig)[]).forEach((key) => {
      const value = overrides[key];
      if (value !== undefined) {
        // Each key's value type matches by construction; the index write needs the cast.
        (merged as Record<string, unknown>)[key] = value;
      }
    });
    return merged;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base, JSON.stringify(overrides)]);

  const register = useCallback((node: Element, handlers: Handlers) => {
    nodesRef.current.set(node, handlers);
    setRegistrationTick((tick) => tick + 1);
    return () => {
      nodesRef.current.delete(node);
      setRegistrationTick((tick) => tick + 1);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const query = window.matchMedia(`(max-width: ${config.compactBreakpoint}px)`);
    const sync = () => setCompact(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [config.compactBreakpoint]);

  useEffect(() => {
    const nodes = Array.from(nodesRef.current.keys()).sort(byDomOrder);
    nodes.forEach((node, index) => nodesRef.current.get(node)?.setIndex(index));

    const revealAll = () => nodes.forEach((node) => nodesRef.current.get(node)?.setShown(true));

    if (config.disabled || prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const handlers = nodesRef.current.get(entry.target);
          if (!handlers) return;

          if (entry.isIntersecting) {
            handlers.setShown(true);
            if (config.once) observer.unobserve(entry.target);
          } else if (!config.once) {
            handlers.setShown(false);
          }
        });
      },
      { threshold: config.threshold, rootMargin: config.rootMargin },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [registrationTick, config.disabled, config.once, config.threshold, config.rootMargin]);

  const value = useMemo<LayerContextValue>(
    () => ({ config, compact, register }),
    [config, compact, register],
  );

  const content = parent ? (
    children
  ) : (
    <>
      <noscript>
        <style>{noScriptCss}</style>
      </noscript>
      {children}
    </>
  );

  return (
    <AnimationLayerContext.Provider value={value}>
      {as ? createElement(as, { className }, content) : content}
    </AnimationLayerContext.Provider>
  );
}

export type RevealProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  children: ReactNode;
  /** Element to render. Defaults to `div`. */
  as?: ElementType;
  /** Overrides the layer's default method for this element. */
  method?: LayerMethod;
  /** Overrides the computed delay (base + stagger) in ms. */
  delay?: number;
  duration?: number;
  distance?: number;
  /** Skip the animation for this element only. */
  disabled?: boolean;
};

/**
 * One animated element. Renders its children immediately — they are always in
 * the DOM for SEO and for search-in-page; only opacity and transform change.
 * Outside an `<AnimationLayer>` it renders plain, so a stray `Reveal` can never
 * leave content invisible.
 */
export function Reveal({
  children,
  as = "div",
  method,
  delay,
  duration,
  distance,
  disabled = false,
  className,
  style,
  ...rest
}: RevealProps) {
  const layer = useAnimationLayer();
  const ref = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);

  const register = layer?.register;
  useEffect(() => {
    const node = ref.current;
    if (!node || !register || disabled) return;
    return register(node, { setIndex, setShown });
  }, [register, disabled]);

  const inert = !layer || disabled;
  const config = layer?.config ?? defaultAnimationLayerConfig;
  const compact = layer?.compact ?? false;

  const resolved = useMemo(() => {
    let name = method ?? config.method;
    if (name === "alternate") name = index % 2 === 0 ? "left" : "right";
    if (compact && config.compactMethod && sideMotions.has(name)) name = config.compactMethod;
    if (name === "alternate") name = "bottom";

    const travel = (distance ?? config.distance) * (compact ? config.compactDistanceScale : 1);
    const motion = getMotion(name);

    return {
      from: motionToStyle(motion.from(travel)),
      duration: (duration ?? config.duration) * (motion.durationScale ?? 1),
      delay: delay ?? config.delay + index * config.stagger,
      name,
    };
  }, [method, config, compact, index, distance, duration, delay]);

  const revealStyle: CSSProperties = inert
    ? {}
    : shown
      ? {
          opacity: 1,
          transform: "none",
          filter: "none",
          transition: [
            `opacity ${resolved.duration}ms ${config.easing} ${resolved.delay}ms`,
            `transform ${resolved.duration}ms ${config.easing} ${resolved.delay}ms`,
            `filter ${resolved.duration}ms ${config.easing} ${resolved.delay}ms`,
          ].join(", "),
        }
      : {
          ...resolved.from,
          willChange: "opacity, transform",
          transition: [
            `opacity ${resolved.duration}ms ${config.easing}`,
            `transform ${resolved.duration}ms ${config.easing}`,
            `filter ${resolved.duration}ms ${config.easing}`,
          ].join(", "),
        };

  return createElement(
    as,
    {
      ...rest,
      ref,
      className,
      style: { ...revealStyle, ...style },
      "data-reveal": inert ? undefined : resolved.name,
      "data-reveal-shown": inert ? undefined : shown ? "true" : "false",
    },
    children,
  );
}
