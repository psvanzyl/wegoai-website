import Link from "next/link";
import { redirect } from "next/navigation";
import { GoogleIcon, GitHubIcon } from "@/components/provider-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { signInWith } from "@/app/login/actions";

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Enter the playground</CardTitle>
            <CardDescription>
              Sign in with Google or GitHub. No passwords, no forms.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <form action={async () => {
              "use server";
              await signInWith("google");
            }}>
              <Button type="submit" className="w-full" variant="outline">
                <GoogleIcon /> Continue with Google
              </Button>
            </form>
            <form action={async () => {
              "use server";
              await signInWith("github");
            }}>
              <Button type="submit" className="w-full" variant="outline">
                <GitHubIcon /> Continue with GitHub
              </Button>
            </form>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              By signing in you agree to our{" "}
              <Link href="/privacy" className="underline">privacy policy</Link>.
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
