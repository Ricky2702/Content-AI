import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">Content AI</div>
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <Link href="/app">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary rounded-full text-sm font-medium">
            AI-powered content generator
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-6 text-balance">Write Better Content in Seconds</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Stop struggling with writer's block. Generate professional content for social media, emails, product
            descriptions, and more—instantly powered by AI.
          </p>
          <div className="flex gap-4">
            <Link href="/app">
              <Button size="lg" className="gap-2">
                Try for Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl font-bold mb-16">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border rounded-lg hover:bg-secondary/50 transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Generate content in seconds, not hours. Save time on your most tedious writing tasks.
            </p>
          </div>

          <div className="p-6 border border-border rounded-lg hover:bg-secondary/50 transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Multiple Templates</h3>
            <p className="text-muted-foreground">
              Product descriptions, social posts, emails, blog intros—we have templates for everything.
            </p>
          </div>

          <div className="p-6 border border-border rounded-lg hover:bg-secondary/50 transition">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Always Available</h3>
            <p className="text-muted-foreground">
              24/7 content generation. Never miss a deadline or inspiration again.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl font-bold mb-16">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          <div className="p-8 border border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold mb-6">
              $0<span className="text-lg text-muted-foreground">/month</span>
            </p>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex gap-2">
                <span>✓</span> 5 generations/month
              </li>
              <li className="flex gap-2">
                <span>✓</span> Basic templates
              </li>
              <li className="flex gap-2">
                <span>✓</span> Standard support
              </li>
            </ul>
            <Button variant="outline" className="w-full bg-transparent">
              Get Started
            </Button>
          </div>

          <div className="p-8 border-2 border-primary rounded-lg bg-primary/5">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-6">
              $9<span className="text-lg text-muted-foreground">/month</span>
            </p>
            <ul className="space-y-3 text-sm mb-8">
              <li className="flex gap-2">
                <span>✓</span> Unlimited generations
              </li>
              <li className="flex gap-2">
                <span>✓</span> All templates
              </li>
              <li className="flex gap-2">
                <span>✓</span> Priority support
              </li>
              <li className="flex gap-2">
                <span>✓</span> Custom tone settings
              </li>
            </ul>
            <Button className="w-full">Subscribe Now</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-muted-foreground text-sm">© 2025 Content AI. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
