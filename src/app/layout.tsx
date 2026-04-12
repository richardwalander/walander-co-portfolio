import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Richard Walander | Product Designer & Developer",
  description:
    "Multidisciplinary product designer crafting digital experiences. View my portfolio of design and development work.",
  keywords: ["product design", "UX design", "UI design", "Flutter", "portfolio"],
  authors: [{ name: "Richard Walander" }],
  openGraph: {
    title: "Richard Walander | Product Designer",
    description: "Multidisciplinary product designer crafting digital experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
