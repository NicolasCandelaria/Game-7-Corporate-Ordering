/**
 * Continuous horizontal marquee of brand values. Pure CSS animation;
 * auto-scroll is disabled under prefers-reduced-motion (see globals.css).
 */
export default function Ticker({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="g7-mono flex items-center gap-6 pr-6 text-sm text-g7-offwhite/80"
        >
          {item}
          <span aria-hidden className="text-g7-yellow">
            •
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden border-y border-g7-line bg-g7-black py-4"
      role="marquee"
      aria-label="Brand values"
    >
      <div className="g7-marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
