"use client"
import { ReactElement, cloneElement, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type ImageMagnifyProps = {
  children: ReactElement;
  label?: string;
};

const mergeClassNames = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export function ImageMagnify({ children, label = "Expand image" }: ImageMagnifyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  const baseChild = useMemo(() => {
    if (!children) {
      throw new Error("ImageMagnify requires a single child element.");
    }
    return cloneElement(children, {
      className: mergeClassNames(children.props?.className, "transition duration-200"),
    });
  }, [children]);

  const triggerChild = useMemo(
    () =>
      cloneElement(baseChild, {
        className: mergeClassNames(
          baseChild.props?.className,
          "cursor-zoom-in hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        ),
      }),
    [baseChild]
  );

  const magnifiedChild = useMemo(
    () =>
      cloneElement(baseChild, {
        className: mergeClassNames(
          baseChild.props?.className,
          "max-h-[80vh] max-w-[80vw] object-contain cursor-zoom-out"
        ),
      }),
    [baseChild]
  );

  return (
    <>
      <button
        type="button"
        aria-label={label}
        className="relative rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        onClick={() => setIsOpen(true)}
      >
        {triggerChild}
      </button>

      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative max-h-full max-w-full"
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged image"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close image"
                className="absolute right-2 top-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-black hover:bg-white"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
              {magnifiedChild}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
