"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-md">
        <Link
          href="/"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Create your account
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Start making smarter farm decisions today.
        </p>

        {submitted ? (
          <div className="feature-card text-center py-10">
            <p className="text-green-600 font-semibold mb-2">Thanks for signing up!</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Account creation will be connected to Better Auth + Supabase.
            </p>
            <Link
              href="/dashboard"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Continue to dashboard →
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="feature-card space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-green-600 text-white py-3 font-semibold hover:bg-green-700"
            >
              Sign up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
