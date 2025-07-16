# ASCII Mockup Task

This task generates ASCII-based visualizations of UI components and layouts.

## Purpose
Create clear, text-based visual representations of UI elements that can be easily shared, versioned, and understood without requiring design tools.

## Prerequisites
- Component name or type to visualize
- Understanding of the component's purpose and context
- Any specific requirements or constraints

## Process

### 1. Gather Component Information
- **Component Type:** [Button/Card/Form/Navigation/Layout/etc.]
- **Size Variants:** [Small/Medium/Large/Responsive]
- **States:** [Default/Hover/Active/Focus/Disabled/Loading]
- **Content:** [Text/Icons/Images/Data]
- **Interactions:** [Click/Hover/Drag/Toggle]

### 2. Define ASCII Art Style
Choose appropriate characters for:
- Borders: ┌─┐│└┘ or +--+||
- Fills: ░▒▓█ for different shades
- Icons: ▶◀▲▼✓✗⚡☰≡
- Emphasis: ━━━ for active states
- Spacing: Use consistent grid alignment

### 3. Create Base Component
Start with the default state:
```
Example Button:
┌─────────────────┐
│   Click Me!     │
└─────────────────┘
```

### 4. Add Interactive States
Show all relevant states:
```
Default:          Hover:            Active:
┌─────────────┐   ┌═════════════┐   ┌─────────────┐
│  Click Me!  │   ║  Click Me!  ║   │▓▓Click Me!▓▓│
└─────────────┘   └═════════════┘   └─────────────┘

Focus:            Disabled:
┌┅┅┅┅┅┅┅┅┅┅┅┅┅┐   ┌─────────────┐
┊┌─────────────┐┊  │  Click Me!  │
┊│  Click Me!  │┊  └─────────────┘
┊└─────────────┘┊  (opacity: 50%)
└┅┅┅┅┅┅┅┅┅┅┅┅┅┘
```

### 5. Show Size Variations
```
Small (sm):
┌─────────┐
│ Click!  │
└─────────┘

Medium (md):
┌─────────────┐
│  Click Me!  │
└─────────────┘

Large (lg):
┌───────────────────┐
│    Click Me!     │
└───────────────────┘
```

### 6. Complex Components
For complex components, break down into sections:
```
Card Component:
┌─────────────────────────┐
│ ┌─────────────────────┐ │ <- Image container
│ │░░░░░░░░░░░░░░░░░░░░│ │
│ │░░░░░[Image]░░░░░░░░│ │
│ │░░░░░░░░░░░░░░░░░░░░│ │
│ └─────────────────────┘ │
│                         │
│ Title Text              │ <- Title
│ ─────────────────────   │ <- Divider
│ Description text goes   │ <- Body
│ here with multiple      │
│ lines of content.       │
│                         │
│ [Primary] [Secondary]   │ <- Actions
└─────────────────────────┘
```

### 7. Responsive Layouts
Show how components adapt:
```
Desktop:
┌─────┬─────┬─────┐
│  1  │  2  │  3  │
└─────┴─────┴─────┘

Tablet:
┌─────┬─────┐
│  1  │  2  │
├─────┴─────┤
│     3     │
└───────────┘

Mobile:
┌─────┐
│  1  │
├─────┤
│  2  │
├─────┤
│  3  │
└─────┘
```

### 8. Annotation
Add labels and measurements:
```
        ←── 200px ──→
     ↑  ┌─────────────┐
    40px│  Button Text │
     ↓  └─────────────┘
        ↑             ↑
        └─ padding ───┘
           (16px)
```

## Best Practices

1. **Consistency:** Use the same character sets throughout
2. **Alignment:** Maintain grid alignment for cleaner visuals
3. **Clarity:** Prioritize readability over artistic complexity
4. **Documentation:** Always label states and variations
5. **Accessibility:** Include notes about screen reader behavior

## Common Patterns

### Form Elements
```
Input:
┌─────────────────────┐
│ Enter text here...  │
└─────────────────────┘

Checkbox:
□ Unchecked
☑ Checked
☒ Indeterminate

Radio:
○ Option 1
● Option 2 (selected)
○ Option 3

Toggle:
OFF ○──── ON
OFF ────● ON
```

### Navigation
```
Tabs:
┌──────┬────────┬────────┐
│ Tab1 │  Tab2  │  Tab3  │
└──────┴────────┴────────┘
   ▲ Active

Breadcrumb:
Home > Products > Category > Item
```

### Feedback
```
Alert:
┌─────────────────────────┐
│ ⚠ Warning message here  │
└─────────────────────────┘

Progress:
[████████░░░░░░░░] 50%
```

## Output Format

Provide:
1. Component name and purpose
2. ASCII visualization(s)
3. State variations
4. Size variations (if applicable)
5. Usage notes
6. Accessibility considerations

## Notes
- Keep ASCII art simple and functional
- Test display in monospace fonts
- Consider copy-paste usability
- Document any special characters used