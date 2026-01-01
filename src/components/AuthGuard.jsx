import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const AuthGuard = ({ children }) => {
  const { isAuthenticated, isLoading, sessionInfo, login } = useAuth();
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    const result = await login(password);

    if (!result.success) {
      setLoginError(result.error || "Login failed");
      setPassword(""); // Clear password on error
    }

    setIsSubmitting(false);
  };

  // Show loading spinner while checking session
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
        <p className="text-white text-lg">Checking authentication...</p>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-600 to-secondary-600 p-5">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-8 max-w-md w-full animate-fadeInScale">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 m-0 mb-2">
              🔐 Access Required
            </h2>
            <p className="text-gray-600 m-0 text-sm">
              Please enter the password to access the Shopify Reviews Dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                disabled={isSubmitting}
                autoFocus
                required
                className="px-4 py-3 border-2 border-gray-300 rounded-lg text-base transition-all duration-200 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)] disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {loginError && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded text-sm animate-[shake_0.5s_ease-in-out]">
                ❌ {loginError}
              </div>
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-br from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              disabled={isSubmitting || !password.trim()}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Authenticating...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600 m-0 mb-2">
              💡 Hint: The password is{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-primary-600 font-mono text-xs">
                admin123
              </code>
            </p>
            <p className="text-xs text-gray-500 m-0">
              🕐 Sessions last for 12 hours
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show authenticated content with session info
  return (
    <div className="w-full">
      {sessionInfo && (
        <div className="bg-green-50 border-b border-green-200 py-2 px-4 text-center">
          <span className="text-sm text-green-700 font-medium">
            ✅ Authenticated | Session expires in {sessionInfo.remainingHours}h
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default AuthGuard;
