import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jokino Martin | Developer ",
  description: "Portafolio profesional de Jokino Martin",
  keywords: ["Jokino Martin", "Desarrollador junior", "React", "Next.js", "Guatemala"],
  authors: [{ name: "Jokino Martin" }],
  openGraph: {
    title: "Jokino Martin | Developer",
    description: "Portafolio profesional de Jokino Martin",
    url: "https://jokino.xyz",
    siteName: "Jokino Martin",
    locale: "es_GT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
