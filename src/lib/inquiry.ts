/**
 * FUTURE CART SEAM
 * ----------------
 * `addToInquiry` is the single entry point for "Request this item" actions.
 * Today it returns the inquiry route with the item pre-selected via query
 * param, and the caller navigates.
 *
 * When a persistent "inquiry list" (quote cart) is added later, replace the
 * body of this function with a store write (e.g. Zustand:
 * `useInquiryStore.getState().add({ slug, name })`) and navigate without the
 * query param. The InquiryForm already models selected items as
 * `{ slug, name }[]`, so it can read from the store with no restructuring.
 */
export function addToInquiry(slug: string): string {
  return `/inquiry?item=${encodeURIComponent(slug)}`;
}

export const QUANTITY_RANGES = [
  "Under 50",
  "50–100",
  "100–250",
  "250–500",
  "500–1,000",
  "1,000+",
] as const;
