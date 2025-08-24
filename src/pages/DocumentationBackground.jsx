import React from "react";
import DocLayout from "./compoDocu/DocLayout";
import BackgroundDoc from "./compoDocu/BackgroundDoc";

export default function DocumentationBackground() {
  return (
    <DocLayout>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Backgrounds</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-8">
        Learn how to use background utilities and gradients in Nepali CSS Framework.
      </p>
      <BackgroundDoc />
    </DocLayout>
  );
}
