# Zenplify Autofill Integration Guide

## Overview

This document provides comprehensive integration instructions for triggering Zenplify's autofill functionality from external web applications, including embedded browsers and dashboards.

---

## 1. Message Format & Communication Methods

**Primary Communication Method**: `chrome.runtime.sendMessage()`

> Do **NOT** use `window.postMessage()` – the extension listens specifically for Chrome runtime messages.

### Message Types for External Integration

#### 🔍 For Form Detection Only
```ts
{
  type: 'DETECT_FORM_FIELDS_FOR_AUTOFILL'
  // No additional payload required
}
````

#### ✅ For Complete Autofill Process (Recommended)

```ts
{
  type: 'DECISION_MATRIX_AUTOFILL',
  payload: {
    userProfile: UserProfile,
    options: AutofillOptions
  }
}
```

### Alternative Autofill Message Types

* `STREAMING_AUTOFILL` – Standard streaming autofill
* `ADAPTIVE_STREAMING_AUTOFILL` – Adaptive streaming with complexity analysis
* `INTELLIGENT_AUTOFILL_PROCESS` – V3 intelligent autofill (background processing)
* `AUTOFILL_TRIGGER` – Legacy standard autofill

---

## 2. Complete User Profile Data Structure

```ts
interface UserProfile {
  id: string;
  profileId?: string;
  personalInfo: {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    linkedin?: string;
    website?: string;
    portfolio?: string;
  };
  professionalInfo?: {
    currentRole?: string;
    currentCompany?: string;
    yearsOfExperience?: number;
    desiredRole?: string;
    industryExperience?: string[];
    managementExperience?: boolean;
    remoteWorkPreference?: 'onsite' | 'remote' | 'hybrid' | 'flexible';
    availabilityDate?: string;
    relocationWillingness?: boolean;
  };
  workExperience?: WorkExperience[];
  education?: Education[];
  skills?: Skill[];
  preferences?: UserPreferences;
}

interface WorkExperience {
  id?: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  technologies?: string[];
}

interface Education {
  id?: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  honors?: string[];
}

interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
  yearsOfExperience?: number;
}
```

---

## 3. Autofill Options Configuration

```ts
interface AutofillOptions {
  useStreamingAPI?: boolean;
  enableProgressTracking?: boolean;
  enableFormFilling?: boolean;
  fallbackToV3?: boolean;
  preferredStrategy?: 'basic' | 'enhanced' | 'enterprise';
  strategyHints?: {
    performanceRequirement?: 'fast' | 'standard' | 'thorough';
    tokenBudget?: number;
    estimatedTime?: number;
  };
}
```

---

## 4. Complete Integration Example

### Step 1: Get Extension ID

```ts
chrome.management.getAll((extensions) => {
  const zenplifyExtension = extensions.find(ext =>
    ext.name.includes('Zenplify') || ext.id === 'your-extension-id'
  );
  if (zenplifyExtension) {
    console.log('Zenplify Extension ID:', zenplifyExtension.id);
  }
});
```

### Step 2: Autofill Trigger Function

```ts
async function triggerZenplifyAutofill(userProfile) {
  try {
    const [activeTab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    if (!activeTab?.id) throw new Error('No active tab found');

    const message = {
      type: 'DECISION_MATRIX_AUTOFILL',
      payload: {
        userProfile,
        options: {
          useStreamingAPI: true,
          enableProgressTracking: true,
          enableFormFilling: true,
          fallbackToV3: true,
          preferredStrategy: 'enhanced',
          strategyHints: {
            performanceRequirement: 'standard',
            tokenBudget: 1000,
            estimatedTime: 30000
          }
        }
      }
    };

    const response = await chrome.tabs.sendMessage(activeTab.id, message);
    console.log('Autofill triggered successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to trigger autofill:', error);
    throw error;
  }
}
```

### Step 3: Usage Example

```ts
const sampleUserProfile = {
  id: "external_user_123",
  profileId: "profile_456",
  personalInfo: {
    firstName: "Jane",
    lastName: "Smith",
    fullName: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "555-0123",
    address: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    linkedin: "https://linkedin.com/in/janesmith",
    website: "https://janesmith.dev"
  },
  professionalInfo: {
    currentRole: "Senior Product Manager",
    currentCompany: "Tech Corp",
    yearsOfExperience: 7,
    desiredRole: "VP of Product",
    industryExperience: ["SaaS", "Fintech", "Healthcare"],
    managementExperience: true,
    remoteWorkPreference: "hybrid",
    availabilityDate: "2024-08-01",
    relocationWillingness: false
  },
  workExperience: [{
    company: "Tech Corp",
    position: "Senior Product Manager",
    startDate: "2021-01-01",
    current: true,
    description: "Lead product strategy for B2B SaaS platform",
    achievements: [
      "Increased user retention by 40%",
      "Launched 3 major product features"
    ],
    technologies: ["React", "Node.js", "PostgreSQL"]
  }],
  education: [{
    institution: "Stanford University",
    degree: "MBA",
    field: "Business Administration",
    startDate: "2018-09-01",
    endDate: "2020-06-01",
    gpa: "3.8",
    honors: ["Dean's List"]
  }],
  skills: [
    { name: "Product Management", level: "expert", yearsOfExperience: 7 },
    { name: "Data Analysis", level: "advanced", yearsOfExperience: 5 },
    { name: "JavaScript", level: "intermediate", yearsOfExperience: 3 }
  ]
};

async function handleAutofillButtonClick() {
  try {
    document.getElementById('autofill-btn').textContent = 'Filling...';
    document.getElementById('autofill-btn').disabled = true;

    const result = await triggerZenplifyAutofill(sampleUserProfile);

    if (result.success) {
      console.log(`Successfully filled ${result.filledCount || 0} fields`);
      alert('Autofill completed successfully!');
    } else {
      console.warn('Autofill completed with errors:', result.errors);
      alert(`Autofill completed with ${result.errors?.length || 0} errors`);
    }
  } catch (error) {
    console.error('Autofill failed:', error);
    alert('Autofill failed: ' + error.message);
  } finally {
    document.getElementById('autofill-btn').textContent = 'Autofill';
    document.getElementById('autofill-btn').disabled = false;
  }
}

document.getElementById('autofill-btn').addEventListener('click', handleAutofillButtonClick);
```

---

## 5. Response Handling

### ✅ Success Format

```ts
{
  success: true,
  filledCount: number,
  totalFields: number,
  processingTime: number,
  strategy: string,
  errors?: string[],
  metadata?: {
    confidence: number,
    apiTokensUsed: number,
    fallbackUsed: boolean
  }
}
```

### ❌ Error Format

```ts
{
  success: false,
  error: string,
  details?: any,
  filledCount: 0,
  fallbackUsed?: boolean
}
```

---

## 6. Security Requirements & Context

### Prerequisites

* ✅ Extension Installed
* 🔓 Tab Permissions
* 👤 User Authenticated
* 📄 Valid Form-Containing Page

### Security & Origin Constraints

* No cross-origin issues with `chrome.tabs.sendMessage()`
* Extension must have `activeTab` permission
* Iframe support if extension has access
* HTTPS strongly recommended

### Page Context

* Detectable form elements must exist
* Wait for DOM to be ready
* No need for job-specific detection logic

---

## 7. Advanced Features

### Progress Tracking

```ts
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'UPDATE_AUTOFILL_PROGRESS') {
    const progress = message.payload;
    console.log(`Progress: ${progress.completed}/${progress.total} fields`);
    updateProgressBar(progress.percentage);
  }

  if (message.type === 'AUTOFILL_RESULT') {
    const result = message.payload;
    console.log('Final result:', result);
    handleAutofillComplete(result);
  }
});
```

### Pre-Autofill Validation

```ts
async function validateBeforeAutofill() {
  try {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const detectionResult = await chrome.tabs.sendMessage(activeTab.id, {
      type: 'DETECT_FORM_FIELDS_FOR_AUTOFILL'
    });

    if (!detectionResult.success || detectionResult.fields.length === 0) {
      alert('No fillable forms detected on this page');
      return false;
    }

    console.log(`Found ${detectionResult.fields.length} fillable fields`);
    return true;
  } catch (error) {
    console.error('Form detection failed:', error);
    return false;
  }
}

async function smartAutofillTrigger(userProfile) {
  const canAutofill = await validateBeforeAutofill();
  if (canAutofill) {
    return await triggerZenplifyAutofill(userProfile);
  } else {
    throw new Error('Page not suitable for autofill');
  }
}
```

---

## 8. Error Handling Best Practices

```ts
async function robustAutofillTrigger(userProfile, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Autofill attempt ${attempt}/${maxRetries}`);
      return await triggerZenplifyAutofill(userProfile);
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} failed:`, error.message);

      if (error.message.includes('Extension not found') || error.message.includes('No active tab')) {
        throw error;
      }

      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }

  throw new Error(`Autofill failed after ${maxRetries} attempts. Last error: ${lastError.message}`);
}
```

---

## 9. Testing Integration

```ts
async function testZenplifyIntegration() {
  const testProfile = {
    id: "test_user",
    personalInfo: {
      firstName: "Test",
      lastName: "User",
      email: "test@example.com"
    }
  };

  try {
    console.log('Testing Zenplify integration...');

    const detectionResult = await chrome.tabs.sendMessage(
      (await chrome.tabs.query({ active: true, currentWindow: true }))[0].id,
      { type: 'DETECT_FORM_FIELDS_FOR_AUTOFILL' }
    );

    console.log('Detection result:', detectionResult);

    const autofillResult = await triggerZenplifyAutofill(testProfile);
    console.log('Autofill result:', autofillResult);

    return { detection: detectionResult, autofill: autofillResult };
  } catch (error) {
    console.error('Integration test failed:', error);
    throw error;
  }
}

testZenplifyIntegration()
  .then(results => console.log('✅ Integration test passed:', results))
  .catch(error => console.error('❌ Integration test failed:', error));
```

---

## Summary Checklist

✅ Use `chrome.tabs.sendMessage()` with `DECISION_MATRIX_AUTOFILL`
✅ Provide complete `userProfile` object
✅ Validate page and extension requirements
✅ Handle success and error responses
✅ Track progress and retry on failure

---

## Quick Answers

1. **Message Format**: Use `DECISION_MATRIX_AUTOFILL` with `chrome.tabs.sendMessage()`
2. **Required Fields**: `userProfile` and optional `options`
3. **Communication**: Via `chrome.runtime.onMessage`
4. **User Profile Structure**: Includes personal, professional, work, education, and skills
5. **Response**: Contains success flag, filled count, errors, and metadata
6. **Context**: Works on any page with detectable forms and proper extension permissions

