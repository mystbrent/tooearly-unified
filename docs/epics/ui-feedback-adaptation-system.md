# UI Feedback Adaptation System - Brownfield Enhancement

## Epic Goal

Create a dynamic UI adaptation system that immediately adjusts job listing layouts based on user feedback responses, followed by a quick validation survey to measure user satisfaction with the applied changes.

## Epic Description

### Existing System Context

- **Current relevant functionality**: TooEarly Dashboard with job listings displayed in responsive 2-column layout, existing survey system with 3 timed questions (Work Type, Job Layout, Right Panel Content), and comprehensive feedback API with Airtable integration
- **Technology stack**: Next.js 15.2.4, React 19, TypeScript, Tailwind CSS, Radix UI, shadcn/ui components, existing CSS variables theming system
- **Integration points**: Existing SurveyPrompt component, JobrightDashboard state management, feedback API endpoint, CSS variable theming system

### Enhancement Details

- **What's being added/changed**: 
  - Real-time UI adaptation based on survey responses (specifically job layout preferences)
  - Dynamic job card layout switching (1 per row vs 2 per row)
  - Immediate follow-up validation survey ("Like what you saw?" Yes/No)
  - Preference persistence and application across sessions

- **How it integrates**: 
  - Extends existing SurveyPrompt component with adaptive trigger logic
  - Leverages current CSS variable system for dynamic styling
  - Builds on existing feedback API for preference storage
  - Utilizes existing job card structure with new layout variants

- **Success criteria**: 
  - Users can see immediate UI changes when selecting layout preferences
  - Follow-up validation survey appears within 2 seconds of UI change
  - Layout preferences persist across browser sessions
  - No disruption to existing survey timing or functionality
  - Performance impact < 100ms for layout transitions

## Stories

### 1. **Story 1: Dynamic Job Layout Adaptation**
Implement real-time job card layout switching that immediately responds to user survey answers about layout preferences, with smooth CSS transitions and proper responsive behavior.

**Key Features:**
- Extend JobrightDashboard to handle dynamic layout states
- Create adaptive CSS classes for 1-per-row vs 2-per-row layouts
- Implement smooth transition animations
- Ensure mobile responsiveness is maintained

### 2. **Story 2: Preference Persistence & State Management**
Create a user preference system that stores layout choices and applies them consistently across sessions, integrating with the existing feedback API.

**Key Features:**
- Extend feedback API to handle UI preference storage
- Create preference context/hook for state management
- Implement browser storage backup (localStorage)
- Add preference initialization on dashboard load

### 3. **Story 3: Validation Survey Integration**
Implement the immediate follow-up validation survey that appears after UI changes, with proper timing logic and integration with existing survey infrastructure.

**Key Features:**
- Create validation survey component with Yes/No options
- Implement 2-second delayed trigger after UI adaptation
- Integrate with existing survey state management
- Add validation response tracking to feedback API

## Compatibility Requirements

- [x] Existing APIs remain unchanged (extend feedback API, don't modify core endpoints)
- [x] Database schema changes are backward compatible (new fields only)
- [x] UI changes follow existing patterns (leverage shadcn/ui and Tailwind CSS)
- [x] Performance impact is minimal (CSS transitions, no re-renders)

## Risk Mitigation

- **Primary Risk**: Disruption to existing survey timing and user experience flow
- **Mitigation**: Implement feature flags and gradual rollout, preserve existing survey state management patterns
- **Rollback Plan**: CSS-only changes can be instantly reverted, preference API extensions are additive and can be disabled via environment variables

## Definition of Done

- [x] All stories completed with acceptance criteria met
- [x] Existing functionality verified through testing
- [x] Integration points working correctly (survey system, feedback API, job cards)
- [x] Documentation updated appropriately
- [x] No regression in existing features
- [x] Performance benchmarks met (< 100ms transition times)
- [x] Cross-browser compatibility verified
- [x] Mobile responsiveness maintained

## Technical Implementation Notes

### Integration Architecture
- **State Management**: Extend existing React hooks pattern with new `useLayoutPreferences` hook
- **Styling**: Leverage existing CSS variable system with new `--job-layout-*` variables
- **API**: Extend `/api/feedback` endpoint with new `ui_preferences` field
- **Components**: Create `AdaptiveJobGrid` wrapper component around existing job cards

### Key Files to Modify
- `components/jobright-dashboard.tsx` - Main dashboard logic
- `components/survey-prompt.tsx` - Survey integration
- `app/globals.css` - CSS variable extensions
- `lib/feedback-api-client.ts` - API client extensions
- `app/api/feedback/route.ts` - Backend API extensions

### CSS Variable Extensions
```css
:root {
  --job-grid-columns: 2; /* Dynamic: 1 or 2 */
  --job-card-width: calc(50% - 0.5rem); /* Dynamic based on grid */
  --job-layout-transition: all 0.3s ease-in-out;
}
```

## Story Manager Handoff

**Story Manager Handoff:**

"Please develop detailed user stories for this brownfield epic. Key considerations:

- This is an enhancement to an existing system running Next.js 15.2.4 with React 19, TypeScript, and Tailwind CSS
- Integration points: SurveyPrompt component, JobrightDashboard state management, feedback API (/api/feedback), CSS variable theming system
- Existing patterns to follow: React hooks for state management, shadcn/ui component patterns, CSS variables for theming, existing survey timing logic
- Critical compatibility requirements: Maintain existing survey functionality, preserve mobile responsiveness, ensure API backward compatibility
- Each story must include verification that existing functionality remains intact, particularly the current survey system and job card rendering

The epic should maintain system integrity while delivering immediate UI adaptation based on user feedback preferences with validation surveys."

---

## Success Metrics

- **User Experience**: 95% of users see UI changes within 1 second of survey response
- **Validation Rate**: 80% of users complete the follow-up validation survey
- **Preference Persistence**: 100% of layout preferences maintained across sessions
- **Performance**: All transitions complete within 100ms
- **Compatibility**: 0% regression in existing survey completion rates