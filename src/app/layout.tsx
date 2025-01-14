import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ClientProvider from "./clientProvider";


const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ride wafe ",
  description: "Ride wafe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}