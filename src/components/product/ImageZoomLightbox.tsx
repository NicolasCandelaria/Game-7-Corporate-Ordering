"use client";

import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ZOOM_SCALE = 2.5;

type ImageZoomLightboxProps = {
  src: string;
  alt: string;
};

/** Magnify control + full-screen lightbox with cursor-following zoom. */
export default function ImageZoomLightbox({ src, alt }: ImageZoomLightboxProps) {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState("center center");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const updateOrigin = useCallback((clientX: number, clientY: number, rect: DOMRect) => {
    const x = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
    setOrigin(`${x}% ${y}%`);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    updateOrigin(event.clientX, event.clientY, rect);
  }

  function openLightbox(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    setOrigin("center center");
    setOpen(true);
  }

  const lightbox =
    open && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-g7-black/95"
            role="dialog"
            aria-modal="true"
            aria-label={`Zoomed view: ${alt}`}
          >
            <div className="flex items-center justify-end px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-[2px] border border-g7-line p-2 text-g7-offwhite transition-colors hover:border-g7-yellow hover:text-g7-yellow"
                aria-label="Close zoom view"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 cursor-zoom-in overflow-hidden"
              onPointerMove={handlePointerMove}
              onPointerLeave={() => setOrigin("center center")}
              onClick={() => setOpen(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <div className="relative h-full w-full max-h-full max-w-5xl">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="100vw"
                    className="object-contain transition-transform duration-100 ease-out"
                    style={{
                      transform: `scale(${ZOOM_SCALE})`,
                      transformOrigin: origin,
                    }}
                    priority
                  />
                </div>
              </div>
            </div>

            <p className="g7-mono px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-center text-[10px] text-g7-offwhite/50">
              Move cursor to explore · Click or press Esc to close
            </p>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className="absolute bottom-3 right-3 z-[2] flex h-9 w-9 items-center justify-center rounded-[2px] border border-g7-line/80 bg-g7-black/70 text-g7-offwhite backdrop-blur-sm transition-colors hover:border-g7-yellow hover:text-g7-yellow"
        aria-label={`Zoom ${alt}`}
      >
        <ZoomIn size={16} aria-hidden />
      </button>
      {lightbox}
    </>
  );
}
