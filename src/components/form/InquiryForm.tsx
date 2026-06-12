"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { getProduct } from "@/data/products";
import { QUANTITY_RANGES } from "@/lib/inquiry";
import Button from "@/components/ui/Button";
import FormField, { inputClass } from "@/components/form/FormField";
import ItemSelector, { type SelectedItem } from "@/components/form/ItemSelector";

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const searchParams = useSearchParams();

  // Pre-select an item arriving via /inquiry?item={slug}. Selected items are
  // kept as { slug, name }[] — the seam a future inquiry-list/cart reuses.
  const preselect = getProduct(searchParams.get("item") ?? "");
  const [items, setItems] = useState<SelectedItem[]>(
    preselect ? [{ slug: preselect.slug, name: preselect.name }] : [],
  );
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    const payload = {
      company: form.get("company"),
      contactName: form.get("contactName"),
      email: form.get("email"),
      phone: form.get("phone") || undefined,
      items,
      quantityRange: form.get("quantityRange"),
      customizationNotes: form.get("customizationNotes") || undefined,
      timeline: form.get("timeline") || undefined,
      message: form.get("message") || undefined,
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2px] border border-g7-line bg-g7-near-black p-10 text-center md:p-16">
        <CheckCircle2 size={36} className="mx-auto text-g7-yellow" aria-hidden />
        <h2 className="g7-display mt-6 text-3xl text-g7-offwhite md:text-5xl">
          Inquiry received
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-g7-offwhite/70">
          Your request is in. A member of the GAME 7 corporate program team will reach
          out directly — no automated quotes, no pricing tiers.
        </p>
        <p className="g7-mono mt-8 text-[10px] text-g7-offwhite/40">
          Performance Under Pressure
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Company / Organization" htmlFor="company" required>
          <input id="company" name="company" required className={inputClass} autoComplete="organization" />
        </FormField>
        <FormField label="Contact Name" htmlFor="contactName" required>
          <input id="contactName" name="contactName" required className={inputClass} autoComplete="name" />
        </FormField>
        <FormField label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </FormField>
        <FormField label="Phone (Optional)" htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </FormField>
      </div>

      <FormField label="Items of Interest" htmlFor="items">
        <ItemSelector selected={items} onChange={setItems} />
        {items.length > 0 && (
          <p className="g7-mono text-[10px] text-g7-offwhite/50">
            {items.length} selected: {items.map((i) => i.name).join(", ")}
          </p>
        )}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Estimated Quantity Range" htmlFor="quantityRange" required>
          <select id="quantityRange" name="quantityRange" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {QUANTITY_RANGES.map((range) => (
              <option key={range} value={range}>
                {range} units
              </option>
            ))}
          </select>
        </FormField>
        <FormField label="Timeline (Optional)" htmlFor="timeline">
          <input
            id="timeline"
            name="timeline"
            className={inputClass}
            placeholder="e.g. Q4 client event"
          />
        </FormField>
      </div>

      <FormField label="Customization Notes" htmlFor="customizationNotes">
        <textarea
          id="customizationNotes"
          name="customizationNotes"
          rows={4}
          className={inputClass}
          placeholder="Logos, placements, colors, co-branding..."
        />
      </FormField>

      <FormField label="Message (Optional)" htmlFor="message">
        <textarea id="message" name="message" rows={3} className={inputClass} />
      </FormField>

      {status === "error" && (
        <p
          role="alert"
          className="g7-mono flex items-center gap-2 rounded-[2px] border border-g7-cobalt px-4 py-3 text-xs text-g7-offwhite"
        >
          <RotateCcw size={14} aria-hidden className="text-g7-cobalt" />
          Something went wrong sending your inquiry. Please try again.
        </p>
      )}

      <div>
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </Button>
        <p className="g7-mono mt-4 text-[10px] text-g7-offwhite/40">
          No pricing online. Every program is quoted directly by the team.
        </p>
      </div>
    </form>
  );
}
