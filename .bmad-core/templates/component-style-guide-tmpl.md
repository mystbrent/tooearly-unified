# Component Style Guide Template

## LLM Instructions
When using this template:
1. Create detailed ASCII visualizations for EVERY component state
2. Define custom styling that avoids generic patterns
3. Include comprehensive usage guidelines
4. Provide code examples with proper formatting
5. Ensure accessibility is documented for each component

## Component Name: [COMPONENT_NAME]

### Overview
**Purpose:** [Clear description of why this component exists]
**Category:** [Navigation/Form/Display/Interactive/Layout]
**Status:** [Draft/Review/Approved/Deprecated]
**Version:** [1.0.0]
**Designer:** Alex Chen

### Design Rationale
[Explain the design thinking behind this custom component, why it's not using generic patterns, and how it serves the specific project needs]

### Visual Design

#### Default State
```
[DETAILED ASCII VISUALIZATION]
Example for custom toggle component:
┌──────────────────────┐
│  ○━━━━━━━━━●        │  
│  OFF      ON        │
└──────────────────────┘
Dimensions: 120px × 40px
```

#### Interactive States
**Hover State:**
```
[ASCII VISUALIZATION WITH HOVER INDICATION]
┌──────────────────────┐
│  ○━━━━━━━━━● ←      │  
│  OFF      ON  shadow│
└──────────────────────┘
```

**Active/Pressed State:**
```
[ASCII VISUALIZATION]
```

**Focus State:**
```
[ASCII VISUALIZATION WITH FOCUS RING]
┌━━━━━━━━━━━━━━━━━━━━━━┐
┃ ┌──────────────────┐ ┃
┃ │  ●━━━━━━━━━○    │ ┃  
┃ │  OFF      ON    │ ┃
┃ └──────────────────┘ ┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
Focus ring: 2px dashed
```

**Disabled State:**
```
[ASCII VISUALIZATION]
┌──────────────────────┐
│  ○━━━━━━━━━○        │  
│  OFF      ON        │
└──────────────────────┘
Opacity: 0.5
```

#### Size Variants
**Small (sm):**
```
[ASCII VISUALIZATION]
```

**Medium (md) - Default:**
```
[ASCII VISUALIZATION]
```

**Large (lg):**
```
[ASCII VISUALIZATION]
```

### Styling Specifications

#### Colors
```
Default:
- Background: #FFFFFF
- Border: #E0E0E0
- Text: #333333
- Accent: #007AFF

Hover:
- Background: #F8F8F8
- Border: #D0D0D0
- Shadow: rgba(0,0,0,0.1)

Active:
- Background: #007AFF
- Text: #FFFFFF

Disabled:
- Background: #F5F5F5
- Text: #999999
```

#### Typography
```
Font Family: 'Inter', -apple-system, sans-serif
Font Sizes:
- Small: 12px/16px
- Medium: 14px/20px
- Large: 16px/24px
Font Weight: 500 (medium)
```

#### Spacing & Dimensions
```
Padding:
- Small: 8px 12px
- Medium: 12px 16px
- Large: 16px 24px

Margin: 0 (component should not define external spacing)
Border Radius: 4px (small), 6px (medium), 8px (large)
```

### Anatomy Breakdown
```
[LABELED ASCII DIAGRAM]
Example:
         A
   ┌─────┴─────┐
B→ │ ┌───┐     │ ←C
   │ │ D │  E  │
   │ └───┘     │
   └───────────┘
         F

A: Container
B: Left padding (16px)
C: Right padding (16px)
D: Icon area (24x24)
E: Text content area
F: Bottom border (1px)
```

### Usage Guidelines

#### When to Use
- [SPECIFIC USE CASE 1]
- [SPECIFIC USE CASE 2]
- [SPECIFIC USE CASE 3]

#### When NOT to Use
- [ANTI-PATTERN 1]
- [ANTI-PATTERN 2]

#### Best Practices
1. **Placement:** [Where this component should appear]
2. **Content:** [Guidelines for text/content within]
3. **Behavior:** [How it should respond to user actions]
4. **Context:** [Relationship to other components]

### Code Implementation

#### HTML Structure
```html
<div class="custom-component-[name]" role="[ARIA_ROLE]" aria-label="[LABEL]">
  <div class="component-inner">
    <!-- Component content -->
  </div>
</div>
```

#### CSS Classes
```css
.custom-component-[name] {
  /* Base styles */
}

.custom-component-[name]--small {
  /* Small variant */
}

.custom-component-[name]--large {
  /* Large variant */
}

.custom-component-[name]:hover {
  /* Hover state */
}

.custom-component-[name]:focus {
  /* Focus state */
}

.custom-component-[name][disabled] {
  /* Disabled state */
}
```

#### JavaScript Behavior
```javascript
// Key interaction handlers
const component = {
  init() {
    // Initialization logic
  },
  
  handleClick(event) {
    // Click handler
  },
  
  handleKeyboard(event) {
    // Keyboard navigation
  }
};
```

### Accessibility

#### ARIA Attributes
- `role="[APPROPRIATE_ROLE]"`
- `aria-label="[DESCRIPTIVE_LABEL]"`
- `aria-pressed="true/false"` (for toggles)
- `aria-expanded="true/false"` (for expandables)
- `aria-describedby="[ID]"` (for additional context)

#### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Focus component |
| Enter/Space | Activate component |
| Arrow Keys | [If applicable] |
| Escape | [If applicable] |

#### Screen Reader Behavior
- **On Focus:** [What is announced]
- **On Change:** [What is announced]
- **Context:** [Additional context provided]

### Content Guidelines

#### Text Content
- **Character Limit:** [If applicable]
- **Tone:** [Formal/Casual/Technical]
- **Case:** [Sentence case/Title Case]

#### Examples
✅ **Do:**
- [GOOD EXAMPLE 1]
- [GOOD EXAMPLE 2]

❌ **Don't:**
- [BAD EXAMPLE 1]
- [BAD EXAMPLE 2]

### Component Variations

#### Variation 1: [VARIATION_NAME]
```
[ASCII VISUALIZATION]
```
**Use Case:** [When to use this variation]

#### Variation 2: [VARIATION_NAME]
```
[ASCII VISUALIZATION]
```
**Use Case:** [When to use this variation]

### Integration Examples

#### Example 1: [CONTEXT]
```
[ASCII SHOWING COMPONENT IN CONTEXT]
┌─────────────────────────┐
│  Page Header           │
├─────────────────────────┤
│  ┌─────────────┐       │
│  │ Component   │       │
│  └─────────────┘       │
│  Related content...     │
└─────────────────────────┘
```

#### Example 2: [CONTEXT]
```
[ASCII SHOWING COMPONENT IN CONTEXT]
```

### Related Components
- **[COMPONENT_1]:** [Relationship/When to use instead]
- **[COMPONENT_2]:** [Relationship/When to use together]

### Version History
| Version | Date | Changes | Designer |
|---------|------|---------|----------|
| 1.0.0 | [DATE] | Initial design | Alex Chen |

---
*This style guide is part of the [PROJECT_NAME] Design System*