import type {Metadata} from "next";
import {ReactNode} from "react";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KinoHut",
  description: "KinoHut is a platform to watch movies and TV shows online in HD quality without registration",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en" className={'dark'}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div className='px-10 flex flex-col min-h-dvh'>
            <Header/>
            <div className='grow'>
              {children}
            </div>
            <Footer/>
          </div>
      </body>
    </html>
  );
}
