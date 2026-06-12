import type { CategoryDef } from "@/lib/types";

export const categories: CategoryDef[] = [
  { id: "outerwear", label: "Outerwear" },
  { id: "hoodies-layers", label: "Hoodies & Layers" },
  { id: "tops", label: "Tops" },
  { id: "headwear", label: "Headwear" },
];

export function categoryLabel(id: string): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}
