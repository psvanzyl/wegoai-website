import Link from "next/link";
import { MessageCircle, Image as ImageIcon, Braces, ShieldCheck, Server, Leaf, ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { FadeIn } from "@/components/fade-in";
import { PRODUCTS } from "@/lib/products";

const curlExample = `curl ${PRODUCTS.api.url}/chat/completions \\
  -H "Authorization: Bearer $WEGOAI_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${PRODUCTS.api.model}",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`;

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero border-b">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
            <FadeIn>
              <Badge variant="sea" className="mb-4">EU-certified · self-owned GPUs</Badge>
              <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                Build with AI that never leaves Europe.
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                A playground for makers and businesses — your data, our GPUs,
                EU-certified from prompt to pixel. Chat, generate images, or plug
                one fast model straight into your agent harness.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/login">
                    Enter the playground <ArrowRight />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#products">See the products</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-5xl px-4 py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">Three ways in</h2>
            <p className="mt-2 text-muted-foreground">
              One playground, three surfaces. Sign in with Google or GitHub to start.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <FadeIn delay={0.05}>
              <Card className="h-full">
                <CardHeader>
                  <MessageCircle className="size-8 text-accent" />
                  <CardTitle>Chat</CardTitle>
                  <CardDescription>
                    Personalized AI chat on a clean OpenWebUI surface. Your
                    conversations, your presets — hosted in the EU.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href={PRODUCTS.chat.url}>Try it <ArrowRight /></a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <ImageIcon className="size-8 text-accent" />
                  <CardTitle>Pictures</CardTitle>
                  <CardDescription>
                    AI image generation the quality-controlled way: Fooocus
                    workflows on ComfyUI. Style-consistent, images stay in the EU.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href={PRODUCTS.images.url}>Try it <ArrowRight /></a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Card className="h-full">
                <CardHeader>
                  <Braces className="size-8 text-accent" />
                  <CardTitle>API</CardTitle>
                  <CardDescription>
                    One OpenAI-compatible endpoint, one model, no vendor
                    roulette. Built for agent harnesses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#api">See the endpoint <ArrowRight /></a>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* API */}
        <section id="api" className="border-y bg-secondary/60">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight">
                One model. Zero surprises.
              </h2>
              <p className="mt-3 text-muted-foreground">
                A single OpenAI-compatible endpoint serving{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                  {PRODUCTS.api.model}
                </code>{" "}
                — fast, capable, and always the same model behind your agents.
                No routing to US or Chinese clouds, no silent model swaps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Leaf className="size-4 text-accent" /> Works with any
                  OpenAI-compatible harness
                </li>
                <li className="flex items-center gap-2">
                  <Server className="size-4 text-accent" /> Long context, fast
                  tokens, EU hardware
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-accent" /> One price, no
                  per-vendor fine print
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative rounded-xl border bg-card p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    quick start
                  </span>
                  <Copy className="size-4 text-muted-foreground" />
                </div>
                <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-foreground">
                  {curlExample}
                </pre>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why EU */}
        <section id="eu" className="mx-auto max-w-5xl px-4 py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              Why EU-certified matters
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <FadeIn delay={0.05}>
              <Card>
                <CardHeader>
                  <ShieldCheck className="size-7 text-accent" />
                  <CardTitle>GDPR by architecture</CardTitle>
                  <CardDescription>
                    Your prompts and images never cross an ocean. Privacy is a
                    property of the stack, not a policy page.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card>
                <CardHeader>
                  <Server className="size-7 text-accent" />
                  <CardTitle>Self-owned GPUs</CardTitle>
                  <CardDescription>
                    We run our own hardware in the EU. No third-party inference
                    brokers, no data resale.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Card>
                <CardHeader>
                  <Leaf className="size-7 text-accent" />
                  <CardTitle>Calm by design</CardTitle>
                  <CardDescription>
                    No hype, no dark patterns. A playground that respects your
                    attention and your data.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-hero border-t">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight">
                Ready to build?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                Sign in with Google or GitHub and start playing. No credit card,
                no lock-in.
              </p>
              <Button size="lg" className="mt-6" asChild>
                <Link href="/login">
                  Enter the playground <ArrowRight />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground">
          <span>WeGoAI — part of the wegoze family</span>
          <a href="https://wegoze.duckdns.org" className="hover:text-foreground">
            wegoze.duckdns.org
          </a>
        </div>
      </footer>
    </>
  );
}
