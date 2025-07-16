# Job Card Component Redesign

## Overview
Redesigned job card component for TooEarly job search platform based on user feedback. Focus on space efficiency, enhanced information density, and improved user interactions.

## Current Issues
- Cards too large, consuming excessive vertical space
- Missing key job details and interaction buttons
- Inefficient information hierarchy

## Redesigned Job Card Structure

```
┌─────────────────────────────────────────────────────────┐
│ [Logo] Company Name                        [Share] [❌]  │
│        Job Title                          Posted: 2d ago │
│                                                          │
│ 📍 London • Remote • £70K-85K • Full-time • Senior     │
│                                                          │
│ 🏢 Growth Stage • Technology • Cloud Computing          │
│                                                          │
│ 🎯 96% Match  [View Details] [Go to Job URL]           │
└─────────────────────────────────────────────────────────┘
```

## Component Specifications

### Dimensions
- **Height**: Reduced from current ~200px to ~120px
- **Width**: Full container width with 16px padding
- **Spacing**: 8px margin between cards

### Information Hierarchy

#### Primary Information (Top Row)
- Company logo (32x32px)
- Company name (bold, 16px)
- Share button (top-right)
- Not Interested button (❌, top-right)

#### Secondary Information (Second Row)
- Job title (18px, medium weight)
- Posted time (12px, gray, right-aligned)

#### Tertiary Information (Third Row)
- Location icon + location
- Work type (Remote/Hybrid/On-site)
- Salary range
- Employment type (Full-time, Contract, etc.)
- Experience level

#### Quaternary Information (Fourth Row)
- Company stage (Early/Growth/Late/Public)
- Industry
- Specific industry sector

#### Action Row (Bottom)
- Match percentage with colored indicator
- View Details button
- Go to Job URL button

### Interaction Behaviors

#### Click Actions
- **Card Click**: Opens job detail side drawer
- **Share Button**: Dropdown with share link options
- **Not Interested**: Removes card with fade animation
- **View Details**: Opens side drawer (same as card click)
- **Go to Job URL**: Opens external job page in new tab

#### Hover States
- Card: Subtle shadow elevation
- Buttons: Color/opacity changes
- Share dropdown: Appears on hover

### Visual Design

#### Colors
- Background: White with 1px gray border
- Match percentage: Green (90%+), Yellow (70-89%), Gray (<70%)
- Text hierarchy: Black (#000), Dark Gray (#666), Light Gray (#999)

#### Typography
- Company name: 16px, font-weight: 600
- Job title: 18px, font-weight: 500
- Details: 14px, font-weight: 400
- Meta info: 12px, font-weight: 400

#### Icons
- Location: 📍
- Company type: 🏢
- Match: 🎯
- Share: Standard share icon
- Not Interested: ❌

### Responsive Behavior
- Mobile: Stack information vertically, reduce padding
- Tablet: Maintain horizontal layout, adjust spacing
- Desktop: Full horizontal layout as shown

## Implementation Notes

### Data Requirements
- Company logo URL
- Company stage information
- Industry and sector classification
- Posted timestamp
- Match percentage calculation
- Share URL generation

### Technical Considerations
- Lazy loading for company logos
- Efficient rendering for large job lists
- Smooth animations for interactions
- Accessibility compliance (ARIA labels, keyboard navigation)

### Performance Optimizations
- Virtual scrolling for job list container
- Image optimization for company logos
- Debounced interactions for rapid clicking

## Accessibility Features
- ARIA labels for all interactive elements
- Keyboard navigation support
- High contrast mode compatibility
- Screen reader friendly structure
- Focus indicators for all interactive elements

## Future Enhancements
- Saved jobs indicator
- Application status tracking
- Quick apply functionality
- Personalized recommendation reasons