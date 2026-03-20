"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

interface SavedBet {
  id: number;
  gameId: number;
  timestamp: string;
  matchup: string;
  betType: string;
  league: string;
  gameTime: string;
  status: "pending" | "WIN" | "LOSS";
  result: string | null;
  units: number;
}

interface BettingCard {
  id: number;
  league: string;
  gameTime: string;
  team1: { name: string; logo: string };
  team2: { name: string; logo: string };
  homeSpread: string;
  awaySpread: string;
  total: number;
  overOdds: string;
  underOdds: string;
  homeSpreadOdds: string;
  awaySpreadOdds: string;
  winProb: string;
  edge: string;
  confidence: number;
}

const generateBetId = () => Date.now();

export default function FeedPage() {
  const router = useRouter();
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedBetType, setSelectedBetType] = useState<string | null>(null);
  const [savedBets, setSavedBets] = useState<SavedBet[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem("trackerBets");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const handleNext = useCallback(() => {
    if (cardIndex < 4) {
      setCardIndex(cardIndex + 1);
      setIsFlipped(false);
    }
  }, [cardIndex]);

  const handleSkip = handleNext;

  const handleUndo = useCallback(() => {
    if (savedBets.length > 0) {
      const updated = savedBets.slice(0, -1);
      setSavedBets(updated);
      localStorage.setItem("trackerBets", JSON.stringify(updated));
      if (cardIndex > 0) setCardIndex(cardIndex - 1);
      setIsFlipped(false);
    }
  }, [cardIndex, savedBets]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedBetType) return;

      if (e.key === "x" || e.key === "X") {
        handleSkip();
      } else if (e.code === "Space") {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      } else if (e.key === "z" || e.key === "Z") {
        handleUndo();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFlipped, selectedBetType, handleNext, handleUndo]);

  const bettingCards: BettingCard[] = [
    {
      id: 1,
      league: "NCAA Basketball",
      gameTime: "03:30 PM ET",
      team1: { name: "Saint Louis", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZRLsQppgqI4FcEn5A_UWpwyOY0x03wGUWRtlHmT5VgcEQEjgMdGV1VEJkEHbSmI1Q69rmcBAS5swWgb7x30g3dNDIsditL7PI6njiR9CFrHQTdZRMH-7wAhE0FMFUunJbbngKXG1aZfKEyayw00KcJFgRZt2ooL3kggzw1bOjt_PQE5Qn2Xnyu8UW_K95tD7Spwgv1zNVOEJtSMCQKAFlzh8KvvzBS7EplJ7NVPjpbi5ryachNShONiP4RzSJKFO7q86mxeLw5v3" },
      team2: { name: "Georgia", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVb7wNnoIkrYzghCLNwdZTbHS63S5cStX9EJg-VOd69K4MLxAhJKmq_MuAXfpuIHYDO8VwttWzvgN6e-4zPAyO6ONNlkkF5xuQ-0GgBm9BU1zEDxeNyck8-6NjbrjLYYRZZIhTKwJ_ENR3jAidPUz5O5aJi_pMt8VKAlHbQ_aVHeLh9D-Xedq0hr4DJQNBUJ9GSK9BYkLjlyU_8-1Ekns-bI8IXT1w1ympkfiLJJ5BnpZxtPeXVUa1gIbfS8ymf9lx0uCpWx8eYtWO" },
      homeSpread: "-2.5",
      awaySpread: "+2.5",
      total: 169.50,
      overOdds: "-110",
      underOdds: "-110",
      homeSpreadOdds: "-110",
      awaySpreadOdds: "-110",
      winProb: "52%",
      edge: "+4.2%",
      confidence: 3
    },
    {
      id: 2,
      league: "NBA",
      gameTime: "08:00 PM ET",
      team1: { name: "Lakers", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGAILjeN60rZe6LyrcGhzrHTSLl9XdCirWen2wX4ysP1CCVrAMvFLFN3NljFs3Ppf5OKGpApIeliJFdh0X8vNhbUVgh1e8Lk32ZW0LBWZZTOj-gdrwUNSBEbBHTg4W50WyCvgKPJLafyseVIcAphLdvGNLgxvbpdxYg70VIVFDGSw3CFhhq-nUsDVtE1tiuxfX0zo9cvej6BxaPrfvk96FPR_zLvZbxTUqTGeTFGN76q-cZPYNIjCoXUAMIQQ9re1rhzm2Xezxa542" },
      team2: { name: "Celtics", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuScbe1k7WYTYkqbFd8kp9QEnZVDrACJ78AiVPD_5Ce1SwEGxmRpSpEVdDAGGNs_Q3pVMleJ09HPqzsQBFDXdnuRQFNFKD61LBQFL6Tf2c1cPWa0fBLzO2M2J34l1dHZY3bjKnANb7P30OtI6-Wkk9mdCv2mVipVgMDWonVbTKcF4yf1NqWoTI1F7FOLHtk8lV1tL8gUp7KByNPxMLz-pw8xiigrr5CRC4YHY1U-O7N_LXmKOkAs7xv5UHcEB63ZcB_sk9W0AoLvii" },
      homeSpread: "-1.5",
      awaySpread: "+1.5",
      total: 218.5,
      overOdds: "-110",
      underOdds: "-110",
      homeSpreadOdds: "-115",
      awaySpreadOdds: "-105",
      winProb: "58%",
      edge: "+3.8%",
      confidence: 3
    },
    {
      id: 3,
      league: "EPL Football",
      gameTime: "12:30 PM ET",
      team1: { name: "Manchester City", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsD6FWlsC564BzCdEYr-jM4UZmv0j-1LpZN--VXu8PfB_85F41Pe-IhWm_uiZXPbGOUVs8zQf24HuwuoOTLiTPl8WoPRf9xo38FMJs_guXfjFftT5BXUlNAjI-VZfkaVun2CKheRiSKJoiSclGp5UvdcoHPF0-dsQOQqZHhBVy1zc6s-VXHPNlfWb55eykp_WHdrw4lFY5iNlETbHTpYfwOS31lsfwz3SQRxPB7GcsMvOsCMnqyY42Kf82F6PIJ-iL3VOFUU2hmKr" },
      team2: { name: "Liverpool", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmfuG3ujeRUQII3Pkwechlfa2GdFxafbmCAHjTzsVfjZQnBkutVx8bn1K4QsNdFw8VUu4kmZC4Yr6nZeuEJUpMUBc6W5GlU4Y9_zUg4dfOn5sji3fDKY1sjcjIQeku1BIjwXOvgRQg7otUngSIBZyB8cAZFMhOv4jhBQ0dkP_J82HkgqakoeWvBE7WdnL4sRgShxFf4rbPBfast1aVtfvWdxGgure9wT_exlGKGl9G271BjERYpArmbh2KWswnwkqhYAWNwXRin6gP" },
      homeSpread: "-0.75",
      awaySpread: "+0.75",
      total: 2.5,
      overOdds: "-110",
      underOdds: "-110",
      homeSpreadOdds: "-120",
      awaySpreadOdds: "-100",
      winProb: "55%",
      edge: "+2.1%",
      confidence: 2
    },
    {
      id: 4,
      league: "NFL",
      gameTime: "01:00 PM ET",
      team1: { name: "Kansas City", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ZRLsQppgqI4FcEn5A_UWpwyOY0x03wGUWRtlHmT5VgcEQEjgMdGV1VEJkEHbSmI1Q69rmcBAS5swWgb7x30g3dNDIsditL7PI6njiR9CFrHQTdZRMH-7wAhE0FMFUunJbbngKXG1aZfKEyayw00KcJFgRZt2ooL3kggzw1bOjt_PQE5Qn2Xnyu8UW_K95tD7Spwgv1zNVOEJtSMCQKAFlzh8KvvzBS7EplJ7NVPjpbi5ryachNShONiP4RzSJKFO7q86mxeLw5v3" },
      team2: { name: "Buffalo", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVb7wNnoIkrYzghCLNwdZTbHS63S5cStX9EJg-VOd69K4MLxAhJKmq_MuAXfpuIHYDO8VwttWzvgN6e-4zPAyO6ONNlkkF5xuQ-0GgBm9BU1zEDxeNyck8-6NjbrjLYYRZZIhTKwJ_ENR3jAidPUz5O5aJi_pMt8VKAlHbQ_aVHeLh9D-Xedq0hr4DJQNBUJ9GSK9BYkLjlyU_8-1Ekns-bI8IXT1w1ympkfiLJJ5BnpZxtPeXVUa1gIbfS8ymf9lx0uCpWx8eYtWO" },
      homeSpread: "-3.0",
      awaySpread: "+3.0",
      total: 44.5,
      overOdds: "-110",
      underOdds: "-110",
      homeSpreadOdds: "-110",
      awaySpreadOdds: "-110",
      winProb: "60%",
      edge: "+2.8%",
      confidence: 3
    },
    {
      id: 5,
      league: "NBA",
      gameTime: "10:30 PM ET",
      team1: { name: "Warriors", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGAILjeN60rZe6LyrcGhzrHTSLl9XdCirWen2wX4ysP1CCVrAMvFLFN3NljFs3Ppf5OKGpApIeliJFdh0X8vNhbUVgh1e8Lk32ZW0LBWZZTOj-gdrwUNSBEbBHTg4W50WyCvgKPJLafyseVIcAphLdvGNLgxvbpdxYg70VIVFDGSw3CFhhq-nUsDVtE1tiuxfX0zo9cvej6BxaPrfvk96FPR_zLvZbxTUqTGeTFGN76q-cZPYNIjCoXUAMIQQ9re1rhzm2Xezxa542" },
      team2: { name: "Suns", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuScbe1k7WYTYkqbFd8kp9QEnZVDrACJ78AiVPD_5Ce1SwEGxmRpSpEVdDAGGNs_Q3pVMleJ09HPqzsQBFDXdnuRQFNFKD61LBQFL6Tf2c1cPWa0fBLzO2M2J34l1dHZY3bjKnANb7P30OtI6-Wkk9mdCv2mVipVgMDWonVbTKcF4yf1NqWoTI1F7FOLHtk8lV1tL8gUp7KByNPxMLz-pw8xiigrr5CRC4YHY1U-O7N_LXmKOkAs7xv5UHcEB63ZcB_sk9W0AoLvii" },
      homeSpread: "-4.5",
      awaySpread: "+4.5",
      total: 220.0,
      overOdds: "-110",
      underOdds: "-110",
      homeSpreadOdds: "-110",
      awaySpreadOdds: "-110",
      winProb: "54%",
      edge: "+3.5%",
      confidence: 2
    }
  ];

  const currentCard = bettingCards[cardIndex];
  const gamesRemaining = bettingCards.length - cardIndex;

  const handleBetClick = (betType: string) => {
    setSelectedBetType(betType);
  };

  const saveBet = (betType: string) => {
    const newBet: SavedBet = {
      id: generateBetId(),
      gameId: currentCard.id,
      timestamp: new Date().toLocaleString(),
      matchup: `${currentCard.team1.name} vs ${currentCard.team2.name}`,
      betType: betType,
      league: currentCard.league,
      gameTime: currentCard.gameTime,
      status: "pending",
      result: null,
      units: 1
    };

    const updated = [...savedBets, newBet];
    setSavedBets(updated);
    localStorage.setItem("trackerBets", JSON.stringify(updated));
    
    handleNext();
    setSelectedBetType(null);
  };



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
            className="w-full flex items-center gap-3 px-4 py-3 text-[#3fff8b] bg-[#3fff8b]/10 rounded-xl transition-all text-left text-sm border-l-2 border-[#3fff8b]"
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
            onClick={() => router.push("/tracker")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white rounded-xl transition-all text-left text-sm hover:bg-white/5"
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
      <main className="lg:ml-64 pt-24 px-4 md:px-8 pb-12 w-full h-screen overflow-y-auto flex items-center justify-center">
        {/* Bet Selection Modal */}
        {selectedBetType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Confirm Bet</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-tight mb-1">Game</p>
                  <p className="text-lg font-bold text-white">{currentCard.team1.name} vs {currentCard.team2.name}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-tight mb-1">Your Selection</p>
                  <p className="text-lg font-bold text-[#3fff8b]">{selectedBetType}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-tight mb-1">Units</p>
                  <p className="text-lg font-bold text-white">1 Unit</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedBetType(null)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => saveBet(selectedBetType)}
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-[#3fff8b] to-[#3fff8b]/80 text-black font-bold hover:scale-105 transition-all"
                >
                  Confirm Bet
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="h-full flex flex-col items-center justify-center px-8 relative">
          {/* Games Remaining Counter */}
          <div className="absolute top-8 right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2">
            <p className="text-sm font-bold text-slate-300">{gamesRemaining} games left</p>
          </div>

          {currentCard ? (
            <>
              {/* Central Flipping Card */}
              <div 
                className="w-full max-w-2xl"
                style={{
                  perspective: "1000px",
                  minHeight: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    width: "100%",
                    height: "100%",
                    position: "relative"
                  }}
                >
                  {/* Front of card - Game info */}
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden"
                    }}
                    className="w-full h-full"
                  >
                    <div className="w-full max-w-2xl glass-card rounded-2xl p-8 relative shadow-[0px_0px_40px_rgba(63,255,139,0.1)]">
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#3fff8b]/10 px-3 py-1 rounded-full border border-[#3fff8b]/20">
                            <span className="text-xs font-extrabold text-[#3fff8b] tracking-tighter uppercase">
                              {currentCard.league}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 font-medium">{currentCard.gameTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {currentCard.gameTime}
                        </div>
                      </div>

                      {/* Matchup Title */}
                      <div className="text-center mb-12">
                        <h2 className="text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-6">
                          {currentCard.team1.name} <span className="text-2xl text-slate-400 font-light italic">vs</span> {currentCard.team2.name}
                        </h2>
                      </div>

                      {/* Line and Total Info */}
                      <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                          <p className="text-xs uppercase font-bold text-slate-400 tracking-wide mb-2">Spread</p>
                          <p className="text-2xl font-bold text-[#3fff8b]">{currentCard.homeSpread}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                          <p className="text-xs uppercase font-bold text-slate-400 tracking-wide mb-2">Total</p>
                          <p className="text-2xl font-bold text-[#3fff8b]">{currentCard.total}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-8">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Win Prob</p>
                          <p className="text-lg font-bold text-white">{currentCard.winProb}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Edge</p>
                          <p className="text-lg font-bold text-[#3fff8b]">{currentCard.edge}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Confidence</p>
                          <div className="flex gap-1 justify-center mt-1">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-1.5 w-3 rounded ${
                                  i < currentCard.confidence ? "bg-[#3fff8b]" : "bg-white/10"
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Flip Hint */}
                      <div className="text-center text-slate-400 text-xs">
                        <button
                          onClick={() => setIsFlipped(!isFlipped)}
                          className="inline-flex items-center gap-2 hover:text-[#3fff8b] transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-sm">flip</span>
                          Click to see betting odds
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Back of card - Betting odds */}
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                    className="w-full h-full absolute"
                  >
                    <div className="w-full max-w-2xl glass-card rounded-2xl p-8 relative shadow-[0px_0px_40px_rgba(63,255,139,0.1)]">
                      <h3 className="text-2xl font-bold text-white mb-8 text-center">Select Your Bet</h3>
                      
                      {/* Spread Odds */}
                      <div className="mb-6">
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-wide mb-3">Spread</p>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => handleBetClick(`${currentCard.team1.name} ${currentCard.homeSpread}`)}
                            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#3fff8b]/50 rounded-lg p-4 text-center transition-all cursor-pointer group"
                          >
                            <p className="text-sm font-bold text-white mb-1">{currentCard.team1.name}</p>
                            <p className="text-xl font-extrabold text-[#3fff8b] mb-2">{currentCard.homeSpread}</p>
                            <p className="text-xs text-slate-400">{currentCard.homeSpreadOdds}</p>
                          </button>
                          <button
                            onClick={() => handleBetClick(`${currentCard.team2.name} ${currentCard.awaySpread}`)}
                            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#3fff8b]/50 rounded-lg p-4 text-center transition-all cursor-pointer"
                          >
                            <p className="text-sm font-bold text-white mb-1">{currentCard.team2.name}</p>
                            <p className="text-xl font-extrabold text-[#3fff8b] mb-2">{currentCard.awaySpread}</p>
                            <p className="text-xs text-slate-400">{currentCard.awaySpreadOdds}</p>
                          </button>
                        </div>
                      </div>

                      {/* Total Odds */}
                      <div>
                        <p className="text-xs uppercase font-bold text-slate-400 tracking-wide mb-3">Total {currentCard.total}</p>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => handleBetClick(`Over ${currentCard.total}`)}
                            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#3fff8b]/50 rounded-lg p-4 text-center transition-all cursor-pointer"
                          >
                            <p className="text-sm font-bold text-white mb-1">OVER</p>
                            <p className="text-xl font-extrabold text-[#3fff8b] mb-2">{currentCard.total}</p>
                            <p className="text-xs text-slate-400">{currentCard.overOdds}</p>
                          </button>
                          <button
                            onClick={() => handleBetClick(`Under ${currentCard.total}`)}
                            className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#3fff8b]/50 rounded-lg p-4 text-center transition-all cursor-pointer"
                          >
                            <p className="text-sm font-bold text-white mb-1">UNDER</p>
                            <p className="text-xl font-extrabold text-[#3fff8b] mb-2">{currentCard.total}</p>
                            <p className="text-xs text-slate-400">{currentCard.underOdds}</p>
                          </button>
                        </div>
                      </div>

                      {/* Flip back hint */}
                      <div className="text-center text-slate-400 text-xs mt-8">
                        <button
                          onClick={() => setIsFlipped(false)}
                          className="inline-flex items-center gap-2 hover:text-[#3fff8b] transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">flip</span>
                          Back to game info
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex items-center gap-8">
                <button
                  onClick={handleSkip}
                  className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-[#ff716c] border border-[#ff716c]/20 hover:bg-[#ff716c]/10 active:scale-90 transition-all group"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest text-[#ff716c] whitespace-nowrap">
                    Skip
                  </span>
                </button>

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3fff8b] to-[#3fff8b]/80 flex items-center justify-center text-black shadow-2xl shadow-[#3fff8b]/20 active:scale-90 transition-all group relative"
                >
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    local_fire_department
                  </span>
                  <span className="absolute -bottom-10 opacity-100 text-xs font-extrabold uppercase tracking-widest text-[#3fff8b]">
                    Place Bet
                  </span>
                </button>

                {savedBets.length > 0 && (
                  <button
                    onClick={handleUndo}
                    className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-[#6e9bff] border border-[#6e9bff]/20 hover:bg-[#6e9bff]/10 active:scale-90 transition-all group"
                  >
                    <span className="material-symbols-outlined text-3xl">undo</span>
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest text-[#6e9bff] whitespace-nowrap">
                      Undo
                    </span>
                  </button>
                )}
              </div>

              {/* Keyboard Hints */}
              <div className="mt-16 flex gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded border border-slate-500/20 bg-white/5">X</span>
                  Skip
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded border border-[#3fff8b]/20 bg-[#3fff8b]/10 text-[#3fff8b]">SPACE</span>
                  Flip Card
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded border border-slate-500/20 bg-white/5">Z</span>
                  Undo
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-4">No more high-priority bets today</p>
              <p className="text-slate-400 mb-8">Come back tomorrow for more trading opportunities</p>
              <button
                onClick={() => router.push("/tracker")}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3fff8b] to-[#3fff8b]/80 text-black font-bold hover:scale-105 transition-transform"
              >
                View Your Bets
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
