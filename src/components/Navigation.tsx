import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-gray-900">TooEarly</span>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">UK</span>
        </div>
      </div>

      {/* Right: User actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="text-sm">🔔</span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="text-sm">👤</span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="text-sm">⚙️</span>
        </button>
      </div>
    </header>
  );
};