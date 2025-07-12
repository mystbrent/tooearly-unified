# AI Frontend Generation Prompt: TooEarly UK Sidebar Redesign

## High-Level Goal

Create a professional, clean left sidebar navigation for the TooEarly UK job platform that removes gamification elements and implements a streamlined navigation system suitable for a UK MLP (Minimum Lovable Product) launch, inspired by Tweak theme design patterns.

## Detailed, Step-by-Step Instructions

### 1. Replace Current ProgressiveSidebar Component
- **Target file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/ProgressiveSidebar.tsx`
- **Action**: Complete redesign and replacement

### 2. Create New Sidebar Component with These Specifications

**Remove all gamification elements:**
- XP points and daily goals
- Streaks and achievement progress
- Reward systems and unlocks
- Progress bars and motivational elements
- "Today's Focus" and "Quick Wins" sections

**Implement clean, professional UK-appropriate design:**
- Use Tweak theme-inspired design patterns
- Subtle shadows and modern spacing
- Clean typography suitable for UK professional market
- Persistent sidebar navigation

### 3. Structure the Sidebar with These Sections (in order)

```
┌─────────────────────────────────┐
│ 🏢 TooEarly                     │ ← Header area
│ 👤 Welcome, [User Name]         │
├─────────────────────────────────┤
│ 💼 Jobs          (active)       │ ← Primary Navigation
│ 👤 Profile                      │
│ ⚙️ Settings                     │
├─────────────────────────────────┤
│ 🔍 Quick Search                 │ ← Quick Actions
│ 🎛️ Filters (expandable)         │
│ 💾 Save Preferences             │
├─────────────────────────────────┤
│ 📍 Location                     │ ← Filter Section
│ 🏠 Remote Options               │ (collapsible)
│ 💰 Salary Range                 │
│ 🕒 Job Type                     │
├─────────────────────────────────┤
│ ❓ Help & Support               │ ← Footer area
│ v1.0.0                          │
└─────────────────────────────────┘
```

### 4. Visual Design Requirements

**Typography:**
- Use system font stack: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- Header text: 18px font-weight-600
- Navigation items: 16px font-weight-500
- Secondary text: 14px font-weight-400

**Spacing:**
- Follow 8px grid system (8, 16, 24, 32px)
- Sidebar width: 280px expanded, 64px collapsed
- Padding: 24px horizontal, 16px vertical
- Item spacing: 8px between elements

**Colors (use existing CSS variables):**
```css
background: var(--content-background)
border: 1px solid var(--subtle-border)
text-primary: var(--text-primary)
text-secondary: var(--text-secondary)
hover-bg: rgba(0, 0, 0, 0.05)
active-bg: var(--primary-action)
```

**Interactions:**
- Smooth transitions: `transition: all 200ms ease-in-out`
- Hover states with subtle background change
- Active state with primary color indication
- Focus states for accessibility

### 5. Replace Header Navigation Integration

**Target file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/Navigation.tsx`

**Changes needed:**
- Remove mode switching tabs from header
- Keep only logo and user profile actions in top bar
- Ensure header works harmoniously with sidebar
- Add mobile hamburger menu for sidebar toggle

### 6. Filter Integration

**Collapsible filter section within sidebar:**
```typescript
interface FilterSection {
  location: {
    cities: string[];
    remote: boolean;
    zones: string[];
  };
  salary: {
    min: number;
    max: number;
    currency: 'GBP';
  };
  jobType: Array<'Permanent' | 'Contract' | 'Graduate' | 'Apprenticeship'>;
  workAuth: Array<'No visa required' | 'Visa sponsorship'>;
}
```

**Filter features:**
- Expandable sections with chevron icons
- Filter chips showing active selections
- Clear all filters button
- Filter count indicators

## Code Examples, Data Structures & Constraints

### Technology Stack
```typescript
// Required dependencies
import React, { useState } from 'react';
import { 
  Home, 
  User, 
  Settings, 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronRight,
  MapPin,
  Clock,
  DollarSign,
  Menu,
  X
} from 'lucide-react';
```

### Required Props Interface
```typescript
interface SidebarProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}

interface SidebarState {
  isFiltersExpanded: boolean;
  expandedFilterSections: {
    location: boolean;
    salary: boolean;
    jobType: boolean;
    workAuth: boolean;
  };
}
```

### Component Structure
```typescript
const Sidebar: React.FC<SidebarProps> = ({
  currentMode,
  onModeChange,
  isCollapsed = false,
  onToggleCollapse,
  className
}) => {
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'} ${className}`}>
      {/* Header */}
      <div className="sidebar-header">
        <div className="logo-section">
          <h1>TooEarly</h1>
          {!isCollapsed && <span className="uk-badge">UK</span>}
        </div>
        <div className="user-section">
          {!isCollapsed && (
            <div className="user-greeting">
              <span>Welcome, User</span>
            </div>
          )}
        </div>
      </div>

      {/* Primary Navigation */}
      <nav className="primary-nav">
        <button 
          className={`nav-item ${currentMode === 'jobs' ? 'active' : ''}`}
          onClick={() => onModeChange('jobs')}
        >
          <Home size={20} />
          {!isCollapsed && <span>Jobs</span>}
        </button>
        <button 
          className={`nav-item ${currentMode === 'profile' ? 'active' : ''}`}
          onClick={() => onModeChange('profile')}
        >
          <User size={20} />
          {!isCollapsed && <span>Profile</span>}
        </button>
        <button 
          className={`nav-item ${currentMode === 'settings' ? 'active' : ''}`}
          onClick={() => onModeChange('settings')}
        >
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </button>
      </nav>

      {/* Quick Actions */}
      {!isCollapsed && (
        <div className="quick-actions">
          <div className="search-section">
            <Search size={16} />
            <input placeholder="Quick search..." />
          </div>
          <button 
            className="filter-toggle"
            onClick={() => setFiltersExpanded(!filtersExpanded)}
          >
            <Filter size={16} />
            <span>Filters</span>
            <ChevronDown className={filtersExpanded ? 'rotated' : ''} size={16} />
          </button>
        </div>
      )}

      {/* Filter Section */}
      {!isCollapsed && filtersExpanded && (
        <div className="filter-section">
          {/* Filter content here */}
        </div>
      )}

      {/* Footer */}
      {!isCollapsed && (
        <div className="sidebar-footer">
          <button className="help-link">
            <span>Help & Support</span>
          </button>
          <span className="version">v1.0.0</span>
        </div>
      )}
    </aside>
  );
};
```

### CSS Classes to Implement
```css
.sidebar {
  height: 100vh;
  background: var(--content-background);
  border-right: 1px solid var(--subtle-border);
  display: flex;
  flex-direction: column;
  transition: width 200ms ease-in-out;
  position: sticky;
  top: 0;
}

.sidebar.expanded {
  width: 280px;
}

.sidebar.collapsed {
  width: 64px;
}

.sidebar-header {
  padding: 24px;
  border-bottom: 1px solid var(--subtle-border);
}

.logo-section h1 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.uk-badge {
  background: var(--primary-action);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 8px;
}

.primary-nav {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  text-align: left;
  width: 100%;
}

.nav-item:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--primary-action);
  color: white;
}

.quick-actions {
  padding: 16px;
  border-top: 1px solid var(--subtle-border);
}

.search-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--main-background);
  border-radius: 8px;
  margin-bottom: 12px;
}

.search-section input {
  border: none;
  background: none;
  outline: none;
  flex: 1;
  font-size: 14px;
}

.filter-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: none;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 8px;
  transition: all 200ms ease-in-out;
  width: 100%;
}

.filter-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.rotated {
  transform: rotate(180deg);
}

.sidebar-footer {
  margin-top: auto;
  padding: 16px;
  border-top: 1px solid var(--subtle-border);
}

.help-link {
  color: var(--text-secondary);
  font-size: 14px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px 0;
}

.version {
  color: var(--text-secondary);
  font-size: 12px;
  opacity: 0.6;
  display: block;
  margin-top: 8px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 1000;
    transform: translateX(-100%);
  }
  
  .sidebar.mobile-open {
    transform: translateX(0);
  }
}
```

## Define a Strict Scope

### Files to Modify
1. **Primary file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/ProgressiveSidebar.tsx`
   - Complete replacement with new sidebar design
   - Remove all gamification elements
   - Implement professional navigation structure

2. **Secondary file**: `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/components/Navigation.tsx`
   - Simplify header to work with new sidebar
   - Remove mode switching tabs
   - Add mobile sidebar toggle functionality

### Files to NOT Modify
- `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/types/index.ts` - Keep existing type definitions
- `/Users/brenttudas/TooEarly/unified-tooearly-poc/src/styles/colors.css` - Keep existing color variables
- Any other component files not explicitly mentioned
- Package.json or configuration files

### Constraints & Requirements

**DO:**
- Use existing CSS variables for colors
- Implement proper accessibility (ARIA labels, keyboard navigation)
- Ensure mobile responsiveness with collapsible behavior
- Use Lucide React icons only (no emojis)
- Follow existing TypeScript patterns
- Maintain ViewMode functionality but move to sidebar
- Create smooth transitions and hover states
- Follow UK professional design standards

**DO NOT:**
- Include any gamification elements (XP, achievements, progress bars, streaks)
- Modify existing type definitions
- Change the color scheme or CSS variables
- Add new dependencies beyond what's already available
- Use emoji icons or graphics
- Create overly complex animations

### UK MLP Launch Considerations
- Professional appearance suitable for UK job market
- Clean, trustworthy design that builds user confidence
- Accessible design meeting UK accessibility standards (WCAG 2.1 AA)
- Fast loading and performant for UK connection speeds
- British professional aesthetic with proper spacing and typography

### Success Criteria
1. **Professional appearance** that doesn't look AI-generated
2. **Clean navigation** without gamification clutter
3. **Mobile responsive** behavior
4. **Accessible design** meeting UK standards
5. **Smooth performance** on all devices
6. **Intuitive UX** for UK job seekers
7. **Proper branding** for TooEarly UK platform