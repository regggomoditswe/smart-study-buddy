import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  contentType: z.string().min(1).max(80),
  topic: z.string().min(1).max(2000),
  tone: z.enum(["professional", "friendly", "academic", "simple"]),
  length: z.enum(["short", "medium", "detailed"]),
});

const lengthGuide: Record<string, string> = {
  short: "around 80-120 words",
  medium: "around 200-300 words",
  detailed: "around 450-650 words with clear structure",
};

export const generateContent = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("LOVABLE_API_KEY is not configured");

    const system = `You are an assistant that helps students create high-quality content.
Always write in a ${data.tone} tone.
Target length: ${lengthGuide[data.length]}.
Format the response in clean Markdown with headings, bullet points, or numbered lists where appropriate.
Do not include preambles like "Sure!" — return only the content.`;

    const user = `Content type: ${data.contentType}
Topic / instruction: ${data.topic}

Generate the ${data.contentType.toLowerCase()} now.`;

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });

    if (!res.ok) {
      if (res.status === 429) throw new Error("Rate limit reached. Please try again in a moment.");
      if (res.status === 402) throw new Error("AI credits exhausted. Please add credits in your workspace.");
      const text = await res.text();
      console.error("AI gateway error:", res.status, text);
      throw new Error("Failed to generate content. Please try again.");
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content ?? "";
    return { content };
  });
