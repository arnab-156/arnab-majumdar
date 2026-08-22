# Animation layer

A scroll-reveal layer you can drop onto any page. Wrap a subtree in
`<AnimationLayer>` (the controller) and mark the parts that should animate with
`<Reveal>`. The controller owns an `IntersectionObserver`, hands each `Reveal`
its position in DOM order, and resolves which motion each one uses.

Everything stays in the DOM at all times — only `opacity`, `transform` and
`filter` change — so text remains selectable, findable, and readable by crawlers.

## Using it

```tsx
import { AnimationLayer, Reveal } from "@/app/components/animation";

<AnimationLayer as="main" className="..." method="alternate" distance={64}>
  <section>
    <Reveal className="space-y-6">
      <h2>Heading</h2>
      <p>Lede</p>
    </Reveal>

    {/* A nested layer inherits the outer settings and overrides what it names. */}
    <AnimationLayer as="div" className="grid gap-4 md:grid-cols-3" method="rise" stagger={90}>
      {items.map((item) => (
        <Reveal as="article" key={item.title} className="...">
          ...
        </Reveal>
      ))}
    </AnimationLayer>
  </section>
</AnimationLayer>
```

`as` on either component swaps the rendered tag, so the layer can *become* the
element it wraps and add no DOM of its own. Omit `as` on `AnimationLayer` and it
renders nothing but the context.

## Controller options

| Prop | Default | What it does |
| --- | --- | --- |
| `method` | `"alternate"` | Default motion. `"alternate"` resolves to `left` / `right` by DOM order. |
| `distance` | `56` | Travel distance in px. |
| `duration` | `700` | Transition duration in ms. |
| `delay` | `0` | Base delay in ms. |
| `stagger` | `0` | Extra delay per child, in DOM order. |
| `threshold` | `0.15` | Fraction visible before revealing. |
| `rootMargin` | `"0px 0px -10% 0px"` | Observer margin. |
| `once` | `true` | Reveal once, or re-hide when scrolled back out. |
| `easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Timing function. |
| `compactMethod` | `"bottom"` | Below the breakpoint, side entrances become this. `null` keeps them. |
| `compactDistanceScale` | `0.5` | Distance multiplier below the breakpoint. |
| `compactBreakpoint` | `767` | Max width in px treated as compact. |
| `disabled` | `false` | Render everything immediately. |

`Reveal` takes `method`, `delay`, `duration`, `distance`, `skip` and `as` to
override the layer for one element, plus any normal DOM props. It is polymorphic,
so element-specific attributes work too — `type` on a button, `href` on an
anchor. The opt-out is `skip` rather than `disabled`, leaving `disabled` free to
mean what it means on a real form control.

### A note on `stagger`

Stagger is per-element delay by DOM order, and each element is observed
individually. That reads well for a row of cards that enter together, and badly
for a long vertical list where items enter one at a time — the tenth item would
sit still for `10 × stagger` after it is already on screen. Use `stagger` on
grids; leave it at `0` for stacked rows.

## Adding a method later

Motions live in [`motions.ts`](./motions.ts). A motion is just the resting state
an element animates *from*; the layer transitions it to neutral. Add an entry to
`builtInMotions`, or register one from anywhere:

```ts
import { registerMotion } from "@/app/components/animation";

registerMotion("swoop", {
  from: (distance) => ({ opacity: 0, translateX: -distance, rotate: -4, blur: 3 }),
  durationScale: 1.2,
});
```

Then use it: `<Reveal method="swoop">`. Available fields are `opacity`,
`translateX`, `translateY`, `scale`, `rotate` and `blur`. An unrecognised name
falls back to `fade` rather than throwing.

Built in: `none`, `fade`, `left`, `right`, `bottom`, `top`, `zoom`, `rise`, `tilt`.

## Things it already handles

- **Reduced motion** — the controller reveals everything immediately, and a
  `@media (prefers-reduced-motion: reduce)` rule in `globals.css` pins
  `[data-reveal]` to its settled state as a backstop.
- **No JavaScript** — the root layer emits a `<noscript>` style that reveals
  everything, so a failed bundle never leaves a blank page.
- **Narrow screens** — side entrances collapse to `bottom` and shorten their
  travel, which avoids the sideways lurch that horizontal slides give on a phone.
- **Horizontal overflow** — sliding elements can push the page wide. Put
  `overflow-x-clip` on the layer's own element (as the Coty page does).
- **Hover transforms** — the inline styles are removed once the entrance
  finishes (`transitionend`), so an element's own `tile-3d` lift or
  `hover:-translate-y-1` works normally afterwards. You can put `Reveal`
  directly on an interactive tile. The settled element carries
  `data-reveal-settled="true"`.
- **Scroll containers** — a transform on a child of an `overflow-x-auto` or
  `overflow-y-auto` element enlarges that element's scrollable area. Reveal the
  scroller as one unit instead of its items (see the courses rail on `/nyu`).
- **Class-driven carousels** — anything already animating itself with classes
  (the Stern Snapshots slides) should be wrapped as a block, not retagged, so
  the two transform sources never fight.

## Where it is used

- [`/nyu`](../../nyu/page.tsx)
- [`/nyu/sustainability/coty`](../../nyu/sustainability/coty/page.tsx)
- [`/nyu/the-strategist`](../../nyu/the-strategist/page.tsx)
- [`/nyu/financial-accounting`](../../nyu/financial-accounting/page.tsx)
- [`/nyu/finance-cheatsheet`](../../nyu/finance-cheatsheet/page.tsx)
- [`/nyu/professional-responsibility`](../../nyu/professional-responsibility/page.tsx)
- [`/nyu/LeadershipCommitmentPlan`](../../nyu/LeadershipCommitmentPlan/page.tsx)
