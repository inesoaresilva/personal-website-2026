import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inês Silva — Portfolio",
  description: "Software engineer based in Porto, Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#hero-heading"
          className="fixed left-1/2 -translate-x-1/2 -top-full z-[999] bg-lemon text-navy font-jakarta font-semibold text-sm px-5 py-3 rounded-b-lg focus:top-0 transition-[top] duration-150"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
