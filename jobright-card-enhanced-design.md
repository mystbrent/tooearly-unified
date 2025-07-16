# JobRight Card - Enhanced UX Design (Refined)

## 🎯 Current Issues Analysis

Based on the implemented design screenshot, several UX issues need addressing:

### **Critical Problems Identified:**
1. **Cramped action buttons** - X, Heart, Share too close together
2. **Competing elements** - Buttons clash with timestamp placement  
3. **Generic feel** - Layout appears AI-generated, not specialized
4. **Poor visual hierarchy** - Action buttons draw too much attention
5. **Inconsistent spacing** - Uneven margins and padding

---

## 🎨 Enhanced Design Solutions

### **Primary Design - Natural Action Flow**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **Key UX Improvements:**

#### **1. Dedicated Action Bar**
- **Bottom placement** - Natural interaction zone
- **Clear labels** - "Save", "Share", "Pass" instead of icons only
- **Proper spacing** - Adequate breathing room between actions
- **Blue accent** - Professional color scheme (💙 for save action)

#### **2. Visual Hierarchy Fix**
- **Actions separated** from content area
- **Primary action** (Apply) maintains prominence
- **Secondary actions** clearly grouped and labeled
- **Timestamp** gets clean space without competition

---

## 🔵 Blue Color Scheme Variations

### **Option A - Subtle Blue Accents**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─ Actions ───────────────────────────────────────────────────────────────────┐ │
│ │  🔵 Save for Later    📤 Share Job    ⚪ Not Interested    [APPLY NOW]      │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **Option B - Professional Blue Buttons**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  [💙 Save]    [📤 Share]    [⚫ Pass]                         [APPLY NOW]    │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **Option C - Integrated Blue Design**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🔵 85% Match - Strong alignment with your profile                               │
│                                                                                 │
│ ✓ Java, Spring Boot      ✓ 5+ years backend                                    │
│ ✓ AWS, Microservices     ✓ London preferred                                    │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [🔵 APPLY NOW]     │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎭 Specialized UI Component Features

### **1. Contextual Action States**

```
Default State:
┌─────────────────────────────────────────────────────────────────────────────┐
│  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘

After Saving:
┌─────────────────────────────────────────────────────────────────────────────┐
│  ✅ Saved   📤 Share    ❌ Pass                           [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘

After Sharing:
┌─────────────────────────────────────────────────────────────────────────────┐
│  💙 Save    ✅ Shared   ❌ Pass                           [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘
```

### **2. Professional Hover States**

```
Hover on Save:
┌─────────────────────────────────────────────────────────────────────────────┐
│  [💙 Save for Later]    📤 Share    ❌ Pass               [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘

Hover on Share:
┌─────────────────────────────────────────────────────────────────────────────┐
│  💙 Save    [📤 Share with Network]    ❌ Pass            [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘

Hover on Pass:
┌─────────────────────────────────────────────────────────────────────────────┐
│  💙 Save    📤 Share    [❌ Not Interested]               [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘
```

### **3. Compact Professional Layout**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Available  ●●● DIGITAL TURBINE              7 hours ago                  │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🔵 85% Match - Java, Spring, AWS experience aligns well                        │
│                                                                                 │
│ ┌─ Quick Actions ─────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass              [🔵 APPLY NOW]                 │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Professional UX Enhancements

### **1. Natural Interaction Patterns**

#### **Card-Level Interactions:**
- **Save**: Blue heart/bookmark icon with "Save" label
- **Share**: Professional share icon with hover tooltip
- **Pass**: Clear "X" with "Pass" or "Not Interested" label
- **Apply**: Primary blue button with strong visual weight

#### **Spacing & Typography:**
- **Action buttons**: 16px padding, 8px spacing between
- **Labels**: Clear, professional terminology
- **Visual hierarchy**: Actions secondary to content
- **Consistent margins**: 16px internal padding

### **2. Blue Color Palette**

```
Primary Blue: #3B82F6 (Professional, trustworthy)
Secondary Blue: #60A5FA (Lighter accent)
Disabled Blue: #93C5FD (Inactive states)
Text Blue: #1E40AF (Links and emphasis)
Background Blue: #EFF6FF (Subtle highlights)
```

### **3. Animation & Feedback**

```
Micro-interactions:
• Save button: Smooth fill animation on click
• Share button: Subtle bounce on hover
• Pass button: Fade out card with confirmation
• Apply button: Confident press feedback

Visual feedback:
• State changes: Instant visual confirmation
• Hover states: Subtle color transitions
• Loading states: Elegant spinner on Apply
```

---

## 📱 Responsive Considerations

### **Desktop Layout (Current)**
```
┌─ Actions ───────────────────────────────────────────────────────────────────┐
│  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │
└─────────────────────────────────────────────────────────────────────────────┘
```

### **Mobile Layout**
```
┌─ Actions ─────────────────────────────────────────────────────────────────┐
│  💙 Save                     📤 Share                     ❌ Pass          │
│                                                                           │
│                         [APPLY NOW]                                       │
└───────────────────────────────────────────────────────────────────────────┘
```

### **Tablet Layout**
```
┌─ Actions ─────────────────────────────────────────────────────────────────┐
│  💙 Save      📤 Share      ❌ Pass                 [APPLY NOW]           │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Implementation Recommendations

### **CSS Framework Integration**
```scss
.job-card-actions {
  padding: 16px;
  border-top: 1px solid #E5E7EB;
  background: #FAFAFA;
  display: flex;
  align-items: center;
  gap: 16px;
}

.action-button {
  padding: 8px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-weight: 500;
  transition: all 0.2s;
  
  &.save {
    color: #3B82F6;
    border-color: #3B82F6;
    
    &:hover {
      background: #EFF6FF;
    }
  }
}

.apply-button {
  margin-left: auto;
  background: #3B82F6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  
  &:hover {
    background: #2563EB;
  }
}
```

### **Accessibility Features**
- **ARIA labels** for all action buttons
- **Keyboard navigation** support
- **Screen reader** friendly descriptions
- **High contrast** mode support
- **Focus indicators** clearly visible

---

## 📊 A/B Testing Strategy

### **Test Variables:**
1. **Action placement**: Bottom bar vs right sidebar
2. **Button style**: Text + icon vs icon only
3. **Blue intensity**: Light vs medium vs dark blue
4. **Spacing**: Compact vs generous padding
5. **Labels**: "Save" vs "Bookmark" vs heart icon

### **Success Metrics:**
- **Action engagement**: Click rates on Save/Share
- **Apply conversion**: Apply button click-through
- **User satisfaction**: Perceived professionalism
- **Task completion**: Time to make decisions

The key is creating a design that feels **intentionally crafted** rather than generically generated, with professional blue accents that enhance rather than overwhelm the user experience.

---

## 🔄 Option A: Comprehensive Data Variations

### **1. H1B/Visa Sponsorship Variations**

#### **A1: No H1B Sponsorship Available**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ❌ No Visa Sponsorship     ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A2: UK Skilled Worker Visa Available**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Skilled Worker Visa     ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A3: Visa Status Unknown**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ❓ Visa Status Unknown     ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A4: UK/EU Citizens Only**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ 🇬🇧 UK/EU Citizens Only    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Requirements: Java • Spring • AWS • 5+ years experience                         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **2. Job Requirements Missing Data Scenarios**

#### **A5: No Specific Requirements Available**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Details: Senior level position • Backend development focus                       │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A6: Only Experience Level Available**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Experience: 5+ years backend development required                               │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A7: Vague Requirements**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● DIGITAL TURBINE                    7 hours ago    │
│                                                                                 │
│ Senior Backend Engineer                                           💰 £70-85K    │
│ 📍 London Zone 1 • 🏢 Hybrid • ⏰ Full-time                                   │
│                                                                                 │
│ 🎯 Good Match - Based on your background                                        │
│                                                                                 │
│ Looking for: Strong technical background • Team player • Problem solver         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **3. UK-Specific Location & Job Variations**

#### **A8: London Financial District**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Tier 2 Visa Available    ●●● BARCLAYS BANK                     2 hours ago    │
│                                                                                 │
│ Senior Java Developer                                             💰 £85-100K   │
│ 📍 Canary Wharf • 🏢 Office-based • ⏰ Full-time                               │
│                                                                                 │
│ 🎯 Strong Match - Banking experience valued                                     │
│                                                                                 │
│ Requirements: Java • Spring • Banking domain • 7+ years experience              │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A9: Manchester Tech Hub**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Skilled Worker Visa     ●●● AUTOTRADER                         1 day ago      │
│                                                                                 │
│ Full Stack Engineer                                               💰 £55-70K    │
│ 📍 Manchester • 🏢 Hybrid (3 days office) • ⏰ Full-time                      │
│                                                                                 │
│ 🎯 Excellent Match - Tech stack aligns perfectly                                │
│                                                                                 │
│ Requirements: React • Node.js • AWS • 3+ years experience                       │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A10: Scotland Remote-First**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ H1B Sponsor Available    ●●● SKYSCANNER                        3 hours ago    │
│                                                                                 │
│ Senior Platform Engineer                                          💰 £70-85K    │
│ 📍 Edinburgh/Remote • 🏠 Remote-first • ⏰ Full-time                           │
│                                                                                 │
│ 🎯 Perfect Match - Remote work preference noted                                 │
│                                                                                 │
│ Requirements: Kubernetes • Go • Microservices • 5+ years experience             │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **4. Contract vs Permanent Variations**

#### **A11: Contract Position**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ❌ No Visa Sponsorship     ●●● LLOYDS BANKING                     5 hours ago    │
│                                                                                 │
│ Senior DevOps Engineer (Contract)                                 💰 £650/day   │
│ 📍 London • 🏢 Hybrid • ⏰ 6 month contract                                    │
│                                                                                 │
│ 🎯 Good Match - DevOps skills align well                                        │
│                                                                                 │
│ Requirements: AWS • Terraform • Jenkins • 5+ years experience                   │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A12: Permanent with Equity**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Startup Visa Available   ●●● REVOLUT                           1 hour ago     │
│                                                                                 │
│ Lead Backend Engineer                                         💰 £90-120K + equity │
│ 📍 London • 🏢 Hybrid • ⏰ Permanent                                           │
│                                                                                 │
│ 🎯 Strong Match - Fintech experience valued                                     │
│                                                                                 │
│ Requirements: Scala • Kafka • High-scale systems • 8+ years experience          │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A13: Graduate Programme**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Graduate Visa Program    ●●● DELOITTE                          2 days ago     │
│                                                                                 │
│ Technology Graduate Programme                                     💰 £35-45K    │
│ 📍 Multiple UK locations • 🏢 Hybrid • ⏰ Graduate scheme                      │
│                                                                                 │
│ 🎯 Good Match - Recent graduate profile                                         │
│                                                                                 │
│ Requirements: Computer Science degree • Any programming language                 │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A14: Part-time/Flexible**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ❌ No Visa Sponsorship     ●●● BBC                                4 hours ago    │
│                                                                                 │
│ Senior Developer (Part-time)                                     💰 £45-55K    │
│ 📍 London/Remote • 🏠 Flexible • ⏰ Part-time (3 days)                        │
│                                                                                 │
│ 🎯 Good Match - Flexible working preference                                     │
│                                                                                 │
│ Requirements: JavaScript • React • Node.js • 4+ years experience                │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### **5. Industry-Specific UK Variations**

#### **A15: Gaming Industry**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ Creative Industry Visa  ●●● ROCKSTAR GAMES                     6 hours ago    │
│                                                                                 │
│ Senior Game Developer                                             💰 £65-80K    │
│ 📍 Edinburgh • 🏢 Studio-based • ⏰ Full-time                                 │
│                                                                                 │
│ 🎯 Perfect Match - Gaming experience noted                                      │
│                                                                                 │
│ Requirements: C++ • Unreal Engine • 3D graphics • 5+ years experience           │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### **A16: Healthcare Tech**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ✅ NHS Sponsor License     ●●● BABYLON HEALTH                     8 hours ago    │
│                                                                                 │
│ Senior Software Engineer (Healthcare)                            💰 £60-75K    │
│ 📍 London • 🏢 Hybrid • ⏰ Full-time                                           │
│                                                                                 │
│ 🎯 Strong Match - Healthcare tech interest                                      │
│                                                                                 │
│ Requirements: Python • Django • Healthcare domain • 4+ years experience         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │  💙 Save    📤 Share    ❌ Pass                           [APPLY NOW]       │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Data Handling Strategy for Variations

### **Visa Status Logic:**
```javascript
const visaStatus = {
  h1b_available: "✅ H1B Sponsor Available",
  skilled_worker: "✅ Skilled Worker Visa", 
  no_sponsorship: "❌ No Visa Sponsorship",
  uk_eu_only: "🇬🇧 UK/EU Citizens Only",
  unknown: "❓ Visa Status Unknown",
  graduate_program: "✅ Graduate Visa Program",
  tier2_available: "✅ Tier 2 Visa Available"
}
```

### **Requirements Fallback Hierarchy:**
```javascript
const requirementsFallback = {
  1: "Specific skills + experience", // Primary
  2: "Experience level only", // Secondary  
  3: "General description", // Tertiary
  4: "Job level + focus area" // Fallback
}
```

### **Location Format Standards:**
```javascript
const locationFormats = {
  london_zone: "London Zone 1/2/3",
  city_hybrid: "Manchester • Hybrid (3 days office)",
  remote_first: "Edinburgh/Remote • Remote-first",
  multiple: "Multiple UK locations"
}
```

These variations ensure the design system handles real-world data scenarios gracefully while maintaining visual consistency and professional appearance.