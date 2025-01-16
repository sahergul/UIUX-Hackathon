import type { Metadata } from "next";
import "./globals.css";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "UIUX Hackathon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} font-helvetica`}>
        <div className="max-w-screen-2xl mx-auto">
          <header className="">
          <h1 className={`${greatVibes.className} text-4xl`}></h1> 
        </header>
        
        <HomeHeader/>
        <main>{children}</main>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
