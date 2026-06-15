import type { Customization } from "@/lib/types";

/** Mono spec readout: placements and decoration methods. */
export default function CustomizationSpec({ spec }: { spec: Customization }) {
  return (
    <div className="g7-mono rounded-[2px] border border-g7-line text-xs">
      <p className="border-b border-g7-line bg-g7-near-black px-4 py-3 text-g7-offwhite">
        Customization Spec
      </p>
      <dl>
        <div className="flex flex-col gap-1 border-b border-g7-line px-4 py-3 sm:grid sm:grid-cols-[110px_1fr] sm:gap-4">
          <dt className="text-g7-offwhite/50">Placements</dt>
          <dd className="text-g7-offwhite/90">{spec.placements.join(" / ")}</dd>
        </div>
        <div className="flex flex-col gap-1 px-4 py-3 sm:grid sm:grid-cols-[110px_1fr] sm:gap-4">
          <dt className="text-g7-offwhite/50">Methods</dt>
          <dd className="text-g7-offwhite/90">{spec.methods.join(" / ")}</dd>
        </div>
      </dl>
    </div>
  );
}
