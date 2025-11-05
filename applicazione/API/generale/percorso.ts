import { generateText } from "ai"

const PROMPTS = {
  product: "Write a compelling product description for:",
  social: "Write an engaging social media post about:",
  email: "Write a catchy email subject line for:",
  blog: "Write an engaging blog intro paragraph for:",
}

export async function POST(request: Request) {
  try {
    const { template, input } = await request.json()

    if (!template || !input) {
      return Response.json({ error: "Missing template or input" }, { status: 400 })
    }

    const prompt = PROMPTS[template as keyof typeof PROMPTS] || PROMPTS.product
    const fullPrompt = `${prompt}\n\n${input}\n\nGenerate only the content, nothing else.`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: fullPrompt,
      temperature: 0.7,
    })

    return Response.json({ content: text })
  } catch (error) {
    console.error("Generation error:", error)
    return Response.json({ error: "Failed to generate content" }, { status: 500 })
  }
}
