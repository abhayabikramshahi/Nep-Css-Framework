import React from "react";

export default function DocNavbar({ onHamburgerClick }) {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden mr-2 p-2 rounded border border-gray-700 bg-gray-900 text-gray-300 hover:text-red-400 focus:outline-none"
          onClick={onHamburgerClick}
          aria-label="Open sidebar"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <span className="text-xl font-bold tracking-tight text-white">Nepali <span className="text-red-500">CSS Framework</span></span>
      </div>
      <a href="/" className="text-gray-300 hover:text-red-400 font-semibold transition">Home</a>
    </nav>
  );
}
