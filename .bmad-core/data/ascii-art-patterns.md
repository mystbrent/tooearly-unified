# ASCII Art Patterns

A comprehensive reference for creating consistent and professional ASCII visualizations for UI components.

## Basic Building Blocks

### Box Drawing Characters

#### Single Line Box
```
┌─┬─┐  Top: ┌ ─ ┬ ─ ┐
│ │ │  Mid: │   │   │
├─┼─┤  Sep: ├ ─ ┼ ─ ┤
│ │ │  Mid: │   │   │
└─┴─┘  Bot: └ ─ ┴ ─ ┘
```

#### Double Line Box
```
╔═╦═╗  Top: ╔ ═ ╦ ═ ╗
║ ║ ║  Mid: ║   ║   ║
╠═╬═╣  Sep: ╠ ═ ╬ ═ ╣
║ ║ ║  Mid: ║   ║   ║
╚═╩═╝  Bot: ╚ ═ ╩ ═ ╝
```

#### Rounded Corners
```
╭─────╮
│     │
╰─────╯
```

#### Mixed Styles
```
╒═══╤═══╕
│   │   │
╞═══╪═══╡
│   │   │
╘═══╧═══╛
```

### ASCII Borders

#### Simple ASCII
```
+-----+  Corners: + +
|     |  Sides:   | |
+-----+  Lines:   - -
```

#### Dotted/Dashed
```
┌┅┅┅┅┅┐  Dotted:  ┅ ┅
┊     ┊  Sides:   ┊ ┊
└┅┅┅┅┅┘  

┌┄┄┄┄┄┐  Dashed:  ┄ ┄
┆     ┆  Sides:   ┆ ┆
└┄┄┄┄┄┘
```

## Common UI Elements

### Buttons

#### Standard Button
```
┌─────────────┐
│   Button    │
└─────────────┘
```

#### Pressed/Active Button
```
┌─────────────┐
│▓▓▓Button▓▓▓│
└─────────────┘
```

#### Hover State
```
╔═════════════╗
║   Button    ║
╚═════════════╝
```

#### Disabled Button
```
┌ ─ ─ ─ ─ ─ ─┐
  Button     
└ ─ ─ ─ ─ ─ ─┘
```

### Input Fields

#### Text Input
```
┌─────────────────────┐
│ Placeholder text... │
└─────────────────────┘
```

#### Focused Input
```
╔═════════════════════╗
║ Typing here...     ║│
╚═════════════════════╝
```

#### Input with Label
```
Label Text
┌─────────────────────┐
│ Enter value...      │
└─────────────────────┘
```

### Checkboxes and Radio Buttons

```
Checkboxes:          Radio Buttons:
□ Unchecked          ○ Unselected
☑ Checked            ● Selected  
☒ Indeterminate      ◉ Selected (alt)
■ Checked (alt)      ◯ Unselected (alt)
```

### Toggle Switches

```
OFF State:           ON State:
┌─────────┐         ┌─────────┐
│ ○       │         │       ● │
└─────────┘         └─────────┘

Alternative:
[ ] OFF             [X] ON
○──────             ──────●
```

### Dropdowns

```
Closed:                    Open:
┌─────────────────┐       ┌─────────────────┐
│ Select...     ▼ │       │ Select...     ▲ │
└─────────────────┘       ├─────────────────┤
                          │ ✓ Option 1      │
                          │   Option 2      │
                          │   Option 3      │
                          └─────────────────┘
```

## Icons and Symbols

### Navigation Icons
```
Arrows:     ← → ↑ ↓ ↖ ↗ ↘ ↙ ⇐ ⇒ ⇑ ⇓
Chevrons:   ‹ › « » ⟨ ⟩ ⟪ ⟫
Triangles:  ▶ ▼ ▲ ◀ ▷ ▽ △ ◁
Carets:     ⌃ ⌄ < > ^ v
```

### UI Icons
```
Menu:       ☰ ≡ ⋮ ⋯ ═══
Close:      ✕ ✖ ⨯ ╳ ×
Check:      ✓ ✔ ☑ ✅
Star:       ☆ ★ ✦ ✧ ⟐ ✯
Heart:      ♡ ♥ ❤ 💜
Search:     🔍 🔎 ⌕
Settings:   ⚙ ⛭ ⚒
Edit:       ✎ ✏ ✐ ✑
Delete:     🗑 ⌫ ␡
```

### Status Indicators
```
Loading:    ⋯ ○○○ ●○○ ●●○ ●●● ⟳ ↻
Progress:   ░░░░████ [████░░░░]
Success:    ✓ ✔ ☑ ✅
Error:      ✗ ✘ ☒ ❌
Warning:    ⚠ ⚡ ⁉ ❗
Info:       ℹ 🛈 💡
```

## Layout Patterns

### Grid Layouts

#### 3-Column Grid
```
┌─────┬─────┬─────┐
│  1  │  2  │  3  │
├─────┼─────┼─────┤
│  4  │  5  │  6  │
└─────┴─────┴─────┘
```

#### Card Grid
```
┌─────┐ ┌─────┐ ┌─────┐
│     │ │     │ │     │
│  1  │ │  2  │ │  3  │
│     │ │     │ │     │
└─────┘ └─────┘ └─────┘
```

### Navigation Patterns

#### Tabs
```
┌──────┬────────┬────────┐
│ Tab1 │  Tab2  │  Tab3  │
├──────┴────────┴────────┴───────┐
│                                │
│  Tab 1 Content                 │
│                                │
└────────────────────────────────┘
```

#### Breadcrumbs
```
Home > Products > Electronics > Phones
Home ▸ Products ▸ Electronics ▸ Phones
Home / Products / Electronics / Phones
```

#### Pagination
```
◀ Previous  [1] 2 3 ... 10  Next ▶
← Prev  1 [2] 3 4 5  Next →
⟨ 1 ⟩ ⟨ 2 ⟩ ⟨ 3 ⟩ ⟨ 4 ⟩ ⟨ 5 ⟩
```

## Progress Indicators

### Progress Bars
```
Basic:      [████████░░░░░░░░] 50%
Segments:   [■■■■■□□□□□] 5/10
Dots:       ●●●●●○○○○○
ASCII:      [########--------] 50%
Blocks:     ▰▰▰▰▰▱▱▱▱▱
```

### Step Indicators
```
Linear:     ① ─── ② ─── ③ ─── ④
            ●━━━━━●━━━━━○━━━━━○
            
Vertical:   ① Done
            │
            ② In Progress
            │
            ③ Pending
            │
            ④ Locked
```

### Loading Animations (static representations)
```
Spinner:    ◐ ◓ ◑ ◒ (rotating)
Dots:       ⋅⋅⋅ ●⋅⋅ ⋅●⋅ ⋅⋅● (moving)
Bar:        ▱▱▱ ▰▱▱ ▰▰▱ ▰▰▰ (filling)
```

## Shading and Fills

### Density Patterns
```
Light to Dark:
░░░░  Light (25%)
▒▒▒▒  Medium (50%)
▓▓▓▓  Dark (75%)
████  Solid (100%)
```

### Mixed Patterns
```
Gradient Effect:
░░▒▒▓▓██
████▓▓▒▒░░

Dotted Fill:
⋅⋅⋅⋅⋅⋅⋅⋅
⋅⋅⋅⋅⋅⋅⋅⋅
⋅⋅⋅⋅⋅⋅⋅⋅
```

## Responsive Indicators

### Breakpoint Visualization
```
Mobile      Tablet        Desktop
┌───┐       ┌───────┐     ┌─────────────┐
│   │       │       │     │             │
│   │  →    │       │  →  │             │
│   │       │       │     │             │
└───┘       └───────┘     └─────────────┘
320px       768px         1024px+
```

## Best Practices

### Alignment
- Use consistent character widths
- Align elements to create clean lines
- Account for font rendering differences

### Clarity
- Leave adequate spacing
- Use contrasting line styles for emphasis
- Don't overcrowd with decorative elements

### Consistency
- Pick one style set and stick to it
- Use the same icons throughout
- Maintain consistent spacing patterns

### Accessibility Notes
- Remember ASCII art is not screen-reader friendly
- Always provide text descriptions
- Use semantic HTML in implementation
- ASCII is for visualization only

## Character Reference

### Box Drawing
```
─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼
═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬
╭ ╮ ╯ ╰ ╱ ╲ ╳
```

### Blocks and Shades
```
░ ▒ ▓ █ ▀ ▄ ▌ ▐ ■ □ ▪ ▫
```

### Arrows and Pointers
```
← → ↑ ↓ ↖ ↗ ↘ ↙ ⇐ ⇒ ⇑ ⇓
◀ ▶ ▲ ▼ ◁ ▷ △ ▽
```

### Misc Symbols
```
• ◦ ● ○ ◉ ◎ ★ ☆ ♦ ♠ ♣ ♥
✓ ✗ ✔ ✘ ☐ ☑ ☒
```

## Usage Tips

1. **Test in Multiple Environments**: ASCII may render differently in various terminals and fonts
2. **Keep It Simple**: Complex ASCII art can be hard to maintain
3. **Document Intent**: Always explain what the ASCII represents
4. **Provide Alternatives**: Include text descriptions for accessibility
5. **Use Monospace Fonts**: Ensure proper alignment with fixed-width fonts