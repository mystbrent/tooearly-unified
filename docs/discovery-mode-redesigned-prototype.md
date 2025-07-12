# Discovery Mode - Redesigned Prototype Layout

## Updated Design Based on Feedback

**Changes Made:**
- Removed sections from header (simplified navigation)
- Removed all gamification elements
- Added onboarding checklist
- Removed turbo elements
- Added side navigation with Jobs, Profile, Settings
- Added filter display above jobs column
- Added sidebar for filter controls
- Added "For You" section
- Redesigned to one job per column with updated job cards

---

## ASCII Prototype Layout

```
+=================================================================================================+
|  TooEarly                                                              [🔔] [👤] [⚙️]        |
+=================================================================================================+
| 📋 ONBOARDING CHECKLIST                                                                        |
| ☐ Complete profile setup  ☐ Upload resume  ☐ Set job preferences  ☐ Complete skills assessment|
+=================================================================================================+
|       |                                    |                                                    |
| SIDE  |            MAIN CONTENT           |                FILTER SIDEBAR                     |
| NAV   |                                    |                                                    |
|       |                                    |                                                    |
| 💼    | 🔍 **ACTIVE FILTERS**              | 🎛️ **FILTER CONTROLS**                           |
| Jobs  | Backend Engineer • Senior • Remote | ┌─────────────────────────────────────────────┐   |
|       | San Francisco • $120K+             | │ 📋 **JOB TYPE**                            │   |
| 👤    |                                    | │ ☑️ Full-time  ☐ Part-time  ☐ Contract     │   |
| Profile| ❌ Clear all filters              | │                                             │   |
|       |                                    | │ 💰 **SALARY RANGE**                        │   |
| ⚙️    | ================================== | │ Min: $120,000  Max: $200,000               │   |
| Settings|                                  | │ [────●─────────────────────────────]       │   |
|       |                                    | │                                             │   |
|       | 🌟 **FOR YOU**                     | │ 📍 **LOCATION**                            │   |
|       | ┌─────────────────────────────────┐ | │ ☑️ Remote  ☑️ San Francisco                │   |
|       | │ 🎯 Perfect match jobs curated   │ | │ ☐ New York  ☐ Austin  ☐ Seattle           │   |
|       | │ for your profile and preferences│ | │                                             │   |
|       | └─────────────────────────────────┘ | │ 🏢 **COMPANY SIZE**                        │   |
|       |                                    | │ ☐ Startup (1-50)  ☑️ Growth (51-500)      │   |
|       | 📊 **JOBS MATCHING YOUR CRITERIA** | │ ☐ Enterprise (500+)                        │   |
|       | Showing 24 of 156 results         | │                                             │   |
|       |                                    | │ 🎓 **EXPERIENCE LEVEL**                    │   |
|       | ┌─────────────────────────────────┐ | │ ☐ Junior  ☑️ Mid-level  ☑️ Senior         │   |
|       | │ 🏢 **STRIPE**                   │ | │ ☐ Staff  ☐ Principal                      │   |
|       | │ Senior Backend Engineer         │ | │                                             │   |
|       | │                                 │ | │ 💻 **TECH STACK**                          │   |
|       | │ 📍 San Francisco, CA (Remote)   │ | │ ☑️ Python  ☑️ Go  ☐ Java                  │   |
|       | │ 💰 $160,000 - $180,000         │ | │ ☑️ React  ☐ Vue  ☑️ AWS                   │   |
|       | │ 🎯 96% Match                    │ | │                                             │   |
|       | │                                 │ | │ [Apply Filters] [Reset All]                │   |
|       | │ ⭐ Key Requirements:             │ | └─────────────────────────────────────────────┘   |
|       | │ • 5+ years Python/Go           │ |                                                    |
|       | │ • Microservices architecture   │ | 📈 **MARKET INSIGHTS**                           |
|       | │ • Payment systems experience   │ | ┌─────────────────────────────────────────────┐   |
|       | │                                 │ | │ • 87 new jobs today                        │   |
|       | │ 📅 Posted 2 days ago           │ | │ • Backend roles ↗️ 15% this week            │   |
|       | │                                 │ | │ • Avg salary increase: 8%                  │   |
|       | │ [🚀 Apply Now] [💾 Save]        │ | │ • Your profile matches 47 new jobs         │   |
|       | └─────────────────────────────────┘ | └─────────────────────────────────────────────┘   |
|       |                                    |                                                    |
|       | ┌─────────────────────────────────┐ | 🔔 **SAVED SEARCHES**                            |
|       | │ 🏢 **AIRBNB**                   │ | ┌─────────────────────────────────────────────┐   |
|       | │ Staff Software Engineer         │ | │ • "Senior Python Remote" (24 new)          │   |
|       | │                                 │ | │ • "Fintech Backend Engineer" (8 new)       │   |
|       | │ 📍 Remote (SF Team)             │ | │ • "AI/ML Startup Roles" (12 new)           │   |
|       | │ 💰 $180,000 - $200,000         │ | └─────────────────────────────────────────────┘   |
|       | │ 🎯 94% Match                    │ |                                                    |
|       | │                                 │ | 💡 **QUICK ACTIONS**                             |
|       | │ ⭐ Key Requirements:             │ | ┌─────────────────────────────────────────────┐   |
|       | │ • 7+ years full-stack          │ | │ [📄 Update Resume]                          │   |
|       | │ • Travel platform experience   │ | │ [🎯 Improve Profile Match]                  │   |
|       | │ • Leadership skills            │ | │ [📧 Set Job Alerts]                         │   |
|       | │                                 │ | │ [📊 View Application Status]                │   |
|       | │ 📅 Posted 1 day ago            │ | └─────────────────────────────────────────────┘   |
|       | │                                 │ |                                                    |
|       | │ [🚀 Apply Now] [💾 Save]        │ |                                                    |
|       | └─────────────────────────────────┘ |                                                    |
|       |                                    |                                                    |
|       | ┌─────────────────────────────────┐ |                                                    |
|       | │ 🏢 **UBER**                     │ |                                                    |
|       | │ Principal Engineer, Payments    │ |                                                    |
|       | │                                 │ |                                                    |
|       | │ 📍 San Francisco, CA           │ |                                                    |
|       | │ 💰 $200,000+                   │ |                                                    |
|       | │ 🎯 92% Match                    │ |                                                    |
|       | │                                 │ |                                                    |
|       | │ ⭐ Key Requirements:             │ |                                                    |
|       | │ • 8+ years backend systems     │ |                                                    |
|       | │ • Distributed systems expert   │ |                                                    |
|       | │ • Team leadership experience   │ |                                                    |
|       | │                                 │ |                                                    |
|       | │ 📅 Posted 4 hours ago          │ |                                                    |
|       | │                                 │ |                                                    |
|       | │ [🚀 Apply Now] [💾 Save]        │ |                                                    |
|       | └─────────────────────────────────┘ |                                                    |
|       |                                    |                                                    |
|       | [Load More Jobs]                   |                                                    |
|       |                                    |                                                    |
+=======|====================================|====================================================+
```

## Key Design Features

### Header Simplification
- Removed complex navigation sections
- Clean header with just essential notifications and user controls
- Prominent onboarding checklist at top

### Navigation Structure
- **Left Sidebar**: Fixed navigation with Jobs, Profile, Settings
- **Main Content**: Job listings with adaptive column layout (1 or 2 columns)
- **Right Sidebar**: Toggleable filter controls and insights panel

### Job Card Design Updates
- **Adaptive layout**: One column when filter sidebar shown, two columns when hidden
- **Enhanced job information** display
- **Clear company branding** with logo placeholder
- **Salary and location** prominently displayed
- **Match percentage** for relevance
- **Key requirements** snippet
- **Posting date** for freshness indication
- **Clear action buttons** (Apply Now, Save)

### Filter System
- **Toggleable filter sidebar**: Show/hide button for optimal screen usage
- **Active filters display** above job listings (always visible)
- **Comprehensive filter controls** when sidebar expanded
- **Quick filter options** grouped by category
- **Market insights** integration
- **Saved searches** for convenience
- **Adaptive layout**: Main content expands to two columns when sidebar hidden

### "For You" Section
- **Personalized job curation** highlight
- **Curated based on profile** and preferences
- **Prominent placement** above job listings

### Removed Elements
- All gamification features (streaks, XP, achievements)
- Turbo/speed elements
- Complex grid layouts
- Progress tracking elements
- Competitive features

---

## Adaptive Layout States

### State 1: Filter Sidebar Visible (Single Column Jobs)

The main ASCII prototype above shows this state - single column job listings with full filter sidebar.

### State 2: Filter Sidebar Hidden (Two Column Jobs)

```
+=================================================================================================+
|  TooEarly                                              [🔔] [👤] [⚙️] [🎛️ Show Filters]      |
+=================================================================================================+
| 📋 ONBOARDING CHECKLIST                                                                        |
| ☐ Complete profile setup  ☐ Upload resume  ☐ Set job preferences  ☐ Complete skills assessment|
+=================================================================================================+
|       |                                                                                         |
| SIDE  |                           EXPANDED MAIN CONTENT                                        |
| NAV   |                                                                                         |
|       |                                                                                         |
| 💼    | 🔍 **ACTIVE FILTERS**                                                                   |
| Jobs  | Backend Engineer • Senior • Remote • San Francisco • $120K+  ❌ Clear all filters     |
|       |                                                                                         |
| 👤    | 🌟 **FOR YOU**                                                                          |
| Profile| ┌─────────────────────────────────────────────────────────────────────────────────────┐ |
|       | │ 🎯 Perfect match jobs curated for your profile and preferences                     │ |
| ⚙️    | └─────────────────────────────────────────────────────────────────────────────────────┘ |
| Settings|                                                                                       |
|       | 📊 **JOBS MATCHING YOUR CRITERIA** - Showing 24 of 156 results                        |
|       |                                                                                         |
|       | ┌─────────────────────────────────┐  ┌─────────────────────────────────┐            |
|       | │ 🏢 **STRIPE**                   │  │ 🏢 **AIRBNB**                   │            |
|       | │ Senior Backend Engineer         │  │ Staff Software Engineer         │            |
|       | │                                 │  │                                 │            |
|       | │ 📍 San Francisco, CA (Remote)   │  │ 📍 Remote (SF Team)             │            |
|       | │ 💰 $160,000 - $180,000         │  │ 💰 $180,000 - $200,000         │            |
|       | │ 🎯 96% Match                    │  │ 🎯 94% Match                    │            |
|       | │                                 │  │                                 │            |
|       | │ ⭐ Key Requirements:             │  │ ⭐ Key Requirements:             │            |
|       | │ • 5+ years Python/Go           │  │ • 7+ years full-stack          │            |
|       | │ • Microservices architecture   │  │ • Travel platform experience   │            |
|       | │ • Payment systems experience   │  │ • Leadership skills            │            |
|       | │                                 │  │                                 │            |
|       | │ 📅 Posted 2 days ago           │  │ 📅 Posted 1 day ago            │            |
|       | │                                 │  │                                 │            |
|       | │ [🚀 Apply Now] [💾 Save]        │  │ [🚀 Apply Now] [💾 Save]        │            |
|       | └─────────────────────────────────┘  └─────────────────────────────────┘            |
|       |                                                                                         |
|       | ┌─────────────────────────────────┐  ┌─────────────────────────────────┐            |
|       | │ 🏢 **UBER**                     │  │ 🏢 **GOOGLE**                   │            |
|       | │ Principal Engineer, Payments    │  │ Senior Software Engineer L5     │            |
|       | │                                 │  │                                 │            |
|       | │ 📍 San Francisco, CA           │  │ 📍 Mountain View, CA            │            |
|       | │ 💰 $200,000+                   │  │ 💰 $170,000 - $190,000         │            |
|       | │ 🎯 92% Match                    │  │ 🎯 91% Match                    │            |
|       | │                                 │  │                                 │            |
|       | │ ⭐ Key Requirements:             │  │ ⭐ Key Requirements:             │            |
|       | │ • 8+ years backend systems     │  │ • 5+ years software development │            |
|       | │ • Distributed systems expert   │  │ • Google infrastructure exp    │            |
|       | │ • Team leadership experience   │  │ • Large scale systems          │            |
|       | │                                 │  │                                 │            |
|       | │ 📅 Posted 4 hours ago          │  │ 📅 Posted 6 hours ago          │            |
|       | │                                 │  │                                 │            |
|       | │ [🚀 Apply Now] [💾 Save]        │  │ [🚀 Apply Now] [💾 Save]        │            |
|       | └─────────────────────────────────┘  └─────────────────────────────────┘            |
|       |                                                                                         |
|       | [Load More Jobs]                                                                        |
|       |                                                                                         |
+=======|=================================================================================+=======+
```

## Key UX Benefits of Toggle Feature

### Enhanced Screen Utilization
- **Maximum job visibility**: Two-column layout shows more opportunities at once
- **Flexible filtering**: Users can quickly access filters when needed
- **Distraction-free browsing**: Hide filters for focused job review
- **Responsive design**: Adapts to user workflow preferences

### User Control & Workflow
- **Quick toggle**: One-click show/hide filter panel
- **Persistent active filters**: Current filters remain visible and clearable
- **Seamless transition**: Smooth layout animation between states
- **Context preservation**: Job positions maintained during toggle

### Accessibility Considerations
- **Clear toggle button**: Labeled "Show/Hide Filters" with icon
- **Keyboard navigation**: Toggle accessible via keyboard shortcuts
- **Screen reader friendly**: State changes announced appropriately
- **Visual feedback**: Clear indication of current layout state

This redesigned layout focuses on clean job discovery with comprehensive filtering while maintaining a user-friendly, professional interface that adapts to user preferences and workflow needs.