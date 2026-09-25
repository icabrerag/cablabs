import type { Metadata } from "next";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ignacio Cabrera — Full Stack Developer",
  description: "Software Engineer y Full Stack Developer en Chile. Desarrollo productos web con Next.js, React, TypeScript, FastAPI y Python.",
  keywords: ["Ignacio Cabrera", "Full Stack Developer", "Software Engineer", "Next.js", "React", "FastAPI", "Chile"],
  authors: [{ name: "Ignacio Cabrera", url: "https://github.com/icabrerag" }],
  creator: "Ignacio Cabrera",
  openGraph: {
    title: "Ignacio Cabrera — Full Stack Developer",
    description: "Diseño y construyo productos web, sistemas de gestión y experiencias digitales desde Chile.",
    type: "website",
    locale: "es_CL",
    siteName: "Ignacio Cabrera",
  },
  robots: { index: true, follow: true },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
