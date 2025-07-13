# Corrected Job Card Design

## Problem Analysis

### Current Implementation Issues
- Poor visual hierarchy with cramped text
- Inconsistent spacing and alignment
- Cut-off content and poor information density
- Lack of clear visual separation between elements
- Missing key information prominently displayed

### Inspiration Card Strengths
- Clean company logo placement (left-aligned, prominent)
- Clear job title hierarchy (large, bold)
- Well-organized company information
- Excellent use of icons for quick scanning
- Proper spacing and visual breathing room
- Clear action buttons with good contrast

## Corrected Job Card Design

### Optimal Card Structure
```
┌────────────────────────────────────────────────────────────────────┐
│ [🔴 Logo]  7 hours ago                                       [⋯] │
│                                                                    │
│ Junior Java Software Engineer (Hybrid)                            │
│ Digital Turbine / Advertising • Content • Public Company          │
│                                                                    │
│ 📍 Durham, NC        👥 Full-time                                 │
│ 🏠 Hybrid            🎓 Entry Level                               │
│                                                                    │
│ ─────────────────────────────────────────────────────────────────  │
│                                                                    │
│     [🚫 Not Int.]      [❤️ Save]      [✅ APPLY NOW]              │
└────────────────────────────────────────────────────────────────────┘
```

## Detailed Component Breakdown

### Header Section (Top Row)
```
[🔴 Logo]  7 hours ago                                       [⋯]
```

#### Elements:
- **Company Logo**: 40x40px, left-aligned with 16px margin
- **Posted Time**: Right-aligned, 12px gray text, professional timing
- **Menu Button**: Three dots (⋯) for additional actions

#### Spacing:
- Logo: 16px from left edge
- Posted time: 16px from right edge of menu button
- Menu button: 16px from right edge
- Vertical: 16px from top edge

### Job Information Section
```
Junior Java Software Engineer (Hybrid)
Digital Turbine / Advertising • Content • Public Company
```

#### Job Title:
- **Font**: 18px, font-weight: 600, #111827
- **Line Height**: 1.4 for readability
- **Margin**: 12px top, 8px bottom
- **Truncation**: Ellipsis after 2 lines maximum

#### Company & Industry:
- **Company Name**: 14px, font-weight: 500, #374151
- **Separators**: " / " and " • " for visual separation
- **Industry Tags**: Same size, lighter color (#6b7280)
- **Margin**: 8px bottom

### Details Grid Section
```
📍 Durham, NC        👥 Full-time
🏠 Hybrid            🎓 Entry Level
```

#### Grid Layout:
- **2x2 Grid**: Two columns, two rows
- **Column Gap**: 24px between columns
- **Row Gap**: 8px between rows
- **Icons**: 16x16px, consistent spacing
- **Text**: 14px, #374151

#### Icon and Text Pairing:
- **Location (📍)**: Geographic location
- **Work Type (🏠)**: Remote/Hybrid/On-site
- **Employment (👥)**: Full-time/Part-time/Contract
- **Level (🎓)**: Entry/Mid/Senior/Director

### Separator Line
```
─────────────────────────────────────────────────────────────────
```
- **Color**: #e5e7eb (light gray)
- **Thickness**: 1px
- **Margin**: 16px top and bottom
- **Width**: Full card width minus 32px padding

### Action Buttons Section
```
    [🚫 Not Int.]      [❤️ Save]      [✅ APPLY NOW]
```

#### Button Specifications:
1. **Not Interested**: 
   - Style: Ghost button, gray border
   - Size: 100px width, 36px height
   - Icon: 🚫 or ✕
   - Text: "Not Int." or "Dismiss"

2. **Save Job**:
   - Style: Outline button, blue border
   - Size: 80px width, 36px height  
   - Icon: ❤️ or 🔖
   - Text: "Save"

3. **Apply Now**:
   - Style: Primary button, green background
   - Size: 120px width, 36px height
   - Icon: ✅ or →
   - Text: "APPLY NOW"

#### Button Layout:
- **Alignment**: Centered in card
- **Spacing**: 12px gap between buttons
- **Bottom Margin**: 16px from card bottom

## Complete Card Specifications

### Card Container
- **Width**: 100% of container (max 800px)
- **Height**: 180px (fixed for consistent layout)
- **Background**: #ffffff
- **Border**: 1px solid #e5e7eb
- **Border Radius**: 12px
- **Padding**: 20px
- **Shadow**: 0 2px 4px rgba(0,0,0,0.1)

### Responsive Behavior

#### Desktop (1200px+)
```
┌────────────────────────────────────────────────────────────────────┐
│ [Logo] 7 hours ago                                             [⋯] │
│                                                                    │
│ Junior Java Software Engineer (Hybrid)                            │
│ Digital Turbine / Advertising • Content • Public Company          │
│                                                                    │
│ 📍 Durham, NC        👥 Full-time                                 │
│ 🏠 Hybrid            🎓 Entry Level                               │
│                                                                    │
│ ─────────────────────────────────────────────────────────────────  │
│                                                                    │
│     [🚫 Not Int.]      [❤️ Save]      [✅ APPLY NOW]              │
└────────────────────────────────────────────────────────────────────┘
```

#### Tablet (768px - 1199px)
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] 7h ago                                          [⋯] │
│                                                             │
│ Junior Java Software Engineer (Hybrid)                     │
│ Digital Turbine / Advertising • Content                    │
│                                                             │
│ 📍 Durham, NC     👥 Full-time                             │
│ 🏠 Hybrid         🎓 Entry Level                           │
│                                                             │
│ ─────────────────────────────────────────────────────────   │
│                                                             │
│   [Not Int.]    [Save]    [APPLY NOW]                      │
└─────────────────────────────────────────────────────────────┘
```

#### Mobile (< 768px)
```
┌─────────────────────────────────────────┐
│ [Logo] 7h                          [⋯] │
│                                         │
│ Junior Java Software Engineer           │
│ Digital Turbine / Advertising           │
│                                         │
│ 📍 Durham, NC  🏠 Hybrid                │
│ 👥 Full-time   🎓 Entry                 │
│                                         │
│ ─────────────────────────────────────── │
│                                         │
│ [❌] [❤️]        [APPLY NOW]            │
└─────────────────────────────────────────┘
```

## Hover and Interaction States

### Card Hover State
```css
.job-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
```

### Button States

#### Apply Now Button
```css
/* Normal State */
background: #10b981;
color: white;
border: none;

/* Hover State */
background: #059669;
transform: scale(1.02);

/* Active State */
background: #047857;
```

#### Save Button
```css
/* Normal State */
background: transparent;
color: #3b82f6;
border: 1px solid #3b82f6;

/* Hover State */
background: #eff6ff;
border-color: #2563eb;

/* Saved State */
background: #3b82f6;
color: white;
```

## Implementation Code Structure

### HTML Structure
```html
<article class="job-card" role="listitem" aria-labelledby="job-title-123">
  <header class="job-card-header">
    <div class="company-info">
      <img src="/logo.jpg" alt="Digital Turbine" class="company-logo">
      <span class="posted-time">7 hours ago</span>
      <button class="menu-button" aria-label="More options">⋯</button>
    </div>
  </header>
  
  <div class="job-info">
    <h3 id="job-title-123" class="job-title">
      Junior Java Software Engineer (Hybrid)
    </h3>
    <div class="company-details">
      Digital Turbine / Advertising • Content • Public Company
    </div>
  </div>
  
  <div class="job-details-grid">
    <div class="detail-item">
      <span class="icon">📍</span>
      <span class="text">Durham, NC</span>
    </div>
    <div class="detail-item">
      <span class="icon">👥</span>
      <span class="text">Full-time</span>
    </div>
    <div class="detail-item">
      <span class="icon">🏠</span>
      <span class="text">Hybrid</span>
    </div>
    <div class="detail-item">
      <span class="icon">🎓</span>
      <span class="text">Entry Level</span>
    </div>
  </div>
  
  <hr class="separator">
  
  <footer class="job-actions">
    <button class="btn btn-ghost">🚫 Not Int.</button>
    <button class="btn btn-outline">❤️ Save</button>
    <button class="btn btn-primary">✅ APPLY NOW</button>
  </footer>
</article>
```

### CSS Framework
```css
.job-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  height: 180px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.job-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.company-logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
}

.posted-time {
  font-size: 12px;
  color: #6b7280;
  margin-left: auto;
  margin-right: 12px;
}

.job-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
  margin: 0 0 8px 0;
}

.job-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 24px;
  margin: 16px 0;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
}

.separator {
  border: none;
  height: 1px;
  background: #e5e7eb;
  margin: 16px 0;
}

.job-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
}

.btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #10b981;
  color: white;
  border: none;
  min-width: 120px;
}

.btn-outline {
  background: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  min-width: 80px;
}

.btn-ghost {
  background: transparent;
  color: #6b7280;
  border: 1px solid #d1d5db;
  min-width: 100px;
}
```

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Card → Menu → Actions
- **Enter Key**: Activates primary action (Apply Now)
- **Space Key**: Toggles save state
- **Focus Indicators**: Clear 2px blue outline

### Screen Reader Support
- **Article Role**: Each card is an article
- **Heading Structure**: Job title as h3
- **ARIA Labels**: Descriptive labels for all buttons
- **Live Regions**: Announce save state changes

### Visual Accessibility
- **Color Contrast**: All text meets WCAG AA (4.5:1 minimum)
- **Focus Indicators**: High contrast focus rings
- **Text Scaling**: Responsive up to 200% zoom
- **Icon Alternatives**: Text alternatives for all icons

## Performance Optimizations

### Image Loading
- **Lazy Loading**: Company logos load on scroll
- **WebP Format**: Modern format with JPEG fallback
- **Placeholder**: SVG placeholder during load
- **Error Handling**: Fallback icon for failed loads

### Rendering Optimization
- **Fixed Height**: Consistent 180px for virtual scrolling
- **CSS Containment**: Isolate card rendering
- **Transform Animations**: GPU-accelerated hover effects
- **Debounced Interactions**: Prevent rapid action clicks

This corrected design follows the inspiration card's excellent visual hierarchy while adapting it specifically for TooEarly's job search context.