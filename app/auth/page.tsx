"use client"; // This page will contain interactive forms, so it needs to be a Client Component

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'; // Import Firebase Auth functions
import { auth } from '../../lib/firebase'; // Import our initialized auth instance

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(true); // Toggle between Sign Up and Sign In
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAuth = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    if (!auth) {
      setError('Authentication is not available in this environment.');
      setLoading(false);
      return;
    }

    try {
      if (isSigningUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign up successful! You can now log in.');
        setIsSigningUp(false); // After signing up, switch to sign in mode
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Sign in successful!');
        // TODO: Redirect user to a dashboard or main page after successful login
      }
    } catch (authError: any) {
      console.error("Authentication error:", authError);
      setError(authError.message); // Display Firebase error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          {isSigningUp ? 'Sign Up' : 'Sign In'}
        </h1>
        {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
        <form onSubmit={handleAuth}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            disabled={loading}
          >
            {loading ? 'Processing...' : (isSigningUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSigningUp(!isSigningUp)}
            className="text-blue-500 hover:text-blue-800 text-sm"
            disabled={loading}
          >
            {isSigningUp
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
