import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack can resolve bare `@import "tailwindcss"` from the wrong directory
  // (parent folder without package.json). Pin the package to this project.
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(process.cwd(), "node_modules/tailwindcss"),
    },
  },
};

export default nextConfig;
