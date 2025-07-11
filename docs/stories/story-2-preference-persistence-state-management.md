# Story 2: Preference Persistence & State Management - Brownfield Enhancement

## User Story

As a **job seeker using the TooEarly Dashboard**,
I want **my job layout preferences to be remembered across browser sessions**,
So that **I don't have to repeatedly select my preferred layout every time I visit the dashboard**.

## Story Context

**Existing System Integration:**

- Integrates with: Existing feedback API (`/api/feedback`), localStorage system, JobrightDashboard component
- Technology: Next.js API routes, TypeScript, existing feedback API client, React hooks
- Follows pattern: Existing feedback API structure, React hooks for state management
- Touch points: Feedback API client, browser storage, component initialization logic

## Acceptance Criteria

**Functional Requirements:**

1. **Preference Storage**: Layout preferences are saved to both the feedback API (with visitor tracking) and localStorage as backup when user makes a selection
2. **Preference Retrieval**: On dashboard load, system checks for existing preferences and applies them before initial render
3. **Fallback Handling**: If API storage fails, localStorage serves as backup; if both fail, system defaults to 2-column layout

**Integration Requirements:**

4. Existing feedback API continues to work unchanged with backward compatibility
5. New functionality follows existing feedback API client pattern and data structure
6. Integration with JobrightDashboard maintains current initialization flow

**Quality Requirements:**

7. Change is covered by appropriate tests for storage, retrieval, and fallback scenarios
8. Documentation updated for new API fields and preference management hooks
9. No regression in existing feedback API functionality or dashboard initialization verified

## Technical Notes

**Integration Approach:**
- Extend existing feedback API with new `ui_preferences` field
- Create `useLayoutPreferences` hook following existing hook patterns
- Use existing `feedback-api-client.ts` pattern for API communication
- Implement localStorage backup using existing browser storage patterns

**Existing Pattern Reference:**
- Follow existing feedback API structure in `app/api/feedback/route.ts`
- Use existing API client pattern from `lib/feedback-api-client.ts`
- Maintain existing visitor tracking and enrichment in feedback flow
- Follow existing React hooks pattern from `hooks/` directory

**Key Constraints:**
- Must maintain existing feedback API backward compatibility
- Cannot modify existing feedback data structure schema
- Must handle network failures gracefully with localStorage fallback
- Preference loading must not block dashboard initial render

## Definition of Done

- [x] Layout preferences are persistently stored via feedback API and localStorage
- [x] Preferences are automatically applied on dashboard initialization
- [x] Fallback system works when API is unavailable
- [x] Existing feedback API functionality works unchanged
- [x] Code follows existing API client and React hooks patterns
- [x] Tests cover storage, retrieval, and fallback scenarios
- [x] No performance impact on dashboard initialization

## Risk and Compatibility Check

**Minimal Risk Assessment:**

- **Primary Risk**: API extensions could affect existing feedback functionality or dashboard load performance
- **Mitigation**: Additive API changes only, async preference loading with sensible defaults
- **Rollback**: New API fields are optional and can be ignored; localStorage can be cleared

**Compatibility Verification:**

- [x] No breaking changes to existing feedback API endpoints or data structures
- [x] Database changes are additive only (new optional fields)
- [x] Component changes follow existing initialization patterns
- [x] Performance impact is negligible (async loading with defaults)

## Implementation Details

### API Extensions

#### Feedback API Schema Extension
```typescript
interface FeedbackData {
  // ... existing fields
  ui_preferences?: {
    job_layout: 'single' | 'double';
    timestamp: string;
  };
}
```

#### API Client Extension
```typescript
// lib/feedback-api-client.ts
export const saveLayoutPreference = async (
  preference: 'single' | 'double'
): Promise<void> => {
  // Implementation following existing client pattern
};

export const getLayoutPreference = async (): Promise<'single' | 'double' | null> => {
  // Implementation following existing client pattern
};
```

### React Hook Implementation
```typescript
// hooks/use-layout-preferences.ts
export const useLayoutPreferences = () => {
  const [layoutPreference, setLayoutPreference] = useState<'single' | 'double'>('double');
  const [isLoading, setIsLoading] = useState(true);
  
  // Load preferences on mount
  // Save preferences on change
  // Handle localStorage fallback
  
  return { layoutPreference, setLayoutPreference, isLoading };
};
```

### localStorage Integration
```typescript
const LAYOUT_PREFERENCE_KEY = 'tooearly-layout-preference';

const saveToLocalStorage = (preference: 'single' | 'double') => {
  localStorage.setItem(LAYOUT_PREFERENCE_KEY, preference);
};

const loadFromLocalStorage = (): 'single' | 'double' | null => {
  return localStorage.getItem(LAYOUT_PREFERENCE_KEY) as 'single' | 'double' | null;
};
```

### Component Integration
- **JobrightDashboard**: Use `useLayoutPreferences` hook for state management
- **Survey Integration**: Call preference saving when layout is selected
- **Initialization**: Apply preferences before first render with loading state

### Files to Modify
- `app/api/feedback/route.ts` - Add ui_preferences field handling
- `lib/feedback-api-client.ts` - Add preference-specific API methods
- `hooks/use-layout-preferences.ts` - New hook for preference management
- `components/jobright-dashboard.tsx` - Integrate preference hook
- `components/survey-prompt.tsx` - Trigger preference saving

### Testing Requirements
- Unit tests for preference saving and loading
- API integration tests for new endpoints
- localStorage fallback scenario tests
- Component integration tests for preference application
- Error handling tests for network failures

### Error Handling Strategy
1. **API Failure**: Fall back to localStorage
2. **localStorage Failure**: Use default 'double' layout
3. **Loading State**: Show default layout while preferences load
4. **Preference Corruption**: Reset to default and clear storage