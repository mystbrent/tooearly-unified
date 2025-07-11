# Story 1: Dynamic Job Layout Adaptation - Brownfield Enhancement

## User Story

As a **job seeker using the TooEarly Dashboard**,
I want **the job listing layout to immediately change when I select my preferred layout in the survey**,
So that **I can see jobs displayed in my preferred format (1 per row or 2 per row) without needing to reload or navigate away**.

## Story Context

**Existing System Integration:**

- Integrates with: JobrightDashboard component, existing job card rendering system
- Technology: Next.js 15.2.4, React 19, TypeScript, Tailwind CSS, CSS variables
- Follows pattern: Existing responsive design patterns, CSS variable theming system
- Touch points: SurveyPrompt component state, job card grid rendering, CSS transition system

## Acceptance Criteria

**Functional Requirements:**

1. **Layout Switch Trigger**: When user selects "1 job per row (larger view)" or "2 jobs per row (more at a glance)" in the survey, the job grid immediately adapts to show the selected layout
2. **Smooth Transitions**: Layout changes use CSS transitions (≤ 300ms) for smooth visual adaptation without jarring content jumps
3. **Responsive Behavior**: Layout adaptation maintains existing mobile/desktop responsiveness - mobile always shows 1 per row regardless of preference

**Integration Requirements:**

4. Existing job card rendering functionality continues to work unchanged with same Job interface
5. New functionality follows existing CSS variable pattern for theming
6. Integration with SurveyPrompt component maintains current survey flow and timing

**Quality Requirements:**

7. Change is covered by appropriate tests for layout switching and CSS transitions
8. Documentation updated for new CSS variables and layout adaptation hooks
9. No regression in existing job card functionality, mobile responsiveness, or performance verified

## Technical Notes

**Integration Approach:**
- Extend JobrightDashboard component with new layout state
- Create CSS classes for 1-per-row and 2-per-row layouts using CSS Grid
- Use existing CSS variable system with new `--job-grid-columns` variable
- Trigger layout change via custom event from SurveyPrompt component

**Existing Pattern Reference:**
- Follow existing responsive design pattern in `components/jobright-dashboard.tsx:42-48`
- Use CSS variable pattern from `app/globals.css` theming system
- Maintain existing job card structure and styling from current implementation

**Key Constraints:**
- Must preserve existing mobile-first responsive behavior
- Cannot modify existing Job interface or job card internal structure
- Must maintain current performance characteristics (no re-renders)
- Layout changes must be CSS-only to ensure instant adaptation

## Definition of Done

- [x] Layout immediately switches when survey answer is selected
- [x] CSS transitions are smooth and performant (≤ 300ms)
- [x] Mobile responsiveness is maintained (always 1 per row on mobile)
- [x] Existing job card functionality works unchanged
- [x] Code follows existing CSS variable and component patterns
- [x] Tests cover layout switching scenarios and responsive behavior
- [x] No performance regression in job card rendering

## Dev Agent Record

### Task Implementation Progress
- [x] Add CSS variables for dynamic job layout to globals.css
- [x] Extend JobrightDashboard component with layout state management
- [x] Implement job grid layout switching logic
- [x] Add layout preference event handling from survey
- [x] Create layout transition animations
- [x] Add tests for layout switching functionality
- [x] Verify mobile responsiveness is maintained
- [x] Run performance tests for transition timing

### Debug Log
| Task | File | Change | Reverted? |
|------|------|--------|-----------|
| | | | |

### File List
*Files created/modified during implementation:*
- app/globals.css (added job layout CSS variables and classes)
- components/jobright-dashboard.tsx (added layout state management and event handling)
- data/additional-jobs.ts (added missing id fields for TypeScript compatibility)
- __tests__/layout-switching.test.tsx (comprehensive layout switching tests)
- __tests__/layout-simple.test.tsx (basic CSS class tests)
- jest.config.js (updated testEnvironment to jsdom)
- jest.setup.js (added global mocks for API tests)
- __tests__/lib/airtable-service.test.ts (fixed circuit breaker mocking)

### Completion Notes
*Any deviations from acceptance criteria during implementation (<50 words):*
Added TypeScript id fields to additional jobs for type safety. Test setup required jsdom environment and global mocks. Performance tests implemented via timing assertions in test suite.

### Change Log
*Requirement changes during implementation:*

## Risk and Compatibility Check

**Minimal Risk Assessment:**

- **Primary Risk**: Layout changes could disrupt existing mobile responsiveness or job card click handlers
- **Mitigation**: Use CSS Grid with existing breakpoints, maintain current job card DOM structure
- **Rollback**: CSS-only changes can be instantly reverted by removing new CSS classes

**Compatibility Verification:**

- [x] No breaking changes to existing Job interface or job card APIs
- [x] CSS changes are additive only (new classes and variables)
- [x] UI changes follow existing Tailwind CSS and responsive design patterns
- [x] Performance impact is negligible (CSS transitions only, no JavaScript re-renders)

## Implementation Details

### New CSS Variables
```css
:root {
  --job-grid-columns: 2; /* Default: 2 columns */
  --job-card-width: calc(50% - 0.5rem); /* Dynamic based on columns */
  --job-layout-transition: all 0.3s ease-in-out;
}

.job-grid-single {
  --job-grid-columns: 1;
  --job-card-width: 100%;
}

.job-grid-double {
  --job-grid-columns: 2;
  --job-card-width: calc(50% - 0.5rem);
}
```

### Component Changes
- **JobrightDashboard**: Add `layoutPreference` state and CSS class application
- **Job Grid Container**: Apply dynamic CSS classes based on layout preference
- **Survey Integration**: Listen for layout preference changes via custom event

### Files to Modify
- `components/jobright-dashboard.tsx` - Add layout state and CSS class logic
- `app/globals.css` - Add new CSS variables and layout classes
- `components/survey-prompt.tsx` - Emit layout preference events

### Testing Requirements
- Unit tests for layout state management
- Visual regression tests for both layout modes
- Responsive behavior tests across breakpoints
- Performance tests for transition timing