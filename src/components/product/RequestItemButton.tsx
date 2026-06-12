"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { addToInquiry } from "@/lib/inquiry";

/**
 * "Request this item" — primary PDP action. Routes through addToInquiry(),
 * the documented seam where a persistent inquiry-list/cart would later hook in.
 */
export default function RequestItemButton({ slug }: { slug: string }) {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(addToInquiry(slug))} className="w-full sm:w-auto">
      Request This Item
      <ArrowRight size={14} aria-hidden />
    </Button>
  );
}
