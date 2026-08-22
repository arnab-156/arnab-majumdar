/**
 * Motion registry — the extension point of the animation layer.
 *
 * A "motion" describes the resting state an element animates *from*. The layer
 * transitions it to the neutral state (opaque, untransformed) when the element
 * scrolls into view.
 *
 * To add a method later, either add an entry to `builtInMotions` below or call
 * `registerMotion("myMethod", { from: () => ({ ... }) })` once at module scope.
 */

export type MotionFrom = {
  /** 0 - 1. Defaults to 1 (no fade). */
  opacity?: number;
  /** Horizontal offset in px. Negative comes from the left. */
  translateX?: number;
  /** Vertical offset in px. Positive comes from below. */
  translateY?: number;
  /** 1 is neutral. */
  scale?: number;
  /** Degrees. */
  rotate?: number;
  /** Blur radius in px. */
  blur?: number;
};

export type MotionDefinition = {
  /** Resting state. `distance` is the layer's configured travel distance in px. */
  from: (distance: number) => MotionFrom;
  /** Multiplies the layer duration, for methods that need more or less time. */
  durationScale?: number;
};

const builtInMotions: Record<string, MotionDefinition> = {
  none: { from: () => ({}) },
  fade: { from: () => ({ opacity: 0 }) },
  left: { from: (d) => ({ opacity: 0, translateX: -d }) },
  right: { from: (d) => ({ opacity: 0, translateX: d }) },
  bottom: { from: (d) => ({ opacity: 0, translateY: d }) },
  top: { from: (d) => ({ opacity: 0, translateY: -d }) },
  zoom: { from: () => ({ opacity: 0, scale: 0.94 }) },
  /** Bottom entry with a subtle scale — good for cards and pull quotes. */
  rise: { from: (d) => ({ opacity: 0, translateY: d * 0.6, scale: 0.97 }) },
  /** Slight tilt off the left edge — good for hero blocks. */
  tilt: { from: (d) => ({ opacity: 0, translateX: -d, rotate: -1.5 }) },
};

const registry = new Map<string, MotionDefinition>(Object.entries(builtInMotions));

export type MotionName = keyof typeof builtInMotions | (string & {});

/** Register (or override) a motion method. Call once, at module scope. */
export function registerMotion(name: string, definition: MotionDefinition): void {
  registry.set(name, definition);
}

export function getMotion(name: string): MotionDefinition {
  return registry.get(name) ?? registry.get("fade")!;
}

export function listMotions(): string[] {
  return Array.from(registry.keys());
}

/** Motions that read as a horizontal entrance; the layer swaps these on narrow screens. */
export const sideMotions = new Set(["left", "right", "tilt"]);

/** Turns a resting state into inline CSS. */
export function motionToStyle(from: MotionFrom): {
  opacity: number;
  transform: string;
  filter: string;
} {
  const transforms: string[] = [];
  const x = from.translateX ?? 0;
  const y = from.translateY ?? 0;

  if (x !== 0 || y !== 0) transforms.push(`translate3d(${x}px, ${y}px, 0)`);
  if (from.scale != null && from.scale !== 1) transforms.push(`scale(${from.scale})`);
  if (from.rotate) transforms.push(`rotate(${from.rotate}deg)`);

  return {
    opacity: from.opacity ?? 1,
    transform: transforms.length ? transforms.join(" ") : "none",
    filter: from.blur ? `blur(${from.blur}px)` : "none",
  };
}
