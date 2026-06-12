import Image from "next/image";
import Link from "next/link";
import { ctaLink, navLinks } from "@/data/nav";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-g7-line bg-g7-black text-g7-offwhite">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 border-b border-g7-line pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-16">
          <div>
            <p className="g7-mono text-xs text-g7-yellow">Corporate Program</p>
            <h2 className="g7-display mt-5 max-w-3xl text-[clamp(2.5rem,8vw,7rem)] text-g7-offwhite">
              Win Or Go Home
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-g7-offwhite/70">
              Premium GAME 7 apparel, customized and co-branded for organizations
              that show up when everything is on the line.
            </p>
          </div>

          <div className="flex md:justify-end">
            <Button href={ctaLink.href}>{ctaLink.label}</Button>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-3 md:py-12">
          <div className="flex flex-col gap-6">
            <Image
              src="/brand/logo-horizontal.png"
              alt="GAME 7"
              width={240}
              height={43}
              className="h-7 w-auto"
            />
            <p className="max-w-xs text-sm leading-relaxed text-g7-offwhite/55">
              The two greatest words in sports, brought into the corporate world
              through premium apparel and deep customization.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="g7-mono flex flex-col gap-3 text-xs text-g7-offwhite/70"
          >
            <p className="mb-2 text-g7-offwhite">Explore</p>
            {[...navLinks, ctaLink].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit transition-colors hover:text-g7-yellow"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="g7-mono flex flex-col gap-3 text-xs text-g7-offwhite/70 md:items-end md:text-right">
            <p className="text-g7-offwhite">Inquiries</p>
            <a href="mailto:info@game7.com" className="hover:text-g7-offwhite">
              info@game7.com
            </a>
            <p className="max-w-xs text-g7-offwhite/45">
              Distributed by Billboard Agency International.
            </p>
          </div>
        </div>

        <div className="g7-mono flex flex-col justify-between gap-4 border-t border-g7-line pt-6 text-[10px] text-g7-offwhite/40 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} GAME 7. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            {[
              { label: "Instagram", href: "https://www.instagram.com/game7" },
              { label: "TikTok", href: "https://www.tiktok.com/@game7official__" },
              { label: "YouTube", href: "https://www.youtube.com/@Game7Official" },
              { label: "X", href: "https://x.com/game7" },
            ].map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-g7-yellow"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
