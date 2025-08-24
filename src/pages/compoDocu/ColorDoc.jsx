import React from "react";

export default function ColorDoc() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-red-400" id="colors">Colors</h2>
      <p className="text-gray-300 mb-4 text-sm md:text-base">
        Nepali CSS Framework provides a simple color system. Use the following classes for text and backgrounds:
      </p>
      <div className="mb-6">
        <div className="flex gap-4 flex-wrap items-end">
          <div className="w-24 h-24 rounded-lg bg-black flex items-center justify-center text-white font-semibold border border-gray-700">
            <span>color-black</span>
          </div>
          <div className="w-24 h-24 rounded-lg bg-red-500 flex items-center justify-center text-white font-semibold">
            <span>color-red</span>
          </div>
          <div className="w-24 h-24 rounded-lg bg-green-500 flex items-center justify-center text-white font-semibold">
            <span>color-green</span>
          </div>
        </div>
        <div className="mt-4 bg-gray-900 p-4 rounded-lg text-sm text-gray-200 font-mono">
          <div><span className="text-blue-400">// Usage for text</span></div>
          <div>{`<span class="color-black">Black Text</span>`}</div>
          <div>{`<span class="color-red">Red Text</span>`}</div>
          <div>{`<span class="color-green">Green Text</span>`}</div>
          <div className="mt-2 text-blue-400">// Usage for background</div>
          <div>{`<div class="bg-rakh-black">...</div>`}</div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-red-300">Text Size Utilities</h3>
      <p className="text-gray-300 mb-4 text-sm md:text-base">
        Use <code className="bg-gray-800 px-1 rounded">sano-rakh-30px</code> for small text and <code className="bg-gray-800 px-1 rounded">thulo-ho-89px</code> for big text.
      </p>
      <div className="flex flex-col gap-2">
        <span className="sano-rakh-30px bg-gray-800 px-2 py-1 rounded text-white">This is small text (sano-rakh-30px)</span>
        <span className="thulo-ho-89px bg-gray-800 px-2 py-1 rounded text-white">This is big text (thulo-ho-89px)</span>
      </div>
    </div>
  );
}
