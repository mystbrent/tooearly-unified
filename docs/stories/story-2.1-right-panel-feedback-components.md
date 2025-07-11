# Story 2.1: Right Panel Feedback Implementation - Draft Components

**Status**: Draft  
**Epic**: UI Feedback Adaptation System  
**Story Type**: Brownfield Enhancement  
**Priority**: Medium  
**Estimated Effort**: 5 story points  

## User Story

**As a** job seeker browsing on TooEarly Dashboard  
**I want** to see relevant information in the right panel based on my feedback preferences  
**So that** I can access job metrics or company-specific job listings that help me make better job application decisions  

## Context & Background

### Existing System Integration
- **Parent Epic**: UI Feedback Adaptation System (brownfield enhancement)
- **Technology Stack**: Next.js 15.2.4, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Integration Points**: 
  - JobrightDashboard component (existing right panel area)
  - Feedback API with "Right Panel Content" question type (already implemented)
  - Existing survey system collecting user preferences
- **Current Right Panel**: Currently shows "Similar Jobs" functionality

### User Feedback Context
Based on collected feedback from the "Right Panel Content" survey question:
- **Option 1**: "Job Metrics (e.g., average salary for similar roles, application trends)" 
- **Option 2**: "Jobs from Selected Company (if you click on a job)"
- Users are requesting these specific types of content for the right panel

## Acceptance Criteria

### AC1: Job Metrics Component (Draft Implementation)
**Given** a user has selected "Job Metrics" as their right panel preference  
**When** they view the dashboard  
**Then** the right panel should display a draft Job Metrics component with:
- Average salary information for similar roles
- Application trend data
- Job market insights
- Placeholder/mock data with clear labeling as "Preview"

### AC2: Jobs from Selected Company Component (Draft Implementation)  
**Given** a user has selected "Jobs from Selected Company" as their right panel preference  
**And** they have clicked on a job listing  
**When** viewing the dashboard  
**Then** the right panel should display:
- Other job listings from the same company
- Company information summary
- Related opportunities
- Clear indication this is a "Preview" implementation

### AC3: Feedback-Driven Panel Switching
**Given** the system has collected user feedback about right panel preferences  
**When** the dashboard loads  
**Then** it should:
- Display the appropriate component based on user feedback
- Fall back to existing "Similar Jobs" if no preference is recorded
- Maintain existing functionality as default

### AC4: Draft Component Integration
**Given** these are draft implementations  
**When** components are displayed  
**Then** they should:
- Follow existing UI patterns (shadcn/ui, Tailwind CSS)
- Include clear "Preview" or "Draft" indicators
- Maintain responsive design principles
- Not disrupt existing right panel functionality

## Tasks & Subtasks

### Task 1: Component Architecture & Setup
- [ ] **1.1** Create `components/job-metrics.tsx` with TypeScript interfaces
- [ ] **1.2** Create `components/jobs-from-selected-company.tsx` with proper typing
- [ ] **1.3** Define shared interfaces for component props and data structures
- [ ] **1.4** Set up component export structure for easy integration

### Task 2: Job Metrics Component Implementation
- [ ] **2.1** Design and implement salary metrics display
- [ ] **2.2** Add application trend visualizations (simple charts/graphs)
- [ ] **2.3** Include job market insights section
- [ ] **2.4** Add mock data service for preview functionality
- [ ] **2.5** Implement responsive design for different screen sizes

### Task 3: Jobs from Selected Company Component Implementation  
- [ ] **3.1** Design company job listings display
- [ ] **3.2** Add company information summary section
- [ ] **3.3** Implement job filtering by company logic
- [ ] **3.4** Add "View Company Profile" placeholder functionality
- [ ] **3.5** Ensure proper job selection state management

### Task 4: Dashboard Integration & Feedback Logic
- [ ] **4.1** Extend JobrightDashboard to handle right panel component switching
- [ ] **4.2** Implement feedback preference reading from API/localStorage
- [ ] **4.3** Add component routing logic based on user preferences
- [ ] **4.4** Maintain backward compatibility with existing Similar Jobs functionality
- [ ] **4.5** Add error handling and fallback mechanisms

### Task 5: Testing & Documentation (Not Urgent now)
- [ ] **5.1** Create unit tests for both new components
- [ ] **5.2** Add integration tests for dashboard component switching
- [ ] **5.3** Test responsive behavior on various screen sizes
- [ ] **5.4** Document component APIs and usage patterns
- [ ] **5.5** Verify existing functionality remains intact

## Dev Notes

### Technical Implementation Strategy
```typescript
// Component switching logic in JobrightDashboard
const getRightPanelComponent = (userPreference: string, selectedJob: Job | null) => {
  switch (userPreference) {
    case 'job-metrics':
      return <JobMetrics selectedJob={selectedJob} />;
    case 'company-jobs':
      return <JobsFromSelectedCompany selectedJob={selectedJob} />;
    default:
      return <SimilarJobs selectedJob={selectedJob} />; // Existing functionality
  }
};
```

### Key Integration Points
- **Existing State**: Leverage current `selectedJob` state in JobrightDashboard
- **Feedback API**: Read from existing "Right Panel Content" question responses
- **UI Patterns**: Follow existing patterns from Similar Jobs component
- **Styling**: Use existing right panel container classes and spacing

### Mock Data Strategy
- Create realistic but clearly labeled mock data
- Use consistent data structure with existing job listings
- Implement data transformation utilities for different display formats
- Include data loading states and error handling

### Risk Assessment & Mitigation
**Risk**: Disrupting existing right panel functionality  
**Mitigation**: Implement feature toggle pattern, default to existing behavior

**Risk**: Performance impact from new components  
**Mitigation**: Lazy load components, optimize render cycles

**Risk**: Mock data appearing as real data  
**Mitigation**: Clear labeling, distinct styling for preview content

## Testing Requirements

### Unit Tests
- [ ] JobMetrics component rendering and props handling
- [ ] JobsFromSelectedCompany component functionality
- [ ] Component switching logic in dashboard
- [ ] Mock data service functions

### Integration Tests  
- [ ] Right panel component switching based on user preferences
- [ ] Fallback to existing Similar Jobs functionality
- [ ] Responsive behavior across device sizes
- [ ] State management integration with existing dashboard logic

### Compatibility Tests
- [ ] Verify existing Similar Jobs functionality unaffected
- [ ] Test survey system integration (no disruption to feedback collection)
- [ ] Confirm existing job selection behavior works with new components
- [ ] Validate CSS styling doesn't conflict with existing styles

## Files to Create/Modify

### New Files
- `components/job-metrics.tsx` - Job metrics display component
- `components/jobs-from-selected-company.tsx` - Company jobs component  
- `lib/mock-data-service.ts` - Mock data generation for preview
- `types/right-panel.ts` - TypeScript interfaces for new components

### Modified Files
- `components/jobright-dashboard.tsx` - Integration of new components
- `hooks/use-layout-preferences.ts` - Extend to handle right panel preferences (if applicable)
- Component styling files (follow existing pattern)

## Definition of Done

- [ ] ✅ **Functionality**: Both draft components render correctly with mock data
- [ ] ✅ **Integration**: Components switch based on user feedback preferences  
- [ ] ✅ **Compatibility**: Existing Similar Jobs functionality preserved and working
- [ ] ✅ **UI/UX**: Components follow existing design patterns and are responsive
- [ ] ✅ **Testing**: All acceptance criteria verified through testing
- [ ] ✅ **Documentation**: Component usage and integration documented
- [ ] ✅ **Performance**: No significant impact on dashboard load times
- [ ] ✅ **Draft Clarity**: Components clearly marked as preview/draft implementations

## Agent Completion Tracking

- [x] **Analysis Agent**: Requirements analysis and technical approach
- [x] **Development Agent**: Component implementation and integration  
- [ ] **Testing Agent**: Test creation and execution
- [ ] **Review Agent**: Code review and compatibility verification

## Dev Agent Record

### Debug Log
| Task | File | Change | Reverted? |
|------|------|--------|-----------|
| 4.1 | jobright-dashboard.tsx | Added new component imports and right panel switching logic | No |
| 4.2 | .env.local | Fixed NEXT_PUBLIC_FEEDBACK_API_KEY mismatch | No |
| 4.2 | feedback-api-client.ts | Updated fallback API key | No |

### Completion Notes
- Implemented both JobMetrics and JobsFromSelectedCompany components with TypeScript interfaces
- Added complete dashboard integration with component switching based on survey feedback
- Fixed critical API key mismatch that was causing feedback submission failures
- Components include clear "PREVIEW MODE" indicators and error handling fallbacks
- Backward compatibility maintained - defaults to existing Similar Jobs functionality

### File List - Created/Modified Files
**New Files:**
- `types/right-panel.ts` - TypeScript interfaces for components
- `components/job-metrics.tsx` - Job metrics display component  
- `components/jobs-from-selected-company.tsx` - Company jobs component
- `lib/mock-data-service.ts` - Mock data generation service
- `components/right-panel/index.ts` - Component export structure

**Modified Files:**
- `components/jobright-dashboard.tsx` - Integrated new components with switching logic
- `lib/feedback-api-client.ts` - Fixed API key configuration
- `.env.local` - Corrected frontend API key configuration

### Change Log
- Fixed feedback API authentication issue (API key mismatch between frontend and backend)

---

## Notes

**Implementation Priority**: This story implements draft/preview versions of the requested components to validate user preferences before full development. The focus is on demonstrating functionality and gathering additional user feedback on the implementation approach.

**Future Enhancements**: Based on user feedback on these draft implementations, future stories will focus on:
- Real data integration for Job Metrics
- Full company profile integration  
- Advanced filtering and search capabilities
- User customization options for displayed metrics