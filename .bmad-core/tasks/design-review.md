# Design Review Task

This task performs a comprehensive review of design work against quality standards, accessibility requirements, and project goals.

## Purpose
Ensure designs meet all requirements, follow best practices, and provide optimal user experience before moving to development.

## Review Process

### 1. Design Compliance Check

#### Project Requirements
- [ ] Addresses all specified use cases
- [ ] Meets business objectives
- [ ] Stays within defined scope
- [ ] Follows brand guidelines
- [ ] Matches approved design direction

#### User Experience
- [ ] Clear information hierarchy
- [ ] Intuitive navigation patterns
- [ ] Consistent interaction patterns
- [ ] Appropriate feedback mechanisms
- [ ] Error prevention and recovery

#### Visual Design
- [ ] Consistent spacing and alignment
- [ ] Appropriate typography scale
- [ ] Cohesive color usage
- [ ] Clear visual hierarchy
- [ ] Professional appearance

### 2. Component Review

For each component, verify:

#### Structure
- [ ] Follows established patterns
- [ ] Uses consistent naming
- [ ] Has all necessary states
- [ ] Includes all variants
- [ ] Properly documented

#### States & Behavior
```
Check each state exists and is designed:
┌─────────────────────────────┐
│ Component State Checklist   │
├─────────────────────────────┤
│ ☑ Default/Rest             │
│ ☑ Hover                    │
│ ☑ Active/Pressed           │
│ ☑ Focus                    │
│ ☑ Disabled                 │
│ ☑ Loading (if applicable)  │
│ ☑ Error (if applicable)    │
│ ☑ Success (if applicable)  │
└─────────────────────────────┘
```

### 3. Accessibility Audit

#### Color & Contrast
- [ ] Text contrast ratio ≥ 4.5:1 (normal text)
- [ ] Text contrast ratio ≥ 3:1 (large text)
- [ ] UI component contrast ≥ 3:1
- [ ] Focus indicators clearly visible
- [ ] Information not conveyed by color alone

#### Keyboard Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Logical tab order
- [ ] Focus indicators present
- [ ] No keyboard traps
- [ ] Shortcuts documented (if any)

#### Screen Reader Support
- [ ] Proper heading hierarchy
- [ ] Descriptive link text
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Form labels associated correctly

#### Responsive & Adaptive
- [ ] Touch targets ≥ 44x44px (mobile)
- [ ] Content reflows properly
- [ ] Text readable at 200% zoom
- [ ] Horizontal scrolling avoided
- [ ] Works in portrait/landscape

### 4. Information Architecture Review

#### Navigation
- [ ] Clear labeling
- [ ] Consistent structure
- [ ] Breadcrumbs where appropriate
- [ ] Search functionality (if needed)
- [ ] Clear current location indication

#### Content Organization
```
Verify IA principles:
┌─────────────────────────────┐
│ ✓ Findability - 3 clicks   │
│ ✓ Learnability - Intuitive │
│ ✓ Memorability - Consistent│
│ ✓ Flexibility - Multiple   │
│   paths to content         │
└─────────────────────────────┘
```

### 5. Responsive Design Check

Test across breakpoints:
```
Mobile (320-768px)
├─ [ ] Layout adapts properly
├─ [ ] Touch-friendly controls  
├─ [ ] Readable text size
└─ [ ] Optimized images

Tablet (768-1024px)
├─ [ ] Efficient use of space
├─ [ ] Appropriate columns
└─ [ ] Touch/mouse friendly

Desktop (1024px+)
├─ [ ] Maximum content width
├─ [ ] Multi-column layouts
└─ [ ] Hover states work
```

### 6. Performance Considerations

#### Asset Optimization
- [ ] Image formats appropriate
- [ ] Icon usage optimized
- [ ] Font loading strategy
- [ ] Animation performance

#### Perceived Performance
- [ ] Loading states designed
- [ ] Progressive disclosure used
- [ ] Skeleton screens (if needed)
- [ ] Lazy loading considered

### 7. Cross-Browser/Platform

#### Browser Support
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

#### Platform Considerations
- [ ] iOS specific patterns
- [ ] Android specific patterns
- [ ] Desktop vs mobile interactions
- [ ] Print styles (if needed)

### 8. Design System Compliance

#### Component Usage
- [ ] Uses existing components appropriately
- [ ] New components justified
- [ ] Follows naming conventions
- [ ] Maintains consistency

#### Documentation
- [ ] Component specs complete
- [ ] Usage guidelines clear
- [ ] Edge cases documented
- [ ] Integration notes included

## Review Output Template

```
DESIGN REVIEW SUMMARY
====================
Date: [DATE]
Reviewer: Alex Chen
Design: [DESIGN_NAME]
Version: [VERSION]

Overall Status: [Pass/Needs Revision/Fail]

STRENGTHS:
✓ [Positive point 1]
✓ [Positive point 2]
✓ [Positive point 3]

ISSUES FOUND:

Critical (Must Fix):
1. [Issue description]
   Location: [Where in design]
   Recommendation: [How to fix]

2. [Issue description]
   Location: [Where in design]
   Recommendation: [How to fix]

Major (Should Fix):
1. [Issue description]
   Recommendation: [How to fix]

Minor (Consider Fixing):
1. [Issue description]
   Recommendation: [How to fix]

ACCESSIBILITY SCORE: [X]/10
- Color Contrast: [Pass/Fail]
- Keyboard Nav: [Pass/Fail]
- Screen Reader: [Pass/Fail]
- Mobile Friendly: [Pass/Fail]

RECOMMENDATIONS:
1. [Specific action item]
2. [Specific action item]
3. [Specific action item]

NEXT STEPS:
□ Address critical issues
□ Review with stakeholders
□ Update documentation
□ Prepare for handoff
```

## Common Issues Checklist

### Visual Issues
- Inconsistent spacing
- Misaligned elements
- Color inconsistencies
- Typography problems
- Poor contrast

### UX Issues
- Confusing navigation
- Hidden functionality
- Unclear feedback
- Missing states
- Poor error handling

### Technical Issues
- Impossible to implement
- Performance concerns
- Platform limitations
- Integration problems

## Review Tools

### Manual Testing
1. Click/tap every element
2. Try keyboard navigation
3. Test with screen reader
4. Check different viewports
5. Validate against requirements

### Automated Tools
- Color contrast checkers
- Accessibility validators
- HTML validators
- Performance analyzers

## Sign-off Criteria

Before approval, ensure:
1. All critical issues resolved
2. Stakeholder approval received
3. Developer questions answered
4. Documentation complete
5. Assets export-ready

## Notes

- Reviews should be constructive
- Focus on user impact
- Provide specific solutions
- Document all decisions
- Include positive feedback too