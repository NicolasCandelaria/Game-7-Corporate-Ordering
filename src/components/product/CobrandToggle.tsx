"use client";

export type GalleryMode = "base" | "cobrand";

/**
 * Switch between GAME 7 imagery and co-branded example imagery so a buyer
 * can see how their logo integrates. Cobalt accent (co-branded context).
 */
export default function CobrandToggle({
  mode,
  onChange,
}: {
  mode: GalleryMode;
  onChange: (mode: GalleryMode) => void;
}) {
  const options: { id: GalleryMode; label: string }[] = [
    { id: "base", label: "GAME 7" },
    { id: "cobrand", label: "Co-Branded Example" },
  ];

  return (
    <div
      role="group"
      aria-label="Image set"
      className="flex w-full max-w-md rounded-[2px] border border-g7-line sm:inline-flex sm:w-auto"
    >
      {options.map((opt) => {
        const active = mode === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.id)}
            className={`g7-mono flex-1 px-3 py-2 text-[10px] transition-colors duration-200 sm:flex-none sm:px-4 ${
              active
                ? "bg-g7-cobalt text-g7-offwhite"
                : "bg-transparent text-g7-offwhite/60 hover:text-g7-offwhite"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
