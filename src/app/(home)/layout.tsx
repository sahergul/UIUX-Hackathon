"use client"; // Mark this as a client component
import ReduxProvider from '@/providers/redux-provider';
import "../globals.css";
import HomeHeader from "@/components/HomeHeader";
import Footer from "@/components/Footer";
import { Great_Vibes } from "next/font/google";
import { Inter } from "next/font/google";
import { Metadata } from "next"; 

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-helvetica`}>
        {/* Wrap the entire app with the Redux Provider */}
        <ReduxProvider>
          <div className="max-w-screen-2xl mx-auto">
            <header className="">
              <h1 className={`${greatVibes.className} text-4xl`}></h1>
            </header>
            <HomeHeader/>
            <main>{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}