'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white text-black font-mono flex items-center justify-center px-4">
          <div className="max-w-2xl w-full">
            <div className="border border-black p-8">
              <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
              <p className="text-gray-700 mb-6">
                We encountered an unexpected error. Please try refreshing the page or return to the home page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors touch-manipulation"
                >
                  Refresh Page
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-black hover:bg-gray-50 transition-colors touch-manipulation"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

