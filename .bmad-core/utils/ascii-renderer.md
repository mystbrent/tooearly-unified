# ASCII Renderer Utility

Utility functions and guidelines for rendering consistent ASCII visualizations across different environments.

## Rendering Guidelines

### Character Set Compatibility

#### Safe Characters (Universal)
```
Basic ASCII (32-126):
- Letters: A-Z, a-z
- Numbers: 0-9
- Basic symbols: + - * / = < > ! @ # $ % ^ & ( ) [ ] { }
- Punctuation: . , ; : ' " ? 
- Lines: - | _ 
```

#### Extended Characters (Check Support)
```
Box Drawing (may not render in all terminals):
- Single: ┌ ┐ └ ┘ ─ │ ├ ┤ ┬ ┴ ┼
- Double: ╔ ╗ ╚ ╝ ═ ║ ╠ ╣ ╦ ╩ ╬
- Mixed: ╒ ╕ ╘ ╛ ╞ ╡ ╤ ╧ ╪
```

### Spacing and Alignment

#### Grid System
```
Use 2-space or 4-space indentation consistently:

2-space:
┌──┐
│  │  
└──┘

4-space:
┌────┐
│    │
└────┘
```

#### Alignment Rules
1. Always use monospace font assumption
2. Count characters, not visual width
3. Pad with spaces for alignment
4. Account for Unicode character width

### Rendering Contexts

#### Terminal/Console
- Use basic ASCII for maximum compatibility
- Test in multiple terminal emulators
- Consider ANSI color codes for enhancement
- Account for varying terminal widths

#### Web/Documentation
- Can use full Unicode character set
- Wrap in <pre> or code blocks
- Specify monospace font
- Consider responsive sizing

#### IDE/Editor
- Most support Unicode box drawing
- May have syntax highlighting
- Consider line length limits
- Test in common editors

## Utility Functions (Conceptual)

### Box Drawing Helper
```
Function: drawBox(width, height, style)
Styles: 'single', 'double', 'rounded', 'ascii'

Example outputs:
drawBox(10, 3, 'single'):
┌────────┐
│        │
└────────┘

drawBox(10, 3, 'ascii'):
+--------+
|        |
+--------+
```

### Table Generator
```
Function: drawTable(headers, rows, style)

Example output:
┌─────┬─────┬─────┐
│ Col1│ Col2│ Col3│
├─────┼─────┼─────┤
│ A   │ B   │ C   │
│ D   │ E   │ F   │
└─────┴─────┴─────┘
```

### Progress Bar Generator
```
Function: drawProgress(percentage, width, style)

Styles:
'blocks': ████████░░░░░░░░
'ascii':  [########--------]
'dots':   ●●●●●●●●○○○○○○○○
'arrows': ▶▶▶▶▶▶▶▶▷▷▷▷▷▷▷▷
```

### Tree Structure
```
Function: drawTree(structure)

Example output:
Root
├── Branch 1
│   ├── Leaf 1.1
│   └── Leaf 1.2
└── Branch 2
    ├── Leaf 2.1
    └── Leaf 2.2
```

## Responsive ASCII

### Width Adaptations
```
Full Width (80 chars):
┌──────────────────────────────────────────────────────────────────────────┐
│                              Full Width Display                           │
└──────────────────────────────────────────────────────────────────────────┘

Medium Width (40 chars):
┌──────────────────────────────────────┐
│         Medium Display               │
└──────────────────────────────────────┘

Narrow Width (20 chars):
┌──────────────────┐
│  Narrow Display  │
└──────────────────┘
```

### Abbreviation Strategies
```
Full:    [Save Document]
Medium:  [Save Doc]
Narrow:  [Save]
Icon:    [💾]
```

## Color Enhancement (Terminal)

### ANSI Color Codes
```
Basic Colors:
\033[30m Black   \033[0m
\033[31m Red     \033[0m
\033[32m Green   \033[0m
\033[33m Yellow  \033[0m
\033[34m Blue    \033[0m
\033[35m Magenta \033[0m
\033[36m Cyan    \033[0m
\033[37m White   \033[0m

With ASCII Art:
\033[32m✓\033[0m Success
\033[31m✗\033[0m Error
\033[33m⚠\033[0m Warning
```

## Best Practices

### DO:
1. Test in target environment
2. Provide fallback options
3. Keep it simple and clear
4. Document character requirements
5. Use consistent spacing

### DON'T:
1. Assume Unicode support
2. Use complex nested structures
3. Rely on color alone
4. Create overly detailed art
5. Mix character styles

## Testing Checklist

Before using ASCII visualization:
- [ ] Renders correctly in target environment
- [ ] Aligns properly with monospace font
- [ ] Degrades gracefully if chars missing
- [ ] Maintains clarity at different sizes
- [ ] Works without color enhancement

## Common Patterns Library

### Loading Indicators
```
Static representations:
Spinner:  ◐ ◓ ◑ ◒
Dots:     ⋅⋅⋅ ●⋅⋅ ⋅●⋅ ⋅⋅●
Bar:      ░░░ ▒░░ ▒▒░ ▒▒▒ ▓▒▒ ▓▓▒ ▓▓▓
Bounce:   ⋅ · ● · ⋅
```

### Status Indicators
```
✓ Complete    ✗ Failed
⚡ Fast        🐌 Slow
↑ Up          ↓ Down
◉ Active      ○ Inactive
```

### Directional Cues
```
Navigation:
← Previous    Next →
↑ Back to top
↓ See more

Expansion:
▶ Collapsed
▼ Expanded
⊞ Expand all
⊟ Collapse all
```

## Accessibility Considerations

### Screen Reader Alternatives
Always provide text descriptions:
```
ASCII: ┌───┐
       │ ✓ │  
       └───┘
       
Description: "Checkbox with checkmark, indicating selected state"
```

### High Contrast Support
Use characters with clear shapes:
```
Good contrast:  ■ □ ▪ ▫ ● ○
Poor contrast:  ░ ▒ ∙ ･
```

## Platform-Specific Notes

### Windows
- Command Prompt: Limited Unicode
- PowerShell: Better Unicode support
- Windows Terminal: Full Unicode

### macOS
- Terminal.app: Good Unicode support
- iTerm2: Excellent support
- VS Code: Full support

### Linux
- Most terminals: Good support
- SSH sessions: May vary
- Console mode: Basic ASCII only

### Web Browsers
- All modern browsers: Full Unicode
- Monospace fonts: May vary
- Mobile: Check viewport sizing

Remember: ASCII art is for visualization during design phase. Always implement with proper HTML/CSS for production.