"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function ScoresPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("scores");

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
            onClick={() => setActiveTab("scores")}
            className="w-full flex items-center gap-3 px-4 py-3 text-emerald-400 bg-emerald-500/10 border-r-4 border-emerald-400 rounded-l-xl translate-x-1 transition-transform text-left"
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
            <button onClick={() => router.push("/")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Feed
            </button>
            <button className="font-medium text-emerald-400 border-b-2 border-emerald-400 px-3 py-1">
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
                alt="User Profile" 
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
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Live Games Grid */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-extrabold font-headline tracking-tight text-on-background">Live Scores</h2>
                <p className="text-on-surface-variant text-sm mt-1">Real-time analytical edge tracking for active events</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full bg-surface-container-highest text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">NBA (12)</button>
                <button className="px-4 py-2 rounded-full bg-surface-container-highest text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">NFL (8)</button>
                <button className="px-4 py-2 rounded-full bg-surface-container-highest text-xs font-bold text-on-surface hover:bg-surface-bright transition-colors">EPL (4)</button>
              </div>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Game Card 1 */}
              <button onClick={() => alert("Lakers vs Warriors - Live Details")} className="glass-card rounded-2xl p-5 border-l-4 border-primary shadow-xl hover:bg-surface-container-high/60 transition-all cursor-pointer text-left">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[0.6875rem] font-bold tracking-widest uppercase text-primary">Live • Q4 8:42</span>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-surface-container-highest flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-xs text-primary">bolt</span>
                    <span className="text-[0.6875rem] font-bold text-on-background">High Volatility</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                        <img alt="LA Lakers" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGAILjeN60rZe6LyrcGhzrHTSLl9XdCirWen2wX4ysP1CCVrAMvFLFN3NljFs3Ppf5OKGpApIeliJFdh0X8vNhbUVgh1e8Lk32ZW0LBWZZTOj-gdrwUNSBEbBHTg4W50WyCvgKPJLafyseVIcAphLdvGNLgxvbpdxYg70VIVFDGSw3CFhhq-nUsDVtE1tiuxfX0zo9cvej6BxaPrfvk96FPR_zLvZbxTUqTGeTFGN76q-cZPYNIjCoXUAMIQQ9re1rhzm2Xezxa542" width={24} height={24} />
                      </div>
                      <span className="font-headline font-bold text-lg">Lakers</span>
                    </div>
                    <span className="text-2xl font-black font-headline">108</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                        <img alt="GS Warriors" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARtU3AYKmVeFUFtLAPRsQA9o-hAJP84wDjPYXZK4o2mEmEu7qqR04Jz9vHVOGWUpFIcYMNcliim8wP4XSsl9NzH-4pKLeEelYtu4dx7qFJ0aTvs2wFvAM8yD7EyrH1_rfZaZJaeJhv-DYxUICe5doFsyfk6slG28a2sxKDvArih76QB9Dw97pD8edc3dync9C8ab6R2KSeLshuRdoNYCuwOyvd-NSj6rpBuKRuYSpTw-4yDQp1howZPB_Ghm5ZpDgEsX_vHmBQjn9z" width={24} height={24} />
                      </div>
                      <span className="font-headline font-bold text-lg">Warriors</span>
                    </div>
                    <span className="text-2xl font-black font-headline text-on-surface-variant">104</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-surface-container-low p-3 rounded-xl">
                    <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Spread</p>
                    <p className="text-sm font-black text-on-background">-4.5</p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                    <p className="text-[0.625rem] font-bold text-primary uppercase tracking-tighter mb-1">Win Prob</p>
                    <p className="text-sm font-black text-primary">68.2%</p>
                  </div>
                  <div className="bg-tertiary/10 p-3 rounded-xl border border-tertiary/20">
                    <p className="text-[0.625rem] font-bold text-tertiary uppercase tracking-tighter mb-1">Edge</p>
                    <p className="text-sm font-black text-tertiary">+4.1%</p>
                  </div>
                </div>
              </button>

              {/* Game Card 2 */}
              <button onClick={() => alert("Chiefs vs Eagles - Live Details")} className="glass-card rounded-2xl p-5 border-l-4 border-slate-700 shadow-xl hover:bg-surface-container-high/60 transition-all cursor-pointer text-left">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[0.6875rem] font-bold tracking-widest uppercase text-on-surface-variant">Live • Q2 12:15</span>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-surface-container-highest flex items-center gap-1.5">
                    <span className="text-[0.6875rem] font-bold text-on-background">Normal</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                        <img alt="KC Chiefs" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_W52pFftGik0uTqDyNkggXIwcTfGRTkodEeRFLIgpZ9GiFzGGqx0ccuzVKfgZDNCnDwB19VR9oNRZeRWhfpet0X2LbaRqiKXs4N-mcppIfAclvP2IW2O4HyuddceIW2Lo0HHBiJtbgC8nCCYq8sXw7lGTvrdAEUhyS7PIkqnS_VylOyjFIgMDQLT2iL0JcF1PM0bGJm_t_7T8VkUuX9Yfik4TjGaUwDV55Y3uQTnyWmmfJOgXYf8tEk2M2P8gE76zSbcNSYaFXF3" width={24} height={24} />
                      </div>
                      <span className="font-headline font-bold text-lg">Chiefs</span>
                    </div>
                    <span className="text-2xl font-black font-headline">14</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden">
                        <img alt="PHI Eagles" className="w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACBh_SIT562i13Gh6GhHCfYolwlSCd2JND-O7WDCggUT3DtuwNG_kskOzM4VZtKi3eL88LMPt7mcj1NHFcSvTrB1IPU_QA-3fS6J4Ia8L0jntF5xEidPKeFACtKbRsAJ9YEvIk-AaXxRqd1iqzlj6FgcHhs41ZArLhoNYzYvzMD4RkmpexPN9LTQ62nqmOrSVJ4P6b_NYgF-ieJjL2kbXfIxKCDzoOzeKcji7CKNE6MEH9gxCx0B6WDUfyWeRVg7NcoDC6TK2JyWTB" width={24} height={24} />
                      </div>
                      <span className="font-headline font-bold text-lg">Eagles</span>
                    </div>
                    <span className="text-2xl font-black font-headline">17</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-surface-container-low p-3 rounded-xl">
                    <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Spread</p>
                    <p className="text-sm font-black text-on-background">+3.0</p>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-xl">
                    <p className="text-[0.625rem] font-bold text-on-surface-variant uppercase tracking-tighter mb-1">Win Prob</p>
                    <p className="text-sm font-black text-on-background">42.8%</p>
                  </div>
                  <div className="bg-secondary/10 p-3 rounded-xl border border-secondary/20">
                    <p className="text-[0.625rem] font-bold text-secondary uppercase tracking-tighter mb-1">Edge</p>
                    <p className="text-sm font-black text-secondary">-1.5%</p>
                  </div>
                </div>
              </button>

              {/* Featured Insights */}
              <div className="glass-card rounded-2xl p-6 md:col-span-1 bg-gradient-to-br from-surface-container/80 to-surface-variant/40 border border-primary/10">
                <h3 className="text-xl font-headline font-extrabold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                  Live Model Pulse
                </h3>
                <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Global Market Sharpness</p>
                      <p className="text-4xl font-black font-headline text-primary tracking-tighter">94.2%</p>
                    </div>
                    <div className="flex gap-1 h-12 items-end">
                      <div className="w-1 bg-primary/20 h-[40%] rounded-full"></div>
                      <div className="w-1 bg-primary/40 h-[60%] rounded-full"></div>
                      <div className="w-1 bg-primary/60 h-[80%] rounded-full"></div>
                      <div className="w-1 bg-primary h-[100%] rounded-full"></div>
                      <div className="w-1 bg-primary/80 h-[90%] rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Aggregating 1,200+ data points per second. Market is currently showing <span className="text-primary font-bold">extreme alignment</span> on Lakers moneyline movements.
                  </p>
                  <button className="w-full py-3 rounded-xl bg-surface-container-highest text-sm font-bold hover:bg-surface-bright transition-all border border-outline-variant/30">
                    View Deep Analytics
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Right Sidebar */}
          <aside className="w-full xl:w-80 shrink-0">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h2 className="text-lg font-headline font-extrabold mb-6 flex items-center justify-between">
                Live Insights
                <span className="text-[0.625rem] bg-secondary-container text-secondary px-2 py-0.5 rounded uppercase tracking-widest">Urgent</span>
              </h2>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Volatility Index</p>
                  <span className="text-sm font-black text-primary">High</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                  <div className="h-full bg-primary" style={{ width: "75%" }}></div>
                </div>
                <p className="text-[0.6875rem] text-on-surface-variant mt-2">Market reacting to late news in NFL.</p>
              </div>

              <div className="space-y-4">
                <p className="text-[0.6875rem] font-black text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/20 pb-2">Top Value Alerts</p>
                {[
                  { title: "GSW / LAL - Over 228.5", edge: "+12.4%", time: "2m ago", icon: "trending_up", color: "primary" },
                  { title: "PHI Eagles - ML", edge: "+5.1%", time: "8m ago", icon: "monitoring", color: "tertiary" },
                  { title: "Liverpool - Handicap (-1)", edge: "+8.9%", time: "12m ago", icon: "trending_up", color: "primary" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => window.alert(item.title)}
                    className="flex gap-4 items-start group cursor-pointer hover:opacity-80 transition-opacity text-left w-full"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 flex items-center justify-center shrink-0 border border-${item.color}/20 group-hover:bg-${item.color}/20 transition-all`}>
                      <span className={`material-symbols-outlined text-${item.color}`}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight">{item.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-[0.625rem] font-bold text-${item.color}`}>{item.edge} Edge</span>
                        <span className="text-[0.625rem] font-bold text-on-surface-variant">• {item.time}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <button className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-black text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                Auto-Sync Active Bets
                <span className="material-symbols-outlined text-lg">sync</span>
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
