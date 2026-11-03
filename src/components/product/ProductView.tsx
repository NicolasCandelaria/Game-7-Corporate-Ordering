"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { GalleryMode } from "@/components/product/CobrandToggle";

type ProductViewValue = {
  mode: GalleryMode;
  index: number;
  colorName: string | null;
  switchMode: (mode: GalleryMode) => void;
  setIndex: (index: number) => void;
  selectColor: (name: string | null, index: number) => void;
};

const ProductViewContext = createContext<ProductViewValue | null>(null);

export function ProductViewProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<GalleryMode>("base");
  const [index, setIndex] = useState(0);
  const [colorName, setColorName] = useState<string | null>(null);

  const value: ProductViewValue = {
    mode,
    index,
    colorName,
    switchMode(next) {
      setMode(next);
    },
    setIndex,
    selectColor(name, nextIndex) {
      setColorName(name);
      setIndex(nextIndex);
    },
  };

  return (
    <ProductViewContext.Provider value={value}>
      {children}
    </ProductViewContext.Provider>
  );
}

export function useProductView() {
  const value = useContext(ProductViewContext);
  if (!value) {
    throw new Error("useProductView must be used within ProductViewProvider");
  }
  return value;
}
