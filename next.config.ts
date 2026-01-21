import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const nextConfig: NextConfig = {
  // Your existing Next.js config
};

export default async function (): Promise<NextConfig> {
  return await withLingo(nextConfig, {
    sourceRoot: "src",
    lingoDir: "src/lingo",
    sourceLocale: "en",
    targetLocales: ["ar", "fr"],
    models: "lingo.dev", // Simple string syntax
    // Disable pluralization to avoid needing GROQ_API_KEY
    pluralization: {
      enabled: false,
      model: "groq:llama3-8b-8192",
    },

    buildMode: "translate", // Use "translate" for real translations in dev

    dev: {
      usePseudotranslator: false, // Test with fake translations first
      translationServerStartPort: 60000,
    },
  });
}
