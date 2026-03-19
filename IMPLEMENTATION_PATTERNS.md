# Implementation Patterns & Code Examples

Quick reference guide for common implementation patterns seen in the Stitch designs.

## Pattern 1: Glass Card Container

**Usage**: Feed betting card, Profile sections, Score cards, Tracker cards

```tsx
// GlassCard.tsx
interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  interactive?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glow = false,
  interactive = false,
}) => {
  return (
    <div
      className={`
        glass-card rounded-xl p-6
        ${glow ? 'active-glow' : ''}
        ${interactive ? 'hover:scale-[1.02] transition-all' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Usage
<GlassCard glow={true}>
  <h3>Content</h3>
</GlassCard>
```

**CSS** (in globals.css):
```css
.glass-card {
  background: rgba(25, 37, 64, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(64, 72, 93, 0.2);
}

.active-glow {
  box-shadow: 0px 0px 40px rgba(63, 255, 139, 0.06);
}
```

---

## Pattern 2: Metrics Bento Grid

**Usage**: Feed (Line, Win Prob, Edge), Scores (Model Win, Kelly Odds, Spread), Tracker (all header cards)

```tsx
// MetricsBento.tsx
interface MetricItem {
  label: string
  value: string | number
  color?: 'primary' | 'secondary' | 'tertiary' | 'default'
  rightBorder?: boolean
}

interface MetricsbentoProps {
  metrics: MetricItem[]
  columns?: 2 | 3 | 4
}

export const MetricsBento: React.FC<MetricsbentoProps> = ({
  metrics,
  columns = 3,
}) => {
  const colsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns]

  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
    default: 'text-on-surface',
  }

  return (
    <div className={`grid ${colsClass} gap-1 bg-outline-variant/10 p-1 rounded-2xl`}>
      {metrics.map((metric, idx) => (
        <div
          key={idx}
          className={`
            bg-surface-container/60 p-6 rounded-xl
            flex flex-col items-center justify-center
            ${metric.rightBorder ? 'border-l border-outline-variant/20' : ''}
          `}
        >
          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2">
            {metric.label}
          </span>
          <span className={`text-2xl font-extrabold font-headline ${colorMap[metric.color || 'default']}`}>
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// Usage - Feed metrics
<MetricsBento
  metrics={[
    { label: 'Line', value: 'SLU -2.5' },
    { label: 'Win Prob', value: '52%' },
    { label: 'Edge', value: '+4.2%', color: 'primary' },
  ]}
  columns={3}
/>

// Usage - Score metrics
<MetricsBento
  metrics={[
    { label: 'Model Win', value: 'LAL 68%' },
    { label: 'Kelly Odds', value: '1.82', color: 'primary' },
    { label: 'Spread Edge', value: '-4.5' },
  ]}
  columns={3}
/>

// Usage - Tracker header (4 cards as separate MetricCards, not bento)
```

---

## Pattern 3: Status Badge with Indicator Dot

**Usage**: Scores (game status), Tracker (win/loss outcomes)

```tsx
// StatusBadge.tsx
interface StatusBadgeProps {
  status: 'win' | 'loss' | 'live' | 'pending' | 'closed'
  label: string
  animated?: boolean
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  animated = false,
}) => {
  const colorMap = {
    win: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', dot: 'bg-primary' },
    loss: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20', dot: 'bg-secondary' },
    live: { bg: 'bg-primary/15', text: 'text-primary', border: 'border-primary/20', dot: 'bg-primary' },
    pending: { bg: 'bg-surface-container', text: 'text-on-surface-variant', border: 'border-outline-variant/20', dot: 'bg-on-surface-variant' },
    closed: { bg: 'bg-surface-container', text: 'text-on-surface-variant', border: 'border-outline-variant/20', dot: 'bg-on-surface-variant' },
  }[status]

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold ${colorMap.bg} ${colorMap.text} border ${colorMap.border}`}>
      <span className={`w-1 h-1 rounded-full ${colorMap.dot} mr-1.5 ${animated ? 'animate-pulse' : ''}`}></span>
      {label}
    </span>
  )
}

// Usage
<StatusBadge status="win" label="WIN" />
<StatusBadge status="loss" label="LOSS" />
<StatusBadge status="live" label={`2nd Qtr 06:30`} animated={true} />
```

---

## Pattern 4: Pinging Indicator (Live)

**Usage**: Scores page (game status indicator)

```tsx
// LiveIndicator.tsx
interface LiveIndicatorProps {
  timeDisplay: string
}

export const LiveIndicator: React.FC<LiveIndicatorProps> = ({ timeDisplay }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-[10px] font-bold text-primary font-label uppercase tracking-widest">
        {timeDisplay}
      </span>
    </div>
  )
}

// Usage
<LiveIndicator timeDisplay="2nd Half 14:02" />
```

---

## Pattern 5: Expandable Accordion Item (FAQ)

**Usage**: Profile page FAQ section

```tsx
// FAQAccordion.tsx
interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/10 cursor-pointer hover:border-outline-variant/30 transition-all group"
          onClick={() => toggle(item.id)}
        >
          <div className="flex justify-between items-center">
            <span className="font-body font-semibold text-on-surface">
              {item.question}
            </span>
            <span
              className={`material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors transform ${
                expandedId === item.id ? 'rotate-180' : ''
              }`}
            >
              expand_more
            </span>
          </div>
          {expandedId === item.id && (
            <div className="mt-3 text-sm text-on-surface-variant leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// Usage
<FAQAccordion items={faqs} />
```

---

## Pattern 6: Color-Coded Edge Badge

**Usage**: Scores page (edge indicator on cards)

```tsx
// EdgeBadge.tsx
interface EdgeBadgeProps {
  edge: number
  label?: string
}

export const EdgeBadge: React.FC<EdgeBadgeProps> = ({ edge, label }) => {
  const isPositive = edge > 0
  const color = isPositive ? 'primary' : edge < 0 ? 'secondary' : 'on-surface-variant'
  const colorClass = {
    primary: 'bg-primary/15 border-primary/20 text-primary',
    secondary: 'bg-secondary/15 border-secondary/20 text-secondary',
    'on-surface-variant': 'bg-surface-container-highest border-outline-variant/20',
  }[color]

  return (
    <div className={`${colorClass} px-3 py-1 rounded-full border`}>
      <span className="text-[10px] font-extrabold font-label">
        {label || `${isPositive ? '+' : ''}${edge}% Edge`}
      </span>
    </div>
  )
}

// Usage
<EdgeBadge edge={12.4} /> // "+12.4% Edge" with green styling
<EdgeBadge edge={-2.4} label="-2.4% Value" /> // "-2.4% Value" with red styling
<EdgeBadge edge={0} /> // "Neutral Edge" with gray styling
```

---

## Pattern 7: Progress Bar (Win Rate Display)

**Usage**: Tracker page (win rate metric)

```tsx
// ProgressBar.tsx
interface ProgressBarProps {
  percentage: number
  color?: 'primary' | 'secondary' | 'tertiary'
  animated?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = 'primary',
  animated = false,
}) => {
  const colorMap = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color]

  return (
    <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
      <div
        className={`${colorMap} h-full rounded-full transition-all ${animated ? 'duration-1000' : ''}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      ></div>
    </div>
  )
}

// Usage
<ProgressBar percentage={58} color="primary" />
```

---

## Pattern 8: Circular Action Button (Swipe Actions)

**Usage**: Feed page (swipe/action buttons)

```tsx
// CircleButton.tsx
interface CircleButtonProps {
  icon: string
  label: string
  color: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'lg'
  onClick: () => void
  large?: boolean
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  label,
  color,
  size = 'sm',
  onClick,
  large = false,
}) => {
  const sizeClass = large ? 'w-24 h-24' : size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'
  const colorMap = {
    primary: 'bg-gradient-to-br from-primary to-primary-container text-on-primary-container shadow-2xl shadow-primary/20',
    secondary: 'glass-card text-secondary border border-secondary/20 hover:bg-secondary/10',
    tertiary: 'glass-card text-tertiary border border-tertiary/20 hover:bg-tertiary/10',
  }[color]

  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`
          ${sizeClass} rounded-full flex items-center justify-center
          ${colorMap}
          active:scale-90 transition-all
        `}
      >
        <span className={`material-symbols-outlined ${large ? 'text-5xl' : 'text-3xl'}`}>
          {icon}
        </span>
      </button>
      {!large && (
        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-center whitespace-nowrap w-full">
          {label}
        </span>
      )}
    </div>
  )
}

// Usage
<div className="flex items-center gap-8">
  <CircleButton icon="close" label="Not Betting" color="secondary" onClick={onSkip} />
  <CircleButton icon="local_fire_department" label="Bet This" color="primary" size="lg" onClick={onBet} large />
  <CircleButton icon="favorite" label="Considering" color="tertiary" onClick={onConsider} />
</div>
```

---

## Pattern 9: Team Display with Logo & Score

**Usage**: Feed card, Scores cards

```tsx
// TeamRow.tsx
interface TeamRowProps {
  name: string
  logo: string
  score: number | string
  isLosing?: boolean
}

export const TeamRow: React.FC<TeamRowProps> = ({ name, logo, score, isLosing = false }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden">
          <img
            src={logo}
            alt={name}
            className="w-6 h-6 rounded-full object-cover"
          />
        </div>
        <span className="font-headline font-bold text-lg text-on-surface">
          {name}
        </span>
      </div>
      <span className={`font-headline font-extrabold text-2xl ${isLosing ? 'text-on-surface-variant' : 'text-on-surface'}`}>
        {score}
      </span>
    </div>
  )
}

// Usage
<div className="space-y-4">
  <TeamRow name="Lakers" logo={lakers} score={104} />
  <TeamRow name="Celtics" logo={celtics} score={98} isLosing={true} />
</div>
```

---

## Pattern 10: Responsive Bento Grid

**Usage**: Profile page (2-col + 1 sidebar on desktop, stacks on mobile)

```tsx
// BentoLayout.tsx
export const BentoLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {children}
    </div>
  )
}

// Usage
<BentoLayout>
  <div className="lg:col-span-2 space-y-6">
    <SettingsCard />
    <FAQCard />
  </div>
  <div className="space-y-8">
    <SupportCard />
    <PerformanceCard />
  </div>
</BentoLayout>
```

---

## Pattern 11: Responsive Game Grid

**Usage**: Scores page (game cards)

```tsx
// GameCardGrid.tsx
interface GameCardGridProps {
  games: Game[]
  columns?: 'auto' | 'fixed'
}

export const GameCardGrid: React.FC<GameCardGridProps> = ({ games, columns = 'auto' }) => {
  const gridClass = columns === 'auto' 
    ? 'grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3'
    : 'grid-cols-1'

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

// Usage
<GameCardGrid games={liveGames} />
```

---

## Pattern 12: Table Row with Status Badge

**Usage**: Tracker page (outcomes table)

```tsx
// OutcomeRow.tsx
interface OutcomeRowProps {
  outcome: BettingOutcome
}

export const OutcomeRow: React.FC<OutcomeRowProps> = ({ outcome }) => {
  const isWin = outcome.status === 'win'

  return (
    <tr className="hover:bg-surface-container/30 transition-colors border-b border-outline-variant/5">
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm font-semibold text-on-surface">
          {outcome.date.toLocaleDateString()}
        </p>
        <p className="text-xs text-on-surface-variant">
          {outcome.date.toLocaleTimeString()}
        </p>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-on-surface">{outcome.team1}</span>
          <span className="text-sm font-medium text-on-surface-variant">{outcome.team2}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded-md text-xs font-bold border border-outline-variant/20">
          {outcome.market}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className="text-tertiary font-bold text-sm">{outcome.edge}%</span>
      </td>
      <td className="px-6 py-4 text-center">
        <StatusBadge status={isWin ? 'win' : 'loss'} label={isWin ? 'WIN' : 'LOSS'} />
      </td>
      <td className={`px-6 py-4 text-right font-bold ${isWin ? 'text-primary' : 'text-secondary'}`}>
        {isWin ? '+' : ''}{outcome.profitLoss}
      </td>
    </tr>
  )
}

// Usage
{outcomes.map((outcome) => (
  <OutcomeRow key={outcome.id} outcome={outcome} />
))}
```

---

## Pattern 13: SVG Chart Container (Bankroll)

**Usage**: Tracker page (bankroll progression chart)

```tsx
// BankrollChart.tsx
interface BankrollChartProps {
  data: Array<{ date: string, value: number }>
  peakValue?: number
  peakDate?: string
}

export const BankrollChart: React.FC<BankrollChartProps> = ({ data, peakValue, peakDate }) => {
  // SVG path generation logic
  const pathData = generateSmoothPath(data)
  const peakIndex = Math.floor((data.findIndex(d => d.value === peakValue) / data.length) * 100)

  return (
    <div className="relative h-[300px] w-full">
      <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3fff8b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3fff8b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={pathData}
          fill="none"
          stroke="#3fff8b"
          strokeWidth="4"
          className="glow-emerald"
        />
        <path
          d={`${pathData} L1000,300 L0,300 Z`}
          fill="url(#chartGradient)"
        />
      </svg>

      {peakValue && (
        <div className={`absolute left-[${peakIndex}%] top-[40px] flex flex-col items-center`}>
          <div className="w-3 h-3 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_#3fff8b] z-10"></div>
          <div className="glass-card mt-2 px-3 py-1.5 rounded-lg border border-primary/30">
            <p className="text-[10px] text-on-surface-variant font-bold uppercase">Peak</p>
            <p className="text-sm font-bold text-on-surface">${peakValue}</p>
          </div>
        </div>
      )}
    </div>
  )
}
```

---

## Common Tailwind Classes Used

### Spacing
- `p-6 p-8` - Padding
- `gap-4 gap-6 gap-8` - Grid/Flex gaps
- `space-y-4 space-y-6` - Vertical spacing

### Typography
- `font-headline` - Manrope font for titles
- `font-body` - Inter font for body
- `font-label` - Inter font for labels
- `text-[10px] text-[9px]` - Small caps
- `font-extrabold font-bold font-semibold` - Font weights
- `uppercase tracking-widest` - Small caps style
- `tracking-tight tracking-tighter` - Letter spacing

### Colors
- `text-primary text-secondary text-tertiary` - Text colors
- `bg-primary/10 bg-primary/15 bg-primary/20` - Opacity variants
- `border-primary/20 border-outline-variant/10` - Border opacity
- `hover:text-primary hover:bg-slate-800/40` - Interactive states

### Borders & Radius
- `rounded-xl rounded-full rounded-lg` - Border radius
- `border border-outline-variant/20` - Borders with opacity

### Effects & Transforms
- `backdrop-blur-xl backdrop-blur-20px` - Backdrop blur
- `shadow-lg shadow-primary/20` - Shadows with color
- `active:scale-90 hover:scale-[1.02]` - Scale transforms
- `transition-all duration-300` - Smooth transitions
- `opacity-60 opacity-0` - Opacity states

### Responsive
- `md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3` - Responsive columns
- `md:flex-row md:border-l md:pl-12` - Responsive layouts

