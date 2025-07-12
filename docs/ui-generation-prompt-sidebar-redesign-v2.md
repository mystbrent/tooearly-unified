# AI Frontend Generation Prompt: TooEarly UK Sidebar Redesign v2 - Fixed Layout & Toggle

## High-Level Goal

Fix the critical layout issues in the TooEarly UK sidebar implementation:
1. **Make sidebar use full viewport height** (currently cut off)
2. **Implement proper hamburger toggle functionality** for show/hide
3. **Apply new comprehensive color scheme** throughout the application
4. **Ensure professional, non-AI-generated appearance**

## Critical Issues to Fix Based on Screenshot Analysis

### 🚨 **URGENT FIX #1: Full Height Sidebar**
The current sidebar is cut off and not using full viewport height. It must:
- Extend to full `100vh` height
- Use `position: fixed` on mobile, `position: sticky` on desktop
- Override any parent container height restrictions
- Ensure proper z-index layering

### 🚨 **URGENT FIX #2: Hamburger Toggle Implementation**
The hamburger button in the top header is not functional. Must implement:
- Working hamburger menu icon in header that toggles sidebar
- Smooth slide-in/slide-out animation
- Proper state management for open/closed states
- Overlay/backdrop when sidebar is open on mobile

### 🚨 **URGENT FIX #3: New Color Scheme Implementation**
Replace all existing colors with the new comprehensive theme system provided.

## New Color Scheme Implementation

### Replace All CSS Variables
```css
:root {
  --background: #ffffff;
  --foreground: #333333;
  --card: #ffffff;
  --card-foreground: #333333;
  --popover: #ffffff;
  --popover-foreground: #333333;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --secondary-foreground: #4b5563;
  --muted: #f9fafb;
  --muted-foreground: #6b7280;
  --accent: #e0f2fe;
  --accent-foreground: #1e3a8a;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #e5e7eb;
  --input: #e5e7eb;
  --ring: #3b82f6;
  --chart-1: #3b82f6;
  --chart-2: #2563eb;
  --chart-3: #1d4ed8;
  --chart-4: #1e40af;
  --chart-5: #1e3a8a;
  --sidebar: #f9fafb;
  --sidebar-foreground: #333333;
  --sidebar-primary: #3b82f6;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #e0f2fe;
  --sidebar-accent-foreground: #1e3a8a;
  --sidebar-border: #e5e7eb;
  --sidebar-ring: #3b82f6;
  --font-sans: Inter, sans-serif;
  --font-serif: Source Serif 4, serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.375rem;
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: #171717;
  --foreground: #e5e5e5;
  --card: #262626;
  --card-foreground: #e5e5e5;
  --popover: #262626;
  --popover-foreground: #e5e5e5;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #262626;
  --secondary-foreground: #e5e5e5;
  --muted: #262626;
  --muted-foreground: #a3a3a3;
  --accent: #1e3a8a;
  --accent-foreground: #bfdbfe;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #404040;
  --input: #404040;
  --ring: #3b82f6;
  --chart-1: #60a5fa;
  --chart-2: #3b82f6;
  --chart-3: #2563eb;
  --chart-4: #1d4ed8;
  --chart-5: #1e40af;
  --sidebar: #171717;
  --sidebar-foreground: #e5e5e5;
  --sidebar-primary: #3b82f6;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #1e3a8a;
  --sidebar-accent-foreground: #bfdbfe;
  --sidebar-border: #404040;
  --sidebar-ring: #3b82f6;
}
```

## Detailed Implementation Instructions

### 1. Fix Header with Working Hamburger Toggle

**Target file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/Navigation.tsx`

```typescript
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sidebarOpen, setSidebarOpen }) => {
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
```

### 2. Fix Sidebar Component with Full Height & Toggle

**Target file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/ProgressiveSidebar.tsx`

```typescript
import React, { useState } from 'react';
import { Home, User, Settings, Search, Filter, ChevronDown, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentMode: string;
  onModeChange: (mode: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentMode, onModeChange }) => {
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
```

### 3. Main Layout Component Integration

**Create new file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/Layout.tsx`

```typescript
import React, { useState } from 'react';
import Navigation from './Navigation';
import Sidebar from './ProgressiveSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState('jobs');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentMode={currentMode}
          onModeChange={setCurrentMode}
        />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
```

### 4. Updated CSS with New Color Scheme

**Target file**: Create or update `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --background: #ffffff;
  --foreground: #333333;
  --card: #ffffff;
  --card-foreground: #333333;
  --popover: #ffffff;
  --popover-foreground: #333333;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --secondary-foreground: #4b5563;
  --muted: #f9fafb;
  --muted-foreground: #6b7280;
  --accent: #e0f2fe;
  --accent-foreground: #1e3a8a;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #e5e7eb;
  --input: #e5e7eb;
  --ring: #3b82f6;
  --sidebar: #f9fafb;
  --sidebar-foreground: #333333;
  --sidebar-primary: #3b82f6;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #e0f2fe;
  --sidebar-accent-foreground: #1e3a8a;
  --sidebar-border: #e5e7eb;
  --sidebar-ring: #3b82f6;
  --font-sans: Inter, sans-serif;
  --radius: 0.375rem;
}

.dark {
  --background: #171717;
  --foreground: #e5e5e5;
  --card: #262626;
  --card-foreground: #e5e5e5;
  --popover: #262626;
  --popover-foreground: #e5e5e5;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #262626;
  --secondary-foreground: #e5e5e5;
  --muted: #262626;
  --muted-foreground: #a3a3a3;
  --accent: #1e3a8a;
  --accent-foreground: #bfdbfe;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #404040;
  --input: #404040;
  --ring: #3b82f6;
  --sidebar: #171717;
  --sidebar-foreground: #e5e5e5;
  --sidebar-primary: #3b82f6;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #1e3a8a;
  --sidebar-accent-foreground: #bfdbfe;
  --sidebar-border: #404040;
  --sidebar-ring: #3b82f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: var(--background);
  color: var(--foreground);
  line-height: 1.5;
}

/* Utility Classes */
.bg-background { background-color: var(--background); }
.bg-card { background-color: var(--card); }
.bg-primary { background-color: var(--primary); }
.bg-secondary { background-color: var(--secondary); }
.bg-muted { background-color: var(--muted); }
.bg-accent { background-color: var(--accent); }
.bg-sidebar { background-color: var(--sidebar); }
.bg-sidebar-accent { background-color: var(--sidebar-accent); }
.bg-sidebar-primary { background-color: var(--sidebar-primary); }

.text-foreground { color: var(--foreground); }
.text-card-foreground { color: var(--card-foreground); }
.text-primary { color: var(--primary); }
.text-primary-foreground { color: var(--primary-foreground); }
.text-secondary-foreground { color: var(--secondary-foreground); }
.text-muted-foreground { color: var(--muted-foreground); }
.text-accent-foreground { color: var(--accent-foreground); }
.text-sidebar-foreground { color: var(--sidebar-foreground); }
.text-sidebar-accent-foreground { color: var(--sidebar-accent-foreground); }
.text-sidebar-primary-foreground { color: var(--sidebar-primary-foreground); }

.border-border { border-color: var(--border); }
.border-sidebar-border { border-color: var(--sidebar-border); }
.border-input { border-color: var(--input); }

.focus\:ring-ring:focus { 
  outline: none; 
  box-shadow: 0 0 0 2px var(--ring); 
}

.focus\:ring-sidebar-ring:focus { 
  outline: none; 
  box-shadow: 0 0 0 2px var(--sidebar-ring); 
}
```

## Critical Implementation Requirements

### 🚨 **MUST FIX: Layout Issues**

1. **Full Height Sidebar:**
   ```css
   .sidebar {
     height: 100vh !important;
     height: 100dvh; /* Dynamic viewport height for mobile */
     position: fixed;
     top: 0;
     left: 0;
     z-index: 50;
   }
   ```

2. **Proper Toggle State Management:**
   ```typescript
   // Use useState for sidebar state
   const [sidebarOpen, setSidebarOpen] = useState(false);
   
   // Toggle function
   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
   ```

3. **Mobile-First Responsive:**
   ```css
   /* Mobile: Hidden by default, shows on toggle */
   .sidebar {
     transform: translateX(-100%);
   }
   
   .sidebar.open {
     transform: translateX(0);
   }
   
   /* Desktop: Always visible */
   @media (min-width: 1024px) {
     .sidebar {
       transform: translateX(0);
       position: relative;
     }
   }
   ```

### 🎨 **Color Implementation Requirements**

1. **Replace ALL existing color references** with new CSS variables
2. **Use semantic color names** (primary, secondary, muted, etc.)
3. **Implement dark mode support** with `.dark` class
4. **Apply Inter font** as the primary font family

### 📱 **Mobile Responsiveness Requirements**

1. **Header hamburger menu** must be visible and functional on mobile
2. **Sidebar overlay** must appear above content on mobile
3. **Smooth animations** for slide-in/slide-out (300ms ease-in-out)
4. **Touch-friendly** button sizes (minimum 44px touch targets)

## Success Criteria

### ✅ **Layout Fixed:**
- Sidebar extends full viewport height
- No content cutoff or overflow issues
- Proper positioning and z-index

### ✅ **Toggle Working:**
- Hamburger button functional in header
- Smooth slide animations
- Proper state management
- Mobile overlay backdrop

### ✅ **Colors Applied:**
- New color scheme implemented throughout
- Dark mode support ready
- Professional appearance
- Consistent color usage

### ✅ **Professional Design:**
- Clean, modern appearance
- British professional aesthetic
- No AI-generated look
- Intuitive user experience

## Files to Modify

1. **`/src/components/Navigation.tsx`** - Add hamburger toggle
2. **`/src/components/ProgressiveSidebar.tsx`** - Fix layout and toggle
3. **`/src/styles/globals.css`** - Implement new color scheme
4. **`/src/components/Layout.tsx`** - Create layout wrapper (new file)

## Files NOT to Modify

- Type definitions in `/src/types/`
- Package.json or dependencies
- Existing component logic beyond layout/styling

This prompt addresses all critical issues identified in the screenshot and implements the comprehensive new color scheme for a professional, properly functioning sidebar navigation.