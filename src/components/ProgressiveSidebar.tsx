import React, { useState } from 'react';
import { Home, User, Settings, Search, Filter, ChevronDown, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentMode: string;
  onModeChange: (mode: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentMode, onModeChange }) => {
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static
        top-0 left-0
        h-screen w-80
        bg-sidebar
        border-r border-sidebar-border
        transform transition-transform duration-300 ease-in-out
        z-50
        flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-sidebar-foreground">TooEarly</h1>
            <span className="bg-sidebar-primary text-sidebar-primary-foreground px-2 py-1 rounded text-xs font-medium">UK</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-sidebar-accent rounded-md transition-colors"
          >
            <X size={20} className="text-sidebar-foreground" />
          </button>
        </div>

        {/* User Section */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sidebar-accent rounded-full flex items-center justify-center">
              <User size={20} className="text-sidebar-accent-foreground" />
            </div>
            <div>
              <p className="font-medium text-sidebar-foreground">Welcome back</p>
              <p className="text-sm text-sidebar-foreground opacity-70">Job Seeker</p>
            </div>
          </div>
        </div>

        {/* Primary Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onModeChange('jobs')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  currentMode === 'jobs' 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Home size={20} />
                <span>Jobs</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onModeChange('profile')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  currentMode === 'profile' 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <User size={20} />
                <span>Profile</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onModeChange('settings')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  currentMode === 'settings' 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </li>
          </ul>

          {/* Quick Search */}
          <div className="mt-6">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Quick search jobs..."
                className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="mt-4">
            <button
              onClick={() => setFiltersExpanded(!filtersExpanded)}
              className="w-full flex items-center justify-between p-3 bg-sidebar-accent rounded-md hover:bg-sidebar-accent/80 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-sidebar-accent-foreground" />
                <span className="text-sm font-medium text-sidebar-accent-foreground">Advanced Filters</span>
              </div>
              <ChevronDown 
                size={16} 
                className={`text-sidebar-accent-foreground transition-transform ${filtersExpanded ? 'rotate-180' : ''}`} 
              />
            </button>

            {filtersExpanded && (
              <div className="mt-2 p-3 bg-card border border-border rounded-md">
                <p className="text-sm text-muted-foreground">Filter options will appear here</p>
              </div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center justify-between text-xs text-sidebar-foreground opacity-70">
            <span>Help & Support</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;