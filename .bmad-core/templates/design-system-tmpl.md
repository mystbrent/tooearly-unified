# Design System Documentation Template

## LLM Instructions
This template creates a comprehensive design system. When using:
1. Ensure all components are custom-designed for the specific project
2. Create ASCII visualizations for all UI elements
3. Define clear relationships between components
4. Include implementation guidelines
5. Make the system scalable and maintainable

## [PROJECT_NAME] Design System

### Version: [VERSION]
### Last Updated: [DATE]
### Design Lead: Alex Chen

---

## 1. Introduction

### Purpose
[Explain why this design system exists and what problems it solves]

### Principles
1. **[PRINCIPLE_1]:** [Description]
2. **[PRINCIPLE_2]:** [Description]
3. **[PRINCIPLE_3]:** [Description]
4. **[PRINCIPLE_4]:** [Description]

### How to Use This System
[Guidelines for designers and developers on using this design system]

---

## 2. Foundations

### Grid System
```
Desktop (1440px):
┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐
│1│2│3│4│5│6│7│8│9│10│11│12│  12 columns
└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘
  └─┘
  Gap: 24px

Tablet (768px):
┌───┬───┬───┬───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │  8 columns
└───┴───┴───┴───┴───┴───┴───┴───┘

Mobile (375px):
┌───────┬───────┬───────┬───────┐
│   1   │   2   │   3   │   4   │  4 columns
└───────┴───────┴───────┴───────┘
```

### Spacing Scale
```
Base unit: 8px

┌─┐ 4px  (0.5x) - xs
├─┤ 8px  (1x)   - sm
├──┤ 16px (2x)   - md
├────┤ 24px (3x)   - lg
├──────┤ 32px (4x)   - xl
├────────┤ 48px (6x)   - 2xl
├──────────┤ 64px (8x)   - 3xl
```

### Typography Scale
```
Display Large   48px/56px   Weight: 700
Display         40px/48px   Weight: 700
Headline 1      32px/40px   Weight: 600
Headline 2      28px/36px   Weight: 600
Headline 3      24px/32px   Weight: 600
Body Large      18px/28px   Weight: 400
Body            16px/24px   Weight: 400
Body Small      14px/20px   Weight: 400
Caption         12px/16px   Weight: 400
```

### Color System

#### Brand Colors
```
Primary Palette:
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│ P-900  │ │ P-700  │ │ P-500  │ │ P-300  │ │ P-100  │
│#0A1628 │ │#1E3A5F │ │#2563EB │ │#60A5FA │ │#DBEAFE │
└────────┘ └────────┘ └────────┘ └────────┘ └────────┘

Secondary Palette:
[Similar structure for secondary colors]
```

#### Semantic Colors
```
Success: #10B981
Warning: #F59E0B  
Error:   #EF4444
Info:    #3B82F6

Each with 5 tints/shades
```

### Elevation & Shadows
```
Elevation Levels:

Level 0 (Flat):
┌─────────┐
│         │ No shadow
└─────────┘

Level 1 (Raised):
┌─────────┐
│         │ 0 1px 3px rgba(0,0,0,0.12)
└─────────┘

Level 2 (Floating):
┌─────────┐
│         │ 0 4px 6px rgba(0,0,0,0.16)
└─────────┘

Level 3 (Overlay):
┌─────────┐
│         │ 0 10px 20px rgba(0,0,0,0.19)
└─────────┘
```

---

## 3. Component Library

### Navigation Components

#### Primary Navigation
```
┌─────────────────────────────────────────────┐
│ [Logo]   Home  Products  About  Contact    │
│         ━━━━                               │
└─────────────────────────────────────────────┘

States: Default, Hover, Active, Mobile
```

#### Breadcrumb
```
Home > Category > Subcategory > Current Page
  ▶      ▶           ▶
```

### Form Components

#### Text Input
```
Label Text *
┌─────────────────────────┐
│ Placeholder text        │
└─────────────────────────┘
Helper text or error message

States: Default, Focus, Error, Disabled
```

#### Custom Select Dropdown
```
┌─────────────────────────┐
│ Select option         ▼ │
└─────────────────────────┘
          │
          ▼
┌─────────────────────────┐
│ ✓ Option 1             │
│   Option 2             │
│   Option 3             │
└─────────────────────────┘
```

### Feedback Components

#### Toast Notification
```
┌────────────────────────────┐
│ ✓ Success message here   X │
└────────────────────────────┘

Types: Success, Error, Warning, Info
```

#### Progress Indicator
```
Linear:
[████████░░░░░░░░░░░░] 40%

Circular:
   ┌───┐
  ╱     ╲
 │   40% │
  ╲     ╱
   └───┘
```

### Content Components

#### Card Component
```
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │                     │ │
│ │    Image Area       │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│ Card Title              │
│ Supporting text goes    │
│ here with 2-3 lines.    │
│                         │
│ [Action] [Secondary]    │
└─────────────────────────┘
```

#### Data Table
```
┌─────────────────────────────────────┐
│ Column 1    │ Column 2  │ Column 3  │
├─────────────┼───────────┼───────────┤
│ Data cell   │ Data      │ Data      │
├─────────────┼───────────┼───────────┤
│ Data cell   │ Data      │ Data      │
└─────────────┴───────────┴───────────┘
```

### Layout Components

#### Container
```
┌─────────────────────────────────────┐
│         Max-width: 1200px           │
│    ┌─────────────────────────┐     │
│    │     Content Area        │     │
│    └─────────────────────────┘     │
└─────────────────────────────────────┘
```

#### Sidebar Layout
```
┌─────┬─────────────────────┐
│     │                     │
│ Nav │   Main Content      │
│     │                     │
│     │                     │
└─────┴─────────────────────┘
```

---

## 4. Patterns

### Form Patterns

#### Multi-Step Form
```
Step 1 ━━━  Step 2 ○──○  Step 3 ○──○
   ▼
┌─────────────────────────┐
│  Step 1 Content         │
│                         │
│  [Back] [Continue]      │
└─────────────────────────┘
```

#### Inline Validation
```
Email Address *
┌─────────────────────────┐
│ user@example          │ ✓ Valid format
└─────────────────────────┘
```

### Navigation Patterns

#### Tab Navigation
```
┌──────┬────────┬────────┐
│ Tab 1│  Tab 2 │  Tab 3 │
├──────┴────────┴────────┴───────┐
│                                │
│  Tab 1 Content                 │
│                                │
└────────────────────────────────┘
```

#### Pagination
```
◀ Previous  1  2  [3]  4  5 ... 10  Next ▶
```

### Loading Patterns

#### Skeleton Screen
```
┌─────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓         │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓       │
│                         │
│ ▓▓▓▓▓▓  ▓▓▓▓▓▓        │
└─────────────────────────┘
```

---

## 5. Accessibility

### Focus Management
```
Tab Order Example:
┌─[1]─┬─[2]─┬─[3]─┐
│ Logo│ Nav │ CTA │
├─────┴─────┴─────┤
│      [4]        │
│   Main Content  │
│      [5]        │
└─────────────────┘
```

### Color Contrast Requirements
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

### ARIA Patterns
[Document common ARIA patterns used in components]

---

## 6. Motion & Animation

### Timing Functions
```
Ease-out:    ━━╱╱╱╱
Ease-in-out: ╱━━━╲
Linear:      ╱╱╱╱╱
```

### Duration Scale
- Micro: 100ms (hover states)
- Short: 200ms (toggles)
- Medium: 300ms (modals)
- Long: 500ms (page transitions)

### Animation Principles
1. **Purpose:** Every animation serves a function
2. **Performance:** 60fps minimum
3. **Accessibility:** Respect prefers-reduced-motion

---

## 7. Implementation Guidelines

### Naming Conventions
```
Components: PascalCase (e.g., ButtonPrimary)
CSS Classes: kebab-case (e.g., button-primary)
JS Functions: camelCase (e.g., handleClick)
CSS Variables: --prefix-property (e.g., --ds-color-primary)
```

### File Structure
```
design-system/
├── components/
│   ├── buttons/
│   ├── forms/
│   └── navigation/
├── foundations/
│   ├── colors/
│   ├── typography/
│   └── spacing/
├── patterns/
└── utilities/
```

### Token Structure
```json
{
  "color": {
    "primary": {
      "500": "#2563EB",
      "hover": "{color.primary.600}"
    }
  },
  "spacing": {
    "sm": "8px",
    "md": "16px"
  }
}
```

---

## 8. Component Status

| Component | Status | Version | Last Updated |
|-----------|--------|---------|--------------|
| Button | Stable | 1.2.0 | [DATE] |
| Input | Stable | 1.1.0 | [DATE] |
| Card | Beta | 0.9.0 | [DATE] |
| Table | In Progress | 0.5.0 | [DATE] |

---

## 9. Changelog

### Version [VERSION] - [DATE]
- Added: [New components or features]
- Changed: [Updates to existing items]
- Deprecated: [Items being phased out]
- Fixed: [Bug fixes or corrections]

---

## 10. Resources

### Design Tools
- Figma Library: [Link]
- Sketch Library: [Link]

### Code Resources
- Component Library: [Repository link]
- Storybook: [Link]
- Documentation: [Link]

### Contact
- Design System Team: [Contact info]
- Slack Channel: [Channel name]

---

*This design system is a living document. For contributions, please see our contribution guidelines.*