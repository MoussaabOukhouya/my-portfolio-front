import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-900">
      <div
        className="h-screen snap-y snap-mandatory 
    overflow-scroll z-0 "
      >
        <Head>
          <title>Moussaab&#39;s Portfolio</title>
        </Head>

        {/* HEADER */}
        <Header />

        {/* HERO */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact */}
      </div>
    </div>
  );
}
