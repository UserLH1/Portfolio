// app/layout.tsx

import Navbar from "@/components/main/Navbar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const StarsCanvas = dynamic(() => import("@/components/ui/StarBackground"), {
  ssr: false,
  loading: () => null,
});

// ─────────────────────────────────────────────
// TODO: Update the siteUrl if your domain changes
// ─────────────────────────────────────────────
const siteUrl = "https://horatiulazea.com";

export const metadata: Metadata = {
  title: "Horatiu Lazea | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and Spring Boot. Building fast, scalable web applications with clean code and great UX.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "JavaScript",
    "Horatiu Lazea",
  ],
  authors: [{ name: "Horatiu Lazea", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Horatiu Lazea | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and Spring Boot. Check out my projects and skills.",
    url: siteUrl,
    siteName: "Horatiu Lazea Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        // Fixed: was "../public/portfolio.png" which breaks in production
        url: `${siteUrl}/portfolio.png`,
        width: 1200,
        height: 630,
        alt: "Horatiu Lazea – Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horatiu Lazea | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and Spring Boot.",
    images: [`${siteUrl}/portfolio.png`],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ─────────────────────────────────────────────
// JSON-LD structured data — helps Google understand you are a person
// TODO: Update jobTitle, knowsAbout, alumniOf, and sameAs with your real links
// ─────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Horatiu Lazea",
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and Spring Boot.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "GraphQL",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "TODO: Your University Name", // TODO: fill in
  },
  sameAs: [
    "https://www.linkedin.com/in/horatiu-lazea/",
    "https://github.com/UserLH1",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
