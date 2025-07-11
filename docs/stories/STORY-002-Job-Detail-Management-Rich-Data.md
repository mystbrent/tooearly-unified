# STORY-002: Job Detail Management & Rich Data

## Story Overview
**Epic:** Job Tracking Kanban System - Core Product Enhancement
**Story:** Job Detail Management & Rich Data
**Priority:** HIGH
**Estimated Effort:** 10-12 days
**Dependencies:** Story 1 (Core Kanban Board Infrastructure)

## User Story
**As a job seeker,**
**I want to access comprehensive job details with AI-powered insights and rich data management capabilities,**
**So that I can make informed decisions about applications and effectively track all job-related information in one place.**

## Acceptance Criteria

### Primary Functionality
- [ ] **Job Detail Panel**: Tabbed interface with Overview, Insights, Edit, AI Tools, Activities, Notes, and Company tabs
- [ ] **Rich Data Entry**: Complete job information management with CRUD operations
- [ ] **AI-Powered Insights**: Automated job analysis with responsibilities and qualifications breakdown
- [ ] **File Management**: Support for resume versions, cover letters, and document attachments
- [ ] **Activity Timeline**: Comprehensive application status tracking and history
- [ ] **Quick Actions**: Persistent sidebar with shortcuts and productivity tools

### Enhanced User Experience
- [ ] **Contextual Navigation**: Seamless switching between job detail views
- [ ] **Smart Content Organization**: Structured information hierarchy for easy scanning
- [ ] **Action-Oriented Design**: Quick access to common job tracking tasks
- [ ] **Responsive Layout**: Consistent experience across desktop, tablet, and mobile
- [ ] **Data Persistence**: Automatic saving of all user inputs and changes

## UI Prototype - Sticky Figure Mockups

### Desktop Layout - Full Job Detail Panel
```
+====================================================================================+
|  TooEarly Dashboard                                     [Profile] [Settings] [Help] |
+====================================================================================+
| [< Back to Jobs]     [No Job Title] - [Burgess Rawson]           [Move] [Close] [⋮] |
+------------------------------------------------------------------------------------+
| [Insights] [Edit] [AI Tools] [Activities] [Notes] [Company]                        |
+========================================+==========================================+
|                                        |              RIGHT SIDEBAR              |
| AI Powered Summary                     |                                          |
| +----------------+------------------+  | [Shortcuts] [Timeline]                  |
| | Responsibilities | Qualifications |  |                                          |
| | What you'll be   | What they're    |  | APPLICATION MATERIALS                    |
| | doing:           | looking for:    |  | [+ Create Tailored Resume]              |
| |                  |                 |  | [+ Generate Cover Letter]               |
| | • Manage client  | • Bachelor's    |  | [+ Upload Document]                     |
| |   relationships  |   degree req'd  |  |                                          |
| | • Develop sales  | • 3+ years exp  |  | ACTIVITY LOGGING                        |
| |   strategies     | • Strong comm   |  | [+ Log Application]                     |
| | • Lead team      | • Leadership    |  | [+ Log Interview]                       |
| |   meetings       |   skills        |  | [+ Log Offer Received]                  |
| +----------------+------------------+  | [+ Log Follow-up]                       |
|                                        |                                          |
| Original Job Description               | KEYWORDS                                 |
| ┌────────────────────────────────────┐ | ┌──────────────────────────────────────┐ |
| │ About the job                      │ | │ 📋 1 documentation                   │ |
| │ About Us:                          │ | │ 🏢 1 leasing                        │ |
| │ Burgess Rawson is one of...        │ | │ 💼 1 management                     │ |
| │ [Full job description text]        │ | │ ...                                  │ |
| │                                    │ | │ [    Upgrade now!    ]               │ |
| └────────────────────────────────────┘ | └──────────────────────────────────────┘ |
+========================================+==========================================+
```

### Mobile Layout - Responsive Stack
```
+=====================================+
|  ← [No Job Title] - Burgess Rawson  |
|                        [Move] [⋮]   |
+=====================================+
| [Insights] [Edit] [AI Tools] [More] |
+=====================================+
|                                     |
| AI Powered Summary                  |
| ┌─────────────────────────────────┐ |
| │ Responsibilities               │ |
| │ What you'll be doing:          │ |
| │ • Manage client relationships  │ |
| │ • Develop sales strategies     │ |
| │ • Lead team meetings           │ |
| └─────────────────────────────────┘ |
|                                     |
| ┌─────────────────────────────────┐ |
| │ Qualifications                 │ |
| │ What they're looking for:      │ |
| │ • Bachelor's degree required   │ |
| │ • 3+ years experience          │ |
| │ • Strong communication         │ |
| └─────────────────────────────────┘ |
|                                     |
| Original Job Description            |
| ┌─────────────────────────────────┐ |
| │ About the job                  │ |
| │ About Us:                      │ |
| │ Burgess Rawson is one of...    │ |
| │ [Scrollable content]           │ |
| └─────────────────────────────────┘ |
|                                     |
| [📋 Quick Actions]                  |
+=====================================+
```

### Edit Tab Layout
```
+====================================================================================+
| [< Back to Jobs]     [Software Engineer] - [TechCorp Inc.]      [Save] [Close] [⋮] |
+------------------------------------------------------------------------------------+
| [Insights] [Edit] [AI Tools] [Activities] [Notes] [Company]                        |
+========================================+==========================================+
|                                        |              RIGHT SIDEBAR              |
| BASIC INFORMATION                      |                                          |
| ┌────────────────────────────────────┐ | QUICK ACTIONS                           |
| │ Job Title: [Software Engineer    ] │ | [📧 Email Recruiter]                   |
| │ Company:   [TechCorp Inc.        ] │ | [🔗 Copy Job Link]                     |
| │ Location:  [San Francisco, CA   ] │ | [📋 Duplicate Job]                     |
| │ Salary:    [$120k - $150k       ] │ | [🗑️ Archive Job]                       |
| │ Type:      [Full-time ▼]          │ | [📊 View Analytics]                    |
| │ Remote:    [Hybrid ▼]             │ |                                          |
| └────────────────────────────────────┘ | RELATED JOBS                            |
|                                        | ┌──────────────────────────────────────┐ |
| APPLICATION DETAILS                    | │ Senior Software Engineer             │ |
| ┌────────────────────────────────────┐ | │ TechCorp Inc. • $140k-$180k        │ |
| │ Applied: [2024-01-15 ▼]           │ | │ [View Details]                       │ |
| │ Deadline: [2024-01-30 ▼]          │ | ├──────────────────────────────────────┤ |
| │ Source: [LinkedIn ▼]              │ | │ Frontend Developer                   │ |
| │ Contact: [Jane Smith             ] │ | │ TechCorp Inc. • $100k-$130k        │ |
| │ Referral: [John Doe              ] │ | │ [View Details]                       │ |
| └────────────────────────────────────┘ | └──────────────────────────────────────┘ |
|                                        |                                          |
| JOB DESCRIPTION                        | ATTACHMENTS                              |
| ┌────────────────────────────────────┐ | ┌──────────────────────────────────────┐ |
| │ [Rich Text Editor]                 │ | │ 📄 Resume_TechCorp_v2.pdf           │ |
| │ • Requirements                     │ | │ 📄 CoverLetter_TechCorp.pdf         │ |
| │ • Responsibilities                 │ | │ 🔗 Portfolio_Link.url               │ |
| │ • Benefits                         │ | │ [+ Upload Document]                  │ |
| │ [Insert/Edit/Format tools]         │ | └──────────────────────────────────────┘ |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| TRACKING INFO                          |                                          |
| ┌────────────────────────────────────┐ |                                          |
| │ Priority: [High ▼]                 │ |                                          |
| │ Tags: [React] [JavaScript] [+]     │ |                                          |
| │ Follow-up: [2024-01-22 ▼]         │ |                                          |
| │ Private Notes:                     │ |                                          |
| │ [Text area for notes]              │ |                                          |
| └────────────────────────────────────┘ |                                          |
+========================================+==========================================+
```

### AI Tools Tab Layout
```
+====================================================================================+
| [< Back to Jobs]     [Software Engineer] - [TechCorp Inc.]      [Save] [Close] [⋮] |
+------------------------------------------------------------------------------------+
| [Insights] [Edit] [AI Tools] [Activities] [Notes] [Company]                        |
+========================================+==========================================+
|                                        |              RIGHT SIDEBAR              |
| ANALYSIS TOOLS                         |                                          |
| ┌────────────────────────────────────┐ | AI USAGE STATS                         |
| │ 🎯 Skills Gap Analysis             │ | ┌──────────────────────────────────────┐ |
| │ [█████████░] 85% Match             │ | │ This Month:                          │ |
| │ [Analyze Skills]                   │ | │ • 15 analyses completed             │ |
| │                                    │ | │ • 8 resumes tailored               │ |
| │ Missing Skills:                    │ | │ • 12 cover letters generated       │ |
| │ • Docker, Kubernetes               │ | │ • 🔥 5 day streak!                  │ |
| │ • GraphQL experience               │ | │                                      │ |
| │ [+ Add to Learning Plan]           │ | │ [📊 View Full Report]               │ |
| └────────────────────────────────────┘ | └──────────────────────────────────────┘ |
|                                        |                                          |
| ┌────────────────────────────────────┐ | RECENT ACTIVITY                         |
| │ 💰 Salary Benchmarking             │ | ┌──────────────────────────────────────┐ |
| │ Market Rate: $120k - $160k         │ | │ ⚡ Generated resume for TechCorp    │ |
| │ Your Target: $135k                 │ | │ 🔍 Analyzed skills gap              │ |
| │ [Update Salary Expectations]       │ | │ 📧 Created cover letter             │ |
| │                                    │ | │ 📊 Researched company culture       │ |
| │ Confidence: ████████░░ 80%         │ | │ [View All Activity]                  │ |
| │ Based on 47 similar roles          │ | └──────────────────────────────────────┘ |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| ┌────────────────────────────────────┐ |                                          |
| │ 🏢 Company Research                │ |                                          |
| │ [Generate Company Report]          │ |                                          |
| │                                    │ |                                          |
| │ Recent Insights:                   │ |                                          |
| │ • 25% revenue growth (2023)        │ |                                          |
| │ • 150+ engineering team            │ |                                          |
| │ • Series C funding ($50M)          │ |                                          |
| │ [View Full Report]                 │ |                                          |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| GENERATION TOOLS                       |                                          |
| ┌────────────────────────────────────┐ |                                          |
| │ 📄 Resume Tailoring                │ |                                          |
| │ [Generate Tailored Resume]         │ |                                          |
| │ ✅ Optimized for ATS               │ |                                          |
| │ ✅ Matched 8/10 key requirements   │ |                                          |
| │ ✅ Highlighted relevant experience │ |                                          |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| ┌────────────────────────────────────┐ |                                          |
| │ 💌 Cover Letter Generation         │ |                                          |
| │ [Generate Cover Letter]            │ |                                          |
| │ ✅ Personalized for company        │ |                                          |
| │ ✅ Addresses key requirements      │ |                                          |
| │ ✅ Professional tone               │ |                                          |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| ┌────────────────────────────────────┐ |                                          |
| │ 🎤 Interview Preparation           │ |                                          |
| │ [Generate Practice Questions]      │ |                                          |
| │ • 15 technical questions           │ |                                          |
| │ • 8 behavioral questions           │ |                                          |
| │ • Company-specific scenarios       │ |                                          |
| │ [Start Practice Session]           │ |                                          |
| └────────────────────────────────────┘ |                                          |
+========================================+==========================================+
```

### Activities Tab Layout
```
+====================================================================================+
| [< Back to Jobs]     [Software Engineer] - [TechCorp Inc.]      [Save] [Close] [⋮] |
+------------------------------------------------------------------------------------+
| [Insights] [Edit] [AI Tools] [Activities] [Notes] [Company]                        |
+========================================+==========================================+
|                                        |              RIGHT SIDEBAR              |
| ACTIVITY TIMELINE                      |                                          |
| [+ Log New Activity]                   | QUICK LOG                               |
| ┌────────────────────────────────────┐ | ┌──────────────────────────────────────┐ |
| │ 📧 Jan 15, 2024 - 2:30 PM          │ | │ [+ Application Sent]                 │ |
| │ Application Submitted               │ | │ [+ Interview Scheduled]              │ |
| │ via LinkedIn                        │ | │ [+ Follow-up Sent]                   │ |
| │ Resume: TechCorp_Resume_v2.pdf      │ | │ [+ Offer Received]                   │ |
| │ Cover Letter: Custom letter         │ | │ [+ Rejection Received]               │ |
| │ [Edit] [Delete]                     │ | │ [+ Other Activity]                   │ |
| └────────────────────────────────────┘ | └──────────────────────────────────────┘ |
|                                        |                                          |
| ┌────────────────────────────────────┐ | STATISTICS                              |
| │ 📅 Jan 18, 2024 - 10:00 AM         │ | ┌──────────────────────────────────────┐ |
| │ Interview Scheduled                 │ | │ Days since application: 8            │ |
| │ Technical Interview (1st Round)     │ | │ Activities logged: 4                 │ |
| │ Interviewer: Sarah Johnson          │ | │ Documents uploaded: 2                │ |
| │ Duration: 60 minutes                │ | │ Follow-ups sent: 1                   │ |
| │ Meeting Link: [zoom.us/j/123...]    │ | │ Next action: Interview prep          │ |
| │ [Edit] [Delete] [Add to Calendar]   │ | └──────────────────────────────────────┘ |
| └────────────────────────────────────┘ |                                          |
|                                        | REMINDERS                               |
| ┌────────────────────────────────────┐ | ┌──────────────────────────────────────┐ |
| │ 📝 Jan 20, 2024 - 3:45 PM          │ | │ 🔔 Interview tomorrow 10 AM          │ |
| │ Follow-up Email Sent                │ | │ 📧 Send thank you note (overdue)    │ |
| │ Thank you note after interview      │ | │ 📅 Follow up in 3 days              │ |
| │ Personalized message                │ | │ [Manage All Reminders]               │ |
| │ [Edit] [Delete]                     │ | └──────────────────────────────────────┘ |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| ┌────────────────────────────────────┐ |                                          |
| │ ⏰ Jan 22, 2024 - 9:15 AM           │ |                                          |
| │ Reminder: Follow-up Due             │ |                                          |
| │ It's been 1 week since interview   │ |                                          |
| │ [Mark as Done] [Snooze]             │ |                                          |
| └────────────────────────────────────┘ |                                          |
|                                        |                                          |
| [Load More Activities]                 |                                          |
+========================================+==========================================+
```

### Mobile Activity Logging Modal
```
+=====================================+
|  Log New Activity            [✕]    |
+=====================================+
| Activity Type                       |
| ┌─────────────────────────────────┐ |
| │ 📧 Application Sent       [✓]  │ |
| │ 📞 Phone Screen                 │ |
| │ 🎤 Interview                    │ |
| │ 📝 Follow-up                    │ |
| │ 📧 Offer Received               │ |
| │ ❌ Rejection                    │ |
| └─────────────────────────────────┘ |
|                                     |
| Date & Time                         |
| [Jan 15, 2024] [2:30 PM]           |
|                                     |
| Details                             |
| ┌─────────────────────────────────┐ |
| │ Applied via LinkedIn with       │ |
| │ tailored resume and cover       │ |
| │ letter. Used referral from      │ |
| │ John Smith in engineering.      │ |
| │                                 │ |
| └─────────────────────────────────┘ |
|                                     |
| Attachments                         |
| [📄 Resume_v2.pdf] [✕]             |
| [📄 Cover_Letter.pdf] [✕]          |
| [+ Add Document]                    |
|                                     |
| [Cancel]              [Save Activity] |
+=====================================+
```

## Detailed Requirements

### 1. Job Detail Panel Architecture

#### Core Layout Structure
```typescript
interface JobDetailLayout {
  header: {
    jobTitle: string;
    company: string;
    primaryActions: ['Move', 'Close'];
    secondaryActions: ['Duplicate', 'Archive', 'Share'];
  };
  navigationTabs: [
    'Insights',
    'Edit', 
    'AI Tools',
    'Activities',
    'Notes',
    'Company'
  ];
  mainContent: {
    activeTab: string;
    content: React.ReactNode;
  };
  rightSidebar: {
    shortcuts: ['Timeline', 'Quick Actions'];
    applicationMaterials: ActionButton[];
    activityLogging: ActionButton[];
    keywordsBox: KeywordData;
  };
}
```

#### Tab Content Specifications

**Insights Tab (Primary Focus):**
```typescript
interface InsightsTabContent {
  aiPoweredSummary: {
    responsibilities: {
      title: "Responsibilities - What you'll be doing";
      content: string[];
      structured: boolean;
    };
    qualifications: {
      title: "Qualifications - What they're looking for";
      content: string[];
      structured: boolean;
    };
  };
  originalJobDescription: {
    title: "Original Job Description";
    fullText: string;
    formatted: boolean;
  };
  matchAnalysis?: {
    overallScore: number;
    strengthsAlignment: string[];
    gapsIdentified: string[];
    recommendations: string[];
  };
}
```

**Edit Tab:**
```typescript
interface EditTabContent {
  basicInfo: {
    jobTitle: string;
    company: string;
    location: string;
    salaryRange?: string;
    employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
    workArrangement: 'Remote' | 'On-site' | 'Hybrid';
  };
  applicationDetails: {
    applicationDate?: Date;
    applicationDeadline?: Date;
    applicationUrl?: string;
    contactPerson?: string;
    referralSource?: string;
  };
  jobDescription: {
    originalText: string;
    customNotes?: string;
    requirements: string[];
    benefits: string[];
  };
  trackingInfo: {
    priority: 'High' | 'Medium' | 'Low';
    tags: string[];
    privateNotes: string;
    followUpDate?: Date;
  };
}
```

**AI Tools Tab:**
```typescript
interface AIToolsTabContent {
  analysisTools: {
    skillsGapAnalysis: {
      enabled: boolean;
      results?: SkillGapResult[];
    };
    salaryBenchmarking: {
      enabled: boolean;
      marketData?: SalaryData;
    };
    companyResearch: {
      enabled: boolean;
      insights?: CompanyInsights;
    };
  };
  generativeTools: {
    resumeTailoring: {
      enabled: boolean;
      suggestions?: string[];
    };
    coverLetterGeneration: {
      enabled: boolean;
      templates?: CoverLetterTemplate[];
    };
    interviewPreparation: {
      enabled: boolean;
      questions?: InterviewQuestion[];
    };
  };
}
```

### 2. Right Sidebar Component Architecture

#### Application Materials Section
```typescript
interface ApplicationMaterialsActions {
  createTailoredResume: {
    label: "+ Create Tailored Resume";
    action: () => void;
    icon: 'document';
    premium: boolean;
  };
  generateCoverLetter: {
    label: "+ Generate Cover Letter";
    action: () => void;
    icon: 'document-text';
    premium: boolean;
  };
  uploadDocument: {
    label: "+ Upload Document";
    action: () => void;
    icon: 'upload';
    premium: false;
  };
}
```

#### Activity Logging System
```typescript
interface ActivityLoggingActions {
  logApplication: {
    label: "+ Log Application";
    action: () => void;
    icon: 'paper-airplane';
    fields: ['applicationDate', 'method', 'notes'];
  };
  logInterview: {
    label: "+ Log Interview";
    action: () => void;
    icon: 'calendar';
    fields: ['interviewDate', 'type', 'interviewer', 'notes'];
  };
  logOfferReceived: {
    label: "+ Log Offer Received";
    action: () => void;
    icon: 'check-circle';
    fields: ['offerDate', 'salary', 'benefits', 'deadline'];
  };
  logRejection: {
    label: "+ Log Rejection";
    action: () => void;
    icon: 'x-circle';
    fields: ['rejectionDate', 'reason', 'feedback'];
  };
  logFollowUp: {
    label: "+ Log Follow-up";
    action: () => void;
    icon: 'arrow-right';
    fields: ['followUpDate', 'method', 'response'];
  };
}
```

#### Keywords Box Implementation
```typescript
interface KeywordsBoxComponent {
  title: "Keywords";
  keywords: {
    id: string;
    term: string;
    frequency: number;
    category: 'skill' | 'tool' | 'qualification' | 'responsibility';
    matchesUserProfile: boolean;
  }[];
  displayLimit: {
    free: 3;
    premium: 'unlimited';
  };
  upgradePrompt: {
    visible: boolean;
    message: "Upgrade now to unlock all keywords!";
    action: () => void;
  };
}
```

### 3. AI-Powered Insights Implementation

#### Job Analysis Engine
```typescript
interface JobAnalysisEngine {
  parseJobDescription: (text: string) => {
    responsibilities: string[];
    qualifications: string[];
    requirements: string[];
    benefits: string[];
    keywords: Keyword[];
  };
  
  generateInsights: (jobData: JobData, userProfile: UserProfile) => {
    matchScore: number;
    strengthsAlignment: string[];
    skillGaps: string[];
    recommendations: string[];
    salaryInsights?: SalaryInsights;
  };
  
  extractKeywords: (text: string) => {
    keywords: Keyword[];
    categorizedKeywords: {
      technical: Keyword[];
      soft: Keyword[];
      industry: Keyword[];
    };
  };
}
```

#### Insights Display Components
```typescript
// Two-column AI Summary Layout
const AIInsightsSummary = ({ insights }: { insights: JobInsights }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          Responsibilities - What you'll be doing
        </h3>
        <ul className="space-y-2">
          {insights.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span className="text-blue-800">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-4">
          Qualifications - What they're looking for
        </h3>
        <ul className="space-y-2">
          {insights.qualifications.map((qualification, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span className="text-green-800">{qualification}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
```

### 4. File Management & Attachments

#### Document Management System
```typescript
interface DocumentManagementSystem {
  supportedFileTypes: [
    'pdf', 'doc', 'docx', 'txt', 'rtf'
  ];
  uploadHandlers: {
    resume: (file: File) => Promise<ResumeDocument>;
    coverLetter: (file: File) => Promise<CoverLetterDocument>;
    other: (file: File) => Promise<GenericDocument>;
  };
  versionControl: {
    trackVersions: boolean;
    maxVersions: 5;
    autoVersioning: boolean;
  };
  cloudStorage: {
    provider: 'AWS S3' | 'Google Cloud' | 'Azure';
    encryption: boolean;
    backup: boolean;
  };
}

interface JobDocument {
  id: string;
  jobId: string;
  type: 'resume' | 'cover_letter' | 'portfolio' | 'other';
  filename: string;
  originalName: string;
  fileSize: number;
  mimeType: string;
  uploadDate: Date;
  versions: DocumentVersion[];
  tags: string[];
  isActive: boolean;
  metadata: {
    tailoredForJob: boolean;
    aiGenerated: boolean;
    userNotes?: string;
  };
}
```

### 5. Activity Timeline & Status Tracking

#### Activity Timeline Component
```typescript
interface ActivityTimelineEntry {
  id: string;
  jobId: string;
  type: 'application' | 'interview' | 'offer' | 'rejection' | 'follow_up' | 'note';
  timestamp: Date;
  title: string;
  description?: string;
  metadata: {
    interviewType?: 'phone' | 'video' | 'in_person';
    interviewers?: string[];
    salary?: number;
    documents?: string[];
  };
  userGenerated: boolean;
  autoGenerated: boolean;
}

const ActivityTimeline = ({ activities }: { activities: ActivityTimelineEntry[] }) => {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={activity.id} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <ActivityIcon type={activity.type} className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-900">{activity.title}</h4>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(activity.timestamp)} ago
              </span>
            </div>
            {activity.description && (
              <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
```

### 6. Technical Implementation Details

#### Component Structure
```typescript
// Main Job Detail Component
components/
├── job-detail/
│   ├── JobDetailPanel.tsx          // Main container component
│   ├── JobDetailHeader.tsx         // Header with title, company, actions
│   ├── JobDetailTabs.tsx           // Tab navigation component
│   ├── JobDetailSidebar.tsx        // Right sidebar with actions
│   └── tabs/
│       ├── InsightsTab.tsx         // AI-powered insights view
│       ├── EditTab.tsx             // Job information editing
│       ├── AIToolsTab.tsx          // AI analysis and generation tools
│       ├── ActivitiesTab.tsx       // Activity timeline
│       ├── NotesTab.tsx            // User notes and observations
│       └── CompanyTab.tsx          // Company information
├── job-actions/
│   ├── ApplicationMaterials.tsx    // Document generation actions
│   ├── ActivityLogger.tsx          // Activity logging interface
│   ├── KeywordsBox.tsx            // Keywords display with upgrade prompt
│   └── QuickActions.tsx           // Shortcut action buttons
└── job-insights/
    ├── AIInsightsSummary.tsx       // Two-column insights display
    ├── MatchAnalysis.tsx           // Job-profile matching
    ├── SkillGapAnalysis.tsx        // Skills analysis
    └── SalaryBenchmarking.tsx      // Salary insights
```

#### Data Flow Architecture
```typescript
// Job Detail Data Flow
interface JobDetailDataFlow {
  props: {
    jobId: string;
    initialTab?: string;
    onClose: () => void;
    onJobUpdate: (job: JobData) => void;
  };
  
  state: {
    activeTab: string;
    jobData: JobData;
    insights: JobInsights;
    activities: ActivityTimelineEntry[];
    documents: JobDocument[];
    isLoading: boolean;
    isDirty: boolean;
  };
  
  actions: {
    loadJobData: (jobId: string) => Promise<JobData>;
    saveJobData: (data: Partial<JobData>) => Promise<void>;
    generateInsights: (jobData: JobData) => Promise<JobInsights>;
    logActivity: (activity: ActivityData) => Promise<void>;
    uploadDocument: (file: File, type: string) => Promise<JobDocument>;
  };
}
```

### 7. Mobile-First Responsive Design

#### Mobile Layout Adaptations
```scss
// Mobile-first responsive breakpoints for job detail
.job-detail-panel {
  // Mobile (320px+): Full screen overlay
  @apply fixed inset-0 bg-white z-50 overflow-auto;
  
  .job-detail-header {
    @apply sticky top-0 bg-white border-b px-4 py-3;
    
    .job-title {
      @apply text-lg font-semibold truncate;
    }
    
    .actions {
      @apply flex gap-2;
    }
  }
  
  .job-detail-tabs {
    @apply flex overflow-x-auto px-4 bg-gray-50;
    
    .tab-button {
      @apply whitespace-nowrap px-3 py-2 text-sm;
    }
  }
  
  .job-detail-content {
    @apply p-4;
    
    // Stack layout on mobile
    .insights-summary {
      @apply grid grid-cols-1 gap-4;
    }
  }
  
  // Hide sidebar on mobile, show as modal
  .job-detail-sidebar {
    @apply hidden;
  }
  
  // Tablet (768px+): Sidebar becomes bottom sheet
  @screen md {
    .job-detail-sidebar {
      @apply fixed bottom-0 left-0 right-0 bg-white border-t p-4;
      @apply transform transition-transform duration-300;
      
      &.collapsed {
        @apply translate-y-full;
      }
    }
  }
  
  // Desktop (1024px+): Full layout
  @screen lg {
    @apply flex max-w-6xl mx-auto mt-8 rounded-lg shadow-lg;
    
    .job-detail-main {
      @apply flex-1 min-w-0;
    }
    
    .job-detail-sidebar {
      @apply relative w-80 border-l bg-gray-50;
      @apply transform-none;
    }
  }
}
```

### 8. Performance Optimization

#### Lazy Loading & Code Splitting
```typescript
// Dynamic imports for tab content
const InsightsTab = dynamic(() => import('./tabs/InsightsTab'), {
  loading: () => <TabLoadingSkeleton />,
  ssr: false
});

const AIToolsTab = dynamic(() => import('./tabs/AIToolsTab'), {
  loading: () => <TabLoadingSkeleton />,
  ssr: false
});

// Optimize heavy AI operations
const useJobInsights = (jobData: JobData) => {
  const [insights, setInsights] = useState<JobInsights | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const generateInsights = useCallback(async () => {
    setIsLoading(true);
    try {
      // Debounced API call
      const result = await debounce(
        () => aiService.generateInsights(jobData),
        500
      );
      setInsights(result);
    } catch (error) {
      console.error('Failed to generate insights:', error);
    } finally {
      setIsLoading(false);
    }
  }, [jobData]);
  
  return { insights, isLoading, generateInsights };
};
```

### 9. Accessibility & User Experience

#### Keyboard Navigation
```typescript
// Keyboard shortcuts for job detail panel
const useJobDetailKeyboard = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 's':
            e.preventDefault();
            saveJobData();
            break;
          case 'w':
            e.preventDefault();
            closeJobDetail();
            break;
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
            e.preventDefault();
            switchTab(parseInt(e.key) - 1);
            break;
        }
      }
      
      if (e.key === 'Escape') {
        closeJobDetail();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};
```

#### Screen Reader Support
```typescript
// Accessibility attributes for job detail components
<div 
  role="dialog" 
  aria-labelledby="job-detail-title"
  aria-describedby="job-detail-description"
  className="job-detail-panel"
>
  <header className="job-detail-header">
    <h1 id="job-detail-title" className="job-title">
      {jobData.title} - {jobData.company}
    </h1>
    <div className="actions" role="group" aria-label="Job actions">
      <button aria-label="Move job to different stage">Move</button>
      <button aria-label="Close job detail panel">Close</button>
    </div>
  </header>
  
  <nav className="job-detail-tabs" role="tablist">
    {tabs.map((tab, index) => (
      <button
        key={tab.id}
        role="tab"
        aria-selected={activeTab === tab.id}
        aria-controls={`tabpanel-${tab.id}`}
        id={`tab-${tab.id}`}
      >
        {tab.label}
      </button>
    ))}
  </nav>
  
  <main 
    className="job-detail-content"
    role="tabpanel"
    aria-labelledby={`tab-${activeTab}`}
    id={`tabpanel-${activeTab}`}
  >
    {/* Tab content */}
  </main>
</div>
```

## Testing Strategy

### Unit Tests
- [ ] Job detail panel component rendering
- [ ] Tab navigation functionality
- [ ] AI insights generation
- [ ] File upload and management
- [ ] Activity logging system
- [ ] Keywords extraction and display

### Integration Tests
- [ ] Full job detail workflow
- [ ] Cross-tab data persistence
- [ ] Sidebar action integration
- [ ] Mobile responsive behavior
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

### User Experience Tests
- [ ] Job detail panel usability testing
- [ ] AI insights accuracy validation
- [ ] File management workflow testing
- [ ] Mobile interaction testing
- [ ] Performance testing with large datasets

## Success Metrics

### User Engagement
- **Job Detail Usage**: 90% of users access job details within first session
- **Tab Utilization**: 70% of users explore at least 3 different tabs
- **AI Insights Engagement**: 85% of users interact with AI-generated insights
- **Document Management**: 60% of users upload or generate documents

### Productivity Improvements
- **Time to Complete Profile**: 50% reduction in time to fully document a job
- **Activity Logging Frequency**: 3x increase in status updates logged
- **Information Findability**: 80% improvement in locating job information

### Feature Adoption
- **Keywords Box Interaction**: 75% of users interact with keywords display
- **Quick Actions Usage**: 90% of users use sidebar quick actions
- **AI Tools Adoption**: 40% of users try AI-powered tools

## Implementation Plan

### Phase 1: Core Infrastructure (Days 1-4)
- [ ] Build job detail panel foundation
- [ ] Implement tab navigation system
- [ ] Create basic Insights tab with AI summary
- [ ] Build responsive layout structure

### Phase 2: Rich Data Management (Days 5-8)
- [ ] Implement Edit tab with comprehensive form
- [ ] Add file upload and document management
- [ ] Build activity logging system
- [ ] Create keywords extraction and display

### Phase 3: AI Integration (Days 9-10)
- [ ] Implement AI Tools tab
- [ ] Add advanced insights generation
- [ ] Build skill gap analysis
- [ ] Create salary benchmarking

### Phase 4: Polish & Testing (Days 11-12)
- [ ] Mobile optimization and testing
- [ ] Accessibility compliance validation
- [ ] Performance optimization
- [ ] User acceptance testing

## Definition of Done

### Technical Requirements
- [ ] All acceptance criteria met
- [ ] Unit test coverage >90%
- [ ] Integration tests passing
- [ ] Performance benchmarks met (<300ms load time)
- [ ] Cross-browser compatibility verified
- [ ] Mobile responsiveness confirmed
- [ ] Accessibility compliance validated (WCAG 2.1 AA)

### Business Requirements
- [ ] User acceptance testing completed
- [ ] AI insights accuracy validated
- [ ] File management security verified
- [ ] Premium feature gating implemented
- [ ] Analytics tracking implemented
- [ ] Documentation updated

## Risk Mitigation

### Technical Risks
- **AI insights accuracy**: Implement user feedback system and continuous model improvement
- **File upload security**: Comprehensive file validation and virus scanning
- **Performance with large datasets**: Implement pagination and lazy loading
- **Mobile complexity**: Progressive enhancement approach with core functionality first

### User Experience Risks
- **Information overload**: Progressive disclosure and smart defaults
- **Feature discoverability**: Clear visual hierarchy and onboarding tooltips
- **AI trust**: Transparent AI confidence scores and manual override options

### Business Risks
- **Premium conversion**: Thoughtful freemium balance with clear value proposition
- **User adoption**: Gradual rollout with feature flags and user feedback loops
- **Data privacy**: Comprehensive privacy compliance and transparent data handling

---

This story establishes a comprehensive job detail management system that transforms basic job tracking into an intelligent, data-rich experience. The implementation combines AI-powered insights with intuitive user interfaces to create a professional-grade job management tool that serves both casual job seekers and power users effectively.