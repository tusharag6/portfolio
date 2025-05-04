import "./globals.css";

import { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

import clsx from "clsx";

const SaansFont = localFont({
  src: "./saans-font.woff2",
  display: "swap",
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: "swap",
  variable: "--font-monospace",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tushar Agrawal - Web Developer",
  description: "Tushar Agrawal is a web developer based in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          "bg-slate-50"
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-8 px-6 md:px-0 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">
                ta
              </h1>
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/blogs"
                className="text-slate-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Blogs
              </Link>
              <Link
                href="/snippets"
                className="text-slate-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Snippets
              </Link>
            </nav>
          </header>
          {children}
          <footer className="px-6 md:px-0 border-t border-slate-200 py-8 mt-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy; {new Date().getFullYear()} {"/"} Tushar Agrawal
            </p>
            <p>
              <Link href="https://github.com/tusharag6/portfolio">
                View Source
              </Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
