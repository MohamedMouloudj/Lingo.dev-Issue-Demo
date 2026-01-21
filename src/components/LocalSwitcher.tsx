"use client"; // For Next.js

import { useLocale, setLocale } from "@lingo.dev/compiler/react";

export function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <select value={locale} onChange={(e) => setLocale(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
    </select>
  );
}
