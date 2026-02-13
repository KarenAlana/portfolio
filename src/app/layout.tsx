import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/cammon/Header";
import { Footer } from "@/app/components/cammon/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karen Alana | Software Developer",
  description: "Portfolio of Karen Alana, Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-gray-900 via-gray-800 to-gray-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
