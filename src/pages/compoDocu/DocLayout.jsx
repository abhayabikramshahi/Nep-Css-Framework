import React, { useRef, useState } from "react";
import DocNavbar from "../../components/DocNavbar";
import DocSidebar from "./DocSidebar";

export default function DocLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <DocNavbar onHamburgerClick={() => setSidebarOpen((v) => !v)} />
      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        <DocSidebar />
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 z-30 bg-black/60 md:hidden" onClick={() => setSidebarOpen(false)} />
            <DocSidebar mobile onClose={() => setSidebarOpen(false)} />
          </>
        )}
        <main className="flex-1 flex flex-col items-center px-4 py-8 md:py-12 overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
