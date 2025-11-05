"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Loader2, LogOut } from "lucide-react"
import Link from "next/link"

const TEMPLATES = [
  { id: "product", name: "Product Description", placeholder: "Enter product name and key features..." },
  { id: "social", name: "Social Media Post", placeholder: "What do you want to share?" },
  { id: "email", name: "Email Subject Line", placeholder: "What is your email about?" },
  { id: "blog", name: "Blog Intro", placeholder: "What is your blog post topic?" },
]

export default function AppPage() {
  const [template, setTemplate] = useState("product")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const currentTemplate = TEMPLATES.find((t) => t.id === template)

  const handleGenerate = async () => {
    if (!input.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ template, input }),
      })
      const data = await response.json()
      setOutput(data.content)
    } catch (error) {
      console.error("Error generating content:", error)
      setOutput("Error generating content. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">Content AI</div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <LogOut className="w-4 h-4" />
              Exit
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Generate Content</h1>
              <p className="text-muted-foreground">Choose a template and describe what you need</p>
            </div>

            <Card className="p-6 space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Template</label>
                <Select value={template} onValueChange={setTemplate}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TEMPLATES.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Your Input</label>
                <Textarea
                  placeholder={currentTemplate?.placeholder}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </div>

              <Button onClick={handleGenerate} disabled={!input.trim() || loading} className="w-full" size="lg">
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Generating...
                  </>
                ) : (
                  "Generate Content"
                )}
              </Button>
            </Card>
          </div>

          {/* Output Panel */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Generated Content</h2>
              <p className="text-muted-foreground">Your AI-generated content will appear here</p>
            </div>

            {output && (
              <Card className="p-6 space-y-4">
                <div className="bg-secondary/50 rounded-lg p-4 min-h-[200px]">
                  <p className="text-foreground whitespace-pre-wrap">{output}</p>
                </div>
                <Button onClick={handleCopy} variant="outline" className="w-full gap-2 bg-transparent">
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </Button>
              </Card>
            )}

            {!output && (
              <Card className="p-6 h-[300px] flex items-center justify-center border-dashed">
                <p className="text-muted-foreground text-center">
                  Fill in the form on the left and click "Generate Content" to get started
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
