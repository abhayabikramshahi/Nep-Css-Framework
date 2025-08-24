import React from "react";
import { Link, useLocation } from "react-router-dom";

const sections = [
  { id: "color", label: "Colors", path: "/documentation/color" },
  { id: "background", label: "Backgrounds", path: "/documentation/background" },
  { id: "size", label: "Sizes", path: "/documentation/size" },
];

export default function DocSidebar({ mobile = false, onClose }) {
  const location = useLocation();
  if (mobile) {
    return (
      <aside className="fixed inset-0 z-40 flex flex-col bg-gray-900 border-r border-gray-800 p-6 w-full h-full md:hidden animate-fade-in">
        <button
          className="self-end mb-8 p-2 rounded hover:bg-gray-800 text-gray-400 hover:text-red-400 focus:outline-none"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="22" y2="22"/><line x1="22" y1="6" x2="6" y2="22"/></svg>
        </button>
        <nav className="flex flex-col gap-4 mt-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              onClick={onClose}
              className={`text-left px-6 py-3 rounded-lg font-semibold text-lg transition text-gray-300 hover:bg-gray-800 hover:text-red-400 ${location.pathname === section.path ? "bg-gray-800 text-red-400" : ""}`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </aside>
    );
  }
  return (
    <aside className="hidden md:flex flex-col gap-2 w-48 min-w-40 bg-gray-900 border-r border-gray-800 py-6 px-2 sticky top-14 h-[calc(100vh-3.5rem)]">
      {sections.map((section) => (
        <Link
          key={section.id}
          to={section.path}
          className={`text-left px-4 py-2 rounded-lg font-medium transition text-gray-300 hover:bg-gray-800 hover:text-red-400 ${location.pathname === section.path ? "bg-gray-800 text-red-400" : ""}`}
        >
          {section.label}
        </Link>
      ))}
    </aside>
  );
}
