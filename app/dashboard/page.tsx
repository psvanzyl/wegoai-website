import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Image as ImageIcon, Braces, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { PRODUCTS } from "@/lib/products";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome, {session.user.name ?? session.user.email}
            </h1>
            <p className="mt-1 text-muted-foreground">
              Your playground. Pick a surface and start building.
            </p>
          </div>
          <Badge variant="sea">
            signed in with {session.user.email?.includes("@") ? "Google/GitHub" : "SSO"}
          </Badge>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <MessageCircle className="size-7 text-accent" />
              <CardTitle>Chat</CardTitle>
              <CardDescription>OpenWebUI — your personalized AI chat.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" asChild>
                <a href={PRODUCTS.chat.url} target="_blank" rel="noreferrer">
                  Open <ArrowRight />
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <ImageIcon className="size-7 text-accent" />
              <CardTitle>Pictures</CardTitle>
              <CardDescription>ComfyUI + Fooocus — AI image generation.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" asChild>
                <a href={PRODUCTS.images.url} target="_blank" rel="noreferrer">
                  Open <ArrowRight />
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <Braces className="size-7 text-accent" />
              <CardTitle>API</CardTitle>
              <CardDescription>
                <code className="font-mono text-xs">{PRODUCTS.api.model}</code> —
                OpenAI-compatible endpoint.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" variant="outline" asChild>
                <Link href="/#api">Endpoint docs <ArrowRight /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
