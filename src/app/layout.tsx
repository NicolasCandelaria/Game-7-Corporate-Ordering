import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://game7-corporate.vercel.app"),
  title: {
    default: "GAME 7 Corporate Program — Performance Under Pressure",
    template: "%s — GAME 7 Corporate Program",
  },
  description:
    "Championship apparel for the corporate world. Premium blanks, deep customization, and co-branding through the GAME 7 corporate program, distributed by Billboard Agency International.",
  openGraph: {
    title: "GAME 7 Corporate Program",
    description:
      "Premium blanks. Deep customization. Co-branding built in. Championship apparel for the corporate world.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-g7-black text-g7-offwhite antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
