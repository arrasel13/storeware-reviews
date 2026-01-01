import { useState } from "react";

const MonitoringControls = ({ selectedApp, onMonitoringComplete }) => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [lastRun, setLastRun] = useState(null);
  const [results, setResults] = useState(null);

  const runMonitoring = async (appName = null) => {
    setIsMonitoring(true);
    setResults(null);

    try {
      const response = await fetch("/backend/api/run-monitoring.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          app_name: appName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResults(data);
        setLastRun(new Date().toLocaleString());

        // Notify parent component that monitoring is complete
        if (onMonitoringComplete) {
          onMonitoringComplete(data);
        }
      } else {
        throw new Error(data.error || "Monitoring failed");
      }
    } catch (error) {
      console.error("Monitoring error:", error);
      setResults({
        success: false,
        error: error.message,
      });
    } finally {
      setIsMonitoring(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl p-5 text-white my-5 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
      <div className="mb-5">
        <h3 className="m-0 mb-2 text-xl font-semibold">🔍 Review Monitoring</h3>
        <p className="m-0 mb-5 opacity-90 text-sm">
          Check for new reviews on first pages of Shopify app stores
        </p>
      </div>

      <div className="flex gap-3 flex-wrap mb-4">
        {selectedApp ? (
          <button
            onClick={() => runMonitoring(selectedApp)}
            disabled={isMonitoring}
            className="bg-green-500/30 border border-green-500/50 text-white px-4 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 backdrop-blur-md hover:bg-green-500/40 hover:border-green-500/60 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isMonitoring ? "🔄 Monitoring..." : `🔍 Monitor ${selectedApp}`}
          </button>
        ) : (
          <p className="text-white/80 italic m-0 py-2.5 text-sm">
            Select an app to monitor specific reviews
          </p>
        )}

        <button
          onClick={() => runMonitoring()}
          disabled={isMonitoring}
          className="bg-blue-500/30 border border-blue-500/50 text-white px-4 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 backdrop-blur-md hover:bg-blue-500/40 hover:border-blue-500/60 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isMonitoring ? "🔄 Monitoring All Apps..." : "🔍 Monitor All Apps"}
        </button>
      </div>

      {lastRun && (
        <div className="mb-4">
          <small className="text-white/80 text-xs">Last run: {lastRun}</small>
        </div>
      )}

      {results && (
        <div className="bg-white/10 rounded-lg p-4 mt-4 backdrop-blur-md">
          {results.success ? (
            <div>
              <h4 className="m-0 mb-2.5 text-base">✅ Monitoring Complete</h4>
              {results.app_name ? (
                <div>
                  <p className="m-0 mb-2.5 font-medium">
                    <strong>{results.app_name}:</strong>{" "}
                    {results.new_reviews_found} new reviews found
                  </p>
                  {results.updated_stats && (
                    <div className="flex gap-4 flex-wrap text-[0.85rem]">
                      <span className="bg-white/20 px-2 py-1 rounded whitespace-nowrap">
                        This month: {results.updated_stats.this_month}
                      </span>
                      <span className="bg-white/20 px-2 py-1 rounded whitespace-nowrap">
                        Last 30 days: {results.updated_stats.last_30_days}
                      </span>
                      <span className="bg-white/20 px-2 py-1 rounded whitespace-nowrap">
                        Total: {results.updated_stats.total_reviews}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <p className="m-0 mb-2.5 font-medium">
                    <strong>Total new reviews found:</strong>{" "}
                    {results.total_new_reviews}
                  </p>
                  <div className="mb-4">
                    <small className="text-white/80 text-xs">
                      Completed in {results.execution_time_ms}ms
                    </small>
                  </div>
                  {results.updated_stats && (
                    <div>
                      <h5 className="m-0 mb-2.5 text-sm text-white/90">
                        Updated Statistics:
                      </h5>
                      {Object.entries(results.updated_stats).map(
                        ([appName, stats]) => (
                          <div
                            key={appName}
                            className="flex justify-between items-center py-1 text-[0.85rem] border-b border-white/10 last:border-b-0"
                          >
                            <span className="font-medium min-w-[120px]">
                              {appName}:
                            </span>
                            <span className="text-white/90 text-xs">
                              {stats.this_month} this month |{" "}
                              {stats.last_30_days} last 30 days
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-red-600/20 border border-red-600/30">
              <h4 className="m-0 mb-2.5 text-base">❌ Monitoring Failed</h4>
              <p className="m-0">{results.error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MonitoringControls;
