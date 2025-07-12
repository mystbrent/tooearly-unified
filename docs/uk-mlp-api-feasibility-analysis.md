# UK MLP API Feasibility Analysis & Revised Feature Specifications

## Executive Summary

This document provides a comprehensive analysis of free APIs and services available for the UK Discovery Mode MLP launch, based on research conducted in January 2025. It identifies feasible features, recommends removing complex/expensive features, and provides specific implementation guidance for the revised prototype.

**Key Finding**: A viable MLP can be built using free UK APIs, but certain features must be removed or simplified to maintain feasibility and budget constraints.

---

## 🟢 **CONFIRMED FEASIBLE FEATURES WITH FREE APIs**

### 1. UK Salary Calculator Integration
**API**: Income-Tax.co.uk  
**Status**: ✅ Available with free demo access  
**Implementation**: REST API with JSON responses  
**Cost**: Free demo (permanent key requires premium)

```yaml
Salary_Calculator_Features:
  Input: Gross annual salary (£)
  Output: 
    - Net monthly salary
    - Income tax breakdown
    - National Insurance contributions
    - Student loan deductions (if applicable)
    - Take-home pay calculation
  API_Example: "api.income-tax.co.uk/v1.0.0/calculate/{gross_salary}"
  Rate_Limits: Demo key refreshed daily
```

**UX Implementation**: 
- Button: "💰 UK Salary Calculator"
- Shows take-home pay for displayed salary ranges
- Includes tax year 2025/26 calculations

### 2. Companies House Business Verification
**API**: Official Companies House API  
**Status**: ✅ Completely free  
**Implementation**: RESTful API with comprehensive documentation  
**Coverage**: 4.7+ million UK company records

```yaml
Company_Verification_Features:
  Input: Company name or registration number
  Output:
    - Company status (active/dissolved/etc.)
    - Registered address
    - Director information
    - Business activity codes (SIC)
    - Incorporation date
  API_Endpoint: "api.company-information.service.gov.uk"
  Authentication: API key required (free)
```

**UX Implementation**:
- Button: "🏢 Companies House Lookup"
- Automatic verification badge for verified companies
- Company legitimacy indicators

### 3. London Transport Integration (TfL)
**API**: TfL Unified API  
**Status**: ✅ Free with registration  
**Implementation**: Requires IP registration and API key  
**Coverage**: All London transport modes

```yaml
TfL_Integration_Features:
  Journey_Planning:
    - Origin/destination lookup
    - Multiple transport modes
    - Journey time estimation
  Zone_Identification:
    - TfL zone detection (1-6)
    - Transport mode availability
  API_Endpoint: "api.tfl.gov.uk"
  Registration: Required with IP whitelisting
```

**UX Implementation**:
- Button: "🚍 Check Commute via TfL"
- Zone-based filtering (Zone 1-3, Zone 4-6)
- General transport mode indicators

### 4. UK Postcode Validation
**API**: Postcodes.io  
**Status**: ✅ Completely free  
**Implementation**: Open data source, no authentication required  
**Coverage**: All UK postcodes

```yaml
Postcode_Features:
  Input: UK postcode
  Output:
    - Postcode validation
    - Geographic coordinates
    - Administrative areas
    - Nearest postcodes
  API_Endpoint: "api.postcodes.io"
  Limitations: Basic data only, no full addresses
```

**UX Implementation**:
- Postcode validation in location filters
- Basic geographic grouping
- Distance calculations between postcodes

### 5. Walking Distance Calculation
**API**: TravelTime API  
**Status**: ✅ 1,000 free calculations/month  
**Implementation**: REST API with UK postcode support  
**Features**: Multi-modal transport calculations

```yaml
Distance_Calculation_Features:
  Input: Origin and destination postcodes
  Output:
    - Walking time/distance
    - Public transport time
    - Travel time polygons
  Free_Tier: 1,000 calculations/month
  UK_Specific: Full postcode support
```

**UX Implementation**:
- Basic commute time estimates
- Walking vs. transport time comparisons
- General proximity indicators

---

## 🔴 **FEATURES TO REMOVE FOR MLP LAUNCH**

### 1. Real-Time Application Tracking ❌
**Current Feature**: "👥 12 applications so far"  
**Why Remove**:
- No free APIs available for application tracking
- Requires individual employer partnerships
- Most ATS systems don't expose this data publicly
- Implementation complexity: Very high
- Cost: Expensive custom development

**Recommendation**: Remove entirely from MLP prototype

### 2. Precise Market Intelligence ❌
**Current Features**: 
- "142 new tech jobs in London today"
- "23 companies actively hiring backend engineers"
- "Backend roles ↗️ 23% this month across UK"

**Why Remove**:
- Requires comprehensive job scraping infrastructure
- No free APIs for real-time job market data
- Needs extensive data partnerships
- High server and maintenance costs

**Alternative**: Replace with static market insights and general trends

### 3. Detailed Commute Information ❌
**Current Features**:
- "5 min walk from London Bridge Station"
- "Northern, Jubilee line access"
- Precise station proximity

**Why Remove**:
- Requires detailed address geocoding (expensive APIs)
- Station-specific data needs manual curation
- Complex mapping infrastructure required

**Alternative**: Keep general zone information and transport mode types

### 4. Advanced Company Benefits Parsing ❌
**Current Features**:
- "Private healthcare (Bupa) including family"
- "£1,000 annual learning & development budget"
- "Cycle to work scheme available"

**Why Remove**:
- No APIs for structured benefits data
- Requires extensive manual data entry
- High maintenance overhead

**Alternative**: Basic benefits categories only

---

## 📊 **REVISED FEATURE MATRIX FOR MLP**

### Core Features (Keep)
| Feature | API Source | Cost | Implementation |
|---------|------------|------|----------------|
| Basic salary calculator | Income-Tax.co.uk | Free demo | Simple REST |
| Company verification | Companies House | Free | RESTful API |
| Postcode validation | Postcodes.io | Free | Open data |
| Zone-based location | TfL API | Free | Registration required |
| Basic job filtering | Manual curation | Free | Static data |

### Enhanced Features (Phase 2)
| Feature | API Source | Cost | Timeline |
|---------|------------|------|----------|
| Full address lookup | Ideal Postcodes | £20-50/month | Month 2-3 |
| Precise commute times | TravelTime API | Usage-based | Month 3-4 |
| Advanced filtering | Custom development | Development cost | Month 4-6 |

### Premium Features (Future)
| Feature | Requirements | Cost | Timeline |
|---------|-------------|------|----------|
| Application tracking | Employer partnerships | High | 6+ months |
| Real-time market data | Scraping infrastructure | Very high | 12+ months |
| Advanced analytics | Data partnerships | High | 12+ months |

---

## 🎯 **REVISED UX SPECIFICATIONS FOR PROTOTYPE**

### Updated Job Card Design
```yaml
Job_Card_Simplified:
  Company_Info:
    - Company name (with verification badge if Companies House verified)
    - Role title
    - Location (city + hybrid/remote/office)
    
  Salary_Info:
    - Salary range (£X,000 - £Y,000 per annum)
    - Basic salary calculator link
    
  Basic_Requirements:
    - 3-5 key requirements (manually curated)
    - Work authorization status
    
  Location_Info:
    - General area (London Zone X, Manchester City Centre)
    - Transport type availability (Tube, Rail, Bus)
    - Remote/hybrid options
    
  Benefits_Basic:
    - Holiday days (e.g., "25 days + bank holidays")
    - Healthcare (e.g., "Private healthcare")
    - Pension (e.g., "Pension scheme")
    
  Actions:
    - Apply Now button
    - Save job button
    - Basic company info link
```

### Simplified Market Insights
```yaml
Market_Insights_Static:
  General_Trends:
    - "Remote work adoption: 78% of tech roles"
    - "Average salary increase: 8-12% annually"
    - "London salary premium: 15-25%"
    
  Regional_Info:
    - "Northern cities offer 20% lower living costs"
    - "Fintech growth strongest in London"
    - "Post-Brexit visa requirements for EU candidates"
    
  Remove_Dynamic:
    - Real-time job counts
    - Live application numbers
    - Daily hiring activity
```

### Updated Filter Options
```yaml
Simplified_Filters:
  Location:
    - Major cities (London, Manchester, Edinburgh, Bristol, Birmingham)
    - General areas (City Centre, Suburbs, Remote)
    - Transport zones (Zone 1-3, Zone 4-6, National Rail)
    
  Salary:
    - Range sliders (£30K - £200K per annum)
    - Experience level correlation
    
  Employment_Type:
    - Permanent, Contract, Graduate Scheme, Apprenticeship
    
  Work_Authorization:
    - No visa required, Visa sponsorship available
    
  Company_Size:
    - Startup (1-50), Scale-up (51-500), Enterprise (500+)
```

### Quick Actions (Revised)
```yaml
Feasible_Quick_Actions:
  Always_Available:
    - "💰 UK Salary Calculator" (Income-Tax.co.uk API)
    - "🏢 Companies House Lookup" (Companies House API)
    - "📋 Download Job as PDF" (Browser functionality)
    
  Location_Dependent:
    - "🚍 Check TfL Zones" (for London jobs only)
    - "📍 Postcode Lookup" (Postcodes.io API)
    
  Remove_Complex:
    - Precise commute calculations
    - Advanced company research
    - Real-time market analysis
```

---

## 🚀 **IMPLEMENTATION ROADMAP**

### Week 1-2: API Setup
- Register for TfL API access
- Obtain Companies House API key
- Set up Income-Tax.co.uk demo access
- Test Postcodes.io integration

### Week 3-4: Core Features
- Implement basic salary calculator integration
- Add Companies House company verification
- Set up postcode validation
- Create simplified job card layout

### Week 5-6: London Transport
- Integrate TfL zone identification
- Add basic journey planning
- Implement location-based filtering
- Test transport mode indicators

### Week 7-8: Polish & Testing
- User testing with UK focus groups
- Performance optimization
- Error handling and fallbacks
- Launch preparation

---

## 📋 **TECHNICAL REQUIREMENTS**

### API Integration Checklist
```yaml
Required_Registrations:
  - TfL Developer Portal account
  - Companies House API access
  - Income-Tax.co.uk demo key
  
API_Rate_Limits:
  - TfL: Standard rate limits apply
  - Companies House: Generous free tier
  - Income-Tax.co.uk: Demo key daily refresh
  - Postcodes.io: No limits (open data)
  
Error_Handling:
  - Graceful degradation when APIs unavailable
  - Fallback to cached/static data
  - User-friendly error messages
  
Performance_Considerations:
  - Cache frequent API calls
  - Async loading for non-critical features
  - Progressive enhancement
```

### Data Compliance
```yaml
GDPR_Requirements:
  - User consent for external API calls
  - Data retention policies
  - Right to deletion
  - Transparent data usage

UK_Specific_Compliance:
  - Companies House terms of service
  - TfL data attribution requirements
  - Salary calculator disclaimer
```

---

## 💡 **PROTOTYPE DESIGN GUIDELINES**

### Visual Hierarchy
1. **Essential Information**: Company name, role, salary, location
2. **Quick Actions**: Apply, Save, Basic verification
3. **Secondary Info**: Requirements, benefits summary
4. **Tertiary Features**: Calculators, external lookups

### Progressive Enhancement
1. **Base Experience**: Works without external APIs
2. **Enhanced Features**: Adds value when APIs available
3. **Premium Features**: Planned for post-MLP phases

### Mobile-First Design
- Touch-friendly buttons for Quick Actions
- Simplified information density
- Progressive disclosure of details

---

## 🎯 **SUCCESS METRICS FOR REVISED MLP**

### Core KPIs
- **User Engagement**: 70%+ weekly return rate
- **Feature Adoption**: 60%+ users try salary calculator
- **Company Verification**: 80%+ companies successfully verified
- **Location Accuracy**: 95%+ postcode validation success

### API Performance Metrics
- **Salary Calculator**: <2 second response time
- **Companies House**: <1 second lookup time
- **TfL Integration**: <3 second journey planning
- **Postcode Validation**: <500ms validation time

### User Satisfaction Targets
- **Cultural Fit**: >4.5/5.0 for UK-specific features
- **Functionality**: >4.0/5.0 for core features
- **Performance**: >4.0/5.0 for page load speeds

This analysis provides the foundation for creating a realistic, implementable UK MLP that leverages free APIs while maintaining high user value and feasibility constraints.