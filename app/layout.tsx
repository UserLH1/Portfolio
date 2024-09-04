import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/ui/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-[#10052f]  to-black z-5 overflow-y-scroll overflow-x-hidden`}
      >
        {" "}
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
