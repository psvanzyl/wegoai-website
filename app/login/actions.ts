"use server";

import { signIn } from "@/auth";

export async function signInWith(provider: "google" | "github") {
  await signIn(provider, { redirectTo: "/dashboard" });
}
