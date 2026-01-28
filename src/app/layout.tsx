"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";

import "./globals.css";
import Header from "@/components/Header/Header";
import "@/lib/fontawesome";
import Footer from "@/components/Footer/Footer";
import BackTo from "../components/backto/BackTo";

const GTM_ID = "GTM-58GR3XH4";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith("/nothing");

  return (
    <html lang="pt-BR">
      <Head>
        {/* Google Tag Manager */}
        
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-58GR3XH4');</script>

        {/* End Google Tag Manager */}
      </Head>
      <body className="">
        {/* Google Tag Manager (noscript) */}
        
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58GR3XH4"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
        {/* End noscript */}
        {!hideHeaderFooter && <Header />}
        {children}
        <BackTo />
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
