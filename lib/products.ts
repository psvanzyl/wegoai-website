export const SITE_URL = "https://wegoai.duckdns.org";

export const PRODUCTS = {
  chat: {
    name: "Chat",
    tagline: "Personalized AI chat",
    url: process.env.NEXT_PUBLIC_CHAT_URL || "https://wegoai.duckdns.org/chat",
  },
  images: {
    name: "Pictures",
    tagline: "AI images with Fooocus on ComfyUI",
    url: process.env.NEXT_PUBLIC_IMAGES_URL || "https://wegoai.duckdns.org/images",
  },
  api: {
    name: "API",
    tagline: "One model, zero surprises",
    url: process.env.NEXT_PUBLIC_API_URL || "https://wegoai.duckdns.org/v1",
    model: "qwen3.8-flash-next-iq3_s",
  },
};
