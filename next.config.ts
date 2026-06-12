import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder product/editorial assets are generated as labeled SVG tiles.
    // Once real photography (JPG/PNG) replaces them, this flag can be removed.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
