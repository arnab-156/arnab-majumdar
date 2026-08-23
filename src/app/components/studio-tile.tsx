import Image from "next/image";
import Link from "next/link";

import { Reveal } from "./animation";
import { heroPrimaryButtonStyle } from "../utility/stylevariables";

/**
 * The paper tile the homepage card wall uses: optional indigo eyebrow, title,
 * body, an optional piece of media that slides in, and an indigo primary
 * button pinned to the bottom so rows stay square.
 *
 * `align` moves the media and the button only — the text stays left, which is
 * what keeps a wall of these readable. The homepage runs them left-aligned;
 * /experiences centres them.
 */
export const StudioTile = ({
  eyebrow,
  title,
  description,
  children,
  imageUrl,
  imageAlt,
  media,
  href,
  buttonText,
  openInNewTab = false,
  ariaLabel,
  align = "left",
  mediaOnDark = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Richer body than a single paragraph — lists, several paragraphs. */
  children?: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  /** Anything that is not a photo, e.g. an icon, in the same animated slot. */
  media?: React.ReactNode;
  /** Omit for a tile with nowhere to go; the button is then left off. */
  href?: string;
  buttonText?: string;
  openInNewTab?: boolean;
  ariaLabel?: string;
  /** Where the media and button sit. Text is unaffected. */
  align?: "left" | "center";
  /**
   * For logos drawn in white, which vanish on the paper ground. Puts them on
   * an ink chip so they read, the way the purple card backgrounds used to.
   */
  mediaOnDark?: boolean;
}) => {
  const centred = align === "center";

  return (
    <div className="flex h-full flex-col rounded-2xl border border-lotus-indigo/15 bg-lotus-paper p-6 text-left shadow-md dark:border-lotus-paper/15 dark:bg-white/5">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.28em] text-lotus-indigo dark:text-lotus-paper/70">{eyebrow}</p>
      )}
      {title && (
        <h3 className="mt-2 font-nyu-ultra text-lg uppercase leading-tight text-lotus-ink dark:text-lotus-paper">
          {title}
        </h3>
      )}
      <div className="mt-3 flex flex-1 flex-col gap-4 text-lotus-ink/80 dark:text-lotus-paper/80">
        {description && <p>{description}</p>}
        {children}
        {/* Slides in and settles on the edge the button sits on. Reveal handles
            reduced-motion and, on narrow screens, swaps the sideways entrance
            for one from below. */}
        {(imageUrl || media) && (
          <Reveal
            method={centred ? "rise" : "right"}
            delay={120}
            className={`flex ${centred ? "justify-center" : "justify-start"}`}
          >
            {imageUrl ? (
              <span className={mediaOnDark ? "inline-flex rounded-lg bg-lotus-ink px-4 py-3" : undefined}>
              <Image
                src={imageUrl}
                alt={imageAlt ?? ""}
                width={240}
                height={240}
                // Auto on both axes so photos keep their own aspect ratio; the
                // caps keep every tile's media to the same visual weight, and
                // max-w-full stops an SVG with no intrinsic size (the Bonobos
                // and ShopRunner logos) from running past the tile edge.
                className="h-auto max-h-32 w-auto max-w-full rounded object-contain"
                unoptimized
              />
              </span>
            ) : (
              media
            )}
          </Reveal>
        )}
      </div>
      {href && (
        <Link
          href={href}
          {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
          className={`${heroPrimaryButtonStyle} mt-5 ${centred ? "self-center" : "self-start"}`}
        >
          {buttonText ?? "Learn More"}
        </Link>
      )}
    </div>
  );
};
