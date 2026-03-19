"use client";

import { useEffect } from "react";
import Image from "next/image";
import { app } from "../lib/firebase";

export default function Home() {
  useEffect(() => {
    console.log("Firebase App Initialized on Home Page:", app);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-4 md:px-8 h-16">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <Image
              src="https://via.placeholder.com/32"
              alt="User Profile"
              className="w-8 h-8 rounded-full bg-surface-container-highest object-cover"
              width={32}
              height={32}
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full border-2 border-surface"></span>
          </div>
          <span className="text-xl font-black text-primary italic tracking-tighter font-headline select-none">SprizzyBet</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 mr-4">
            <button className="text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors">Feed</button>
            <button className="text-primary font-label text-xs uppercase tracking-widest">Scores</button>
            <button className="text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors">Tracker</button>
            <button className="text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors">Profile</button>
          </div>
          <button className="bg-surface-container-highest/50 px-4 py-1.5 rounded-full border border-outline-variant/20 hover:border-primary/40 interactive-scale transition-all duration-200">
            <span className="font-headline font-bold tracking-tight text-primary">$2,450.00</span>
          </button>
        </div>
      </nav>

      <main className="pt-24 px-4 md:px-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-headline font-extrabold tracking-tight">Live Scores</h1>
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-[10px] font-label font-bold text-primary uppercase tracking-tighter">14 Games Live</span>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm max-w-md">Real-time analytical data synchronized with live broadcast speeds. Highlighted cards indicate active wagers.</p>
        </header>

        <div className="space-y-4">
          {/* Basketball - Active Bet */}
          <button className="w-full text-left glass-card bet-glow rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-container-high/60 transition-all duration-300 group interactive-scale">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex flex-col items-center justify-center bg-surface-container-high w-16 h-16 rounded-xl border border-outline-variant/30 shrink-0">
                <span className="text-primary font-headline text-xl font-bold">3Q</span>
                <span className="text-[10px] font-label text-on-surface-variant uppercase">04:12</span>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Active Bet</span>
                  <span className="text-tertiary text-[10px] font-bold uppercase tracking-widest">NBA • Regular Season</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image alt="LAL" className="w-6 h-6 object-contain" src="https://via.placeholder.com/24" width={24} height={24} />
                    <span className="font-headline text-lg font-bold">LAL</span>
                  </div>
                  <span className="text-on-surface-variant font-light">@</span>
                  <div className="flex items-center gap-2">
                    <Image alt="BOS" className="w-6 h-6 object-contain" src="https://via.placeholder.com/24" width={24} height={24} />
                    <span className="font-headline text-lg font-bold">BOS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Score</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-headline font-extrabold">98</span>
                    <span className="text-outline-variant">—</span>
                    <span className="text-2xl font-headline font-extrabold text-primary">104</span>
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-outline-variant/20 hidden md:block"></div>
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Edge Status</p>
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                  <span className="font-headline font-bold">+4.2%</span>
                </div>
              </div>
            </div>
          </button>

          {/* Football - Neutral */}
          <button className="w-full text-left glass-card rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-container-high/60 transition-all duration-300 group interactive-scale">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex flex-col items-center justify-center bg-surface-container-high group-hover:bg-surface-container-highest w-16 h-16 rounded-xl border border-outline-variant/30 transition-colors shrink-0">
                <span className="text-on-surface font-headline text-xl font-bold">4Q</span>
                <span className="text-[10px] font-label text-on-surface-variant uppercase">11:45</span>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">NFL • Sunday Night</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image alt="KC" className="w-6 h-6 object-contain" src="https://via.placeholder.com/24" width={24} height={24} />
                    <span className="font-headline text-lg font-bold">KC</span>
                  </div>
                  <span className="text-on-surface-variant font-light">@</span>
                  <div className="flex items-center gap-2">
                    <Image alt="PHI" className="w-6 h-6 object-contain" src="https://via.placeholder.com/24" width={24} height={24} />
                    <span className="font-headline text-lg font-bold">PHI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Score</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-headline font-extrabold">24</span>
                    <span className="text-outline-variant">—</span>
                    <span className="text-2xl font-headline font-extrabold">21</span>
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-outline-variant/20 hidden md:block"></div>
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Win Prob</p>
                <div className="flex items-center gap-1.5 text-tertiary">
                  <span className="font-headline font-bold text-on-surface">62%</span>
                </div>
              </div>
            </div>
          </button>

          {/* Soccer - Active Bet */}
          <button className="w-full text-left glass-card bet-glow rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-surface-container-high/60 transition-all duration-300 group interactive-scale">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex flex-col items-center justify-center bg-surface-container-high w-16 h-16 rounded-xl border border-outline-variant/30 shrink-0">
                <span className="text-primary font-headline text-xl font-bold">2H</span>
                <span className="text-[10px] font-label text-on-surface-variant uppercase">68'</span>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Active Bet</span>
                  <span className="text-tertiary text-[10px] font-bold uppercase tracking-widest">Premier League</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image alt="ARS" className="w-6 h-6 object-contain" src="https://via.placeholder.com/24" width={24} height={24} />
                    <span className="font-headline text-lg font-bold">ARS</span>
                  </div>
                  <span className="text-on-surface-variant font-light">@</span>
                  <div className="flex items-center gap-2">
                    <Image alt="MUN" className="w-6 h-6 object-contain" src="https://via.placeholder.com/24" width={24} height={24} />
                    <span className="font-headline text-lg font-bold">MUN</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-4 text-center">
                <div>
                  <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Score</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-headline font-extrabold">1</span>
                    <span className="text-outline-variant">—</span>
                    <span className="text-2xl font-headline font-extrabold text-primary">2</span>
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-outline-variant/20 hidden md:block"></div>
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Win Prob</p>
                <div className="flex items-center gap-1.5 text-tertiary">
                  <span className="font-headline font-bold text-on-surface">38%</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </main>
    </>
  );
}
