import type { ColorOption } from "@/lib/types";

/** Swatch row: name on hover, Pantone reference in mono caption when present. */
export default function ColorSwatches({ colors }: { colors: ColorOption[] }) {
  return (
    <div>
      <p className="g7-mono mb-3 text-[10px] text-g7-offwhite/50">Colorways</p>
      <ul className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <li key={color.name} className="group flex flex-col gap-2">
            <span
              title={color.name}
              className="block h-10 w-10 rounded-[2px] border border-g7-line transition-colors duration-200 group-hover:border-g7-offwhite/60"
              style={{ backgroundColor: color.hex }}
            />
            <span className="g7-mono max-w-28 text-[10px] leading-snug text-g7-offwhite/60">
              {color.name}
              {color.pantone && (
                <>
                  <br />
                  <span className="text-g7-offwhite/40">{color.pantone}</span>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
