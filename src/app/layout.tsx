import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import "@/lib/fontawesome";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Bmouse Productions",
  description:
    "A BMouse é muito mais do que uma agência de marketing. Somos uma agência de criatividade com um compromisso inabalável em levar a sua marca a novos patamares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
