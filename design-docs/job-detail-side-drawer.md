# Job Detail Side Drawer Component

## Overview
Upwork-inspired side drawer component for displaying comprehensive job details, triggered by clicking job cards. Provides detailed view without navigation away from job search results.

## Design Inspiration
Following Upwork's successful pattern of right-side drawer for job details, maintaining context while providing comprehensive information.

## Drawer Layout

### Full Drawer Structure
```
                    ┌─────────────────────────────────────────┐
                    │ ✕                            [Go to Job] │
                    │                                         │
                    │ [Logo] MONZO                            │
                    │ Senior Backend Engineer                 │
                    │ 🎯 96% Match                            │
                    │                                         │
                    │ 📍 London Zone 1 (Hybrid)              │
                    │ 💰 £70K - £85K per year                │
                    │ 💼 Full-time • Permanent               │
                    │ 🎓 Senior Level                         │
                    │ ⏰ Posted 2 days ago                    │
                    │                                         │
                    │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
                    │                                         │
                    │ 🏢 About Company                        │
                    │ Growth Stage • Financial Services       │
                    │ 500-1000 employees                      │
                    │                                         │
                    │ ✅ Visa Sponsorship Available           │
                    │                                         │
                    │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
                    │                                         │
                    │ 📋 Job Description                      │
                    │ [Scrollable content area]               │
                    │ We are looking for a Senior Backend     │
                    │ Engineer to join our growing team...    │
                    │ [More content...]                       │
                    │                                         │
                    │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
                    │                                         │
                    │ 🎯 Key Requirements                     │
                    │ • 5+ years Go/Python experience        │
                    │ • Financial services background        │
                    │ • Right to work in UK                  │
                    │                                         │
                    │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
                    │                                         │
                    │ 💎 Benefits                             │
                    │ • 25 days holiday + bank holidays      │
                    │ • Private healthcare                    │
                    │ • Stock options                         │
                    │                                         │
                    │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
                    │                                         │
                    │ [Share Job ▼] [Not Interested] [Save]   │
                    └─────────────────────────────────────────┘
```

## Component Specifications

### Dimensions & Behavior
- **Width**: 480px on desktop, full-width on mobile
- **Height**: Full viewport height
- **Position**: Fixed right side overlay
- **Animation**: Slide in from right (300ms ease-out)
- **Backdrop**: Semi-transparent overlay with click-to-close

### Header Section
```
┌─────────────────────────────────────────┐
│ ✕                            [Go to Job] │
│                                         │
│ [Logo] MONZO                            │
│ Senior Backend Engineer                 │
│ 🎯 96% Match                            │
└─────────────────────────────────────────┘
```

#### Elements
- **Close Button**: Top-left (✕)
- **Go to Job Button**: Top-right, opens external URL
- **Company Logo**: 48x48px, with fallback
- **Job Title**: Large, prominent heading
- **Match Percentage**: Color-coded indicator

### Quick Info Section
```
┌─────────────────────────────────────────┐
│ 📍 London Zone 1 (Hybrid)              │
│ 💰 £70K - £85K per year                │
│ 💼 Full-time • Permanent               │
│ 🎓 Senior Level                         │
│ ⏰ Posted 2 days ago                    │
└─────────────────────────────────────────┘
```

#### Information Hierarchy
1. **Location**: With work type specification
2. **Salary**: Range with frequency
3. **Employment**: Type and duration
4. **Level**: Experience level required
5. **Timing**: How long ago posted

### Company Information
```
┌─────────────────────────────────────────┐
│ 🏢 About Company                        │
│ Growth Stage • Financial Services       │
│ 500-1000 employees                      │
│                                         │
│ ✅ Visa Sponsorship Available           │
└─────────────────────────────────────────┘
```

#### Company Details
- Company stage and industry
- Employee count
- Visa sponsorship status
- Additional company perks/highlights

### Content Sections

#### Job Description
- **Header**: "📋 Job Description"
- **Content**: Full job description with formatting
- **Scrollable**: Independent scroll area
- **Formatting**: Preserve line breaks, lists, emphasis

#### Key Requirements
- **Header**: "🎯 Key Requirements"
- **Format**: Bulleted list
- **Highlighting**: Match user profile against requirements
- **Visual**: Green checkmarks for matched requirements

#### Benefits
- **Header**: "💎 Benefits"
- **Format**: Bulleted list or grouped categories
- **Categories**: Holiday, Health, Financial, Learning, etc.
- **Visual**: Icons for different benefit types

### Action Bar (Bottom)
```
┌─────────────────────────────────────────┐
│ [Share Job ▼] [Not Interested] [Save]   │
└─────────────────────────────────────────┘
```

#### Available Actions
1. **Share Job**: Dropdown with share options
2. **Not Interested**: Remove from results
3. **Save Job**: Add to saved jobs list
4. **Go to Job**: External link (also in header)

## Interaction Design

### Opening the Drawer
- **Trigger**: Click anywhere on job card
- **Animation**: Slide in from right with backdrop fade
- **Focus**: Auto-focus on close button for accessibility
- **URL**: Update URL with job ID for deep linking

### Navigation Within Drawer
- **Scroll**: Vertical scroll for long content
- **Sections**: Smooth scroll to sections via internal links
- **Keyboard**: Tab navigation through interactive elements

### Closing the Drawer
- **Close Button**: Primary method (✕)
- **Backdrop Click**: Secondary method
- **Escape Key**: Keyboard shortcut
- **Browser Back**: History integration

### Share Functionality
```
Share Dropdown:
┌─────────────────────────┐
│ 📋 Copy Link            │
│ 📧 Email                │
│ 💬 WhatsApp             │
│ 🔗 LinkedIn             │
│ 🐦 Twitter              │
└─────────────────────────┘
```

## Mobile Optimization

### Mobile Layout (Full-screen)
```
┌─────────────────────────────────┐
│ ← Back                [Go to Job] │
├─────────────────────────────────┤
│                                 │
│ [Logo] MONZO                    │
│ Senior Backend Engineer         │
│ 🎯 96% Match                    │
│                                 │
│ 📍 London (Hybrid)              │
│ 💰 £70K - £85K                 │
│ 💼 Full-time                    │
│ ⏰ 2 days ago                   │
│                                 │
│ ═══════════════════════════════ │
│                                 │
│ [Scrollable Content]            │
│                                 │
├─────────────────────────────────┤
│ [Share] [Not Int.] [Save]       │
└─────────────────────────────────┘
```

#### Mobile Specific Features
- Full-screen overlay
- Back button instead of close (✕)
- Compressed information layout
- Bottom action bar (sticky)
- Touch-optimized scrolling

## Technical Implementation

### Component Structure
```typescript
interface JobDetailDrawer {
  job: JobDetails
  isOpen: boolean
  onClose: () => void
  onShare: (method: ShareMethod) => void
  onNotInterested: () => void
  onSave: () => void
}

interface JobDetails {
  id: string
  title: string
  company: CompanyInfo
  location: LocationInfo
  salary: SalaryInfo
  description: string
  requirements: string[]
  benefits: string[]
  matchPercentage: number
  postedDate: Date
  externalUrl: string
}
```

### Animation Framework
```css
/* Drawer entrance animation */
.drawer-enter {
  transform: translateX(100%);
  opacity: 0;
}

.drawer-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 300ms ease-out;
}

/* Backdrop animation */
.backdrop-enter {
  opacity: 0;
}

.backdrop-enter-active {
  opacity: 0.5;
  transition: opacity 200ms ease-in;
}
```

### Performance Optimizations
- **Lazy Loading**: Content loaded on drawer open
- **Virtual Scrolling**: For very long job descriptions
- **Image Optimization**: Company logos with WebP support
- **Text Truncation**: Smart truncation with "read more"

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Logical flow through interactive elements
- **Focus Trap**: Keep focus within drawer when open
- **Escape Key**: Close drawer
- **Arrow Keys**: Scroll content areas

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for all elements
- **Live Regions**: Announce drawer state changes
- **Heading Structure**: Proper h1-h6 hierarchy
- **Skip Links**: Navigate to main content sections

### Visual Accessibility
- **High Contrast**: Support for high contrast mode
- **Focus Indicators**: Clear focus outlines
- **Color Independence**: No color-only information
- **Text Scaling**: Support up to 200% zoom

## Integration Points

### URL Management
```typescript
// Deep linking support
const updateURL = (jobId: string) => {
  window.history.pushState({}, '', `/jobs/${jobId}`)
}

// Handle browser back
window.addEventListener('popstate', () => {
  closeJobDrawer()
})
```

### Analytics Tracking
- Drawer open/close events
- Time spent viewing job details
- Click-through rates to external job pages
- Share method preferences
- Save vs not interested ratios

### API Integration
```typescript
// Fetch detailed job information
const fetchJobDetails = async (jobId: string): Promise<JobDetails> => {
  const response = await fetch(`/api/jobs/${jobId}/details`)
  return response.json()
}

// Track user interactions
const trackJobInteraction = (action: string, jobId: string) => {
  analytics.track('job_detail_interaction', {
    action,
    jobId,
    timestamp: new Date()
  })
}
```

## Future Enhancements

### Advanced Features
- **Similar Jobs**: Recommendations at bottom of drawer
- **Application Tracking**: Show application status if applied
- **Salary Insights**: Market data for position
- **Company Reviews**: Integration with review platforms
- **Skills Matching**: Detailed skill gap analysis

### Personalization
- **Custom Sections**: User-configurable information priority
- **Note Taking**: Private notes on job postings
- **Reminder System**: Follow-up reminders
- **Comparison Mode**: Side-by-side job comparison