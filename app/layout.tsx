// app/layout.tsx

import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/ui/StarBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horatiu Lazea | Full-Stack Developer Portfolio",
  description:
    "I'm Horatiu Lazea, a Full-Stack Developer with expertise in React, Next.js, and Node.js. Check out my projects and skills.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Development",
    "JavaScript",
  ],
  authors: [{ name: "Horatiu Lazea" }],
  openGraph: {
    title: "Horatiu Lazea | Full-Stack Developer Portfolio",
    description:
      "Discover the projects and skills of Horatiu Lazea, a Full-Stack Developer specializing in modern web development technologies.",
    url: "https://horatiulazea.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Move the viewport configuration out of metadata and export it separately
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>{/* Additional meta tags can be included here if needed */}</head>
      <body
        className={`${inter.className} bg-gradient-to-b from-[#030014] to-black z-5 overflow-y-scroll overflow-x-hidden`}
      >
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
