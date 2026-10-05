import Link from "next/link";
import { auth, signOut } from "@/auth";

export async function SiteHeader() {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block size-2.5 rounded-full bg-accent" />
          WeGo<span className="text-primary">AI</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/#products" className="text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <Link href="/#api" className="text-muted-foreground hover:text-foreground">
            API
          </Link>
          <Link href="/#eu" className="text-muted-foreground hover:text-foreground">
            Why EU
          </Link>
          {session?.user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                {session.user.name ?? session.user.email ?? "Playground"}
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Sign out
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground hover:bg-primary/90"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
