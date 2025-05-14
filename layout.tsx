import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import NextTopLoader from 'nextjs-toploader';
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Smart Recycle Hub",
  description: "Smart Recycle Hub - One stop solution to Recycle E-Waste, E-waste Facility Locator",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5QLTMJKRNP"
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5QLTMJKRNP');
            `,
        }}
      />{" "}
      <Script
  id="chatbase_chatbot"
  type="text/javascript"
  dangerouslySetInnerHTML={{
    __html: `
      window.embeddedChatbotConfig = {
        chatbotId: "en1TMso_ZsCxLDs6IHJT9",
        domain: "www.chatbase.co"
      };
      (function(){
        var s1 = document.createElement("script");
        var s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://www.chatbase.co/embed.min.js';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    `,
  }}
/>

      <body className={poppins.className}>
      <NextTopLoader color="#28af60" showSpinner={false}/>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
