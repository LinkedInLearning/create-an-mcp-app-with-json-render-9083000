"use client";

import { useState } from "react";
import {
  JSONUIProvider,
  Renderer,
  useUIStream
} from "@json-render/react";
import { registry } from "@/registry/registry";
import { dashboardSpec } from "@/specs/dashboard";

export function DashboardBuilder() {
  const [prompt, setPrompt] = useState(
    "Show revenue, open tickets, and a short status summary!"
  );
  const { spec, isStreaming, send, clear } = useUIStream({
    api: "/api/generate"
  });
  return (
    <JSONUIProvider registry={registry}>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            send(prompt);
          }}
        >
          <input
            value={prompt}
            onChange={(event) =>
              setPrompt(event.target.value)
            }
          />
          <button type="submit" disabled={isStreaming}>
            {isStreaming ? "Streaming..." : "Generate"}
          </button>
          <button onClick={clear}>Reset</button>
        </form>
      </div>
    </JSONUIProvider>
  );
}
