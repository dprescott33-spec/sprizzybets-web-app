"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const faqItems = [
    {
      question: "How do I withdraw my winnings?",
      answer: "Withdrawals are processed within 24 hours. Navigate to your wallet, select 'Withdraw', and choose your preferred method (Crypto or Bank Transfer)."
    },
    {
      question: "What is the Edge metric?",
      answer: "Edge (%) shows the analytical advantage our model found. Positive edge means the model expects value; negative edge means the market is priced fairly or better."
    },
    {
      question: "How are win probabilities calculated?",
      answer: "Our proprietary algorithm processes 1,200+ data points per second, including injury reports, weather, historical trends, sharp money flow, and advanced statistical models."
    },
    {
      question: "Can I export my bet history?",
      answer: "Yes. On the Tracker page, click 'Export CSV' to download your complete betting history for personal record-keeping or tax purposes."
    }
  ];

  return (
    <div className="flex min-h-screen bg-surface text-on-background font-body">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-950/40 backdrop-blur-2xl border-r border-slate-800/20 flex flex-col pt-20 pb-8 px-4 hidden lg:flex">
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                bolt
              </span>
            </div>
            <div>
              <h2 className="text-emerald-400 font-extrabold text-lg leading-tight">SprizzyBet</h2>
              <p className="text-slate-500 text-xs font-semibold">High-End Algorithm</p>
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
            onClick={() => router.push("/tracker")}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-800/30 hover:text-slate-200 rounded-xl transition-all text-left"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-semibold text-sm">Tracker</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-4 py-3 text-emerald-400 bg-emerald-500/10 border-r-4 border-emerald-400 rounded-l-xl translate-x-1 transition-transform text-left"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              person
            </span>
            <span className="font-semibold text-sm">Profile</span>
          </button>
        </nav>
        <div className="mt-auto space-y-1 pt-6 border-t border-outline-variant/10">
          <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 rounded-full mb-4 shadow-lg shadow-primary/10 hover:scale-105 active:opacity-80 transition-all">
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
            <button onClick={() => router.push("/tracker")} className="font-medium text-slate-400 hover:bg-slate-800/50 hover:text-emerald-300 transition-all px-3 py-1 rounded-lg">
              Tracker
            </button>
            <button className="font-medium text-emerald-400 border-b-2 border-emerald-400 px-3 py-1">
              Profile
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-emerald-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance_wallet
            </span>
            <span className="font-bold text-emerald-400">$2,450.00</span>
          </div>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
            notifications
          </button>
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
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-24 px-8 pb-12 w-full">
        <div className="max-w-4xl">
          {/* User Hero Section */}
          <div className="glass-card rounded-2xl p-8 mb-8 bg-gradient-to-br from-primary/10 to-tertiary/5">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-primary/30 flex-shrink-0">
                <img
                  alt="Alex Rivera"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYaCiv2MLACIzs0QZIno5UtsRka58MMm8D6xABxg0iJJ6tACxq_WVEjwXs64NYDRpBOFWabNlrIM23ZeESiR6N8OmIHV1VmcZeq5Ogh5nwR23rgubQDWdYx7zpMJZp6r1jUzwlwkR0gOXjCfMTg8HkDOM0-AzMdOWgp_d8-J3QFVn2NXuS4oHHcL8gjfn2af2j978PIBvymaqVxDUK9OYzfAtdHS59EQQ6kMmI3-6Li72sSGgb2AEFPrckTtliXrmUWfpUDsILDP2S"
                  width={96}
                  height={96}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-black font-headline">Alex Rivera</h1>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">Pro Analyst</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">Joined March 2023</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Win Rate</p>
                    <p className="text-2xl font-black text-primary">68.4%</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Total Bets</p>
                    <p className="text-2xl font-black text-tertiary">1,204</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">ROI</p>
                    <p className="text-2xl font-black text-primary">+12.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-headline font-extrabold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">settings</span>
              Account Settings
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    defaultValue="arivera_pro"
                    className="w-full h-10 bg-surface-container-high border-none rounded-lg px-4 text-on-surface focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="alex.rivera@analyst.com"
                    className="w-full h-10 bg-surface-container-high border-none rounded-lg px-4 text-on-surface focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-10 bg-surface-container-high border-none rounded-lg px-4 text-on-surface focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full h-10 bg-surface-container-high border-none rounded-lg px-4 text-on-surface focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <button
                type="button"
                className="px-6 py-3 rounded-lg bg-primary text-on-primary font-bold hover:opacity-90 transition-opacity"
              >
                Update Profile
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQ */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-8">
              <h2 className="text-xl font-headline font-extrabold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">help</span>
                Common Questions
              </h2>
              <div className="space-y-3">
                {faqItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full text-left"
                  >
                    <div className="p-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-colors">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm">{item.question}</p>
                        <span className={`material-symbols-outlined transition-transform ${expandedFAQ === idx ? "rotate-180" : ""}`}>
                          expand_more
                        </span>
                      </div>
                      {expandedFAQ === idx && (
                        <p className="text-sm text-on-surface-variant mt-3">{item.answer}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-tertiary/10 to-primary/5">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-tertiary">headset_mic</span>
                </div>
                <h3 className="font-headline font-bold mb-2">Need help?</h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  Our support team is available 24/7 for technical issues or betting inquiries.
                </p>
              </div>
              <button className="w-full py-3 rounded-lg bg-tertiary text-on-primary font-bold hover:opacity-90 transition-opacity">
                Contact Support →
              </button>
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                  <p className="text-xs font-bold text-primary">Secure Account</p>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Two-factor authentication is enabled on your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
