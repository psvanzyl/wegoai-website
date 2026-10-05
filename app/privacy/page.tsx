export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Privacy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          WeGoAI runs on our own GPU hardware in the European Union. Your
          prompts, chats, and generated images are processed and stored only in
          the EU — never routed through US or Chinese clouds.
        </p>
        <p>
          When you sign in with Google or GitHub, we store only your name,
          email address, and profile picture to maintain your session. We do
          not sell data, run trackers, or share anything with third parties.
        </p>
        <p>
          Questions? Email{" "}
          <a href="mailto:psvanzyl@gmail.com" className="underline">
            psvanzyl@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
