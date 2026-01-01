import { useState, useEffect } from "react";
import Analytics from "./components/Analytics";
import AccessTabbed from "./pages/AccessTabbed";
import ReviewCount from "./pages/ReviewCount";
import ReviewCredit from "./pages/ReviewCreditSimple";
import { CacheProvider } from "./context/CacheContext";

function App() {
  const [currentView, setCurrentView] = useState("analytics"); // 'analytics', 'access-tabbed', 'appwise-reviews', or 'agent-reviews'

  console.log("App rendering with currentView:", currentView);
  console.log("ReviewCredit component:", ReviewCredit);
  console.log("ReviewCredit component name:", ReviewCredit.name);

  // Update document title based on current view
  useEffect(() => {
    const titles = {
      analytics: "Analytics Dashboard - Shopify App Review Analytics",
      "access-tabbed": "Access Reviews - Shopify App Review Analytics",
      "appwise-reviews": "Appwise Reviews - Shopify App Review Analytics",
      "agent-reviews": "Agent Reviews - Shopify App Review Analytics",
    };
    document.title = titles[currentView] || "Shopify App Review Analytics";
  }, [currentView]);

  return (
    <CacheProvider>
      <div className="min-h-screen bg-gradient-to-br from-primary-600 to-secondary-600 p-3 w-full box-border font-sans">
        <header className="mb-4 text-white p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <div className="flex-1 text-left">
              <h1 className="text-3xl m-0 mb-1 font-bold text-white text-left drop-shadow-sm">
                Shopify App Review Analytics
              </h1>
              <p className="text-sm m-0 opacity-95 text-white text-left leading-normal">
                Comprehensive analytics dashboard for tracking and analyzing
                Shopify app reviews
              </p>
            </div>
            <nav className="flex justify-end items-center">
              <div className="flex gap-2 m-0 flex-wrap items-center">
                <button
                  className={`px-3 py-2 border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap ${
                    currentView === "analytics"
                      ? "bg-white text-primary-600 shadow-md"
                      : "bg-white/20 text-white hover:bg-white/30 hover:-translate-y-px"
                  }`}
                  onClick={() => setCurrentView("analytics")}
                >
                  Analytics
                </button>
                <button
                  className={`px-3 py-2 border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap ${
                    currentView === "access-tabbed"
                      ? "bg-white text-primary-600 shadow-md"
                      : "bg-white/20 text-white hover:bg-white/30 hover:-translate-y-px"
                  }`}
                  onClick={() => setCurrentView("access-tabbed")}
                >
                  Access Reviews
                </button>
                <button
                  className={`px-3 py-2 border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap ${
                    currentView === "appwise-reviews"
                      ? "bg-white text-primary-600 shadow-md"
                      : "bg-white/20 text-white hover:bg-white/30 hover:-translate-y-px"
                  }`}
                  onClick={() => setCurrentView("appwise-reviews")}
                >
                  Appwise Reviews
                </button>
                <button
                  className={`px-3 py-2 border-none rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 shadow-sm whitespace-nowrap ${
                    currentView === "agent-reviews"
                      ? "bg-white text-primary-600 shadow-md"
                      : "bg-white/20 text-white hover:bg-white/30 hover:-translate-y-px"
                  }`}
                  onClick={() => setCurrentView("agent-reviews")}
                >
                  Agent Reviews
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className="w-full m-0 flex flex-col gap-5">
          {currentView === "analytics" ? (
            <Analytics />
          ) : currentView === "access-tabbed" ? (
            <AccessTabbed />
          ) : currentView === "appwise-reviews" ? (
            <ReviewCount />
          ) : currentView === "agent-reviews" ? (
            <ReviewCredit />
          ) : (
            <Analytics />
          )}
        </main>
      </div>
    </CacheProvider>
  );
}

export default App;
