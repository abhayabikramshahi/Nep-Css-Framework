import React from "react";

export default function SizeDoc() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-red-400" id="sizes">Sizes</h2>
      <p className="text-gray-300 mb-4 text-sm md:text-base">Control the size of elements using width, height, padding, and margin utilities. These classes help you build responsive layouts and components with ease.</p>
      <div className="flex flex-col gap-2 mb-6">
        <span className="sano-rakh-30px bg-gray-800 px-2 py-1 rounded text-white">This is small text (sano-rakh-30px)</span>
        <span className="thulo-ho-89px bg-gray-800 px-2 py-1 rounded text-white">This is big text (thulo-ho-89px)</span>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg text-sm text-gray-200 font-mono">
        <div className="text-blue-400">// Usage for text size</div>
        <div>{`<span class=\"sano-rakh-30px\">Small Text</span>`}</div>
        <div>{`<span class=\"thulo-ho-89px\">Big Text</span>`}</div>
      </div>
    </div>
  );
}
