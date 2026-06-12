"use client";

import { useMemo, useState } from "react";
import type { Category, Product } from "@/lib/types";
import { categories } from "@/data/categories";
import ProductGrid from "@/components/product/ProductGrid";

type Filter = Category | "all";

export default function CollectionView({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter, products],
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by category"
        className="flex flex-wrap gap-2 border-b border-g7-line pb-8"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`g7-mono rounded-[2px] border px-4 py-2 text-xs transition-colors duration-200 ${
                active
                  ? "border-g7-yellow bg-g7-yellow text-g7-black"
                  : "border-g7-line text-g7-offwhite/70 hover:border-g7-offwhite/50 hover:text-g7-offwhite"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="g7-mono mt-6 text-xs text-g7-offwhite/50" aria-live="polite">
        {visible.length} {visible.length === 1 ? "item" : "items"}
      </p>

      <div className="mt-8">
        <ProductGrid products={visible} />
      </div>
    </div>
  );
}
