import React from "react";
import DocLayout from "./compoDocu/DocLayout";
import ColorDoc from "./compoDocu/ColorDoc";

export default function DocumentationColor() {
  return (
    <DocLayout>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Colors</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-8">
        Learn how to use the color palette in Nepali CSS Framework for backgrounds, text, and borders.
      </p>
      <ColorDoc />
    </DocLayout>
  );
}
