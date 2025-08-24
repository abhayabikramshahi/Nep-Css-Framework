import React from "react";

export default function BackgroundDoc() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-red-400" id="backgrounds">Backgrounds</h2>
      <p className="text-gray-300 mb-4 text-sm md:text-base">Easily set background colors using utility classes. Combine with gradients for beautiful effects. Background utilities help you quickly create visually appealing sections and cards.</p>
      <div className="flex gap-4 flex-wrap mb-6">
        <div className="w-32 h-20 rounded-lg bg-rakh-black flex items-center justify-center text-white font-semibold border border-gray-700">bg-rakh-black</div>
        <div className="w-32 h-20 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 flex items-center justify-center text-white font-semibold">bg-gradient</div>
        <div className="w-32 h-20 rounded-lg bg-white flex items-center justify-center text-black font-semibold border">bg-white</div>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg text-sm text-gray-200 font-mono">
        <div className="text-blue-400">// Usage for backgrounds</div>
        <div>{`<div class=\"bg-rakh-black\">Black Background</div>`}</div>
        <div>{`<div class=\"bg-gradient-to-r from-red-500 to-yellow-400\">Gradient Background</div>`}</div>
        <div>{`<div class=\"bg-white\">White Background</div>`}</div>
      </div>
    </div>
  );
}
