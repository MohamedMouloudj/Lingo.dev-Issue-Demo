import type { NextConfig } from "next";
import lingoCompiler from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  /* config options here */
};

export default lingoCompiler.next({
  sourceRoot: "src",
  sourceLocale: "en",
  rsc: true,
  targetLocales: ["ar", "fr"],
  models: "lingo.dev",
})(nextConfig);
