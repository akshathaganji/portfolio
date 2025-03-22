import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from '@/components/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshatha Ganji",
  description: "Personal portfolio website for Akshatha Ganji",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative min-h-screen">
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
