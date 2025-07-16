# Information Architecture Diagram Task

This task creates visual representations of information architecture using ASCII diagrams.

## Purpose
Visualize site structure, user flows, and content relationships to ensure optimal organization and navigation.

## Prerequisites
- Project scope and requirements
- User research insights (if available)
- Content inventory or audit
- Business goals and constraints

## Process

### 1. Choose Diagram Type

#### Site Map
Hierarchical representation of pages/sections:
```
                    ┌──────────┐
                    │   Home   │
                    └────┬─────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
   │Products │     │ Services │     │  About  │
   └────┬────┘     └────┬────┘     └────┬────┘
        │                │                │
   ┌────┼────┐          │           ┌────┼────┐
   │    │    │          │           │    │    │
┌──▼─┐┌─▼──┐┌▼───┐ ┌───▼───┐   ┌──▼─┐┌─▼──┐┌▼───┐
│Cat1││Cat2││Cat3│ │Service1│   │Team││His ││Cont│
└────┘└────┘└────┘ └────────┘   └────┘└────┘└────┘
```

#### User Flow
Sequential path through tasks:
```
Start → Profile Setup → Preferences → Tutorial → Dashboard
  │           │             │            │          │
  │           ▼             ▼            ▼          ▼
  │      [Required]    [Optional]   [Skippable]  [End]
  │                                      │
  └──────────────────────────────────────┘
              (Skip to dashboard)
```

#### Content Model
Relationships between content types:
```
┌─────────────┐     ┌─────────────┐
│    User     │────▶│   Profile   │
└──────┬──────┘ 1:1 └─────────────┘
       │
       │ 1:N
       ▼
┌─────────────┐ N:N ┌─────────────┐
│    Post     │◀───▶│     Tag     │
└──────┬──────┘     └─────────────┘
       │
       │ 1:N
       ▼
┌─────────────┐
│   Comment   │
└─────────────┘
```

### 2. Define Notation System

#### Node Types
```
┌─────────┐  Standard page/screen
│  Page   │
└─────────┘

┌┅┅┅┅┅┅┅┅┅┐  External link/system
┊External ┊
└┅┅┅┅┅┅┅┅┅┘

◆ Decision  ◆  Decision point

[ Process ]   Process/Action

( Database )  Data storage
```

#### Connection Types
```
────────  Standard connection
- - - -   Optional/Secondary
══════    Primary path
▶▶▶▶▶▶    Flow direction
◄────►    Bidirectional
```

### 3. Create Primary Structure

Start with main sections:
```
Level 0: Home
Level 1: Main Sections
Level 2: Subsections
Level 3: Individual Pages
```

### 4. Add Metadata

Include relevant information:
```
┌─────────────────┐
│   Products      │
│   [Public]      │ <- Access level
│   Priority: 1   │ <- Business priority
│   ~500 items    │ <- Content volume
└─────────────────┘
```

### 5. Show User Paths

Highlight common journeys:
```
New User Path (━━━):
┌──────┐ ━━━▶ ┌──────────┐ ━━━▶ ┌───────┐ ━━━▶ ┌──────────┐
│ Home │      │ Register │      │ Setup │      │Dashboard │
└──────┘      └──────────┘      └───────┘      └──────────┘

Returning User (▪▪▪):
┌──────┐ ▪▪▪▶ ┌─────────┐ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▶ ┌──────────┐
│ Home │      │  Login  │                    │Dashboard │
└──────┘      └─────────┘                    └──────────┘
```

### 6. Complex IA Patterns

#### Hub and Spoke
```
         ┌─────┐
    ┌────│ Hub │────┐
    │    └──┬──┘    │
    ▼       │       ▼
┌──────┐    │    ┌──────┐
│Page 1│    ▼    │Page 3│
└──────┘ ┌──────┐└──────┘
         │Page 2│
         └──────┘
```

#### Sequential/Wizard
```
Step 1 ──▶ Step 2 ──▶ Step 3 ──▶ Complete
   ▲          │          │          │
   │          ▼          ▼          ▼
   └──────── Back ◀──── Back ◀─────┘
```

#### Filtered Navigation
```
┌─────────────────────────┐
│    Filter Controls      │
├─────┬─────┬─────┬──────┤
│Cat A│Cat B│Cat C│ All  │
└─────┴─────┴─────┴──────┘
         │
         ▼
┌─────────────────────────┐
│   Filtered Results      │
│   ┌───┐ ┌───┐ ┌───┐   │
│   │ 1 │ │ 2 │ │ 3 │   │
│   └───┘ └───┘ └───┘   │
└─────────────────────────┘
```

### 7. Responsive Considerations

Show how IA adapts:
```
Desktop Menu:          Mobile Menu:
┌──┬──┬──┬──┬──┐     ┌──┬──────┐
│H │P │S │A │C │     │H │ ☰    │
└──┴──┴──┴──┴──┘     └──┴──────┘
                            │
                      ┌─────▼─────┐
                      │ Products  │
                      │ Services  │
                      │ About     │
                      │ Contact   │
                      └───────────┘
```

### 8. Access Levels

Indicate permissions:
```
┌─────────────┐
│   Public    │ ○ No login required
└──────┬──────┘
       │
┌──────▼──────┐
│ Registered  │ ◐ Login required
└──────┬──────┘
       │
┌──────▼──────┐
│    Admin    │ ● Special permissions
└─────────────┘
```

## Output Format

### 1. Overview Diagram
High-level structure visualization

### 2. Detailed Sections
Zoom into specific areas as needed

### 3. User Flows
Key paths through the system

### 4. Legend
```
Legend:
━━━ Primary path
▪▪▪ Secondary path
┌─┐ Page/Screen
◆   Decision point
▶   Direction
○   Public access
●   Restricted
```

### 5. Notes
- Special considerations
- Technical constraints
- Future expansion areas

## Best Practices

1. **Start Simple:** Begin with main sections, add detail progressively
2. **User-Centric:** Organize based on user needs, not org structure
3. **Consistent Depth:** Keep similar content at similar levels
4. **Clear Labels:** Use descriptive, user-friendly names
5. **Scalability:** Design for growth and change

## Common IA Patterns

### E-commerce
```
Home
├── Products
│   ├── Categories
│   ├── Search
│   └── Product Detail
├── Cart
├── Checkout
└── Account
```

### Content Site
```
Home
├── Articles
│   ├── By Category
│   ├── By Date
│   └── By Author
├── Resources
└── Search
```

### Application
```
Landing
├── Auth
│   ├── Login
│   └── Register
└── App
    ├── Dashboard
    ├── Features
    └── Settings
```

## Validation Questions

1. Can users find what they need in 3 clicks or less?
2. Is the labeling clear and consistent?
3. Does the structure scale with content growth?
4. Are related items grouped logically?
5. Is the navigation learnable and memorable?