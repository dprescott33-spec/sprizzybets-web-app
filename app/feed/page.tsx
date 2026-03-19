"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FeedPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("feed");
  const [swipeIndex, setSwipeIndex] = useState(0);

  const featuredBets = [
    {
      game: "Saint Louis vs Georgia",
      league: "CFB • Dome Conditions",
      spread: "+4.2",
      edge: "+4.2%",
      reasoning: "Moisture-weighted rush defense metrics favor Saint Louis. Georgia's secondary vulnerability in humid conditions not priced in."
    },
    {
      game: "Kansas vs Texas",
      league: "CFB • Outdoor",
      spread: "-2.1",
      edge: "+2.8%",
      reasoning: "Wind speed correlates with Texas defensive efficiency. Model shows undervaluation."
    }
  ];

  return (
    <div className="flex min-h-screen bg-surface text-on-background font-body">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-950/40 backdrop-blur-2xl border-r border-slate-800/20 flex flex-col pt-20 pb-8 px-4 hidden lg:flex">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container text-sm">analytics</span>
            </div>
            <div>
              <h2 className="text-emerald-400 font-extrabold text-lg leading-tight">SprizzyBet</h2>
              <p className="text-slate-500 text-xs font-semibold">The Ethereal Analyst</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <button
            onClick={() => setActiveTab("feed")}
            className="w-full flex items-center gap-3 px-4 py-3 text-emerald-400 bg-emerald-500/10 border-r-4 border-emerald-400 rounded-l-xl translate-x-1 transition-transform text-left"
          >
            <span className="material-symbols-outlined">dynamic_feed</span>
            <span className="font-semibold text-sm">Feed</span>
          </button>
          <button
            onClick={() => router.push("/scores")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
          >
            <span className="material-symbols-outlined">sports_score</span>
            <span className="font-semibold text-sm">Scores</span>
          </button>
          <button
            onClick={() => router.push("/tracker")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-semibold text-sm">Tracker</span>
          </button>
          <button
            onClick={() => router.push("/profile")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-semibold text-sm">Profile</span>
          </button>
        </nav>
        <div className="mt-auto space-y-1 pt-6 border-t border-outline-variant/10">
          <button className="w-full bg-primary text-on-primary font-bold py-3 rounded-full mb-4 shadow-lg shadow-primary/10 hover:scale-105 active:opacity-80 transition-all">
            Place New Bet
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-200 text-sm font-semibold text-left">
            <span className="material-symbols-outlined text-lg">settings</span>
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-slate-200 text-sm font-semibold text-left">
            <span className="material-symbols-outlined text-lg">help</span>
            Support
          </button>
        </div>
      </aside>

      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800/20 shadow-2xl shadow-emerald-900/10 flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black tracking-tighter text-emerald-400 font-headline">SprizzyBet</h1>
          <nav className="hidden md:flex gap-6 items-center">
            <button className="font-medium text-emerald-400 border-b-2 border-emerald-400 px-3 py-1">
              Feed
            </button>
            <button onClick={() => router.push("/scores")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Scores
            </button>
            <button onClick={() => router.push("/tracker")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Tracker
            </button>
            <button onClick={() => router.push("/profile")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Profile
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-emerald-400 text-lg">account_balance_wallet</span>
            <span className="font-bold text-emerald-400">$2,450.00</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border-2 border-primary/20">
              <img 
                alt="User" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh_shodIWOfVCujH6nVMuefOMdyPg0LRc3gTcOJhZHUZoM1LlZFfJNeux8mYUKVQiLPnJ60Xk9DcnZVeO3A5CS_uQJU38j57nIX-ekqtfT0Bwuo6Hr81H6yiHJTEbz6ys2KfQv3HeGTaeT7uH8W9yPLvyWlocfqLQuRfW2EauFcC3cjdwoBYFohHU2ahM26XiUz021vdwYPOJ8YVm4DQpTfx0IBPgyDA6L7alNyAjdbRuUrZaZMnZsc9n1xj3K-k0X8-7Uh3iHHgqm"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-24 px-8 pb-12 w-full">
        <div className="max-w-2xl mx-auto">
          {/* Featured Swipe Card */}
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight mb-1">Today's Top Pick</h2>
            <p className="text-on-surface-variant text-sm mb-6">Swipe through high-conviction recommendations</p>
            
            <div className="relative group">
              <div className="glass-card rounded-2xl p-8 border-l-4 border-primary shadow-2xl bg-gradient-to-br from-primary/5 to-tertiary/5">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">bolt</span>
                      Premium Pick
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary">CFB</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-surface-container">3:30 ET</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl font-black font-headline tracking-tight mb-2">{featuredBets[swipeIndex].game}</h3>
                  <p className="text-on-surface-variant text-sm">{featuredBets[swipeIndex].league}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Spread</p>
                    <p className="text-2xl font-black text-on-background">{featuredBets[swipeIndex].spread}</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-tighter mb-1">Sprizzy Edge</p>
                    <p className="text-2xl font-black text-primary">{featuredBets[swipeIndex].edge}</p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Confidence</p>
                    <p className="text-2xl font-black text-on-background">🔥🔥</p>
                  </div>
                </div>

                <div className="bg-surface-container/50 p-4 rounded-xl mb-8 border border-outline-variant/20">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Why This Pick</p>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{featuredBets[swipeIndex].reasoning}</p>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 rounded-xl bg-primary text-on-primary font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Place Bet
                  </button>
                  <button className="flex-1 py-4 rounded-xl bg-surface-container-high border border-outline-variant/30 font-bold hover:bg-surface-bright transition-all">
                    Save to Watchlist
                  </button>
                </div>
              </div>

              {/* Swipe Controls */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button 
                  onClick={() => setSwipeIndex(Math.max(0, swipeIndex - 1))}
                  className="p-2 rounded-full bg-surface-container-high border border-outline-variant/30 hover:bg-surface-bright transition-all disabled:opacity-50"
                  disabled={swipeIndex === 0}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex gap-2">
                  {featuredBets.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSwipeIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === swipeIndex ? "bg-primary" : "bg-surface-container-high"
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setSwipeIndex(Math.min(featuredBets.length - 1, swipeIndex + 1))}
                  className="p-2 rounded-full bg-surface-container-high border border-outline-variant/30 hover:bg-surface-bright transition-all disabled:opacity-50"
                  disabled={swipeIndex === featuredBets.length - 1}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Analysis Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold font-headline tracking-tight mb-6">AI Model Analysis</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass-card rounded-xl p-4">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Market Volatility</p>
                <div className="flex items-end gap-1 h-12">
                  <div className="w-1.5 bg-primary/30 h-1/3 rounded-full"></div>
                  <div className="w-1.5 bg-primary/50 h-1/2 rounded-full"></div>
                  <div className="w-1.5 bg-primary h-2/3 rounded-full"></div>
                  <div className="w-1.5 bg-primary/60 h-1/2 rounded-full"></div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-4">
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">Sharp Money Flow</p>
                <div className="flex items-end gap-1 h-12">
                  <div className="w-1.5 bg-tertiary/40 h-1/3 rounded-full"></div>
                  <div className="w-1.5 bg-tertiary/70 h-2/3 rounded-full"></div>
                  <div className="w-1.5 bg-tertiary h-5/6 rounded-full"></div>
                  <div className="w-1.5 bg-tertiary/50 h-1/2 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-headline font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology</span>
                Top Value Opportunities
              </h3>
              <div className="space-y-3">
                {[
                  { game: "Kansas vs Texas", edge: "+2.8%", reason: "Underpriced wind impact" },
                  { game: "Man City vs Arsenal", edge: "+3.1%", reason: "Injury-adjusted efficiency gap" },
                  { game: "Bulls vs Heat", edge: "+1.9%", reason: "Bench scoring variance model" }
                ].map((opp, idx) => (
                  <button 
                    key={idx}
                    onClick={() => alert(`Selected: ${opp.game}`)}
                    className="flex items-center justify-between p-4 bg-surface-container-high rounded-xl hover:bg-surface-bright transition-all cursor-pointer"
                  >
                    <div className="text-left">
                      <p className="font-bold text-sm">{opp.game}</p>
                      <p className="text-xs text-on-surface-variant">{opp.reason}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-tertiary font-black text-lg">{opp.edge}</p>
                      <p className="text-xs text-on-surface-variant">Edge</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* High Value Queue */}
          <div>
            <h2 className="text-2xl font-extrabold font-headline tracking-tight mb-6">High Value Queue</h2>
            
            <div className="space-y-4">
              {[
                { game: "Kansas vs Texas", spread: "-2.1", edge: "+2.8%", time: "3:30 ET", status: "Updating" },
                { game: "Man City vs Arsenal", spread: "-1.5", edge: "+3.1%", time: "Live", status: "Sharp Money" },
                { game: "Bulls vs Heat", spread: "+4.5", edge: "+1.9%", time: "7:30 ET", status: "Monitoring" }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => alert(`Queue Item: ${item.game}`)}
                  className="glass-card rounded-xl p-5 hover:bg-surface-container-high/80 transition-all cursor-pointer text-left flex justify-between items-center"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-sm">{item.game}</p>
                      <span className="text-[0.625rem] px-2 py-0.5 rounded bg-surface-container font-bold">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                      <span>Spread {item.spread}</span>
                      <span>•</span>
                      <span className="text-primary font-bold">{item.edge} Edge</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase">{item.status}</p>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse block mt-1"></span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
