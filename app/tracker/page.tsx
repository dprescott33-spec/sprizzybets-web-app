"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TrackerPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tracker");
  const [searchTerm, setSearchTerm] = useState("");

  const betHistory = [
    { id: 1, game: "Lakers vs Warriors", type: "Spread", pick: "LAL -4.5", stake: "$100", odds: "-110", result: "Won", returnVal: "+$91", date: "Dec 15, 2024" },
    { id: 2, game: "Chiefs vs Eagles", type: "ML", pick: "Chiefs", stake: "$250", odds: "-120", result: "Lost", returnVal: "-$250", date: "Dec 14, 2024" },
    { id: 3, game: "Liverpool vs Man City", type: "Over", pick: "Over 2.5", stake: "$150", odds: "-110", result: "Won", returnVal: "+$136", date: "Dec 13, 2024" },
    { id: 4, game: "Texas vs Oklahoma", type: "Spread", pick: "TXS +3.0", stake: "$200", odds: "-110", result: "Won", returnVal: "+$182", date: "Dec 12, 2024" }
  ];

  const filteredBets = betHistory.filter(bet => 
    bet.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
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
            onClick={() => setActiveTab("tracker")}
            className="w-full flex items-center gap-3 px-4 py-3 text-emerald-400 bg-emerald-500/10 border-r-4 border-emerald-400 rounded-l-xl translate-x-1 transition-transform text-left"
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
            <button onClick={() => router.push("/")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Feed
            </button>
            <button onClick={() => router.push("/scores")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Scores
            </button>
            <button className="font-medium text-emerald-400 border-b-2 border-emerald-400 px-3 py-1">
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
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold font-headline tracking-tight mb-1">Performance Tracker</h2>
          <p className="text-on-surface-variant text-sm">Detailed analytics and bet history</p>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Bankroll</p>
              <span className="material-symbols-outlined text-primary text-lg">trending_up</span>
            </div>
            <p className="text-3xl font-black font-headline text-primary mb-1">$2,450.00</p>
            <p className="text-xs text-primary font-bold">+$450.00 vs starter (+22.5%)</p>
          </div>

          <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-tertiary/10 to-tertiary/5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Win Rate</p>
              <span className="material-symbols-outlined text-tertiary text-lg">percent</span>
            </div>
            <p className="text-3xl font-black font-headline text-tertiary mb-1">58%</p>
            <p className="text-xs text-on-surface-variant font-bold">29 wins / 50 total bets</p>
          </div>

          <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-emerald-900/20 to-emerald-900/5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">ROI</p>
              <span className="material-symbols-outlined text-emerald-400 text-lg">trending_up</span>
            </div>
            <p className="text-3xl font-black font-headline text-emerald-400 mb-1">22.8%</p>
            <p className="text-xs text-on-surface-variant font-bold">Avg. stake: $80 / bet</p>
          </div>

          <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-slate-600/10 to-slate-600/5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Avg Odds</p>
              <span className="material-symbols-outlined text-on-surface-variant text-lg">equalizer</span>
            </div>
            <p className="text-3xl font-black font-headline text-on-surface mb-1">-108</p>
            <p className="text-xs text-on-surface-variant font-bold">Typically -110 to -120 range</p>
          </div>
        </div>

        {/* Bankroll Progression Chart */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-headline font-extrabold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">show_chart</span>
            Bankroll Progression
          </h3>
          
          <div className="relative h-80 mb-8">
            {/* Pseudo chart visualization */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 h-64 gap-2">
              {[
                { val: 2000, date: "1 wk ago" },
                { val: 2050, date: "" },
                { val: 1950, date: "" },
                { val: 2100, date: "" },
                { val: 2280, date: "" },
                { val: 2450, date: "Today" },
              ].map((point, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary/60 to-primary/30 backdrop-blur-sm border border-primary/30 transition-all hover:from-primary/80 hover:to-primary/50 cursor-pointer"
                    style={{ height: `${(point.val / 2450) * 100}%` }}
                  ></div>
                  {point.date && <p className="text-[0.625rem] text-on-surface-variant font-bold mt-2 text-center">{point.date}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-3 rounded-lg">
              <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Peak Bankroll</p>
              <p className="font-bold text-lg">$2,450</p>
            </div>
            <div className="bg-surface-container-low p-3 rounded-lg">
              <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Lowest Point</p>
              <p className="font-bold text-lg">$1,920</p>
            </div>
            <div className="bg-surface-container-low p-3 rounded-lg">
              <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Variance</p>
              <p className="font-bold text-lg">$530</p>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
              <p className="text-[0.625rem] font-bold text-primary uppercase tracking-tighter mb-1">Trend</p>
              <p className="font-bold text-lg text-primary">
                <span className="material-symbols-outlined text-sm align-middle">trending_up</span> Bullish
              </p>
            </div>
          </div>
        </div>

        {/* Bet History */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-headline font-extrabold flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">history</span>
              Bet History
            </h3>
            <button className="p-2 rounded-full bg-surface-container-high hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">download</span>
            </button>
          </div>

          {/* Search / Filter */}
          <div className="mb-6 flex gap-3">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-surface-container-high pl-10 pr-4 py-2 rounded-lg text-sm text-on-background placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button className="px-4 py-2 rounded-lg bg-surface-container-high font-bold text-sm hover:bg-surface-bright transition-all">
              Filter
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant/20 text-left text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-wide">
                  <th className="pb-3 px-3 text-left">Game</th>
                  <th className="pb-3 px-3 text-center">Type</th>
                  <th className="pb-3 px-3 text-center">Pick</th>
                  <th className="pb-3 px-3 text-right">Stake</th>
                  <th className="pb-3 px-3 text-center">Odds</th>
                  <th className="pb-3 px-3 text-center">Result</th>
                  <th className="pb-3 px-3 text-right">Return</th>
                  <th className="pb-3 px-3 text-right">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredBets.map((bet) => (
                  <tr key={bet.id} className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors text-sm">
                    <td className="py-4 px-3 font-bold text-on-background">{bet.game}</td>
                    <td className="py-4 px-3 text-center">
                      <span className="inline-block px-2 py-1 bg-surface-container rounded text-[0.625rem] font-bold">{bet.type}</span>
                    </td>
                    <td className="py-4 px-3 text-center text-on-surface-variant">{bet.pick}</td>
                    <td className="py-4 px-3 text-right font-bold">{bet.stake}</td>
                    <td className="py-4 px-3 text-center text-on-surface-variant">{bet.odds}</td>
                    <td className="py-4 px-3 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-[0.625rem] font-bold ${
                        bet.result === "Won" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-secondary/20 text-secondary"
                      }`}>
                        {bet.result}
                      </span>
                    </td>
                    <td className={`py-4 px-3 text-right font-black ${
                      bet.returnVal.includes("+") ? "text-primary" : "text-secondary"
                    }`}>
                      {bet.returnVal}
                    </td>
                    <td className="py-4 px-3 text-right text-on-surface-variant text-xs">{bet.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-on-surface-variant font-bold">Showing {filteredBets.length} of {betHistory.length} bets</p>
            <div className="flex gap-2">
              <button className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright transition-all text-sm font-bold disabled:opacity-50" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="px-3 py-2 rounded-lg bg-primary text-on-primary font-bold text-sm">1</button>
              <button className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-sm font-bold">2</button>
              <button className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright transition-all text-sm font-bold">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
