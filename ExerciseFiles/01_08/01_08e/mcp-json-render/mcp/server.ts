import { createMcpApp } from "@json-render/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { catalog } from "../src/catalog/catalog";

async function main() {
  const server = await createMcpApp({
    name: "Operations Dashboard",
    version: "1.0.0",
    catalog,
    html: "<html><body>Operations Dashboard</body></html>"
  });

  await server.connect(new StdioServerTransport());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
