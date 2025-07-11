# Story 3: Validation Survey Integration - Brownfield Enhancement

## User Story

As a **job seeker using the TooEarly Dashboard**,
I want **to be quickly asked if I like the layout change after it happens**,
So that **I can provide immediate feedback on whether the UI adaptation met my expectations**.

## Story Context

**Existing System Integration:**

- Integrates with: Existing SurveyPrompt component, survey timing system, feedback API
- Technology: React 19, TypeScript, existing survey state management, timing logic
- Follows pattern: Existing survey prompt structure, timed survey triggers, feedback collection
- Touch points: SurveyPrompt component, survey timing logic, feedback API integration

## Acceptance Criteria

**Functional Requirements:**

1. **Validation Trigger**: Exactly 2 seconds after a layout change is applied, a simple validation survey appears asking "Like what you saw?" with Yes/No options
2. **Single Question Format**: Validation survey uses simplified UI with just two large buttons (Yes/No), distinct from main survey styling
3. **Response Collection**: Validation responses are captured and sent to feedback API with layout preference context

**Integration Requirements:**

4. Existing survey timing system continues to work unchanged with current 2s/10s/30s intervals
5. New validation survey follows existing SurveyPrompt component patterns and state management
6. Integration with feedback API maintains current data structure and visitor tracking

**Quality Requirements:**

7. Change is covered by appropriate tests for timing, display, and response collection
8. Documentation updated for new validation survey component and timing logic
9. No regression in existing survey functionality or timing system verified

## Technical Notes

**Integration Approach:**
- Create `ValidationSurveyPrompt` component following existing SurveyPrompt patterns
- Use existing survey timing logic with new 2-second trigger after layout change
- Extend existing survey state management to handle validation responses
- Integrate with existing feedback API using current data structure

**Existing Pattern Reference:**
- Follow existing SurveyPrompt component structure in `components/survey-prompt.tsx`
- Use existing survey timing logic with `setTimeout` patterns
- Maintain existing feedback API integration from current survey implementation
- Follow existing survey state management patterns

**Key Constraints:**
- Must not interfere with existing survey timing (2s/10s/30s intervals)
- Cannot modify existing survey question structure or flow
- Must maintain current survey dismissal and completion logic
- Validation survey must be clearly distinct from main survey visually

## Definition of Done

- [x] Validation survey appears exactly 2 seconds after layout change
- [x] Yes/No response options are clearly presented and functional
- [x] Validation responses are successfully sent to feedback API
- [x] Existing survey timing and functionality works unchanged
- [x] Code follows existing SurveyPrompt component patterns
- [x] Tests cover timing, display, and response collection scenarios
- [x] No interference with existing survey flow or timing system

## Risk and Compatibility Check

**Minimal Risk Assessment:**

- **Primary Risk**: New validation survey could interfere with existing survey timing or create UI conflicts
- **Mitigation**: Use separate component with distinct styling, careful timing coordination
- **Rollback**: Validation survey can be disabled via feature flag or component removal

**Compatibility Verification:**

- [x] No breaking changes to existing survey timing or question flow
- [x] API changes are additive only (new validation response fields)
- [x] UI changes use distinct styling to avoid conflicts with existing survey
- [x] Performance impact is negligible (single setTimeout and API call)

## Implementation Details

### Component Structure

#### ValidationSurveyPrompt Component
```typescript
interface ValidationSurveyPromptProps {
  isVisible: boolean;
  onResponse: (response: 'yes' | 'no') => void;
  onDismiss: () => void;
}

const ValidationSurveyPrompt: React.FC<ValidationSurveyPromptProps> = ({
  isVisible,
  onResponse,
  onDismiss
}) => {
  // Simple modal with Yes/No buttons
  // Distinct styling from main survey
  // Auto-dismiss after 10 seconds
};
```

### Timing Integration

#### Layout Change Trigger
```typescript
// In JobrightDashboard component
const handleLayoutChange = (newLayout: 'single' | 'double') => {
  setLayoutPreference(newLayout);
  
  // Trigger validation survey after 2 seconds
  setTimeout(() => {
    setShowValidationSurvey(true);
  }, 2000);
};
```

### API Integration

#### Feedback API Extension
```typescript
interface ValidationResponse {
  layout_preference: 'single' | 'double';
  validation_response: 'yes' | 'no';
  timestamp: string;
  response_time_ms: number; // Time from layout change to response
}
```

### State Management

#### Survey State Extension
```typescript
const [showValidationSurvey, setShowValidationSurvey] = useState(false);
const [validationStartTime, setValidationStartTime] = useState<number | null>(null);

const handleValidationResponse = async (response: 'yes' | 'no') => {
  const responseTime = validationStartTime ? Date.now() - validationStartTime : 0;
  
  // Send to feedback API
  await submitValidationResponse({
    layout_preference: layoutPreference,
    validation_response: response,
    response_time_ms: responseTime
  });
  
  setShowValidationSurvey(false);
};
```

### Visual Design

#### Validation Survey Styling
- **Position**: Center overlay with backdrop
- **Size**: Compact modal (300px width)
- **Buttons**: Large Yes/No buttons with distinct colors
- **Typography**: Larger, friendlier font than main survey
- **Animation**: Subtle fade-in/out transitions

### Files to Modify
- `components/validation-survey-prompt.tsx` - New validation survey component
- `components/jobright-dashboard.tsx` - Integrate validation survey timing
- `app/api/feedback/route.ts` - Add validation response handling
- `lib/feedback-api-client.ts` - Add validation response API methods

### Testing Requirements
- Unit tests for validation survey component
- Integration tests for timing after layout changes
- API tests for validation response submission
- User interaction tests for Yes/No responses
- Timing accuracy tests (2-second delay)

### Accessibility Considerations
- **Keyboard Navigation**: Tab through Yes/No buttons
- **Screen Reader**: Clear labels and ARIA attributes
- **Focus Management**: Auto-focus on first button when shown
- **Escape Key**: Dismiss survey option

### Analytics Integration
- **Response Rate**: Track validation survey completion
- **Response Time**: Measure time from display to response
- **Response Distribution**: Track Yes/No response ratios
- **Layout Correlation**: Analyze responses by layout preference

### Error Handling
- **API Failure**: Log error but don't block user experience
- **Network Issues**: Retry once, then fail silently
- **Component Errors**: Graceful fallback with error boundary
- **Timing Issues**: Ensure validation survey doesn't conflict with main survey