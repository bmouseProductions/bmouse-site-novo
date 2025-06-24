"use client";
// import type { Metadata } from "next";
import { usePathname } from "next/navigation";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import "@/lib/fontawesome";
import Footer from "@/components/Footer/Footer";
import BackTo from "../components/backto/BackTo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith("/nothing");
  return (
    <html lang="en">
      <body className="">
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
        <BackTo />
      </body>
    </html>
  );
}
