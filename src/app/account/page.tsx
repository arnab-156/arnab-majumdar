'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { buttonStyle, invertedButtonStyle } from "../utility/stylevariables";

const authBaseUrl = process.env.NEXT_PUBLIC_AUTH_BASE_URL ?? "http://localhost:4000";

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated' | 'error';

type RemoteUser = {
  displayName?: string;
  emails?: Array<{ value: string }>;
  provider?: string;
};

export default function AccountPage() {
  const [status, setStatus] = useState<AuthStatus>('loading');
  const [user, setUser] = useState<RemoteUser | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch(`${authBaseUrl}/auth/success`, {
          credentials: 'include',
        });

        if (!response.ok) {
          setStatus('unauthenticated');
          setMessage('You are not logged in.');
          return;
        }

        const data = await response.json();
        setUser(data.user ?? null);
        setStatus('authenticated');
      } catch (error) {
        console.error(error);
        setMessage('Unable to load account details.');
        setStatus('error');
      }
    };

    fetchAccount();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${authBaseUrl}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      setStatus('unauthenticated');
      setUser(null);
      setMessage('You have been logged out.');
    } catch (error) {
      console.error(error);
      setMessage('Logout failed. Please try again.');
    }
  };

  const primaryEmail = user?.emails?.[0]?.value;
  const displayName = user?.displayName ?? primaryEmail ?? 'Friend';

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 pb-32">
      <div className="max-w-2xl w-full px-6">
        <h1 className="text-3xl font-bold text-center uppercase mb-6">Account</h1>

        {status === 'loading' && (
          <p className="text-center">Loading your account...</p>
        )}

        {status === 'authenticated' && (
          <div className="bg-white/80 dark:bg-gray-900/60 rounded-xl shadow-md p-6 text-center">
            <p className="text-xl font-semibold mb-4">Welcome back, {displayName}!</p>
            <p className="mb-6">Provider: {user?.provider ?? 'Unknown'}</p>
            {primaryEmail && <p className="mb-6">Email: {primaryEmail}</p>}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleLogout} className={`${invertedButtonStyle} px-6 py-2`}>
                Logout
              </button>
              <Link href="/" className={`${buttonStyle} px-6 py-2 text-center`}>
                Go Home
              </Link>
            </div>
          </div>
        )}

        {(status === 'unauthenticated' || status === 'error') && (
          <div className="bg-white/80 dark:bg-gray-900/60 rounded-xl shadow-md p-6 text-center">
            <p className="mb-6">{message || 'Sign in to see your account details.'}</p>
            <Link href="/login" className={`${buttonStyle} text-center`}>
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
