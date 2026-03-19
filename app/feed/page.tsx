"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FeedPage() {
  const router = useRouter();
  const [cardIndex, setCardIndex] = useState(0);
  const [feedType, setFeedType] = useState("today");

  const bettingCards = [
    {
      id: 1,
      league: "NCAA Basketball",
      timeInfo: "Starts in 2h 14m",
      team1: { name: "Saint Louis", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZRLsQppgqI4FcEn5A_UWpwyOY0x03wGUWRtlHmT5VgcEQEjgMdGV1VEJkEHbSmI1Q69rmcBAS5swWgb7x30g3dNDIsditL7PI6njiR9CFrHQTdZRMH-7wAhE0FMFUunJbbngKXG1aZfKEyayw00KcJFgRZt2ooL3kggzw1bOjt_PQE5Qn2Xnyu8UW_K95tD7Spwgv1zNVOEJtSMCQKAFlzh8KvvzBS7EplJ7NVPjpbi5ryachNShONiP4RzSJKFO7q86mxeLw5v3" },
      team2: { name: "Georgia", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVb7wNnoIkrYzghCLNwdZTbHS63S5cStX9EJg-VOd69K4MLxAhJKmq_MuAXfpuIHYDO8VwttWzvgN6e-4zPAyO6ONNlkkF5xuQ-0GgBm9BU1zEDxeNyck8-6NjbrjLYYRZZIhTKwJ_ENR3jAidPUz5O5aJi_pMt8VKAlHbQ_aVHeLh9D-Xedq0hr4DJQNBUJ9GSK9BYkLjlyU_8-1Ekns-bI8IXT1w1ympkfiLJJ5BnpZxtPeXVUa1gIbfS8ymf9lx0uCpWx8eYtWO" },
      line: "SLU -2.5",
      winProb: "52%",
      edge: "+4.2%",
      recommendation: "BET OVER 169.50",
      confidence: 3
    },
    {
      id: 2,
      league: "NBA",
      timeInfo: "Live • Q3 05:22",
      team1: { name: "Lakers", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGAILjeN60rZe6LyrcGhzrHTSLl9XdCirWen2wX4ysP1CCVrAMvFLFN3NljFs3Ppf5OKGpApIeliJFdh0X8vNhbUVgh1e8Lk32ZW0LBWZZTOj-gdrwUNSBEbBHTg4W50WyCvgKPJLafyseVIcAphLdvGNLgxvbpdxYg70VIVFDGSw3CFhhq-nUsDVtE1tiuxfX0zo9cvej6BxaPrfvk96FPR_zLvZbxTUqTGeTFGN76q-cZPYNIjCoXUAMIQQ9re1rhzm2Xezxa542" },
      team2: { name: "Celtics", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuScbe1k7WYTYkqbFd8kp9QEnZVDrACJ78AiVPD_5Ce1SwEGxmRpSpEVdDAGGNs_Q3pVMleJ09HPqzsQBFDXdnuRQFNFKD61LBQFL6Tf2c1cPWa0fBLzO2M2J34l1dHZY3bjKnANb7P30OtI6-Wkk9mdCv2mVipVgMDWonVbTKcF4yf1NqWoTI1F7FOLHtk8lV1tL8gUp7KByNPxMLz-pw8xiigrr5CRC4YHY1U-O7N_LXmKOkAs7xv5UHcEB63ZcB_sk9W0AoLvii" },
      line: "LAL -1.5",
      winProb: "58%",
      edge: "+3.8%",
      recommendation: "PLAY UNDER 218.5",
      confidence: 3
    },
    {
      id: 3,
      league: "EPL Football",
      timeInfo: "Starts in 45m",
      team1: { name: "Manchester City", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsD6FWlsC564BzCdEYr-jM4UZmv0j-1LpZN--VXu8PfB_85F41Pe-IhWm_uiZXPbGOUVs8zQf24HuwuoOTLiTPl8WoPRf9xo38FMJs_guXfjFftT5BXUlNAjI-VZfkaVun2CKheRiSKJoiSclGp5UvdcoHPF0-dsQOQqZHhBVy1zc6s-VXHPNlfWb55eykp_WHdrw4lFY5iNlETbHTpYfwOS31lsfwz3SQRxPB7GcsMvOsCMnqyY42Kf82F6PIJ-iL3VOFUU2hmKr" },
      team2: { name: "Liverpool", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmfuG3ujeRUQII3Pkwechlfa2GdFxafbmCAHjTzsVfjZQnBkutVx8bn1K4QsNdFw8VUu4kmZC4Yr6nZeuEJUpMUBc6W5GlU4Y9_zUg4dfOn5sji3fDKY1sjcjIQeku1BIjwXOvgRQg7otUngSIBZyB8cAZFMhOv4jhBQ0dkP_J82HkgqakoeWvBE7WdnL4sRgShxFf4rbPBfast1aVtfvWdxGgure9wT_exlGKGl9G271BjERYpArmbh2KWswnwkqhYAWNwXRin6gP" },
      line: "MCY -0.75",
      winProb: "55%",
      edge: "+2.1%",
      recommendation: "OVER 2.5 GOALS",
      confidence: 2
    }
  ];

  const currentCard = bettingCards[cardIndex];

  const handleSwipe = (action: "skip" | "bet" | "save") => {
    if (action === "skip") {
      setCardIndex((prev) => (prev + 1) % bettingCards.length);
    } else if (action === "bet") {
      // Handle bet action
      alert(`Betting on ${currentCard.recommendation}`);
      setCardIndex((prev) => (prev + 1) % bettingCards.length);
    } else if (action === "save") {
      // Handle save action
      alert(`Saved ${currentCard.team1.name} vs ${currentCard.team2.name}`);
      setCardIndex((prev) => (prev + 1) % bettingCards.length);
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen font-body">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-slate-800/20 bg-slate-950/60 backdrop-blur-xl flex flex-col py-8 px-4 z-50">
        <div className="mb-12 px-4">
          <h1 className="text-2xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent font-headline">
            SprizzyBet
          </h1>
          <p className="text-[10px] tracking-[0.2em] uppercase text-on-surface-variant font-semibold mt-1">High-End Algorithm</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-400 bg-emerald-400/10 border-r-2 border-emerald-400 font-semibold tracking-tight transition-all cursor-pointer">
            <span className="material-symbols-outlined">dynamic_feed</span>
            <span>Feed</span>
          </a>
          <a
            onClick={() => router.push("/scores")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-all font-semibold tracking-tight cursor-pointer"
          >
            <span className="material-symbols-outlined">scoreboard</span>
            <span>Scores</span>
          </a>
          <a
            onClick={() => router.push("/tracker")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-all font-semibold tracking-tight cursor-pointer"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Tracker</span>
          </a>
          <a
            onClick={() => router.push("/profile")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 transition-all font-semibold tracking-tight cursor-pointer"
          >
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </a>
        </nav>
        <div className="mt-auto px-4">
          <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-headline font-extrabold rounded-xl shadow-lg shadow-primary/10 active:scale-95 transition-transform">
            Place New Bet
          </button>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-slate-950/40 backdrop-blur-md border-b border-slate-800/20 flex justify-between items-center px-8 z-40">
        <div className="flex items-center gap-4 bg-surface-container-high/50 px-4 py-2 rounded-lg border border-outline-variant/10">
          <span className="material-symbols-outlined text-on-surface-variant text-lg">search</span>
          <input
            className="bg-transparent border-none text-sm focus:ring-0 placeholder:text-outline w-64 outline-none"
            placeholder="Search markets..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance_wallet
            </span>
            <span className="font-headline font-bold text-primary text-sm">$2,450.00</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-slate-800/50 rounded-lg transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-slate-800/50 rounded-lg transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/30">
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWdT4mohvwZztp-a4Bh1L5q4FMUZBecIbHIFCvCANdmNvemF6xCFE_8hq5YB8NKaOIo16pZQ7aEB9MGq9qH2MDODgdTj7XpX8qVdfe7ICFcHSTPwMTQL_v9lXjIvVAtziIIEDEFL3Po8q-0i8Vl8CjSCyEVkIb6vuGy7KNdE1E9DQQ5eb8ZgrAPpkv06ZkMQqqBWDuHjHTqEAjA5gOgnmY77_ydwFXKeUCLCFQqTecEFdTSUXKI_VFEsAJL5a16T4csm2eyqxSDUXW"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-16 h-screen relative overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="h-full flex flex-col items-center justify-center px-8">
          {/* Feed Indicator Labels */}
          <div className="mb-8 flex gap-8 items-center text-on-surface-variant/40">
            <span className="text-xs font-bold tracking-widest uppercase font-headline">Previous</span>
            <div className="h-1.5 w-1.5 rounded-full bg-surface-container-highest"></div>
            <span className="text-xs font-bold tracking-widest uppercase font-headline text-on-surface underline underline-offset-8 decoration-primary decoration-2">
              Today's Edge
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-surface-container-highest"></div>
            <span className="text-xs font-bold tracking-widest uppercase font-headline">Hot Streaks</span>
          </div>

          {currentCard && (
            <>
              {/* Central Betting Card */}
              <div className="w-full max-w-2xl glass-card rounded-xl p-8 relative shadow-[0px_0px_40px_rgba(222,229,255,0.06)] group">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      <span className="text-[10px] font-extrabold text-primary font-headline tracking-tighter uppercase">
                        {currentCard.league}
                      </span>
                    </div>
                    <span className="text-[10px] text-on-surface-variant font-medium">{currentCard.timeInfo}</span>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                      <img alt={currentCard.team1.name} className="w-full h-full object-cover" src={currentCard.team1.logo} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                      <img alt={currentCard.team2.name} className="w-full h-full object-cover" src={currentCard.team2.logo} />
                    </div>
                  </div>
                </div>

                {/* Matchup Title */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface flex items-center justify-center gap-6">
                    {currentCard.team1.name} <span className="text-xl text-on-surface-variant/40 font-light italic">vs</span> {currentCard.team2.name}
                  </h2>
                </div>

                {/* Main Metrics Bento Grid */}
                <div className="grid grid-cols-3 gap-1 mb-10 bg-outline-variant/10 p-1 rounded-2xl">
                  <div className="bg-surface-container/60 p-6 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 font-label">
                      Line
                    </span>
                    <span className="text-2xl font-extrabold text-on-surface font-headline">{currentCard.line}</span>
                  </div>
                  <div className="bg-surface-container/60 p-6 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 font-label">
                      Win Prob
                    </span>
                    <span className="text-4xl font-extrabold text-on-surface font-headline leading-none">
                      {currentCard.winProb.split("%")[0]}<span className="text-lg opacity-40">%</span>
                    </span>
                  </div>
                  <div className="bg-surface-container/60 p-6 rounded-xl flex flex-col items-center justify-center border-l border-outline-variant/20">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest mb-2 font-label">
                      Edge
                    </span>
                    <span className="text-2xl font-extrabold text-primary font-headline">{currentCard.edge}</span>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">smart_toy</span>
                    </div>
                    <div>
                      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest font-label">
                        AI Recommendation
                      </p>
                      <p className="text-lg font-bold text-on-surface font-headline">{currentCard.recommendation}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest font-label">
                      Confidence
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 w-4 rounded-full ${
                            i < currentCard.confidence ? "bg-primary" : "bg-outline-variant/30"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Swipe/Action Buttons */}
              <div className="mt-12 flex items-center gap-8">
                <button
                  onClick={() => handleSwipe("skip")}
                  className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-secondary border border-secondary/20 hover:bg-secondary/10 active:scale-90 transition-all group"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Not Betting
                  </span>
                </button>

                <button
                  onClick={() => handleSwipe("bet")}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary-container shadow-2xl shadow-primary/20 active:scale-90 transition-all group relative"
                >
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_fire_department
                  </span>
                  <span className="absolute -bottom-10 opacity-100 text-[10px] font-extrabold uppercase tracking-widest text-primary">
                    Bet This
                  </span>
                </button>

                <button
                  onClick={() => handleSwipe("save")}
                  className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-tertiary border border-tertiary/20 hover:bg-tertiary/10 active:scale-90 transition-all group"
                >
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-tertiary">
                    Considering
                  </span>
                </button>
              </div>

              {/* Footer Keyboard Hints */}
              <div className="mt-16 flex gap-6 text-on-surface-variant/30 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded border border-outline-variant/20 bg-surface-container">←</span>
                  Skip
                </div>
                <div className="flex items-center gap-2 text-primary/40">
                  <span className="px-2 py-1 rounded border border-primary/20 bg-primary/10">SPACE</span>
                  Bet
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded border border-outline-variant/20 bg-surface-container">→</span>
                  Save
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
