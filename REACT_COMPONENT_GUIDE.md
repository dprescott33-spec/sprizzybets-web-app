# React Component Architecture Recommendations

Based on the Stitch design analysis, here's a recommended component structure for converting these designs to React.

## Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── MainLayout.tsx
│   │
│   ├── common/
│   │   ├── GlassCard.tsx
│   │   ├── Badge.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── BentoGrid.tsx
│   │   └── MetricCard.tsx
│   │
│   ├── feed/
│   │   ├── BettingCard.tsx
│   │   ├── TeamMatchup.tsx
│   │   ├── MetricsBento.tsx
│   │   ├── AIRecommendation.tsx
│   │   ├── SwipeActions.tsx
│   │   └── FeedPage.tsx
│   │
│   ├── profile/
│   │   ├── UserHero.tsx
│   │   ├── StatsGrid.tsx
│   │   ├── AccountSettings.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── SupportCard.tsx
│   │   ├── PerformanceCard.tsx
│   │   ├── SecurityBadge.tsx
│   │   └── ProfilePage.tsx
│   │
│   ├── scores/
│   │   ├── ScoreDashboard.tsx
│   │   ├── FilterButtons.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameMetrics.tsx
│   │   ├── LiveIndicator.tsx
│   │   ├── GameCardGrid.tsx
│   │   ├── Pagination.tsx
│   │   └── ScoresPage.tsx
│   │
│   └── tracker/
│       ├── PerformanceBento.tsx
│       ├── BankrollChart.tsx
│       ├── OutcomesTable.tsx
│       ├── StatusBadge.tsx
│       └── TrackerPage.tsx
│
├── lib/
│   ├── colors.ts
│   ├── tailwindConfig.ts
│   └── types.ts
│
└── styles/
    └── globals.css
```

## Shared Component Types

### Reusable Components

#### 1. **GlassCard**
- Used in: Feed, Profile, Scores, Tracker
- Props:
  - `children: ReactNode`
  - `className?: string`
  - `glow?: boolean` (for special cards)
  - `animate?: boolean`

```tsx
// Shows the consistent glass morphism styling
```

#### 2. **MetricCard** / **MetricBento**
- Used in: All screens
- Props:
  - `label: string` (uppercase, small)
  - `value: string | number`
  - `icon?: string` (Material Symbols name)
  - `color?: 'primary' | 'secondary' | 'tertiary' | 'default'`
  - `subtext?: string`

#### 3. **Badge**
- Used across all screens
- Props:
  - `label: string`
  - `color?: 'primary' | 'secondary' | 'tertiary'`
  - `icon?: string`
  - `size?: 'sm' | 'md' | 'lg'`
  - `variant?: 'filled' | 'outlined'`

#### 4. **StatusBadge**
- Used in: Scores, Tracker
- Props:
  - `status: 'win' | 'loss' | 'pending' | 'closed'`
  - `label: string`
  - `animated?: boolean` (for pinging effect)

---

## Page-Specific Components

### Feed Page (`/feed`)

**Core Components:**
1. **BettingCard** - Main card container
   - Accepts child components for modularity
   - Props: `sport, startTime, teams, metrics`

2. **TeamMatchup** - Team display section
   - Props: `team1, team2` (name, logo, vs text)

3. **MetricsBento** - Grid of metrics
   - 3-column grid: Line | Win Prob | Edge
   - Props: `line, winProbability, edge`

4. **AIRecommendation** - Recommendation box
   - Props: `recommendation, confidence` (0-100)
   - Renders confidence as bar indicators

5. **SwipeActions** - Action button group
   - 3 buttons: Not Betting, Bet This (large center), Considering
   - Props: `onSkip, onBet, onConsider` callbacks

6. **FeedIndicators** - Swipe navigation labels
   - Props: `sections, activeSection, onSelect`

**Data Structure:**
```tsx
interface BettingOpportunity {
  id: string
  sport: string
  startTime: Date
  team1: { name: string, logo: string }
  team2: { name: string, logo: string }
  line: string
  winProbability: number
  edge: number
  aiRecommendation: string
  confidence: number
}
```

---

### Profile Page (`/profile`)

**Core Components:**
1. **UserHero** - Top profile section with avatar
   - Props: `user: UserProfile`
   - Includes level badge, name, join date

2. **StatsGrid** - 3-column stats display
   - Props: `winRate, totalBets, roi`

3. **AccountSettings** - Form section
   - Props: `onSubmit` callback
   - Managed form state (can use React Hook Form)

4. **FAQAccordion** - Expandable FAQ items
   - Props: `faqs: FAQ[]`
   - Managed state for open/close

5. **SupportCard** - Support contact card
   - Props: `onContactClick` callback

6. **PerformanceCard** - 7-day performance stats
   - Props: `metrics: PerformanceMetrics`
   - Includes progress bar visualization

7. **SecurityBadge** - Security status display
   - Props: `isTwoFactorEnabled: boolean`

**Data Structure:**
```tsx
interface UserProfile {
  id: string
  name: string
  email: string
  avatar: string
  level: number
  joinDate: Date
  winRate: number
  totalBets: number
  roi: number
  isPro: boolean
  twoFactorEnabled: boolean
}
```

---

### Scores Page (`/scores`)

**Core Components:**
1. **ScoreDashboard** - Header section
   - Props: `totalGames: number, activeGames: number`

2. **FilterButtons** - League filter control
   - Props: `leagues: string[], selected: string, onSelect`
   - Buttons: ALL LIVE, NFL, NBA, EPL, etc.

3. **GameCardGrid** - Responsive grid container
   - Props: `games: Game[], layout?: 'grid' | 'list'`
   - Handles responsive columns

4. **GameCard** - Individual game display
   - Props: `game: Game`
   - Sub-components:
     - LiveIndicator (pinging dot)
     - Teams display (logos + scores)
     - GameMetrics (3-column bento)

5. **GameMetrics** - Card metrics section
   - Props: `modelWinProb, kellyOdds, spreadEdge`
   - Icon labels with values

6. **Pagination** - Bottom pagination controls
   - Props: `currentPage, totalPages, onPageChange`

**Data Structure:**
```tsx
interface Game {
  id: string
  sport: string
  status: 'live' | 'upcoming' | 'finished'
  timeElapsed?: string // "2nd Half 14:02"
  team1: { name: string, logo: string, score: number }
  team2: { name: string, logo: string, score: number }
  edge: number
  edgeType: 'positive' | 'neutral' | 'negative'
  modelWinProb: { team1: number, team2: number }
  kellyOdds: number
  spreadEdge: number | string
}
```

---

### Tracker Page (`/tracker`)

**Core Components:**
1. **PerformanceBento** - 4-card header grid
   - Props: `totalProfit, winRate, roi, activeBets`
   - Each card: icon, label, large value, subtext

2. **BankrollChart** - SVG line chart
   - Props: `data: BankrollData[], timeframe: '1W' | '1M' | '3M' | 'ALL'`
   - Includes peak tooldrop annotation
   - Handles chart rendering with smooth curves

3. **OutcomesTable** - Results table
   - Props: `outcomes: Outcome[], onExport`
   - Columns: Date, Matchup, Market, Edge, Status, P/L
   - Sortable by column
   - Pagination built-in

4. **StatusBadge** - Win/Loss indicator
   - Props: `status: 'win' | 'loss'`

**Data Structure:**
```tsx
interface TrackerMetrics {
  totalProfit: number
  monthlyProfit: number
  monthlyPercentage: number
  winRate: number
  roi: number
  marketAvgRoi: number
  activeBets: number
  riskAmount: number
}

interface Outcome {
  id: string
  date: Date
  team1: string
  team2: string
  market: string
  marketType: string
  edge: number
  status: 'win' | 'loss'
  profitLoss: number
}

interface BankrollData {
  date: Date
  value: number
  percentageChange: number
}
```

---

## Layout Components

### Sidebar
**Features:**
- Fixed positioning (left-0 top-0)
- Logo with tagline
- Navigation links with active state indicator
- "Place New Bet" CTA button
- Responsive (hide on mobile)

**Props:**
- `activeRoute: string`
- `onNavigate: (route: string) => void`

### Header
**Features:**
- Fixed positioning (top-0 right-0)
- Search bar with icon
- Wallet display (balance)
- Notification + Settings icons
- User avatar dropdown

**Props:**
- `balance: number`
- `onSearch: (query: string) => void`
- `onNotifications: () => void`
- `onSettings: () => void`
- `userAvatar: string`

### MainLayout
**Features:**
- Wraps Sidebar + Header + Page Content
- Manages responsive layout
- Applies global styles

**Props:**
- `children: ReactNode`
- `currentPage: string`

---

## Animations & Interactions

### CSS Animations
1. **Pinging Indicator** (Scores)
   - `animate-ping` for live games
   - Combines moving circle with static dot

2. **Scale Transforms**
   - Buttons: `active:scale-90 transition-all`
   - Cards: `hover:scale-[1.02] transition-all`

3. **Border Glows**
   - Primary cards: `box-shadow: 0px 0px 40px rgba(63, 255, 139, 0.06)`
   - Can use Tailwind's `shadow-lg` + custom colors

### React Interactions
1. **Swipe Actions** (Feed)
   - Mouse handlers on circular buttons
   - Keyboard shortcuts (←, SPACE, →)
   - Show/hide tooltips on hover

2. **Expandable Items** (Profile FAQ)
   - Click to toggle `isOpen` state
   - Smooth height transitions
   - Icon rotation on expand

3. **Filter Selection** (Scores)
   - Click to change active filter
   - Update game list based on selection

4. **Pagination** (Scores, Tracker)
   - Page number buttons and arrows
   - Disabled state on first/last page

---

## Color System (Tailwind)

Create custom color utilities in `tailwind.config.ts`:

```tsx
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#3fff8b',
        container: '#13ea79',
        dim: '#24f07e',
      },
      secondary: {
        DEFAULT: '#ff716c',
        container: '#a00118',
        fixed: '#ffc3bf',
      },
      tertiary: {
        DEFAULT: '#6e9bff',
        container: '#2778fe',
        fixed: '#8eafff',
      },
      surface: {
        DEFAULT: '#060e20',
        dim: '#060e20',
        container: '#0f1930',
        'container-high': '#141f38',
        'container-highest': '#192540',
      },
      // ... more colors
    }
  }
}
```

---

## Key Implementation Notes

### 1. Glass Card Effect
Use Tailwind + custom CSS for the consistent glass morphism look:
```css
.glass-card {
  @apply bg-opacity-60 backdrop-blur-xl border border-outline-variant/20 rounded-xl;
  background: rgba(25, 37, 64, 0.6);
  backdrop-filter: blur(20px);
}
```

### 2. Material Symbols Integration
Import from Google Fonts and use as icon library. Create a wrapper:
```tsx
<Icon name="dynamic_feed" variant="outlined" size="lg" />
```

### 3. Responsive Breakpoints
- Feed: Centered card design (responsive width)
- Profile: Stacks on mobile (lg:grid-cols-3 → md:grid-cols-1)
- Scores: 1 col → 2 cols (xl) → 3 cols (2xl)
- Tracker: Performance cards stack on mobile

### 4. State Management
- Consider using Zustand or Context API for:
  - Current page state
  - Active filters
  - User profile
  - Betting list state
  - Bankroll data

### 5. Chart Library
For Tracker's bankroll chart:
- Option 1: Raw SVG (as shown in design)
- Option 2: Recharts (React-friendly)
- Option 3: Chart.js with react-chartjs-2

### 6. Form Handling
Profile settings form:
- React Hook Form + Zod validation
- Custom styled inputs matching design

### 7. Performance Optimization
- Lazy load page components
- Memoize repeated card components (Game cards, outcome rows)
- Virtual scroll for large tables/grids

---

## Testing Strategy

Key components to unit test:
- Badge (all color variants)
- MetricCard (with/without icon, various data)
- StatusBadge (win/loss states)
- SwipeActions (button clicks)
- FAQAccordion (expand/collapse)
- GameCard (various game states)
- OutcomesTable (sorting, pagination)

Integration tests:
- Feed page interaction flow
- Profile form submission
- Scores filter changes
- Tracker timeframe switching

