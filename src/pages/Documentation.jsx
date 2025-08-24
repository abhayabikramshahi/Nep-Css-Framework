import { Helmet } from "react-helmet";


import React from "react";
import DocLayout from "./compoDocu/DocLayout";
import DocMain from "./compoDocu/DocMain";

export default function Documentation() {
  const siteUrl = "https://nepcssframework.netliify.app/documentation";
  return (
    <>
      <Helmet>
        <title>Documentation - Nepali CSS Framework</title>
        <meta name="description" content="Documentation for Nepali CSS Framework. Learn about colors, backgrounds, sizes, and more." />
        <meta property="og:title" content="Documentation - Nepali CSS Framework" />
        <meta property="og:description" content="Documentation for Nepali CSS Framework. Learn about colors, backgrounds, sizes, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Nepali CSS Framework" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Documentation - Nepali CSS Framework" />
        <meta name="twitter:description" content="Documentation for Nepali CSS Framework. Learn about colors, backgrounds, sizes, and more." />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <DocLayout>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-lg text-gray-400 max-w-2xl text-center mb-8">
          Welcome to the Nepali CSS Framework documentation! Here you'll find guides, examples, and API references to help you get the most out of the framework.
        </p>
        <DocMain />
      </DocLayout>
    </>
  );
}
