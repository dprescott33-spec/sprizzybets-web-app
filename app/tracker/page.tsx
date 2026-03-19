"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TrackerPage() {
  const router = useRouter();
  const [timePeriod, setTimePeriod] = useState("1M");
  const [currentPage, setCurrentPage] = useState(1);

  const recentBets = [
    { id: 1, time: "Today 2:45 PM", matchup: "GSW -4.5 vs Suns", market: "Spread", edge: "+3.2%", status: "WIN", pnl: "+$215.00" },
    { id: 2, time: "Yesterday 8:12 PM", matchup: "U 224.5 Heat vs Lakers", market: "Total", edge: "-1.8%", status: "LOSS", pnl: "-$110.00" },
    { id: 3, time: "2 days ago 7:33 PM", matchup: "DEN ML vs Mavericks", market: "Moneyline", edge: "+5.1%", status: "WIN", pnl: "+$450.00" },
    { id: 4, time: "3 days ago 1:15 PM", matchup: "BOS -9.0 vs Nets", market: "Spread", edge: "+2.4%", status: "WIN", pnl: "+$180.00" }
  ];

  return (
    <div className="flex min-h-screen bg-[#060e20] text-white font-body overflow-hidden">
      {/* Animated background glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3fff8b]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#6e9bff]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 z-40 bg-slate-950/40 backdrop-blur-2xl border-r border-white/10 flex-col pt-8 pb-8 px-4">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3fff8b] to-[#3fff8b]/60 flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-sm">bolt</span>
            </div>
            <div>
              <h2 className="text-[#3fff8b] font-extrabold text-lg leading-tight">SprizzyBet</h2>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <button
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white rounded-xl transition-all text-left text-sm hover:bg-white/5"
          >
            <span className="material-symbols-outlined">dynamic_feed</span>
            <span className="font-semibold">Feed</span>
          </button>
          <button
            onClick={() => router.push("/scores")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white rounded-xl transition-all text-left text-sm hover:bg-white/5"
          >
            <span className="material-symbols-outlined">sports_score</span>
            <span className="font-semibold">Scores</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 text-[#3fff8b] bg-[#3fff8b]/10 rounded-xl transition-all text-left text-sm border-l-2 border-[#3fff8b]"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-semibold">Tracker</span>
          </button>
          <button
            onClick={() => router.push("/profile")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white rounded-xl transition-all text-left text-sm hover:bg-white/5"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="font-semibold">Profile</span>
          </button>
        </nav>
        <div className="mt-auto space-y-3 pt-6 border-t border-white/5">
          <button className="w-full bg-gradient-to-r from-[#3fff8b] to-[#3fff8b]/80 text-black font-bold py-3 rounded-full mb-2 shadow-lg shadow-[#3fff8b]/20 hover:scale-[1.02] active:opacity-80 transition-all text-sm">
            Place New Bet
          </button>
        </div>
      </aside>

      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-8 flex-1">
          <h1 className="text-xl font-black text-[#3fff8b] hidden lg:block">SprizzyBet</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur">
            <span className="material-symbols-outlined text-[#3fff8b]">account_balance_wallet</span>
            <span className="font-bold text-sm">$2,450.00</span>
          </div>
          <button className="relative p-2 hover:bg-white/5 rounded-full transition-all">
            <span className="material-symbols-outlined text-slate-300">notifications</span>
            {/* Notification dot */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-[#3fff8b] rounded-full"></div>
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-all">
            <span className="material-symbols-outlined text-slate-300">settings</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3fff8b] to-[#6e9bff] p-0.5">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#3fff8b] text-lg">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-24 px-4 md:px-8 pb-12 w-full overflow-y-auto">
        {/* Performance Metrics Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Total Profit Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-white/20">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Profit</p>
              <span className="material-symbols-outlined text-[#3fff8b]">trending_up</span>
            </div>
            <p className="text-3xl font-black text-[#3fff8b] mb-1">+$4,120.45</p>
            <p className="text-xs text-slate-400">+12.4% this month</p>
          </div>

          {/* Win Rate Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-white/20">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Win Rate</p>
              <span className="material-symbols-outlined text-[#6e9bff]">percent</span>
            </div>
            <p className="text-3xl font-black text-[#6e9bff] mb-2">58%</p>
            <div className="w-full bg-white/5 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-[#6e9bff] to-[#3fff8b] h-1.5 rounded-full" style={{ width: '58%' }}></div>
            </div>
          </div>

          {/* ROI Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-white/20">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">ROI</p>
              <span className="material-symbols-outlined text-[#ff716c]">show_chart</span>
            </div>
            <p className="text-3xl font-black text-[#3fff8b] mb-1">22.8%</p>
            <p className="text-xs text-slate-400">vs 18.2% market avg</p>
          </div>

          {/* Active Bets Card */}
          <div className="bg-gradient-to-br from-[#3fff8b]/20 to-[#6e9bff]/10 backdrop-blur-xl border border-[#3fff8b]/30 rounded-2xl p-6 hover:border-[#3fff8b]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Bets</p>
              <span className="material-symbols-outlined text-[#3fff8b]">task</span>
            </div>
            <p className="text-3xl font-black text-white mb-1">12</p>
            <p className="text-xs text-[#3fff8b]">$840.00 at risk</p>
          </div>
        </div>

        {/* Bankroll Chart */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-[#3fff8b]">show_chart</span>
              <span>Bankroll Progression</span>
            </h3>
            <div className="flex gap-2">
              {['1W', '1M', '3M', 'ALL'].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimePeriod(period)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    timePeriod === period
                      ? 'bg-[#3fff8b] text-black'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative h-64 mb-6">
            <svg viewBox="0 0 600 200" className="w-full h-full">
              {/* Gradient definition */}
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3fff8b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3fff8b" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Path area */}
              <path
                d="M 0 150 Q 100 120 150 100 T 300 80 T 450 60 T 600 40"
                fill="url(#chartGradient)"
              />
              {/* Line stroke */}
              <path
                d="M 0 150 Q 100 120 150 100 T 300 80 T 450 60 T 600 40"
                stroke="#3fff8b"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
              />
              {/* Data points at peak */}
              <circle cx="600" cy="40" r="4" fill="#3fff8b" stroke="#3fff8b" strokeWidth="1" />
              {/* Tooltip */}
              <text x="575" y="25" fontSize="12" fill="#3fff8b" fontWeight="bold">$12,450</text>
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Oct 01</p>
              <p className="text-sm font-bold">$2,000</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Mid Oct</p>
              <p className="text-sm font-bold">$2,100</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Nov 01</p>
              <p className="text-sm font-bold">$2,300</p>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-1">Today</p>
              <p className="text-sm font-bold text-[#3fff8b]">$12,450</p>
            </div>
          </div>
        </div>

        {/* Recent Bet Outcomes Table */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-[#6e9bff]">history</span>
              <span>Recent Bet Outcomes</span>
            </h3>
            <button className="p-2 rounded-lg hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-slate-300">download</span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 px-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Date / Time</th>
                  <th className="pb-3 px-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Matchup</th>
                  <th className="pb-3 px-3 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Market</th>
                  <th className="pb-3 px-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Edge</th>
                  <th className="pb-3 px-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="pb-3 px-3 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                {recentBets.map((bet) => (
                  <tr key={bet.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="py-4 px-3 text-slate-300 font-medium">{bet.time}</td>
                    <td className="py-4 px-3 font-bold text-white">{bet.matchup}</td>
                    <td className="py-4 px-3 text-slate-400 text-sm">{bet.market}</td>
                    <td className="py-4 px-3 text-center text-slate-300">{bet.edge}</td>
                    <td className="py-4 px-3 text-center">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                        bet.status === 'WIN'
                          ? 'bg-[#3fff8b]/20 text-[#3fff8b]'
                          : 'bg-[#ff716c]/20 text-[#ff716c]'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          bet.status === 'WIN' ? 'bg-[#3fff8b]' : 'bg-[#ff716c]'
                        }`}></span>
                        {bet.status}
                      </span>
                    </td>
                    <td className={`py-4 px-3 text-right font-bold ${
                      bet.pnl.includes('+') ? 'text-[#3fff8b]' : 'text-[#ff716c]'
                    }`}>
                      {bet.pnl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-slate-400 font-semibold">Showing 4 recent bets</p>
            <button className="px-4 py-2 rounded-lg bg-[#3fff8b]/20 text-[#3fff8b] font-semibold text-sm hover:bg-[#3fff8b]/30 transition-all">
              Load More History
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
