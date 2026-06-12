"use client";

import { Check } from "lucide-react";
import { products } from "@/data/products";
import { categories, categoryLabel } from "@/data/categories";

export interface SelectedItem {
  slug: string;
  name: string;
}

/**
 * Multi-select of catalog items. Selection is modeled as { slug, name }[]
 * — the same shape a future persistent inquiry list (cart) would use.
 */
export default function ItemSelector({
  selected,
  onChange,
}: {
  selected: SelectedItem[];
  onChange: (items: SelectedItem[]) => void;
}) {
  function toggle(slug: string, name: string) {
    const exists = selected.some((s) => s.slug === slug);
    onChange(
      exists ? selected.filter((s) => s.slug !== slug) : [...selected, { slug, name }],
    );
  }

  return (
    <div className="max-h-80 overflow-y-auto rounded-[2px] border border-g7-line bg-g7-near-black">
      {categories.map((cat) => (
        <div key={cat.id}>
          <p className="g7-mono sticky top-0 border-b border-g7-line bg-g7-black px-4 py-2 text-[10px] text-g7-offwhite/50">
            {categoryLabel(cat.id)}
          </p>
          <ul>
            {products
              .filter((p) => p.category === cat.id)
              .map((p) => {
                const active = selected.some((s) => s.slug === p.slug);
                return (
                  <li key={p.slug}>
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={active}
                      onClick={() => toggle(p.slug, p.name)}
                      className={`flex w-full items-center justify-between gap-3 border-b border-g7-line/50 px-4 py-3 text-left text-sm transition-colors duration-150 ${
                        active
                          ? "bg-g7-yellow/10 text-g7-offwhite"
                          : "text-g7-offwhite/70 hover:bg-g7-black hover:text-g7-offwhite"
                      }`}
                    >
                      {p.name}
                      <span
                        aria-hidden
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border ${
                          active
                            ? "border-g7-yellow bg-g7-yellow text-g7-black"
                            : "border-g7-line"
                        }`}
                      >
                        {active && <Check size={12} strokeWidth={3} />}
                      </span>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </div>
  );
}
