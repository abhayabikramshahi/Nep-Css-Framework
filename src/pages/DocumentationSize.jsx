import React from "react";
import DocLayout from "./compoDocu/DocLayout";
import SizeDoc from "./compoDocu/SizeDoc";

export default function DocumentationSize() {
  return (
    <DocLayout>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Sizes</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-8">
        Learn how to control width, height, and spacing with size utilities in Nepali CSS Framework.
      </p>
      <SizeDoc />
    </DocLayout>
  );
}
