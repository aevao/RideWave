import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RideWafe",
  description: "RideWafe taxi for users",
};

interface ILayoutProps {
  title?: string; 
  children: React.ReactNode;
}

export default function RootLayout({ children, title }: ILayoutProps) {
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    const timeout = setTimeout(() => {setIsloading(false)},4000)

    return () => {
      clearTimeout(timeout)
    }
  },[])
  return (
    <html lang="en">
   
      <Head>
        <title>{title} | RideWafe Taxi</title>
        <meta name="description" content="RideWafe taxi for users" />
      
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Script
          strategy="beforeInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=places`}
        />
      
    </html>
  );
}
