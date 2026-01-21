import { LingoProvider } from "@lingo.dev/compiler/react";
import "./globals.css";
import LocaleSwitcher from "@/components/LocalSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LingoProvider>
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
