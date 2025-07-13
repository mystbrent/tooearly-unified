# Enhanced Job Cards Layout

## Overview
Optimized job card design for the new headerless layout, maximizing the available space while maintaining excellent readability and user interaction patterns.

## Current Job Card Analysis

### Current Layout Issues (from screenshot)
- Cards show good information density
- Share and dismiss buttons are well-positioned
- Tags are clearly organized
- Some vertical spacing could be optimized
- Posted time could be more prominent

## Enhanced Job Card Design

### Optimized Card Structure
```
┌─────────────────────────────────────────────────────────────┐
│ [🏢] MONZO                    ✅ Posted 1 day ago     [⚙] [❌]│
│ Senior Backend Engineer                                     │
│                                                             │
│ 📍 London Zone 1 • 🏠 Hybrid • 💰 £70K-85K • 🎓 Senior    │
│                                                             │
│ 🏢 Growth Stage • Fintech • Digital Banking                │
│                                                             │
│ 🎯 96% Match    [View Details]    [Go to Job]    [💾 Save] │
└─────────────────────────────────────────────────────────────┘
```

### Enhanced Version with Better Space Usage
```
┌─────────────────────────────────────────────────────────────┐
│ [🏢] MONZO                         Posted 1d ago    [⚙] [❌] │
│ Senior Backend Engineer                             96% Match│
│ 📍 London Zone 1 • 🏠 Hybrid • 💰 £70K-85K • Full-time    │
│ 🏢 Growth Stage • Fintech • Digital Banking • 500-1000 emp │
│ ─────────────────────────────────────────────────────────── │
│ Key Skills: Go/Python • 5+ years • Financial services      │
│ [View Details]    [Go to Job]    [Save]         ⭐ 4.2/5.0 │
└─────────────────────────────────────────────────────────────┘
```

## Card Specifications

### Dimensions & Spacing
- **Height**: 140px (optimized from current ~160px)
- **Width**: Full container width minus 24px margin
- **Card Gap**: 16px between cards
- **Internal Padding**: 20px all sides
- **Border Radius**: 12px
- **Border**: 1px solid #e5e7eb

### Information Hierarchy

#### Row 1: Header Information
```
[🏢] MONZO                         Posted 1d ago    [⚙] [❌]
```
- **Company Logo**: 24x24px, with fallback icon
- **Company Name**: 16px, font-weight: 600, primary color
- **Posted Time**: 12px, #6b7280, right-aligned
- **Actions**: Share menu (⚙) and dismiss (❌) buttons

#### Row 2: Job Title & Match
```
Senior Backend Engineer                             96% Match
```
- **Job Title**: 18px, font-weight: 500, #111827
- **Match Score**: 14px, color-coded badge (right-aligned)
  - 90%+: Green (#10b981)
  - 70-89%: Orange (#f59e0b) 
  - <70%: Gray (#6b7280)

#### Row 3: Key Details
```
📍 London Zone 1 • 🏠 Hybrid • 💰 £70K-85K • Full-time
```
- **Location**: Icon + zone/area
- **Work Type**: Remote/Hybrid/On-site with icon
- **Salary**: Range with currency symbol
- **Employment Type**: Full-time/Contract/Part-time

#### Row 4: Company & Industry Info
```
🏢 Growth Stage • Fintech • Digital Banking • 500-1000 emp
```
- **Company Stage**: Early/Growth/Late/Public
- **Industry**: Primary sector
- **Sub-sector**: Specific industry area
- **Company Size**: Employee count range

#### Row 5: Skills Separator
```
─────────────────────────────────────────────────────────────
```
- **Visual Separator**: Light gray line (#e5e7eb)
- **Purpose**: Separate basic info from detailed requirements

#### Row 6: Key Skills Preview
```
Key Skills: Go/Python • 5+ years • Financial services
```
- **Skills Label**: "Key Skills:" (12px, #6b7280)
- **Required Skills**: Most relevant skills from job posting
- **Truncation**: Show top 3-4 skills, "..." if more

#### Row 7: Action Bar
```
[View Details]    [Go to Job]    [Save]         ⭐ 4.2/5.0
```
- **Primary Actions**: View details (opens drawer)
- **External Link**: Go to job (opens in new tab)
- **Save Function**: Add to saved jobs
- **Company Rating**: Average rating with star icon

## Interaction Design

### Hover States
```
Card on Hover:
┌─────────────────────────────────────────────────────────────┐
│ [Elevated shadow, border: #3b82f6]                          │
│ [All content same as above]                                 │
│ [Subtle background tint: #f8fafc]                          │
└─────────────────────────────────────────────────────────────┘
```

### Click Behaviors
- **Card Click**: Opens job detail drawer
- **Company Name**: Opens company profile (if available)
- **Share Button**: Dropdown menu with share options
- **Dismiss Button**: Removes card with animation
- **View Details**: Opens job detail drawer (same as card click)
- **Go to Job**: Opens external job URL in new tab
- **Save Button**: Toggles save state with visual feedback

### Button Styling
```
Action Buttons:
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ View Details│ │  Go to Job  │ │    Save     │
└─────────────┘ └─────────────┘ └─────────────┘
Primary Blue     Secondary Gray   Outline Save
```

## Enhanced Features

### Skill Matching Indicators
```
Key Skills: Go/Python ✅ • 5+ years ✅ • Financial services ⚠️
```
- **Green Check (✅)**: User has this skill
- **Warning (⚠️)**: Partial match or learning opportunity
- **Gray Dot (•)**: Neutral/unknown skill match

### Company Rating Integration
```
⭐ 4.2/5.0 (Based on 127 reviews)
```
- **Star Rating**: Visual star icon
- **Score**: Numerical rating out of 5
- **Review Count**: Number of employee reviews (on hover)

### Salary Competitiveness
```
💰 £70K-85K (+15% above market)
```
- **Salary Range**: Standard display
- **Market Comparison**: Percentage above/below market rate
- **Color Coding**: Green (+), Red (-), Gray (market rate)

### Application Status
```
📝 Application Status: Not Applied
```
- **Status Indicator**: Applied/Not Applied/Saved
- **Application Date**: If previously applied
- **Status Colors**: Blue (applied), Gray (not applied), Orange (saved)

## Responsive Design

### Desktop (1200px+)
- Full card layout as specified
- All information visible
- Hover effects enabled

### Tablet (768px - 1199px)
```
┌─────────────────────────────────────────────────────┐
│ [🏢] MONZO              Posted 1d ago    [⚙] [❌]    │
│ Senior Backend Engineer                   96% Match │
│ 📍 London • Hybrid • £70K-85K • Full-time          │
│ Growth Stage • Fintech                              │
│ Go/Python • 5+ years • Financial services          │
│ [View Details]  [Go to Job]  [Save]     ⭐ 4.2     │
└─────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────────────────────────┐
│ [🏢] MONZO           1d ago    [⚙] [❌]  │
│ Senior Backend Engineer       96% Match │
│ 📍 London • Hybrid • £70K-85K          │
│ Growth • Fintech                        │
│ Go/Python • 5+ years                    │
│ ─────────────────────────────────────── │
│ [Details] [Job URL] [Save]   ⭐ 4.2     │
└─────────────────────────────────────────┘
```

## Performance Optimizations

### Virtual Scrolling Implementation
```typescript
interface VirtualJobCard {
  id: string
  height: 140 // Fixed height for virtual scrolling
  data: JobCardData
}

const VirtualJobList: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(10)
  const [scrollTop, setScrollTop] = useState(0)
  
  const visibleJobs = useMemo(() => {
    const startIndex = Math.floor(scrollTop / 140)
    const endIndex = startIndex + visibleItems + 2
    return jobs.slice(startIndex, endIndex)
  }, [scrollTop, visibleItems, jobs])
  
  return (
    <div className="virtual-scroll-container">
      {visibleJobs.map(job => (
        <JobCard key={job.id} data={job} />
      ))}
    </div>
  )
}
```

### Image Loading Strategy
- **Company Logos**: Lazy load with intersection observer
- **Fallback Icons**: SVG placeholders for failed loads
- **Image Optimization**: WebP format with fallbacks
- **Preloading**: Load logos for next 5 cards

### Memory Management
- **Component Recycling**: Reuse job card components
- **Data Pagination**: Load jobs in chunks of 20
- **Event Cleanup**: Remove scroll listeners on unmount
- **State Optimization**: Minimize re-renders

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Company → Title → Actions → Next card
- **Enter Key**: Open job details
- **Space Key**: Save/unsave job
- **Arrow Keys**: Navigate between cards (optional)

### Screen Reader Support
```html
<article role="listitem" aria-labelledby="job-title-123">
  <h3 id="job-title-123">Senior Backend Engineer at MONZO</h3>
  <div aria-label="Job details">
    <span aria-label="Location">London Zone 1</span>
    <span aria-label="Work type">Hybrid</span>
    <span aria-label="Salary range">70 to 85 thousand pounds</span>
  </div>
  <div aria-label="Company information">
    <span>Growth Stage company in Fintech</span>
  </div>
  <div role="group" aria-label="Job actions">
    <button aria-label="View job details">View Details</button>
    <button aria-label="Go to external job posting">Go to Job</button>
    <button aria-label="Save job">Save</button>
  </div>
</article>
```

### Visual Accessibility
- **High Contrast**: Support for high contrast mode
- **Focus Indicators**: Clear 2px blue outline
- **Color Independence**: Icons supplement color coding
- **Text Scaling**: Responsive to 200% zoom

## Animation & Transitions

### Card Entrance
```css
.job-card {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.3s ease-out forwards;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Hover Effects
```css
.job-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
}
```

### Save Animation
```css
.save-button.saved {
  animation: saveSuccess 0.4s ease-out;
}

@keyframes saveSuccess {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

## Testing Requirements

### Visual Testing
- **Cross-browser rendering**: Chrome, Firefox, Safari, Edge
- **Device testing**: Various screen sizes and resolutions
- **Color contrast**: Verify WCAG AA compliance
- **Typography scaling**: Test at different zoom levels

### Interaction Testing
- **Click accuracy**: Ensure all interactive areas work
- **Hover states**: Verify hover effects on all devices
- **Touch targets**: Minimum 44px touch targets on mobile
- **Keyboard navigation**: Full keyboard accessibility

### Performance Testing
- **Scroll performance**: Smooth scrolling with 100+ cards
- **Memory usage**: Monitor memory consumption
- **Loading times**: Fast initial render and lazy loading
- **Animation performance**: 60fps animations

## Analytics Integration

### Tracking Events
```typescript
// Card interaction tracking
trackEvent('job_card_click', {
  jobId: job.id,
  company: job.company.name,
  position: cardIndex,
  action: 'view_details'
})

// Save action tracking
trackEvent('job_save', {
  jobId: job.id,
  saveState: 'saved', // or 'unsaved'
  cardPosition: cardIndex
})

// External link tracking
trackEvent('job_external_click', {
  jobId: job.id,
  company: job.company.name,
  referrer: 'job_card'
})
```

### Performance Metrics
- **Card render time**: Time to display job cards
- **Interaction delay**: Click to action response time
- **Scroll performance**: FPS during scrolling
- **User engagement**: Time spent viewing cards