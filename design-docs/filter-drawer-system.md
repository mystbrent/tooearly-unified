# Filter Drawer System Design

## Overview
Redesigned filtering system using a side drawer approach to replace the narrow right sidebar, providing better space utilization and improved user experience.

## Current Issues
- Right sidebar too narrow for effective filter display
- Filters cramped and difficult to interact with
- Poor mobile experience with sidebar approach

## Filter Drawer Solution

### Trigger Mechanism
```
Active Filters Bar:
┌─────────────────────────────────────────────────────────┐
│ 🔽 Backend Engineer ✕  Senior ✕  Remote ✕  London ✕   │
│                                          [Change Filters] │
└─────────────────────────────────────────────────────────┘
```

### Drawer Layout (Right-side slide-in)
```
                    ┌─────────────────────────────────┐
                    │ ✕                    Filters   │
                    │                                 │
                    │ 🔍 Search Keywords              │
                    │ [________________]              │
                    │                                 │
                    │ 📍 Location                     │
                    │ ☐ London                        │
                    │ ☐ Manchester                    │
                    │ ☐ Remote                        │
                    │ ☐ Hybrid                        │
                    │                                 │
                    │ 💼 Work Type                    │
                    │ ☐ Full-time                     │
                    │ ☐ Part-time                     │
                    │ ☐ Contract                      │
                    │ ☐ Freelance                     │
                    │                                 │
                    │ 💰 Salary Range                 │
                    │ £[____] - £[____]               │
                    │                                 │
                    │ 🎯 Experience Level             │
                    │ ☐ Entry Level                   │
                    │ ☐ Mid Level                     │
                    │ ☐ Senior Level                  │
                    │ ☐ Director+                     │
                    │                                 │
                    │ 🏢 Company Stage                │
                    │ ☐ Early Stage                   │
                    │ ☐ Growth Stage                  │
                    │ ☐ Late Stage                    │
                    │ ☐ Public                        │
                    │                                 │
                    │ [Clear All] [Apply Filters]     │
                    └─────────────────────────────────┘
```

## Interaction Design

### Opening the Drawer
1. **Change Filters Button**: Primary trigger in active filters bar
2. **Filter Icon**: Secondary trigger in top navigation
3. **Keyboard Shortcut**: Ctrl/Cmd + F for power users

### Drawer Behavior
- **Width**: 320px on desktop, full-width on mobile
- **Animation**: Smooth slide-in from right (300ms ease-out)
- **Backdrop**: Semi-transparent overlay with click-to-close
- **Height**: Full viewport height with scroll if needed

### Filter Types and Interactions

#### Search Keywords
- Text input with autocomplete suggestions
- Real-time search as user types
- Clear button (✕) when text present

#### Location Filters
- Checkbox list with common locations
- Search functionality for city lookup
- Grouped by: Major Cities, Remote Options, Regions

#### Work Type
- Multiple selection checkboxes
- Visual icons for each type
- Clear grouping and hierarchy

#### Salary Range
- Dual range slider
- Manual input fields for precision
- Currency symbol based on location

#### Experience Level
- Single or multiple selection
- Clear progression indication
- Tooltip explanations for each level

#### Company Stage
- Multiple selection checkboxes
- Brief descriptions on hover
- Visual indicators for each stage

### Active Filters Display

#### Top Bar Integration
```
Current Active Filters:
┌─────────────────────────────────────────────────────────┐
│ Backend Engineer ✕  Senior ✕  Remote ✕  £70K+ ✕        │
│                                          [Change Filters] │
└─────────────────────────────────────────────────────────┘
```

#### Filter Pills
- Individual removal (✕ on each pill)
- Hover effects for better UX
- Truncation for long filter names
- Color coding by filter category

### Mobile Optimization

#### Mobile Drawer (Full-screen)
```
┌─────────────────────────────────┐
│ ← Back            Filters       │
├─────────────────────────────────┤
│                                 │
│ 🔍 Search                       │
│ [________________________]     │
│                                 │
│ 📍 Location ▼                   │
│                                 │
│ 💼 Work Type ▼                  │
│                                 │
│ 💰 Salary ▼                     │
│                                 │
│ 🎯 Experience ▼                 │
│                                 │
│ 🏢 Company Stage ▼              │
│                                 │
├─────────────────────────────────┤
│ [Clear All]    [Apply Filters]  │
└─────────────────────────────────┘
```

#### Mobile Specific Features
- Collapsible sections to save space
- Touch-friendly controls (larger touch targets)
- Swipe gestures for quick navigation
- Bottom action bar for primary actions

## Technical Implementation

### State Management
```typescript
interface FilterState {
  keywords: string[]
  locations: string[]
  workTypes: WorkType[]
  salaryRange: { min: number; max: number }
  experienceLevels: ExperienceLevel[]
  companyStages: CompanyStage[]
  isDrawerOpen: boolean
}
```

### Animation Framework
- CSS transitions for drawer slide
- Backdrop fade animation
- Micro-interactions for filter toggles
- Loading states for filter application

### Performance Considerations
- Debounced filter application (300ms)
- Virtual scrolling for large filter lists
- Lazy loading of filter options
- Cached filter counts

## Accessibility Features

### Keyboard Navigation
- Tab order through all filter controls
- Enter/Space for checkbox toggles
- Escape key to close drawer
- Arrow keys for range sliders

### Screen Reader Support
- ARIA labels for all controls
- Live regions for filter count updates
- Semantic markup for filter groups
- Clear focus indicators

### Visual Accessibility
- High contrast mode support
- Minimum 44px touch targets
- Clear visual hierarchy
- Color blind friendly indicators

## Integration with Existing System

### Removing Current Sidebar
1. Archive current right sidebar code
2. Move navigation elements to top bar
3. Remove sidebar-specific responsive breakpoints
4. Update grid layout to be two-column (nav + content)

### API Integration
- RESTful endpoints for filter options
- Real-time filter count updates
- Cached filter metadata
- Analytics tracking for filter usage

## Analytics and Insights

### Tracking Events
- Drawer open/close frequency
- Filter selection patterns
- Time spent in filter drawer
- Conversion rates by filter combination

### Performance Metrics
- Filter application response time
- Drawer animation performance
- Mobile vs desktop usage patterns
- Filter abandonment rates