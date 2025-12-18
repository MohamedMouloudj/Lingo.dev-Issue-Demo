import { LingoProvider, loadDictionary } from "lingo.dev/react/rsc";
import "./globals.css";
import LocaleSwitcher from "@/components/LocalSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LingoProvider loadDictionary={(locale) => loadDictionary(locale || "en")}>
      <html lang="en">
        <body className="antialiased">
          <nav className="w-full flex justify-end items-center">
            <div>
              <LocaleSwitcher />
            </div>
          </nav>
          {children}
        </body>
      </html>
    </LingoProvider>
  );
}
