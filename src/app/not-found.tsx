import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-5 py-24 text-center">
      <Image
        src="/brand/icon-mark.jpg"
        alt=""
        aria-hidden
        width={48}
        height={48}
        className="h-12 w-12 object-contain opacity-80"
      />
      <p className="g7-mono mt-8 text-xs text-g7-yellow">404</p>
      <h1 className="g7-display mt-4 text-[clamp(3rem,12vw,9rem)] text-g7-offwhite">
        Out of bounds
      </h1>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-g7-offwhite/70">
        This page isn&apos;t in the lineup. Get back in the game.
      </p>
      <div className="mt-10">
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
