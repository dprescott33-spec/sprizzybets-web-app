"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ScoresPage() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const gameCards = [
    {
      id: 1,
      status: "2nd Half 14:02",
      edge: "+12.4%",
      edgeBg: "primary",
      team1: { name: "Lakers", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiCNquWuEQvL7zLLx7LFFNPlLgFcH3TT19HIm775UVWpwyO85IXIY7mlV3td3rrdt3-qrpb6jBHmCpGTaSCvb5WxI4_1zTOp5fq-IcQeAXfEatdWxy5vlYKIQX3V9ewrXIO6RVi3-8IgL2XK2h-tRiG6gKth5df5Y5zJXQD_os5ieF123OzafMImgJtdsJWjhhkitVTOmRsZAyj60tZt3UufOg5v70fc9fmzhKyQOM2y1ycjrZYif-2NqINCunxchR8pk5dKo7Vlyb", score: 104 },
      team2: { name: "Celtics", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuScbe1k7WYTYkqbFd8kp9QEnZVDrACJ78AiVPD_5Ce1SwEGxmRpSpEVdDAGGNs_Q3pVMleJ09HPqzsQBFDXdnuRQFNFKD61LBQFL6Tf2c1cPWa0fBLzO2M2J34l1dHZY3bjKnANb7P30OtI6-Wkk9mdCv2mVipVgMDWonVbTKcF4yf1NqWoTI1F7FOLHtk8lV1tL8gUp7KByNPxMLz-pw8xiigrr5CRC4YHY1U-O7N_LXmKOkAs7xv5UHcEB63ZcB_sk9W0AoLvii", score: 98 },
      modelWin: "LAL 68%",
      kellyOdds: "1.82",
      spreadEdge: "-4.5",
      glow: true
    },
    {
      id: 2,
      status: "4th Qtr 02:45",
      edge: "Neutral Edge",
      edgeBg: "surface-container-highest",
      team1: { name: "Warriors", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrqvxWQNH3uWl7t8VAqs521et12yEo6d1USwL28aAIFGbAdlJXW7hUDWbjLhObrS94i2P4wYi1JYTaBsJGkD6ACCJ47RGK_6LB-M7Oe82jxu0G-a1DRNAvkUz3zwyGnx7jkKkiWtAnxSzpJbzOETwWfJ8x6QAfHRntwmwFBNbeIGJAApolQ93oYrLm9lW80CVttGwB_ozsyiU17mZM8Qk2PHOyUBuR2szSNfZUPAfR-CSJzOQluydgI0YFVOD_0dVFvqjOQ4CA2Ufk", score: 112 },
      team2: { name: "Bucks", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHnysQw76oyJoBSU24wUC1oSZgLxgmbwhW-rswnYmhionxbWuTcps9Pv5PzvW-pVYVBjeE5p5028QM_mk9C3g_64ROXUPlvmFF_NeO52HMWa9G9fNzAA-YiKgLx5_39On9RPMV52yE-mi3DONRD0Qv_uZPJf9WYfiywKwqY3njLImkN25Bg8wb93dWD0lbm444gcJbhonHHesX-ZI2t9d16TNeNd5Fob32uaqoKKE_LU0OUKVg7Mkrk5vzHyEB7XpAp0b9hZp_dLF6", score: 115 },
      modelWin: "MIL 52%",
      kellyOdds: "2.10",
      spreadEdge: "+2.5",
      glow: false
    },
    {
      id: 3,
      status: "1st Half 05:12",
      edge: "+8.1% Edge Shift",
      edgeBg: "tertiary",
      team1: { name: "Suns", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_pPxXHbOf6AA10YXgX0sD-OZRYwTwOrcOeAuJg9ESWqpt_2Cy2xqaNVscj18pU-0eYBAaqTicqb3RAYat02548YxED3WhjaeiV_9LtqPzxSX55w7JzukrRne-mzE_5JaaJJDIc5xjK3522OSGDpcTGtUSk5Ck5TgCk9EnmKWqaTGIsJQ0YWUkRiCBxddHnUt9HnfDC6ro2h-njem2uZKlOsM2F9Tf97r5jPguRDzifK7naisCFbYhMAcBBkR7mUM8XVezO25jUW7n", score: 42 },
      team2: { name: "Nets", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEmED0apnrE_nQnozkNDN8TVtDSPOMXfDbswaWDMcoPURWXHwVRXI4RM3w-QHHyxaTKX3FJQFTg3Zgfrhm7cMu-dHqsJiKhdsuVJIdeg9Gm700CIKHcD7iMq8sy2t5iudafjwUyxoAU_Zbu2kEG9b4nibNNeoJNyHUpbApZXWBIxtGPKoEhhDehTT4WPh-dG0A7z9YdfwigjWLTMfXhv3KzM-LRuZ9Yo_AQFMalQf3tbbPR7-7JpzdXV3bAHZYZHmy5Fm71gSxs6Ey", score: 39 },
      modelWin: "PHX 55%",
      kellyOdds: "2.05",
      spreadEdge: "-1.5",
      glow: true
    },
    {
      id: 4,
      status: "Half Time",
      edge: "-2.4% Value",
      edgeBg: "secondary",
      team1: { name: "Liverpool", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmfuG3ujeRUQII3Pkwechlfa2GdFxafbmCAHjTzsVfjZQnBkutVx8bn1K4QsNdFw8VUu4kmZC4Yr6nZeuEJUpMUBc6W5GlU4Y9_zUg4dfOn5sji3fDKY1sjcjIQeku1BIjwXOvgRQg7otUngSIBZyB8cAZFMhOv4jhBQ0dkP_J82HkgqakoeWvBE7WdnL4sRgShxFf4rbPBfast1aVtfvWdxGgure9wT_exlGKGl9G271BjERYpArmbh2KWswnwkqhYAWNwXRin6gP", score: 2 },
      team2: { name: "Chelsea", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD85QKcaTcBq1ocstXfX7RU5X_NRqaeKoWQMxbPxuO516G5YDV8naqoMgPTCDI3j_ItS8KytFowDGydv1L8h66Vw0yo9o3-rs4sTucO31sVtCNWPCVDrPppwCNQJoahequQRzortXVuWhTpmTWgDjFki2BfEaDUza9pCvo3Tu836xc3K6ttWVOaDlG3Qt6zsJbEpuRCcF9EKYJrc9y6YnnE0tOf7Gr8QIHd57xDT7GyGg4yDDjW5YKphW3hiLYHQCrSFS8PT3ov8NwG", score: 0 },
      modelWin: "LIV 88%",
      kellyOdds: "1.15",
      spreadEdge: "Overs",
      glow: false
    },
    {
      id: 5,
      status: "3rd Qtr 09:55",
      edge: "+15.2% Edge",
      edgeBg: "primary",
      team1: { name: "Knicks", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq2ONaM3XlOu507YLGY5Fylch5xjSQBqYI3mFb-ek2ehVz6WB4ALbodfkUR9qdQ5f6vw_4xwy19EJO7oh8WhVkWwFsxQpCZIEACmoDJ5hVFRHNJr9x3747YcKrvRCposPE0z7gXC2rWq1sqeUT_7B74HgXj5PaQqSDUFqqQAuV35ereNZ05u92QLYRU7SbemiagO8xFaw-QuRdF2HTUgJDZ1G2KpqL3_raRZtKveBkIgqcNhyA38wZEs_DyYRw-bGADfBzmv2N8xKl", score: 72 },
      team2: { name: "Heat", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXtbjPgOWQhzgOnFs2oFhZzsSVmDE0Bx5im41OWfAf88tAxmyFpEtJ-FM9nSfCIAHmJUWhpCj5Z7EV3S-o5XxcbfUqRLLsUrUf5h9FEHBSRETgnLK9auOVwuO0-dNEfeA08feI17sK4y3fpBSbN9JCu_dO2IsQ7quvYdzeKbbZ_jY26rPDSK5wihzj6gOBtfQaUmQUn6ahsVk3OOzRuPXjChs5usObpQ5_W0h-W3QcWRptAQMvSoy5KHqpF_cMjCqDLtwP9-mgwnRt", score: 88 },
      modelWin: "MIA 74%",
      kellyOdds: "1.45",
      spreadEdge: "+11.5",
      glow: true
    },
    {
      id: 6,
      status: "Final",
      edge: "Closed",
      edgeBg: "surface-container-highest",
      team1: { name: "Real Madrid", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoRPmbMXI9fM6lOANAC5ksbX9nwOXbYp-JxKHue-UB4Kszwr_OEbmx2mxZTlo_gLEv6txgkjuEzKyh0gcWvplKEJhaaZKgFS54Dq7QUpZOkDeOnPRvjuYcaMw1C1mUbk70gxqDt3CcytSm5939yq0UwYGpDgpQzrxcrjuzWDedw1iNbERwvzcIvG1K1EcX4ahirf0sBqXg2gAWU02LvntKLFbbij3IKC9Zlg9-9fwYJRVA7_FOiBNAvI0enoICObCk3Y6Ol7TfIzb8", score: 3 },
      team2: { name: "Man City", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsD6FWlsC564BzCdEYr-jM4UZmv0j-1LpZN--VXu8PfB_85F41Pe-IhWm_uiZXPbGOUVs8zQf24HuwuoOTLiTPl8WoPRf9xo38FMJs_guXfjFftT5BXUlNAjI-VZfkaVun2CKheRiSKJoiSclGp5UvdcoHPF0-dsQOQqZHhBVy1zc6s-VXHPNlfWb55eykp_WHdrw4lFY5iNlETbHTpYfwOS31lsfwz3SQRxPB7GcsMvOsCMnqyY42Kf82F6PIJ-iL3VOFUU2hmKr", score: 3 },
      modelWin: "RMA 51%",
      kellyOdds: "2.15",
      spreadEdge: "Draw",
      glow: false
    }
  ];

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-slate-800/20 bg-slate-950/60 backdrop-blur-xl flex flex-col h-screen py-8 px-4 z-50 shadow-[0px_0px_40px_rgba(222,229,255,0.06)]">
        <div className="mb-10 px-2 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              analytics
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent font-headline">
              SprizzyBet
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">High-End Algorithm</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <a
            onClick={() => router.push("/")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-800/40 font-semibold tracking-tight cursor-pointer"
          >
            <span className="material-symbols-outlined">dynamic_feed</span>
            <span>Feed</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-400 bg-emerald-400/10 border-r-2 border-emerald-400 font-semibold tracking-tight">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              scoreboard
            </span>
            <span>Scores</span>
          </a>
          <a
            onClick={() => router.push("/tracker")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-800/40 font-semibold tracking-tight cursor-pointer"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span>Tracker</span>
          </a>
          <a
            onClick={() => router.push("/profile")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 transition-colors hover:bg-slate-800/40 font-semibold tracking-tight cursor-pointer"
          >
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </a>
        </nav>
        <div className="mt-auto">
          <button className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-sm tracking-wide shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
            Place New Bet
          </button>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b border-slate-800/20 bg-slate-950/40 backdrop-blur-md flex justify-between items-center px-8 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
              search
            </span>
            <input
              className="w-full bg-surface-container-high border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-highest transition-all outline-none text-on-surface"
              placeholder="Search leagues or teams..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-sm">account_balance_wallet</span>
            <span className="font-inter text-sm font-bold text-on-surface">$2,450.00</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30">
              <img
                className="w-full h-full object-cover"
                alt="User profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkrRJlKyN9ICsnMp4GrmABmlldzIV-OYFmnIHClkLu0W8HQtddZZUU75J4Wqf-vA5GL5iQmHcIqT5DzGp0F1R5OvhSAaViiHweVArmDavzpSos6bCSKDxQiqhZEpasfNwPc-tvarARiZMVGARHkdC5HTZsp9RIuURQ_xnvZWEsNCof4TcFAbdL2zxt5IKlsdQrMODEPwjsFY6cImHmdnDpM6A6iKocVZE8-YwBWbrxlSoZam1OakqwN8VEWz7fTtagFbkdVw3xpBNp"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        {/* Dashboard Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Live Intelligence</span>
            <h2 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight">Active Scores</h2>
          </div>
          <div className="flex gap-3">
            <div className="flex bg-surface-container-low p-1 rounded-xl">
              {["ALL LIVE", "NFL", "NBA", "EPL"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter.toLowerCase())}
                  className={`px-6 py-2 rounded-lg text-xs font-bold font-label transition-all ${
                    selectedFilter === filter.toLowerCase()
                      ? "bg-surface-container-highest text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scores Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 mb-12">
          {gameCards.map((card) => (
            <div
              key={card.id}
              className={`glass-card rounded-xl p-6 relative overflow-hidden group transition-all ${
                card.glow ? "active-glow" : "hover:scale-[1.02]"
              }`}
            >
              {/* Status Row */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  {card.glow && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                  )}
                  <span className="text-[10px] font-bold text-primary font-label uppercase tracking-widest">
                    {card.status}
                  </span>
                </div>
                <div className={`bg-${card.edgeBg}/15 px-3 py-1 rounded-full border border-${card.edgeBg}/20`}>
                  <span className={`text-${card.edgeBg} text-[10px] font-extrabold font-label`}>{card.edge}</span>
                </div>
              </div>

              {/* Teams Row */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20">
                      <img className="w-6 h-6 rounded-full" alt={card.team1.name} src={card.team1.logo} />
                    </div>
                    <span className="font-headline font-bold text-lg text-on-surface">{card.team1.name}</span>
                  </div>
                  <span className="font-headline font-extrabold text-2xl text-on-surface">{card.team1.score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20">
                      <img className="w-6 h-6 rounded-full" alt={card.team2.name} src={card.team2.logo} />
                    </div>
                    <span className="font-headline font-bold text-lg text-on-surface">{card.team2.name}</span>
                  </div>
                  <span className="font-headline font-extrabold text-2xl text-on-surface-variant">{card.team2.score}</span>
                </div>
              </div>

              {/* Metrics Bento */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-outline-variant/10">
                <div className="bg-surface-container-high/40 p-3 rounded-xl flex flex-col items-center">
                  <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-tight mb-1">Model Win</span>
                  <span className="text-sm font-bold text-on-surface font-headline">{card.modelWin}</span>
                </div>
                <div className="bg-surface-container-high/40 p-3 rounded-xl flex flex-col items-center">
                  <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-tight mb-1">Kelly Odds</span>
                  <span className="text-sm font-bold text-on-surface font-headline">{card.kellyOdds}</span>
                </div>
                <div className="bg-surface-container-high/40 p-3 rounded-xl flex flex-col items-center">
                  <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-tight mb-1">Spread Edge</span>
                  <span className="text-sm font-bold text-on-surface font-headline">{card.spreadEdge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination/Footer */}
        <div className="mt-12 flex justify-between items-center border-t border-outline-variant/10 pt-8">
          <span className="text-on-surface-variant text-xs font-inter">
            Showing <span className="text-on-surface font-bold">12</span> of <span className="text-on-surface font-bold">48</span> active games
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-high border border-outline-variant/20 text-on-surface hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${
                  currentPage === page
                    ? "bg-surface-container-highest border border-primary text-primary"
                    : "bg-surface-container-high border border-outline-variant/20 text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-high border border-outline-variant/20 text-on-surface hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      {/* Floating AI Predictor FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl shadow-primary/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          bolt
        </span>
      </button>
    </div>
  );
}
