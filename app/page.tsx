import Contact from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Head from "next/head";

export default function Home() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      <Head>
        <title>Horatiu Lazea | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="I'm Horatiu Lazea, a Full-Stack Developer with expertise in React, Next.js, and Node.js. Check out my projects and skills."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, React, Next.js, Node.js, Portfolio, Web Development, JavaScript"
        />
        <meta name="author" content="Horatiu Lazea" />
        <meta
          property="og:title"
          content="Horatiu Lazea | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Discover the projects and skills of Horatiu Lazea, a Full-Stack Developer specializing in modern web development technologies."
        />
        <meta property="og:image" content="/public/og-image.jpg" />
        {/* Imagine pentru Open Graph */}
        <meta property="og:url" content="https://horatiulazea.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </Head>
      <main className="w-full h-full bg-[#030014]">
        <div className="flex flex-col md:gap-20 ">
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
