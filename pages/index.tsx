import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-900">
      <div
        className="h-screen snap-y snap-mandatory 
        overflow-y-scroll overflow-x-hidden  scrollbar scrollbar-track-slate-900 scrollbar-thumb-slate-800"
      >
        <Head>
          <title>Moussaab&#39;s Portfolio under_construction</title>
        </Head>

        {/* HEADER */}
      
        
        <Header />
        {/* HERO */}
        <section id="hero" className="snap-start mr-4 ">
          <Hero />
        </section>

        {/* About */}
        <section id="About" className="snap-center mr-4 ">
          <About />
        </section>
          
        {/* Experience */}

        <section id="Experience" className="snap-center mr-4 ">
          <Experience />
        </section>
          
        {/* Skills */}

        {/* Projects */}

        {/* Contact */}
      </div>
    </div>
  );
}
