import { NextResponse } from "next/server";

interface InquiryPayload {
  company: string;
  contactName: string;
  email: string;
  phone?: string;
  items: { slug: string; name: string }[];
  quantityRange: string;
  customizationNotes?: string;
  timeline?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: InquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Validate required fields
  const errors: string[] = [];
  if (!payload.company?.toString().trim()) errors.push("company is required");
  if (!payload.contactName?.toString().trim()) errors.push("contactName is required");
  if (!payload.email?.toString().trim() || !EMAIL_RE.test(payload.email)) {
    errors.push("a valid email is required");
  }
  if (!payload.quantityRange?.toString().trim()) errors.push("quantityRange is required");
  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join("; ") }, { status: 400 });
  }

  /* ------------------------------------------------------------------
   * PROVIDER INTEGRATION POINT
   * ------------------------------------------------------------------
   * This route is provider-agnostic. Swap the console.log below for ONE
   * of the following (and delete the log):
   *
   * 1) Resend (email):
   *      import { Resend } from "resend";
   *      const resend = new Resend(process.env.RESEND_API_KEY);
   *      await resend.emails.send({
   *        from: "inquiries@yourdomain.com",
   *        to: "info@game7.com",
   *        subject: `Corporate inquiry — ${payload.company}`,
   *        text: JSON.stringify(payload, null, 2),
   *      });
   *
   * 2) Formspree / generic webhook (also works for Zapier/Make → Google
   *    Sheets export, see README):
   *      await fetch(process.env.INQUIRY_WEBHOOK_URL!, {
   *        method: "POST",
   *        headers: { "Content-Type": "application/json" },
   *        body: JSON.stringify(payload),
   *      });
   * ------------------------------------------------------------------ */
  console.log("[inquiry] new submission:", JSON.stringify(payload, null, 2));

  return NextResponse.json({ ok: true });
}
