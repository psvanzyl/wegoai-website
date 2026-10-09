import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeGoAI — Build with AI that never leaves Europe",
  description:
    "A beach-calm playground for makers and businesses: personalized AI chat, Fooocus image generation, and a single EU-hosted model endpoint. Your data, our GPUs, EU-certified from prompt to pixel.",
};

// Self-hosted Umami analytics (cookieless, EU-only). Property "wegoai".
// Ids are not secrets; the readout is internal-only at https://umami.home.arpa.
// The tracker loads only on the public hostname, so local dev and builds never
// land in the visitor data. Rendered inline (not next/script) so the gating
// logic runs before hydration without a hydration mismatch.
const UMAMI_WEBSITE_ID = "396ab575-88f8-4d59-a66a-50e5d2978064";
const umamiTag = `
(function () {
  var id = "${UMAMI_WEBSITE_ID}";
  var host = "wegoai.duckdns.org";
  var h = location.hostname;
  if (h !== host && h !== "www." + host) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://umami.laserraptorai.duckdns.org/script.js";
  s.setAttribute("data-website-id", id);
  document.head.appendChild(s);
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: umamiTag }} />
        {children}
      </body>
    </html>
  );
}
