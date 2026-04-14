"use client";

import {
  JSONUIProvider,
  Renderer
} from "@json-render/react";
import { registry } from "@/registry/registry";
import { dashboardSpec } from "@/specs/dashboard";

export default function Home() {
  return (
    <main>
      <JSONUIProvider registry={registry}>
        <Renderer
          spec={dashboardSpec}
          registry={registry}
        />
      </JSONUIProvider>
    </main>
  );
}
