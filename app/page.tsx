"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface Recommendation {
  id: number;
  matchup: string;
  league: string;
  status: string;
  line: string;
  overUnder: string;
}

interface BetRecord {
  id: number;
  time: string;
  matchup: string;
  market: "Spread" | "Total" | "Moneyline";
  selection: string;
  status: "Pending" | "WIN" | "LOSS";
  pnl: string;
  units: number;
}

export default function Home() {
  const router = useRouter();

  const recommendations: Recommendation[] = [
    { id: 101, matchup: "Saint Louis vs Georgia", league: "NCAA Basketball", status: "Starts in 2h 14m", line: "SLU -2.5", overUnder: "O 169.5" },
    { id: 102, matchup: "Lakers vs Celtics", league: "NBA", status: "2nd Half 14:02", line: "LAL -4.5", overUnder: "O 232.5" },
    { id: 103, matchup: "Liverpool vs Chelsea", league: "EPL", status: "Half Time", line: "LIV -0.5", overUnder: "U 2.5" }
  ];
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const [pickedBets, setPickedBets] = useState<BetRecord[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("trackerBets");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const nextBetIdRef = useRef(1000);

  const persistTrackerBets = (bets: BetRecord[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("trackerBets", JSON.stringify(bets));
    }
  };

  const handleNoBet = (id: number) => {
    setFeedbackMessage(`Skipped bet for ${recommendations.find((r) => r.id === id)?.matchup}`);
    setTimeout(() => setFeedbackMessage(""), 1500);
  };

  const handleGoToBet = (id: number) => {
    setFlippedCardId(id);
  };

  const handleBetSelection = (recommendation: Recommendation, selection: string, betType: "Spread" | "Total") => {
    const newBet: BetRecord = {
      id: nextBetIdRef.current++,
      time: new Date().toLocaleString(),
      matchup: recommendation.matchup,
      market: betType,
      selection,
      status: "Pending",
      pnl: "--",
      units: 1
    };
    const nextBets = [newBet, ...pickedBets];
    setPickedBets(nextBets);
    persistTrackerBets(nextBets);
    setFeedbackMessage(`Placed bet: ${selection} (${betType})`);
    setFlippedCardId(null);
    setTimeout(() => setFeedbackMessage(""), 2000);
  };

  const handleNavigationClick = (page: string) => {
    router.push(`/${page}`);
  };

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
            className="w-full flex items-center gap-3 px-4 py-3 text-emerald-400 bg-emerald-500/10 border-r-4 border-emerald-400 rounded-l-xl translate-x-1 transition-transform text-left"
          >
            <span className="material-symbols-outlined">dynamic_feed</span>
            <span className="font-semibold text-sm">Feed</span>
          </button>
          <button
            onClick={() => handleNavigationClick("scores")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
          >
            <span className="material-symbols-outlined">sports_score</span>
            <span className="font-semibold text-sm">Scores</span>
          </button>
          <button
            onClick={() => handleNavigationClick("tracker")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-semibold text-sm">Tracker</span>
          </button>
          <button
            onClick={() => handleNavigationClick("profile")}
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
            <button onClick={() => handleNavigationClick("scores")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Scores
            </button>
            <button onClick={() => handleNavigationClick("tracker")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Tracker
            </button>
            <button onClick={() => handleNavigationClick("profile")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
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
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold font-headline tracking-tight mb-1">Welcome Back</h2>
            <p className="text-on-surface-variant text-sm">Here are your recommended picks for today</p>
          </div>

          {/* Balance Card */}
          <div className="glass-card rounded-2xl p-8 border-l-4 border-primary mb-12 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Bankroll</p>
              <button
                onClick={() => router.push("/auth")}
                className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Update Balance
              </button>
            </div>
            <p className="text-5xl font-black font-headline text-primary mb-2">$2,450.00</p>
            <p className="text-sm text-primary font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">trending_up</span>
              +$450.00 this month (22.5% ROI)
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-2">Win Rate</p>
              <p className="text-2xl font-black text-primary">58%</p>
              <p className="text-xs text-on-surface-variant mt-1">29 / 50 bets</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-2">Avg Odds</p>
              <p className="text-2xl font-black text-tertiary">-108</p>
              <p className="text-xs text-on-surface-variant mt-1">Avg. stake: $80</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-2">This Month</p>
              <p className="text-2xl font-black text-emerald-400">+12</p>
              <p className="text-xs text-on-surface-variant mt-1">consecutive wins</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter mb-2">Pending</p>
              <p className="text-2xl font-black text-on-surface">3</p>
              <p className="text-xs text-on-surface-variant mt-1">Live bets</p>
            </div>
          </div>

          {/* Interactive Bet Picks */}
          <div className="mb-10">
            <h3 className="text-xl font-headline font-extrabold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">whatshot</span>
              Today&apos;s AI Picks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendations.map((rec) => {
                const isFlipped = flippedCardId === rec.id;
                return (
                  <div key={rec.id} className="glass-card rounded-xl p-5 relative overflow-hidden border border-surface-container-high/80">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold">{rec.league}</p>
                        <h4 className="font-bold text-lg mt-1">{rec.matchup}</h4>
                        <p className="text-xs text-on-surface-variant mt-1">{rec.status}</p>
                      </div>
                      <p className="text-sm font-black text-primary">{rec.line}</p>
                    </div>

                    {!isFlipped ? (
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => handleNoBet(rec.id)}
                          className="flex-1 py-2 rounded-lg bg-red-500/90 text-white flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                        >
                          <span className="material-symbols-outlined">close</span>
                          Not Going to Bet
                        </button>
                        <button
                          onClick={() => handleGoToBet(rec.id)}
                          className="flex-1 py-2 rounded-lg bg-emerald-500 text-white flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                        >
                          <span className="material-symbols-outlined">local_fire_department</span>
                          Going to Bet
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2 mt-4">
                        <p className="text-xs text-on-surface-variant uppercase tracking-widest">Choose Market</p>
                        <button
                          onClick={() => handleBetSelection(rec, `${rec.matchup} | ${rec.line}`, "Spread")}
                          className="w-full py-2 rounded-lg bg-surface-container-high border border-primary/40 hover:bg-primary/10 transition-all"
                        >
                          {rec.line}
                        </button>
                        <button
                          onClick={() => handleBetSelection(rec, `${rec.matchup} | ${rec.overUnder}`, "Total")}
                          className="w-full py-2 rounded-lg bg-surface-container-high border border-tertiary/40 hover:bg-tertiary/10 transition-all"
                        >
                          {rec.overUnder}
                        </button>
                        <button
                          onClick={() => setFlippedCardId(null)}
                          className="w-full py-2 rounded-lg bg-surface-container-highest border border-outline-variant/40 hover:bg-surface-container-highest/80 transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {feedbackMessage && (
              <div className="mt-4 p-3 rounded-lg bg-surface-container-high text-sm text-on-surface">
                {feedbackMessage}
              </div>
            )}
          </div>

          {/* Live Games */}
          <div className="mb-12">
            <h3 className="text-xl font-headline font-extrabold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">sports_score</span>
              Live Games
            </h3>
            <div className="space-y-4">
              {[
                { matchup: "LAL vs BOS", league: "NBA", status: "Live • Q4 8:42", userPick: "LAL -4.5", confidence: "High" },
                { matchup: "KC vs PHI", league: "NFL", status: "Live • 2:15 Q2", userPick: "KC +3.0", confidence: "Medium" },
                { matchup: "LIV vs MCI", league: "EPL", status: "Live • 25:30", userPick: "LIV -1", confidence: "High" }
              ].map((game, idx) => (
                <button
                  key={idx}
                  onClick={() => alert(`Game details: ${game.matchup} - ${game.league}`)}
                  className="w-full glass-card rounded-xl p-5 hover:bg-surface-container-high/80 transition-all text-left cursor-pointer flex justify-between items-start"
                >
                  <div>
                    <h4 className="font-black text-lg font-headline">{game.matchup}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">{game.league}</p>
                    <p className="text-xs text-on-surface-variant mt-2">{game.status}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block text-xs font-bold px-2 py-1 rounded-lg mb-2 ${
                      game.confidence === "High"
                        ? "bg-primary/20 text-primary"
                        : "bg-tertiary/20 text-tertiary"
                    }`}>
                      {game.confidence}
                    </span>
                    <p className="text-sm font-bold text-primary">{game.userPick}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming Value */}
          <div>
            <h3 className="text-xl font-headline font-extrabold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">trending_up</span>
              Upcoming Value
            </h3>
            <div className="space-y-3">
              {[
                { game: "Boston vs Miami", edge: "+2.8%", line: "BOS -3.5", time: "7:00 PM" },
                { game: "Eagles vs Cowboys", edge: "+1.5%", line: "PHI -4.0", time: "8:20 PM" },
                { game: "Arsenal vs Tottenham", edge: "+3.2%", line: "ARS -2.5", time: "12:30 PM" }
              ].map((bet, idx) => (
                <button
                  key={idx}
                  onClick={() => alert(`Selected: ${bet.game}`)}
                  className="w-full glass-card rounded-xl p-4 flex justify-between items-center hover:bg-surface-container-high/80 transition-all cursor-pointer"
                >
                  <div className="text-left">
                    <p className="font-bold text-sm">{bet.game}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{bet.line} • {bet.time}</p>
                  </div>
                  <p className="text-xl font-black text-tertiary">{bet.edge}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
