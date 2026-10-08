import type { CategoryDef } from "@/lib/types";

export const categories: CategoryDef[] = [
  { id: "tops", label: "Tops" },
  { id: "layers", label: "Layers" },
  { id: "outerwear", label: "Outerwear" },
  { id: "headwear", label: "Headwear" },
  { id: "accessories", label: "Accessories" },
];

export function categoryLabel(id: string): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}
