# Enhanced Layout with Job Details Drawer - Updated ASCII Design Prototype

## Overview
This design prototype integrates the enhanced headerless layout with streamlined JobRight cards, featuring a comprehensive Job Details Drawer (35% screen width) and improved Filters Sidebar with better UX placement of filter counts.

## Key Design Improvements

### 1. **Job Details Drawer (35% Screen Width)**
- **Fixed width**: 35% of screen for optimal content viewing
- **Comprehensive job information**: Company details, requirements, benefits, application process
- **Enhanced information architecture**: Structured sections with clear hierarchy
- **Responsive design**: Adapts to different screen sizes while maintaining usability

### 2. **Improved Filters Sidebar**
- **Relocated filter count**: Moved from bottom overlay to top header area
- **Better visual hierarchy**: Clear separation between filter categories
- **Enhanced UX**: Reduced cognitive load with better information placement

### 3. **Streamlined Job Cards Integration**
- **Compact design**: Based on streamlined card specifications
- **Multi-currency support**: Automated currency detection by location
- **Enhanced save functionality**: Animated save states with card dismissal

---

## Layout Structure

### Desktop Layout - Main View with Job Details Drawer
```
┌───────────────┬─────────────────────────────────────┬─────────────────────────────────────────┐
│ [🔵] TooEarly │ 🔍 Search jobs, companies... [🔽]  │ ■ Job Details Drawer                    │
│      [UK]     │                                     │                                         │
│               │ ┌─ Filters ──────────────────────── │ ┌─────────────────────────────────────┐ │
│ ┌───────────┐ │ │ 📊 94 results  [Clear All]       │ │ 🏢 [LOGO] DIGITAL TURBINE         │ │
│ │👤 Profile │ │ │ Location: London ✕ Remote ✕      │ │                                     │ │
│ │  Settings │ │ │ Salary: £60K+ ✕ Experience: 3+ ✕ │ │ Senior Backend Engineer             │ │
│ └───────────┘ │ └─────────────────────────────────── │ │ 📍 San Francisco • 🏢 Hybrid       │ │
│               │                                     │ │ 💰 $90-110K • ⏰ Full-time         │ │
│ 📋 Jobs    94 │ Jobs Matching Your Criteria         │ │                                     │ │
│               │ Showing 15 of 94 results  [Sort ▼] │ ├─ Company Overview ─────────────────┤ │
│ 🔍 Search     │                                     │ │ Digital Turbine is a leading mobile │ │
│   Results  12 │ ┌─────────────────────────────────┐ │ │ platform that helps advertisers    │ │
│               │ │ 🏢 [LOGO] DIGITAL TURBINE  7hrs │ │ │ connect with users globally.        │ │
│ 💾 Saved Jobs │ │ Senior Backend Engineer          │ │ │                                     │ │
│            8  │ │ 📍 San Francisco • 🏢 Hybrid    │ │ ├─ Role Requirements ────────────────┤ │
│               │ │ 💰 $90-110K • ⏰ Full-time      │ │ │ • 5+ years backend development     │ │
│ ⚙️ Settings   │ │ 💙 Save  📤 Share  ❌ Pass  [▶] │ │ │ • Python, Go, or Java experience   │ │
│               │ ├─────────────────────────────────┤ │ │ • Microservices architecture       │ │
│ ❓ Help       │ │ 🏢 [LOGO] SPOTIFY          3hrs │ │ │ • AWS/GCP cloud platforms          │ │
│               │ │ Senior Full Stack Engineer       │ │ │ • Docker & Kubernetes              │ │
│ v1.0.0     UK │ │ 📍 London • 🏢 Remote           │ │ │                                     │ │
└───────────────┴─│ 💰 €75-95K • ⏰ Full-time       │ │ ├─ Benefits & Perks ─────────────────┤ │
                  │ 💙 Save  📤 Share  ❌ Pass  [▶] │ │ │ • Health, dental, vision insurance  │ │
                  ├─────────────────────────────────┤ │ │ • 401(k) with company matching     │ │
                  │ 🏢 [LOGO] SHOPIFY          1day │ │ │ • Flexible working arrangements    │ │
                  │ Staff Software Engineer          │ │ │ • $3,000 learning & development    │ │
                  │ 📍 Toronto • 🏢 Hybrid         │ │ │ • Stock option program             │ │
                  │ 💰 CAD $140-170K • ⏰ Full-time │ │ │                                     │ │
                  │ 💙 Save  📤 Share  ❌ Pass  [▶] │ │ ├─ Application Process ──────────────┤ │
                  └─────────────────────────────────┘ │ │ 1. Submit application & portfolio   │ │
                                                      │ │ 2. Phone screen (30 mins)          │ │
                                                      │ │ 3. Technical interview (90 mins)   │ │
                                                      │ │ 4. Team interview (60 mins)        │ │
                                                      │ │ 5. Final interview with director   │ │
                                                      │ │                                     │ │
                                                      │ │ ┌─ Actions ─────────────────────┐   │ │
                                                      │ │ │ [APPLY NOW] [💾 Save]  [❌]   │   │ │
                                                      │ │ └───────────────────────────────┘   │ │
                                                      │ └─────────────────────────────────────┘ │
                                                      └─────────────────────────────────────────┘
```

### Filters Sidebar - Enhanced Design
```
┌───────────────┬─────────────────────────────────────┬─────────────────────────────────────────┐
│ [🔵] TooEarly │ 🔍 Search jobs, companies... [🔽]  │ ■ Filters & Search Options              │
│      [UK]     │                                     │                                         │
│               │ ┌─ Active Filters ──────────────────│ ┌─────────────────────────────────────┐ │
│ ┌───────────┐ │ │ 📊 94 results found              │ │ 🔍 Filter Jobs                     │ │
│ │👤 Profile │ │ │ Backend Eng ✕ Senior ✕ Remote ✕ │ │                                     │ │
│ │  Settings │ │ │ London ✕ £60K+ ✕ [Clear All]     │ │ ├─ Location ─────────────────────────┤ │
│ └───────────┘ │ └─────────────────────────────────── │ │ □ London (45)        □ Remote (28) │ │
│               │                                     │ │ □ Manchester (12)    □ Edinburgh (8)│ │
│ 📋 Jobs    94 │ Jobs Matching Your Criteria         │ │ □ Birmingham (6)     □ Bristol (4)  │ │
│               │ Showing 15 of 94 results  [Sort ▼] │ │                                     │ │
│ 🔍 Search     │                                     │ │ ├─ Salary Range ────────────────────┤ │
│   Results  12 │ ┌─────────────────────────────────┐ │ │ □ £40-60K (15)      □ £60-80K (32) │ │
│               │ │ 🏢 [LOGO] DIGITAL TURBINE  7hrs │ │ │ □ £80-100K (28)     □ £100K+ (19)  │ │
│ 💾 Saved Jobs │ │ Senior Backend Engineer          │ │ │                                     │ │
│            8  │ │ 📍 San Francisco • 🏢 Hybrid    │ │ │ ├─ Experience Level ─────────────────┤ │
│               │ │ 💰 $90-110K • ⏰ Full-time      │ │ │ □ Junior (0-2 years) (8)           │ │
│ ⚙️ Settings   │ │ 💙 Save  📤 Share  ❌ Pass  [▶] │ │ │ □ Mid-level (3-5 years) (45)       │ │
│               │ ├─────────────────────────────────┤ │ │ □ Senior (5+ years) (38)           │ │
│ ❓ Help       │ │ 🏢 [LOGO] SPOTIFY          3hrs │ │ │ □ Staff/Principal (8+ years) (3)   │ │
│               │ │ Senior Full Stack Engineer       │ │ │                                     │ │
│ v1.0.0     UK │ │ 📍 London • 🏢 Remote           │ │ │ ├─ Work Type ────────────────────────┤ │
└───────────────┴─│ 💰 €75-95K • ⏰ Full-time       │ │ │ □ Remote (28)        □ Hybrid (42) │ │
                  │ 💙 Save  📤 Share  ❌ Pass  [▶] │ │ │ □ Office-based (24)                │ │
                  ├─────────────────────────────────┤ │ │                                     │ │
                  │ 🏢 [LOGO] SHOPIFY          1day │ │ │ ├─ Company Size ─────────────────────┤ │
                  │ Staff Software Engineer          │ │ │ □ Startup (1-50) (12)              │ │
                  │ 📍 Toronto • 🏢 Hybrid         │ │ │ □ Mid-size (51-500) (38)           │ │
                  │ 💰 CAD $140-170K • ⏰ Full-time │ │ │ □ Enterprise (500+) (44)           │ │
                  │ 💙 Save  📤 Share  ❌ Pass  [▶] │ │ │                                     │ │
                  └─────────────────────────────────┘ │ │ ┌─ Actions ─────────────────────┐   │ │
                                                      │ │ │ [Apply Filters] [Reset All]   │   │ │
                                                      │ │ └───────────────────────────────┘   │ │
                                                      │ └─────────────────────────────────────┘ │
                                                      └─────────────────────────────────────────┘
```

### Mobile Layout - Responsive Design
```
┌──────────────────────────────────────────────────────────────┐
│ [☰] TooEarly                                      [Profile]  │
├──────────────────────────────────────────────────────────────┤
│ 🔍 Search jobs, companies...                       [🔽]     │
├──────────────────────────────────────────────────────────────┤
│ 📊 94 results • Backend ✕ Senior ✕ [+2] [Filters]          │
├──────────────────────────────────────────────────────────────┤
│ Jobs Matching Your Criteria                      [Sort ▼]    │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ 🏢 [LOGO] DIGITAL TURBINE            7 hours ago        │ │
│ │ Senior Backend Engineer                                  │ │
│ │ 📍 San Francisco • 🏢 Hybrid • 💰 $90-110K             │ │
│ │ 💙 Save  📤 Share  ❌ Pass                    [Details] │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ 🏢 [LOGO] SPOTIFY                    3 hours ago        │ │
│ │ Senior Full Stack Engineer                               │ │
│ │ 📍 London • 🏢 Remote • 💰 €75-95K                      │ │
│ │ 💙 Save  📤 Share  ❌ Pass                    [Details] │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Job Details - Full Screen Modal
```
┌──────────────────────────────────────────────────────────────┐
│ [← Back]  Job Details                           [💾] [Apply] │
├──────────────────────────────────────────────────────────────┤
│ 🏢 [LOGO] DIGITAL TURBINE                                   │
│                                                              │
│ Senior Backend Engineer                                      │
│ 📍 San Francisco • 🏢 Hybrid • 💰 $90-110K • ⏰ Full-time  │
│                                                              │
│ ├─ Company Overview ─────────────────────────────────────────┤
│ Digital Turbine is a leading mobile platform that helps     │
│ advertisers connect with users globally through innovative  │
│ technology solutions.                                        │
│                                                              │
│ ├─ Role Requirements ────────────────────────────────────────┤
│ • 5+ years backend development experience                   │
│ • Python, Go, or Java expertise                            │
│ • Microservices architecture knowledge                     │
│ • AWS/GCP cloud platforms experience                       │
│ • Docker & Kubernetes proficiency                          │
│                                                              │
│ ├─ Benefits & Perks ─────────────────────────────────────────┤
│ • Health, dental, vision insurance                          │
│ • 401(k) with company matching                             │
│ • Flexible working arrangements                             │
│ • $3,000 learning & development budget                     │
│ • Stock option program                                      │
│                                                              │
│ ├─ Application Process ──────────────────────────────────────┤
│ 1. Submit application & portfolio                           │
│ 2. Phone screen (30 mins)                                  │
│ 3. Technical interview (90 mins)                           │
│ 4. Team interview (60 mins)                                │
│ 5. Final interview with director                           │
│                                                              │
│ ┌─ Actions ─────────────────────────────────────────────────┐ │
│ │                [APPLY NOW]                                │ │
│ │         [💾 Save Job]    [📤 Share]                      │ │
│ └───────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### Job Details Drawer Component
```typescript
interface JobDetailsDrawerProps {
  job: JobDetails;
  isOpen: boolean;
  onClose: () => void;
  onApply: (jobId: string) => void;
  onSave: (jobId: string) => void;
  onShare: (jobId: string) => void;
}

const JobDetailsDrawer: React.FC<JobDetailsDrawerProps> = ({
  job,
  isOpen,
  onClose,
  onApply,
  onSave,
  onShare
}) => {
  const currency = detectCurrency(job.location);
  
  return (
    <div className={`job-details-drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <div className="company-info">
          <CompanyLogo company={job.company} size={48} />
          <div className="company-details">
            <h2 className="company-name">{job.company.name}</h2>
            <p className="company-tagline">{job.company.tagline}</p>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      
      <div className="drawer-content">
        <div className="job-header">
          <h1 className="job-title">{job.title}</h1>
          <div className="job-meta">
            <span className="location">📍 {job.location}</span>
            <span className="work-type">🏢 {job.workType}</span>
            <span className="salary">💰 {formatCurrency(job.salary, currency)}</span>
            <span className="schedule">⏰ {job.schedule}</span>
          </div>
        </div>
        
        <div className="content-sections">
          <section className="company-overview">
            <h3>Company Overview</h3>
            <p>{job.company.description}</p>
          </section>
          
          <section className="role-requirements">
            <h3>Role Requirements</h3>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </section>
          
          <section className="benefits">
            <h3>Benefits & Perks</h3>
            <ul>
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </section>
          
          <section className="application-process">
            <h3>Application Process</h3>
            <ol>
              {job.applicationProcess.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
        
        <div className="drawer-actions">
          <button className="apply-btn primary" onClick={() => onApply(job.id)}>
            APPLY NOW
          </button>
          <button className="save-btn secondary" onClick={() => onSave(job.id)}>
            💾 Save Job
          </button>
          <button className="share-btn secondary" onClick={() => onShare(job.id)}>
            📤 Share
          </button>
        </div>
      </div>
    </div>
  );
};
```

### Enhanced Filters Component
```typescript
interface FiltersState {
  location: string[];
  salaryRange: string[];
  experience: string[];
  workType: string[];
  companySize: string[];
  resultCount: number;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filters,
  onFiltersChange,
  resultCount,
  onClearAll
}) => {
  return (
    <div className="filters-panel">
      <div className="filters-header">
        <h2>🔍 Filter Jobs</h2>
        <div className="results-count">
          <span className="count">📊 {resultCount} results found</span>
        </div>
      </div>
      
      <div className="active-filters">
        <div className="filter-chips">
          {filters.active.map((filter, index) => (
            <span key={index} className="filter-chip">
              {filter.label} 
              <button onClick={() => onRemoveFilter(filter.id)}>✕</button>
            </span>
          ))}
          {filters.active.length > 0 && (
            <button className="clear-all-btn" onClick={onClearAll}>
              Clear All
            </button>
          )}
        </div>
      </div>
      
      <div className="filter-sections">
        <FilterSection
          title="Location"
          options={locationOptions}
          selected={filters.location}
          onChange={(values) => onFiltersChange('location', values)}
        />
        
        <FilterSection
          title="Salary Range"
          options={salaryOptions}
          selected={filters.salaryRange}
          onChange={(values) => onFiltersChange('salaryRange', values)}
        />
        
        <FilterSection
          title="Experience Level"
          options={experienceOptions}
          selected={filters.experience}
          onChange={(values) => onFiltersChange('experience', values)}
        />
        
        <FilterSection
          title="Work Type"
          options={workTypeOptions}
          selected={filters.workType}
          onChange={(values) => onFiltersChange('workType', values)}
        />
        
        <FilterSection
          title="Company Size"
          options={companySizeOptions}
          selected={filters.companySize}
          onChange={(values) => onFiltersChange('companySize', values)}
        />
      </div>
      
      <div className="filters-actions">
        <button className="apply-filters-btn primary">
          Apply Filters
        </button>
        <button className="reset-filters-btn secondary">
          Reset All
        </button>
      </div>
    </div>
  );
};
```

### Streamlined Job Card Integration
```typescript
const StreamlinedJobCard: React.FC<StreamlinedJobCardProps> = ({
  job,
  onSave,
  onApply,
  onPass,
  onShowDetails
}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const currency = detectCurrency(job.location);
  
  const handleSave = async () => {
    setSaveState('saving');
    
    try {
      await onSave(job.id);
      setSaveState('saved');
      setIsAnimatingOut(true);
      
      setTimeout(() => {
        // Card removal handled by parent component
        setIsAnimatingOut(false);
        setSaveState('idle');
      }, 600);
    } catch (error) {
      setSaveState('idle');
    }
  };
  
  const handleDetailsClick = () => {
    onShowDetails(job);
  };
  
  return (
    <div className={`streamlined-job-card ${isAnimatingOut ? 'animate-out' : ''}`}>
      <div className="card-header">
        <div className="company-info">
          <CompanyLogo company={job.company} size={32} />
          <span className="company-name">{job.company.name}</span>
        </div>
        <span className="posted-time">{job.postedTime}</span>
      </div>
      
      <div className="job-details">
        <div className="job-title-row">
          <h3 className="job-title">{job.title}</h3>
          <span className="salary">
            💰 {formatCurrency(job.salary, currency)}
          </span>
        </div>
        
        <div className="job-meta">
          📍 {job.location} • 🏢 {job.workType} • ⏰ {job.schedule}
        </div>
      </div>
      
      <div className="card-actions">
        <button 
          className={`action-btn save ${saveState}`}
          onClick={handleSave}
          disabled={saveState !== 'idle'}
        >
          {saveState === 'saved' ? '✅ Saved' : 
           saveState === 'saving' ? '💙 Saving...' : '💙 Save'}
        </button>
        
        <button className="action-btn share" onClick={() => onShare(job.id)}>
          📤 Share
        </button>
        
        <button className="action-btn pass" onClick={() => onPass(job.id)}>
          ❌ Pass
        </button>
        
        <button className="action-btn details" onClick={handleDetailsClick}>
          [▶] Details
        </button>
      </div>
    </div>
  );
};
```

---

## CSS Styling Framework

### Job Details Drawer Styles
```scss
.job-details-drawer {
  position: fixed;
  top: 0;
  right: -35%;
  width: 35%;
  height: 100vh;
  background: white;
  border-left: 1px solid #E5E7EB;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  transition: right 0.3s ease-out;
  overflow-y: auto;
  
  &.open {
    right: 0;
  }
  
  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px solid #E5E7EB;
    background: #FAFAFA;
    
    .company-info {
      display: flex;
      align-items: center;
      gap: 16px;
      
      .company-details {
        .company-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        
        .company-tagline {
          font-size: 0.875rem;
          color: #6B7280;
          margin: 4px 0 0;
        }
      }
    }
    
    .close-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6B7280;
      
      &:hover {
        color: #374151;
      }
    }
  }
  
  .drawer-content {
    padding: 24px;
    
    .job-header {
      margin-bottom: 32px;
      
      .job-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #111827;
        margin: 0 0 12px;
      }
      
      .job-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        font-size: 0.875rem;
        color: #6B7280;
        
        span {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }
    }
    
    .content-sections {
      section {
        margin-bottom: 32px;
        
        h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid #E5E7EB;
        }
        
        p {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #374151;
        }
        
        ul, ol {
          padding-left: 20px;
          
          li {
            font-size: 0.875rem;
            line-height: 1.6;
            color: #374151;
            margin-bottom: 8px;
          }
        }
      }
    }
    
    .drawer-actions {
      display: flex;
      gap: 12px;
      padding-top: 24px;
      border-top: 1px solid #E5E7EB;
      
      .apply-btn {
        background: #3B82F6;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        flex: 1;
        
        &:hover {
          background: #2563EB;
        }
      }
      
      .save-btn, .share-btn {
        background: #F3F4F6;
        color: #374151;
        border: 1px solid #D1D5DB;
        padding: 12px 16px;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        
        &:hover {
          background: #E5E7EB;
        }
      }
    }
  }
}
```

### Enhanced Filters Panel Styles
```scss
.filters-panel {
  .filters-header {
    padding: 20px;
    border-bottom: 1px solid #E5E7EB;
    
    h2 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 12px;
    }
    
    .results-count {
      .count {
        font-size: 0.875rem;
        color: #059669;
        font-weight: 600;
        background: #ECFDF5;
        padding: 6px 12px;
        border-radius: 6px;
        display: inline-block;
      }
    }
  }
  
  .active-filters {
    padding: 16px 20px;
    background: #FAFAFA;
    border-bottom: 1px solid #E5E7EB;
    
    .filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      
      .filter-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        background: #3B82F6;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 500;
        
        button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 0.875rem;
          
          &:hover {
            opacity: 0.8;
          }
        }
      }
      
      .clear-all-btn {
        background: #EF4444;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        cursor: pointer;
        
        &:hover {
          background: #DC2626;
        }
      }
    }
  }
  
  .filter-sections {
    padding: 20px;
    
    .filter-section {
      margin-bottom: 24px;
      
      h4 {
        font-size: 0.875rem;
        font-weight: 600;
        color: #111827;
        margin: 0 0 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .filter-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        
        .filter-option {
          display: flex;
          align-items: center;
          gap: 8px;
          
          input[type="checkbox"] {
            margin: 0;
          }
          
          label {
            font-size: 0.875rem;
            color: #374151;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 4px;
            
            .count {
              color: #6B7280;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
  
  .filters-actions {
    padding: 20px;
    border-top: 1px solid #E5E7EB;
    display: flex;
    gap: 12px;
    
    .apply-filters-btn {
      background: #3B82F6;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      flex: 1;
      
      &:hover {
        background: #2563EB;
      }
    }
    
    .reset-filters-btn {
      background: #F3F4F6;
      color: #374151;
      border: 1px solid #D1D5DB;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      
      &:hover {
        background: #E5E7EB;
      }
    }
  }
}
```

### Streamlined Job Card Styles
```scss
.streamlined-job-card {
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.3s ease-out;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3B82F6;
  }
  
  &.animate-out {
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    
    .company-info {
      display: flex;
      align-items: center;
      gap: 12px;
      
      .company-name {
        font-size: 0.875rem;
        font-weight: 600;
        color: #111827;
      }
    }
    
    .posted-time {
      font-size: 0.75rem;
      color: #6B7280;
    }
  }
  
  .job-details {
    margin-bottom: 16px;
    
    .job-title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 8px;
      
      .job-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #111827;
        margin: 0;
        flex: 1;
      }
      
      .salary {
        color: #059669;
        font-weight: 600;
        font-size: 0.875rem;
        margin-left: 16px;
      }
    }
    
    .job-meta {
      font-size: 0.8125rem;
      color: #6B7280;
    }
  }
  
  .card-actions {
    display: flex;
    gap: 8px;
    align-items: center;
    
    .action-btn {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &.save {
        background: #EFF6FF;
        color: #3B82F6;
        border: 1px solid #DBEAFE;
        
        &:hover {
          background: #DBEAFE;
        }
        
        &.saving {
          opacity: 0.7;
          transform: scale(0.95);
        }
        
        &.saved {
          background: #10B981;
          color: white;
          border-color: #10B981;
        }
      }
      
      &.share {
        background: #F3F4F6;
        color: #374151;
        border: 1px solid #D1D5DB;
        
        &:hover {
          background: #E5E7EB;
        }
      }
      
      &.pass {
        background: #FEF2F2;
        color: #DC2626;
        border: 1px solid #FECACA;
        
        &:hover {
          background: #FECACA;
        }
      }
      
      &.details {
        background: #3B82F6;
        color: white;
        border: 1px solid #3B82F6;
        margin-left: auto;
        
        &:hover {
          background: #2563EB;
        }
      }
    }
  }
}
```

---

## Responsive Design

### Mobile Adaptations
```scss
@media (max-width: 768px) {
  .job-details-drawer {
    width: 100%;
    right: -100%;
    
    &.open {
      right: 0;
    }
    
    .drawer-header {
      padding: 16px;
      
      .company-info {
        gap: 12px;
        
        .company-details {
          .company-name {
            font-size: 1.125rem;
          }
        }
      }
    }
    
    .drawer-content {
      padding: 16px;
      
      .job-header {
        margin-bottom: 24px;
        
        .job-title {
          font-size: 1.25rem;
        }
        
        .job-meta {
          flex-direction: column;
          gap: 8px;
        }
      }
      
      .content-sections {
        section {
          margin-bottom: 24px;
          
          h3 {
            font-size: 1rem;
          }
        }
      }
      
      .drawer-actions {
        flex-direction: column;
        gap: 8px;
        
        .apply-btn, .save-btn, .share-btn {
          width: 100%;
        }
      }
    }
  }
  
  .filters-panel {
    .filter-sections {
      .filter-section {
        .filter-options {
          grid-template-columns: 1fr;
        }
      }
    }
  }
  
  .streamlined-job-card {
    padding: 12px;
    
    .job-details {
      .job-title-row {
        flex-direction: column;
        gap: 4px;
        
        .salary {
          margin-left: 0;
        }
      }
    }
    
    .card-actions {
      flex-wrap: wrap;
      gap: 6px;
      
      .action-btn {
        padding: 8px 12px;
        font-size: 0.75rem;
        
        &.details {
          width: 100%;
          margin-left: 0;
          order: 1;
        }
      }
    }
  }
}
```

---

## Implementation Timeline

### Phase 1: Job Details Drawer (Week 1-2)
- [ ] Create drawer component with 35% screen width
- [ ] Implement comprehensive job information sections
- [ ] Add responsive mobile full-screen modal
- [ ] Integrate with existing job data structure

### Phase 2: Enhanced Filters UX (Week 2-3)
- [ ] Relocate filter count to header area
- [ ] Implement improved filter categories
- [ ] Add filter count indicators per option
- [ ] Create better visual hierarchy

### Phase 3: Streamlined Cards Integration (Week 3-4)
- [ ] Integrate streamlined card design
- [ ] Implement save animation with card dismissal
- [ ] Add multi-currency support
- [ ] Connect cards to job details drawer

### Phase 4: Mobile Optimization (Week 4-5)
- [ ] Optimize drawer for mobile devices
- [ ] Implement touch-friendly interactions
- [ ] Test responsive behavior across devices
- [ ] Fine-tune mobile user experience

### Phase 5: Testing & Polish (Week 5-6)
- [ ] Comprehensive cross-browser testing
- [ ] Performance optimization
- [ ] Accessibility compliance validation
- [ ] User testing and feedback integration

This enhanced design provides a comprehensive job browsing experience with detailed information architecture while maintaining the clean, streamlined approach of the original design.