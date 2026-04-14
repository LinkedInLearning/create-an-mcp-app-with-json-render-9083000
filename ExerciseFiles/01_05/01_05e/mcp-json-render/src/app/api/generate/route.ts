import { streamText } from "ai";
import { buildUserPrompt } from "@json-render/core";
import { catalog } from "@/catalog/catalog";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const result = streamText({
    model: "anthropic/claude-haiku-4.5",
    system: catalog.prompt({
      customRules: [
        "Generate an operations dashboard.",
        "Use Card as the root element",
        "Use Heading for titles and Badge for status indicators"
      ]
    }),
    prompt: buildUserPrompt({ prompt })
  });
  return result.toTextStreamResponse();
}
