# Product Design Document Template

## LLM Instructions
When using this template, guide the user through a comprehensive design process:
1. First gather ALL project context using the gather-context task
2. Create ASCII visualizations for key UI components
3. Define information architecture before visual design
4. Focus on custom, project-specific solutions
5. Include accessibility considerations throughout

## Document Structure

### 1. Project Overview
**Project Name:** [PROJECT_NAME]
**Client/Team:** [CLIENT_TEAM]
**Design Phase:** [Discovery/Concept/Detailed/Implementation]
**Date:** [DATE]
**Designer:** Alex Chen

### 2. Project Context & Requirements

#### Business Context
- **Business Goals:** [List 3-5 key business objectives]
- **Success Metrics:** [Define measurable outcomes]
- **Constraints:** [Technical, timeline, budget constraints]

#### User Context
- **Target Users:** [Primary and secondary user groups]
- **User Needs:** [Core user needs and pain points]
- **Use Cases:** [Primary use cases and scenarios]

#### Technical Context
- **Platform:** [Web/Mobile/Desktop/Cross-platform]
- **Tech Stack:** [Frontend framework, backend, etc.]
- **Integration Points:** [APIs, services, existing systems]

### 3. Information Architecture

#### Site/App Structure
```
[CREATE ASCII DIAGRAM OF SITE STRUCTURE]
Example:
┌─────────────┐
│    Home     │
└──────┬──────┘
       │
┌──────┴──────┬──────────┬────────────┐
│   Products  │ About Us │  Account   │
├─────────────┼──────────┼────────────┤
│ • Category A│ • Team   │ • Profile  │
│ • Category B│ • Mission│ • Settings │
│ • Search    │ • Contact│ • Orders   │
└─────────────┴──────────┴────────────┘
```

#### User Flows
```
[CREATE ASCII FLOWCHART OF KEY USER JOURNEYS]
```

### 4. Design System Foundation

#### Design Principles
1. **[PRINCIPLE_1]:** [Description and application]
2. **[PRINCIPLE_2]:** [Description and application]
3. **[PRINCIPLE_3]:** [Description and application]

#### Visual Language
- **Typography Scale:** [Define type hierarchy]
- **Color Palette:** [Primary, secondary, semantic colors]
- **Spacing System:** [8px grid or custom system]
- **Animation Principles:** [Timing, easing, purpose]

### 5. Custom UI Components

#### Component 1: [COMPONENT_NAME]
**Purpose:** [Why this component exists]
**Usage:** [When and where to use it]

**ASCII Visualization:**
```
[CREATE DETAILED ASCII ART OF COMPONENT]
Example for a custom card component:
┌─────────────────────────────┐
│ ┌───┐  Title Text          │
│ │IMG│  Subtitle here        │
│ └───┘                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━ │
│ Description text goes here  │
│ with multiple lines of      │
│ content as needed.          │
│                             │
│ [Primary CTA] [Secondary]   │
└─────────────────────────────┘
```

**States:** [Default, Hover, Active, Disabled, Loading]
**Variations:** [Size variants, content variants]
**Accessibility:** [ARIA labels, keyboard navigation]

#### Component 2: [COMPONENT_NAME]
[Repeat structure for each custom component]

### 6. Page Layouts

#### [PAGE_NAME] Layout
```
[CREATE ASCII LAYOUT OF FULL PAGE]
Example:
┌─────────────────────────────────────┐
│  [Logo]        [Nav Items]    [CTA] │
├─────────────────────────────────────┤
│                                     │
│    ┌─────────────────────────┐     │
│    │   Hero Section          │     │
│    │   Headline Text         │     │
│    │   [Primary Action]      │     │
│    └─────────────────────────┘     │
│                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐      │
│  │Card 1│ │Card 2│ │Card 3│      │
│  └──────┘ └──────┘ └──────┘      │
│                                     │
└─────────────────────────────────────┘
```

### 7. Interaction Design

#### Micro-interactions
- **[INTERACTION_1]:** [Description and trigger]
- **[INTERACTION_2]:** [Description and trigger]

#### Transitions
- **Page Transitions:** [Type and timing]
- **Component Animations:** [Purpose and implementation]

### 8. Accessibility Checklist
- [ ] Color contrast meets WCAG AA standards
- [ ] All interactive elements are keyboard accessible
- [ ] ARIA labels provided for complex components
- [ ] Focus indicators are clearly visible
- [ ] Text is readable at 200% zoom
- [ ] Error messages are clear and helpful
- [ ] Forms include proper labels and instructions

### 9. Implementation Notes

#### Component Hierarchy
```
[COMPONENT_TREE_STRUCTURE]
```

#### CSS Architecture
- **Methodology:** [BEM/Atomic/CSS-in-JS]
- **Key Classes:** [List reusable classes]

#### Performance Considerations
- **Image Optimization:** [Strategy]
- **Code Splitting:** [Approach]
- **Loading States:** [Implementation]

### 10. Design Decisions Log

| Decision | Rationale | Alternatives Considered |
|----------|-----------|------------------------|
| [DECISION_1] | [WHY] | [OTHER_OPTIONS] |
| [DECISION_2] | [WHY] | [OTHER_OPTIONS] |

### 11. Next Steps
1. [NEXT_STEP_1]
2. [NEXT_STEP_2]
3. [NEXT_STEP_3]

---
*This design document represents the current state of the [PROJECT_NAME] design. Updates will be tracked in version control.*