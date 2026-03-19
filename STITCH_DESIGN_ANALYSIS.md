# SprizzyBet Stitch Design Analysis

## Overview
Four design screens from Stitch showing different views of the SprizzyBet betting application. All screens share consistent navigation structure, theming (dark mode with emerald/green accent colors), and component patterns.

---

## 1. Feed (Swipe Feed) - `sprizzybet_desktop_swipe_feed_final`

### Main Layout Structure
```
┌─────────────────────────────────────────────────────┐
│ SIDEBAR (64px wide)          │ HEADER (16px offset) │
│ - Logo & tagline             │ - Search input       │
│ - Nav links (Feed active)    │ - Wallet display     │
│ - "Place New Bet" button     │ - Notifications      │
│                              │ - Settings           │
│                              │ - User avatar        │
├─────────────────────────────────────────────────────┤
│                    MAIN CONTENT AREA                │
│          (ml-64 pt-16 h-screen relative)            │
│                                                     │
│  - Background decorative glows (blurred circles)   │
│  - Data pattern background (radial gradients)      │
│  - Centered betting card (max-w-2xl)               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Key Components & Sections

#### Central Betting Card (Glass-card)
- **Card Header Section**
  - Sport/Sport category badge (NCAA Basketball)
  - Time until start ("Starts in 2h 14m")
  - Team logo avatars (overlapped stack of 2)

- **Team Matchup Display**
  - Centered large heading (e.g., "Saint Louis vs Georgia")
  - Light italic text for "vs" separator

- **Metrics Bento Grid (3 columns)**
  - Cell 1: Line (e.g., "SLU -2.5")
  - Cell 2: Win Probability (e.g., "52%")
  - Cell 3: Edge (e.g., "+4.2%") - colored primary
  - Background: outline-variant/10 with padding and border-radius

- **AI Recommendation Section**
  - Icon badge (smart_toy icon)
  - Label: "AI Recommendation"
  - Recommendation text ("BET OVER 169.50")
  - Confidence indicator (progress bars - filled/unfilled)

#### Swipe Action Interface
- **Three Large Circular Buttons** (side by side)
  - Left: "Not Betting" - secondary color, circle (w-16 h-16)
  - Center: "I'm Betting This" - primary gradient, LARGER (w-24 h-24)
  - Right: "Considering" - tertiary color, circle (w-16 h-16)
  - Hover tooltips below each button
  - Active:scale-90 on click

#### Feed Indicator Labels
- Row of labels at top: "Previous", "Today's Edge" (active/underlined), "Hot Streaks"
- Decorative dots separating labels

#### Keyboard Shortcuts Footer
- Left arrow → Skip
- SPACE → Bet
- Right arrow → Save
- Icon representations of key presses

### Visual Elements
- **Glass-card Style**: `rgba(25, 37, 64, 0.6)` background, backdrop-filter blur(20px), border outline-variant/20
- **Color Scheme**: 
  - Primary: `#3fff8b` (emerald)
  - Secondary: `#ff716c` (salmon/red)
  - Tertiary: `#6e9bff` (blue)
  - Surface: `#060e20` (dark)
  - On-Surface: `#dee5ff` (light)
- **Background Decoration**: Two large blurred circles with primary and tertiary colors
- **Data Pattern**: Radial gradient dots 40px apart with primary/5 opacity
- **Animations**: None explicit, but transition-all with duration-300
- **Icons**: Material Symbols Outlined

---

## 2. Profile & FAQ - `sprizzybet_desktop_profile_faq_final`

### Main Layout Structure
```
┌─────────────────────────────────────────────────────┐
│ SIDEBAR (64px, active: Profile)  │ HEADER         │
├─────────────────────────────────────────────────────┤
│           MAIN CONTENT (ml-64 pt-16)                │
│        max-w-7xl mx-auto p-8 space-y-8              │
└─────────────────────────────────────────────────────┘
```

### Key Components & Sections

#### Hero Section (Glass-card)
- **Left Content Area**
  - User avatar (w-24 h-24, rounded-2xl, border-2 primary/20)
  - Level badge overlay (absolute bottom-right, bg-primary-container)
  - Username (Alex Rivera)
  - Badge + join date (Pro Analyst, Joined March 2023)

- **Right Stats Grid** (3 columns, md:border-l)
  - Win Rate: 68.4% (primary color)
  - Total Bets: 1,204
  - ROI: +12.4% (tertiary color)
  - Labels in small uppercase font-label

- **Background Decoration**: Blurred primary glow on top-right

#### Bento Layout (Main Content Grid - lg:grid-cols-3)

**Left Column (lg:col-span-2):**

1. **Account Settings Card (Glass-card)**
   - Title with icon (manage_accounts)
   - Form grid (2 columns, gap-6)
   - Input fields: Username, Email, New Password, Confirm Password
   - All inputs: bg-surface-container-high, border-outline-variant/20
   - "Update Profile" button - primary color, bottom-right

2. **Common Questions Card (Glass-card)**
   - Title with icon (quiz)
   - Expandable items (3 visible)
   - Each item: bg-surface-container-low, border outline-variant/10
   - Hover state: border-outline-variant/30, icon color changes to primary
   - Icon: expand_more (chevron)

**Right Sidebar Column:**

1. **Support Card (Glass-card)**
   - Icon badge (headset_mic)
   - "Need help?" heading
   - Support team description
   - "Contact Support" button with arrow icon

2. **Recent Performance Card (Glass-card)**
   - Title: "Recent Performance"
   - Metric rows: Last 7 Days (+4.2%), Success Streak (5 Games)
   - Progress bar (H-1.5, bg-surface-container-high, primary fill)

3. **Security Badge (bg-surface-container-low)**
   - Emerald border + green checkmark icon
   - "Two-factor authentication is active"

### Visual Elements
- **Glass-card**: Consistent styling across all sections
- **Form Inputs**: Dark background with subtle border on focus
- **Icons**: Material Symbols with context-specific colors
- **Spacing**: Consistent space-y-6, space-y-8 for sections
- **Hover States**: Smooth transitions, border changes

---

## 3. Live Scores - `sprizzybet_desktop_live_scores_final`

### Main Layout Structure
```
┌─────────────────────────────────────────────────────┐
│ SIDEBAR (64px, active: Scores) │ HEADER            │
├────────────────────────────────────────────────────┬┤
│           MAIN CONTENT (ml-64 pt-24)                │
│  Dashboard Header              │ Filter Buttons    │
│  Game Cards Grid (responsive)                      │
│  Pagination Controls                               │
│  FAB Button (fixed bottom-right)                   │
└─────────────────────────────────────────────────────┘
```

### Key Components & Sections

#### Dashboard Header
- Title row with:
  - Label: "LIVE INTELLIGENCE" (small uppercase, primary)
  - Heading: "Active Scores" (text-4xl)
  - Filter button group (segmented control style):
    - "ALL LIVE" (active - bg-surface-container-highest, text-primary)
    - "NFL", "NBA", "EPL" (inactive - text-on-surface-variant, hover state)

#### Game Cards Grid
- **Responsive Layout**: grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6
- **Card Structure** (Glass-card, rounded-xl p-6):

  1. **Status Row** (flex justify-between)
     - Left: Live indicator with pinging animation + time display (text-[10px] text-primary)
     - Right: Edge badge (bg-primary/15, border-primary/20, text-primary)

  2. **Teams Display** (space-y-4)
     - Team row 1: Team logo (w-8 h-8 rounded-full) + Team name + Score (text-2xl)
     - Team row 2: Same structure, score in text-on-surface-variant if losing
     - Logo background: bg-surface-container-highest, border border-outline-variant/20

  3. **Metrics Bento** (grid-cols-3 gap-2, pt-6 border-t)
     - Cell 1: Model Win Probability (e.g., "LAL 68%")
     - Cell 2: Kelly Odds (e.g., "1.82")
     - Cell 3: Spread Edge (e.g., "-4.5")
     - Each: bg-surface-container-high/40 p-3 rounded-xl, centered text

#### Special Card Variations
- **High Edge Card**: active-glow effect, animated border glow
- **Tight Matchup**: hover:scale-[1.02] transition
- **Value Alert Card**: Tertiary color highlights, animated ping dot
- **Finished Game**: opacity-60, button to view full stats

#### Live Animation Elements
- **Pinging Indicator**: Animated circle with 1px dot inside for "live" status
  - Uses CSS animation: animate-ping + static element
- **Glow Effects**: box-shadow with rgba primary/0.06

#### Pagination Controls
- Counter: "Showing X of Y active games"
- Pagination buttons (chevron_left, 1, 2, 3, chevron_right)
- Active page styling: bg-surface-container-highest border-primary text-primary

#### FAB Button
- Fixed bottom-8 right-8 z-50
- w-14 h-14 rounded-full
- bg-primary with bolt icon
- shadow-2xl shadow-primary/30
- hover:scale-110 active:scale-95

### Visual Elements
- **Live Status Indicators**: Green pinging dots with text overlay
- **Edge Colors**:
  - Positive Edge: Primary green
  - Neutral Edge: Generic / gray
  - Negative Value: Secondary red
  - Edge Shift: Tertiary blue
- **Status Colors**:
  - Win: Primary green
  - Loss: Secondary red
  - Neutral: Gray
- **Animations**: Pinging dots, scale transitions on hover

---

## 4. Betting Tracker - `sprizzybet_desktop_betting_tracker_final`

### Main Layout Structure
```
┌─────────────────────────────────────────────────────┐
│ SIDEBAR (64px, active: Tracker) │ HEADER           │
├─────────────────────────────────────────────────────┤
│       MAIN CONTENT (ml-64 pt-24 pb-12)              │
│   Performance Header Bento (4 columns)              │
│   Bankroll Chart Card                               │
│   Recent Outcomes Table                             │
└─────────────────────────────────────────────────────┘
```

### Key Components & Sections

#### Performance Header Bento (grid-cols-1 md:grid-cols-4)
Four cards in responsive grid (gap-6 mb-8):

1. **Total Profit Card** (Glass-card p-6)
   - Icon: trending_up (primary)
   - Label: "TOTAL PROFIT" (text-xs uppercase)
   - Value: "+$4,120.45" (text-3xl, bold)
   - Subtext: "+12.4% this month" (primary bold + gray normal)

2. **Win Rate Card**
   - Icon: ads_click (tertiary)
   - Label: "WIN RATE"
   - Value: "58%" (text-3xl)
   - Progress bar (w-full bg-surface-container-highest, fill w-[58%])

3. **ROI Card**
   - Icon: show_chart (secondary)
   - Label: "ROI"
   - Value: "22.8%" (text-3xl)
   - Subtext: "Vs 18.2% Market Avg"

4. **Active Bets Card** (with gradient background)
   - Icon: hourglass_empty
   - Label: "ACTIVE BETS"
   - Value: "12" (text-3xl)
   - Subtext: "$840.00 At Risk"

#### Bankroll Progression Chart
- **Card Header**:
  - Title: "Bankroll Progression"
  - Subtitle: "Real-time algorithmic performance tracking"
  - Time filter buttons (1W, 1M active, 3M, ALL)

- **SVG Chart Component**:
  - Smooth bezier curve (Q path commands for curves)
  - Gradient fill: primary (0% opacity) to transparent (100%)
  - Stroke: primary #3ff8b, stroke-width-4
  - Glow effect class applied
  - Tooltip point at peak value:
    - Animated dot (w-3 h-3 rounded-full, border-4 bg-primary)
    - Shadow glow: `0_0_15px_#3fff8b`
    - Glass card tooltip showing "Peak", "$12,450.00"

- **X-axis Labels**: Oct 01, Oct 08, Oct 15, Oct 22, Oct 29, Nov 05

#### Recent Feed Outcomes Table
- **Card Header**:
  - Title: "Recent Feed Outcomes"
  - "Export CSV" button with download icon

- **Table Structure** (overflow-x-auto):
  - **Headers**: Date & Time | Matchup | Market | Edge | Status | Profit/Loss
  - **Row Styling**: 
    - Hover: bg-surface-container/30 transition-colors
    - Border-b: divide-outline-variant/5
  - **Data Columns**:
    - Date & Time: Two lines (date bold, time gray)
    - Matchup: Team 1 bold + Team 2 gray
    - Market: Pill-styled badge (bg-surface-container-highest, border outline-variant/20)
    - Edge: Tertiary colored percentage (text-tertiary font-bold)
    - Status: Colored pill (bg-primary/10 text-primary border-primary/20 for WIN, secondary colors for LOSS)
      - Pill includes: dot indicator + text
    - Profit/Loss: Text-primary for wins (+$xxx.xx), text-secondary for losses (-$xxx.xx)

- **Visible Rows**: 4 outcome examples
- **Footer**: "Load More History" button, centered, text-xs uppercase

### Visual Elements
- **Chart Animation**: SVG with glow-emerald filter class
- **Status Badges**:
  - WIN: Primary green background, dot indicator
  - LOSS: Secondary red background, dot indicator
- **Profit Display**:
  - Positive: Primary green text, bold
  - Negative: Secondary red text, bold
- **Progress Bars**: Simple horizontal fill display
- **Icons**: Contextual Material Symbols (trending up, target, chart, etc.)
- **Responsive**: Stacks to single column on mobile (md: prefix)

---

## Design System Overview

### Color Palette
```
Primary Colors:
- Primary: #3fff8b (Emerald green - positive/active)
- Primary Container: #13ea79 (Darker green)
- Primary Dim: #24f07e

Secondary Colors:
- Secondary: #ff716c (Salmon red - warning/loss)
- Secondary Container: #a00118
- Secondary Fixed: #ffc3bf

Tertiary Colors:
- Tertiary: #6e9bff (Blue)
- Tertiary Container: #2778fe
- Tertiary Fixed: #8eafff

Surface Colors:
- Surface: #060e20 (Dark navy)
- Surface Container: #0f1930
- Surface Container High: #141f38
- Surface Container Highest: #192540
- Background: #060e20
- On-Surface: #dee5ff (Light text)
- On-Surface Variant: #a3aac4 (Secondary text)
```

### Typography
- **Headline Font**: Manrope (wght: 400, 600, 700, 800)
- **Body Font**: Inter (wght: 400, 500, 600)
- **Label Font**: Inter

### Border Radius
- DEFAULT: 0.25rem
- lg: 0.5rem
- xl: 0.75-1.5rem (varies)
- full: 9999px

### Common Component Patterns

#### Glass Card
```css
background: rgba(25, 37, 64, 0.6);
backdrop-filter: blur(20px);
border: 1px solid rgba(64, 72, 93, 0.2);
```

#### Badge Styling
- Pill-shaped: rounded-full
- Small uppercase text
- Custom background & border colors
- Icon dot indicators for status

#### Metrics Display
- Bento grid layouts (2-4 columns)
- Centered text alignment
- Clear label/value separation
- Color-coded by metric type

#### Interactive Elements
- Smooth transitions (transition-all duration-300)
- Scale transforms on active (active:scale-90 to active:scale-95)
- Background color changes on hover
- Border/text color shifts

---

## Component Hierarchy Summary

```
App Structure:
├── Sidebar Navigation
│   ├── Logo + Tagline
│   ├── Nav Links (Feed, Scores, Tracker, Profile)
│   └── "Place New Bet" CTA Button
│
├── Top Header
│   ├── Search Bar
│   ├── Wallet Display
│   ├── Notification/Settings Icons
│   └── User Avatar
│
└── Main Content Area
    ├── Feed
    │   └── Centered Betting Card
    │       ├── Team Matchup Display
    │       ├── Metrics Bento
    │       ├── AI Recommendation
    │       └── Swipe Action Buttons
    │
    ├── Profile
    │   ├── User Hero Section
    │   └── Bento Grid
    │       ├── Settings Form
    │       ├── FAQ Accordion
    │       ├── Support Card
    │       ├── Performance Stats
    │       └── Security Badge
    │
    ├── Scores
    │   ├── Dashboard Header + Filters
    │   └── Game Cards Grid
    │       ├── Status & Timing
    │       ├── Team Display
    │       └── Metrics Bento
    │
    └── Tracker
        ├── Performance Bento Header
        ├── Bankroll Chart
        └── Outcomes Table
```

---

## Key Data Display Patterns

### Betting Metrics
- **Spread/Line**: Displayed as text (e.g., "SLU -2.5", "-4.5")
- **Win Probability**: Percentage with large font
- **Edge**: Percentage with color coding (positive=green, negative=red)
- **Odds**: Kelly Odds format (e.g., "1.82", "2.10")

### Game Status
- **Live Games**: Pinging animated dot + time display
- **Finished Games**: "Final" label + disabled styling
- **Upcoming**: "Starts in Xh XXm" format

### Performance Tracking
- **Profit/Loss**: Currency format ($XXX.XX) with color coding
- **Win Rate**: Percentage + progress bar visualization
- **ROI**: Percentage with comparison to market average
- **Bankroll**: Line chart with peak annotation

### Team Representation
- **Logos**: Small circular avatars (8x8 to 24x24 px)
- **Names**: Team name + potentially city/abbreviation
- **Scores**: Large font (text-2xl) next to team name
- **Stacked Display**: Teams vertically arranged in card

### Status Indicators
- **Animated Elements**: Pinging dots for live games
- **Color Dots**: Small circular indicators in badges (w-1 h-1)
- **Glow Effects**: Shadow-based emphasis on key cards
- **Border Accents**: Right border highlight on active nav items

