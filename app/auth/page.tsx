"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthPage() {
  const router = useRouter();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!auth) {
        setError("Firebase auth not initialized");
        return;
      }

      if (isSigningUp) {
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      // Redirect to home on success
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ethereal Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-tertiary/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, rgba(63, 255, 139, 0.05) 0%, rgba(6, 14, 32, 0) 70%)"
        }}></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-md px-6">
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            <h1 className="font-headline text-3xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
              SprizzyBet
            </h1>
          </div>
          <p className="text-on-surface-variant font-label text-sm tracking-wide">THE ETHEREAL ANALYST</p>
        </div>

        {/* Auth Card */}
        <div className="glass-card rounded-xl p-8 shadow-[0px_0px_40px_rgba(222,229,255,0.06)]">
          <div className="mb-8">
            <h2 className="font-headline text-xl font-bold mb-2">
              {isSigningUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-on-surface-variant text-sm">
              {isSigningUp 
                ? "Join the high-end algorithm platform" 
                : "Access your high-end algorithm dashboard"}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleAuth}>
            {/* Email Input */}
            <div className="space-y-2">
              <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-12 bg-surface-container-high border-none rounded-lg pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                  Password
                </label>
                {!isSigningUp && (
                  <a className="text-xs font-medium text-tertiary hover:text-tertiary-fixed transition-colors" href="#">
                    Forgot Password?
                  </a>
                )}
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 bg-surface-container-high border-none rounded-lg pl-12 pr-12 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Confirm Password Input (Sign Up Only) */}
            {isSigningUp && (
              <div className="space-y-2">
                <label className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant ml-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-xl">lock</span>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 bg-surface-container-high border-none rounded-lg pl-12 pr-12 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-lg bg-error/10 border border-error/30">
                <p className="text-sm font-medium text-error">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? "Processing..." : isSigningUp ? "Create Account" : "Log In"}
              </button>

              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
                <span className="text-xs text-outline font-label uppercase tracking-widest">or</span>
                <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
              </div>

              <button
                type="button"
                onClick={() => setIsSigningUp(!isSigningUp)}
                className="w-full h-12 rounded-full border border-outline-variant/40 bg-transparent text-on-surface font-headline font-semibold text-sm tracking-wide hover:bg-surface-container-highest transition-all"
              >
                {isSigningUp ? "Log In to Existing Account" : "Create New Account"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <footer className="mt-12 flex justify-center gap-8">
          <a className="text-xs font-label text-on-surface-variant hover:text-on-surface transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-xs font-label text-on-surface-variant hover:text-on-surface transition-colors" href="#">
            Terms of Service
          </a>
          <a className="text-xs font-label text-on-surface-variant hover:text-on-surface transition-colors" href="#">
            Security
          </a>
        </footer>
      </main>

      {/* Decorative Corner Elements */}
      <div className="fixed top-8 left-8 hidden md:block opacity-20">
        <div className="w-24 h-24 border-l border-t border-outline-variant"></div>
      </div>
      <div className="fixed bottom-8 right-8 hidden md:block opacity-20">
        <div className="w-24 h-24 border-r border-b border-outline-variant"></div>
      </div>
    </div>
  );
}
