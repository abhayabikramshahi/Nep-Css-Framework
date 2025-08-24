import { Helmet } from "react-helmet";


import React from "react";

import { BookOpen } from "lucide-react";
import DocNavbar from "../components/DocNavbar";

export default function Home() {
  const siteUrl = "https://nepcssframework.netliify.app";
  return (
    <>
      <Helmet>
        <title>Nepali CSS Framework - Clean, Fast, Modern CSS for Nepal</title>
        <meta name="description" content="A utility-first CSS framework inspired by the spirit of Nepal — simple, powerful, and rooted in culture." />
        <meta property="og:title" content="Nepali CSS Framework" />
        <meta property="og:description" content="A utility-first CSS framework inspired by the spirit of Nepal — simple, powerful, and rooted in culture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Nepali CSS Framework" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nepali CSS Framework" />
        <meta name="twitter:description" content="A utility-first CSS framework inspired by the spirit of Nepal — simple, powerful, and rooted in culture." />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <DocNavbar />
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
            Clean. Fast. Modern.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            A utility-first CSS framework inspired by the spirit of Nepal — simple, powerful, and rooted in culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="/documentation" className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-lg flex items-center gap-2 hover:from-red-500 hover:to-red-400 transition text-lg">
              <BookOpen className="w-5 h-5" />
              Get Started
            </a>
          </div>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 px-8 py-6 rounded-2xl shadow-lg inline-block">
            <span className="text-2xl md:text-3xl font-semibold tracking-wide text-red-500 flex items-center gap-2">
              🚀 Coming Soon
            </span>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Abhaya CSS — Built with ❤️ in Nepal 🇳🇵
        </footer>
      </div>
    </>
  );
}
