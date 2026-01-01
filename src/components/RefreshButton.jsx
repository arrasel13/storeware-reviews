import { useState } from "react";
import { useScrapeStatus } from "../hooks/useScrapeStatus";

/**
 * Smart refresh button with rate limiting and countdown timer
 */
function RefreshButton({ appSlug, onRefreshComplete, className = "" }) {
  const {
    scrapeStatus,
    isLoading,
    error,
    countdown,
    triggerScrape,
    canScrapeNow,
    hasUpstreamChanges,
    formatRemainingTime,
  } = useScrapeStatus(appSlug);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState(null);

  const handleRefresh = async () => {
    if (!canScrapeNow || isRefreshing) return;

    setIsRefreshing(true);
    setRefreshError(null);

    try {
      const result = await triggerScrape();

      // Notify parent component
      if (onRefreshComplete) {
        onRefreshComplete(result);
      }

      // Show success message briefly
      setTimeout(() => {
        setIsRefreshing(false);
      }, 2000);
    } catch (err) {
      setRefreshError(err.message);
      setIsRefreshing(false);
    }
  };

  if (isLoading) {
    return (
      <div className={`flex flex-col gap-3 my-4 ${className}`}>
        <button
          className="flex items-center justify-center gap-2 px-6 py-3 border-none rounded-lg text-base font-semibold cursor-wait transition-all duration-300 min-h-[48px] relative overflow-hidden bg-gray-100 text-gray-600"
          disabled
        >
          <span className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin"></span>
          Loading...
        </button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 my-4 ${className}`}>
      {/* Main refresh button */}
      <button
        className={`flex items-center justify-center gap-2 px-6 py-3 border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 min-h-[48px] relative overflow-hidden ${
          canScrapeNow
            ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_4px_12px_rgba(76,175,80,0.3)] hover:from-green-600 hover:to-green-700 hover:shadow-[0_6px_16px_rgba(76,175,80,0.4)] hover:-translate-y-0.5"
            : "bg-gradient-to-br from-gray-500 to-gray-600 text-white cursor-not-allowed shadow-[0_2px_8px_rgba(158,158,158,0.2)]"
        } ${
          isRefreshing
            ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white cursor-wait"
            : ""
        }`}
        onClick={handleRefresh}
        disabled={!canScrapeNow || isRefreshing}
        title={
          canScrapeNow
            ? "Refresh data now"
            : formatRemainingTime(countdown)
            ? `Next refresh in ${formatRemainingTime(countdown)}`
            : "Refresh available"
        }
      >
        {isRefreshing ? (
          <>
            <span className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin"></span>
            Refreshing...
          </>
        ) : canScrapeNow ? (
          <>
            <span className="text-lg">🔄</span>
            Refresh Now
          </>
        ) : (
          <>
            <span className="text-lg">⏱️</span>
            {formatRemainingTime(countdown)
              ? `Next refresh in ${formatRemainingTime(countdown)}`
              : "Refresh Available"}
          </>
        )}
      </button>

      {/* Status indicators */}
      <div className="flex flex-col gap-2">
        {hasUpstreamChanges && (
          <div
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-md text-sm font-medium animate-pulse"
            title="New reviews detected upstream"
          >
            <span className="text-base">🔔</span>
            <span>New reviews available</span>
          </div>
        )}

        {scrapeStatus.last_run_at && (
          <div className="text-xs text-gray-600 text-center">
            Last refreshed:{" "}
            {new Date(scrapeStatus.last_run_at).toLocaleString()}
          </div>
        )}

        {!canScrapeNow && countdown > 0 && formatRemainingTime(countdown) && (
          <div className="flex flex-col gap-1">
            <div className="w-full h-1 bg-gray-300 rounded-sm overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-sm transition-all duration-1000"
                style={{
                  width: `${Math.max(0, 100 - (countdown / 21600) * 100)}%`,
                }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 text-center">
              Rate limit: {formatRemainingTime(countdown)} remaining
            </div>
          </div>
        )}
      </div>

      {/* Error display */}
      {(error || refreshError) && (
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-md text-sm animate-[shake_0.5s_ease-in-out]">
          <span className="text-base">⚠️</span>
          {refreshError || error}
        </div>
      )}

      {/* Success message */}
      {isRefreshing && (
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-md text-sm animate-[slideIn_0.3s_ease-out]">
          <span className="text-base">✅</span>
          Data refreshed successfully!
        </div>
      )}
    </div>
  );
}

export default RefreshButton;
