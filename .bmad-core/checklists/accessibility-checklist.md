# Accessibility Checklist

Comprehensive checklist for ensuring designs meet WCAG 2.1 Level AA standards and provide inclusive user experiences.

## Perceivable

### Text Content
- [ ] All text has sufficient color contrast (4.5:1 for normal text)
- [ ] Large text (18pt+) has 3:1 contrast ratio minimum
- [ ] Text is readable when zoomed to 200%
- [ ] Text spacing can be adjusted without loss of functionality
- [ ] No images of text (except logos)

### Images & Media
- [ ] All informative images have descriptive alt text
- [ ] Decorative images have empty alt="" or are CSS backgrounds
- [ ] Complex images have long descriptions available
- [ ] Videos have captions and transcripts
- [ ] Audio content has transcripts
- [ ] No audio plays automatically

### Color & Visual
- [ ] Color is not the only way information is conveyed
- [ ] Error states use icons/text in addition to color
- [ ] Links are distinguishable without relying on color
- [ ] Focus indicators have 3:1 contrast ratio
- [ ] UI components have 3:1 contrast against backgrounds

## Operable

### Keyboard Access
- [ ] All functionality available via keyboard
- [ ] No keyboard traps exist
- [ ] Tab order follows logical reading order
- [ ] Custom controls have appropriate keyboard handlers
- [ ] Keyboard shortcuts are documented
- [ ] Skip links provided to main content

### Focus Management
- [ ] Focus indicators are clearly visible
- [ ] Focus moves logically through the page
- [ ] Focus returns to trigger element after modal closes
- [ ] Dynamic content updates don't steal focus
- [ ] Focus is managed during route changes (SPAs)

### Timing & Motion
- [ ] Users can pause, stop, or hide moving content
- [ ] Time limits can be extended or turned off
- [ ] Auto-updating content can be paused
- [ ] Animations respect prefers-reduced-motion
- [ ] No content flashes more than 3 times per second

### Navigation
- [ ] Multiple ways to find pages (menu, search, sitemap)
- [ ] Consistent navigation across pages
- [ ] Link purpose is clear from link text or context
- [ ] Page has descriptive title
- [ ] Heading structure is logical and hierarchical

## Understandable

### Readable Content
- [ ] Language of page is identified
- [ ] Language changes within content are marked
- [ ] Unusual words are defined or explained
- [ ] Abbreviations are expanded on first use
- [ ] Reading level is appropriate for audience

### Predictable Interface
- [ ] Navigation is consistent across pages
- [ ] Components behave consistently
- [ ] Context changes don't happen without user action
- [ ] Form submission is user-initiated
- [ ] Opening new windows is indicated

### Input Assistance
- [ ] Form fields have visible labels
- [ ] Required fields are clearly marked
- [ ] Input format is specified (e.g., date format)
- [ ] Error messages are clear and specific
- [ ] Success confirmations are provided
- [ ] Inline validation doesn't disrupt user flow

## Robust

### Code Quality
- [ ] HTML validates without errors
- [ ] ARIA used correctly and only when needed
- [ ] Semantic HTML used appropriately
- [ ] Custom components have proper ARIA
- [ ] Name, role, value exposed for all UI components

### Compatibility
- [ ] Works with current screen readers
- [ ] Functions with browser zoom to 400%
- [ ] Works with high contrast modes
- [ ] Mobile gestures have alternatives
- [ ] Works without JavaScript (progressive enhancement)

## Touch & Mobile

### Touch Targets
- [ ] Interactive elements are at least 44x44px
- [ ] Adequate spacing between touch targets
- [ ] Important actions are easy to reach
- [ ] Swipe gestures have tap alternatives
- [ ] Device orientation is not locked

### Mobile Considerations
- [ ] Content reflows for small screens (no horizontal scroll)
- [ ] Forms are optimized for mobile input
- [ ] Error messages visible near form fields
- [ ] Pinch-to-zoom is not disabled
- [ ] Text is readable without zooming

## Forms & Inputs

### Labels & Instructions
- [ ] Every input has a label
- [ ] Labels are visible and associated
- [ ] Placeholder text not used as only label
- [ ] Help text provided where needed
- [ ] Required fields indicated accessibly

### Error Handling
- [ ] Errors are clearly identified
- [ ] Error messages describe how to fix
- [ ] Errors announced to screen readers
- [ ] Inline validation is accessible
- [ ] Success messages are communicated

### Field Types
- [ ] Appropriate input types used (email, tel, etc.)
- [ ] Autocomplete attributes provided
- [ ] Date pickers have text input alternatives
- [ ] Select dropdowns are keyboard accessible
- [ ] Custom controls properly labeled

## Rich Interactions

### Modals & Overlays
- [ ] Focus trapped within modal
- [ ] Escape key closes modal
- [ ] Background content is inert
- [ ] Focus returns to trigger on close
- [ ] Modal announced to screen readers

### Dynamic Content
- [ ] Live regions used for updates
- [ ] Loading states announced
- [ ] Progress indicators accessible
- [ ] Infinite scroll has alternative
- [ ] AJAX content updates gracefully

### Complex Components
- [ ] Tabs are keyboard navigable
- [ ] Accordions expand/collapse accessibly
- [ ] Carousels can be paused and navigated
- [ ] Data tables have proper headers
- [ ] Tree views follow ARIA patterns

## Testing & Validation

### Automated Testing
- [ ] Color contrast analyzer passed
- [ ] HTML validator shows no errors
- [ ] ARIA validator shows proper usage
- [ ] Automated accessibility scan passed
- [ ] Browser DevTools audit passed

### Manual Testing
- [ ] Keyboard-only navigation works
- [ ] Screen reader testing completed
- [ ] Mobile device testing done
- [ ] Browser zoom to 400% tested
- [ ] High contrast mode verified

### User Testing
- [ ] Tested with users with disabilities
- [ ] Feedback incorporated
- [ ] Common tasks are achievable
- [ ] Cognitive load considered
- [ ] Clear path to help/support

## Documentation

### Design Annotations
- [ ] Alt text documented for images
- [ ] Reading order specified
- [ ] ARIA labels noted where needed
- [ ] Keyboard interactions documented
- [ ] Focus order indicated

### Developer Notes
- [ ] Semantic HTML specified
- [ ] ARIA patterns referenced
- [ ] Keyboard handlers detailed
- [ ] Screen reader announcements noted
- [ ] Focus management documented

## Compliance Levels

### WCAG 2.1 Level A (Minimum)
- [ ] Basic keyboard access
- [ ] Alt text for images
- [ ] Page has title
- [ ] Basic color contrast
- [ ] No keyboard traps

### WCAG 2.1 Level AA (Target)
- [ ] Enhanced color contrast
- [ ] Consistent navigation
- [ ] Multiple ways to find content
- [ ] Clear focus indicators
- [ ] Comprehensive keyboard access

### WCAG 2.1 Level AAA (Enhanced)
- [ ] 7:1 contrast ratios
- [ ] Sign language for videos
- [ ] Context-sensitive help
- [ ] No timing requirements
- [ ] Simplified language options

## Quick Wins

### High Impact, Low Effort
- [ ] Add skip links
- [ ] Improve focus indicators
- [ ] Add alt text to images
- [ ] Label all form fields
- [ ] Test with keyboard only

### Common Issues to Check
- [ ] Placeholder text as labels
- [ ] Missing focus indicators
- [ ] Poor color contrast
- [ ] Inaccessible custom dropdowns
- [ ] Auto-playing media

## Resources

### Testing Tools
- Screen readers: NVDA, JAWS, VoiceOver
- Color contrast: WebAIM Contrast Checker
- Validators: W3C HTML Validator, WAVE
- Browser tools: Lighthouse, axe DevTools

### Guidelines
- WCAG 2.1: w3.org/WAI/WCAG21/quickref/
- ARIA Patterns: w3.org/TR/wai-aria-practices-1.1/
- WebAIM: webaim.org