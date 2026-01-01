import { useState, useEffect } from "react";
import "./App.css";

function MinimalApp() {
  const [selectedApp, setSelectedApp] = useState("");
  const [apps, setApps] = useState([]);
  const [stats, setStats] = useState({
    thisMonth: 0,
    last30Days: 0,
    averageRating: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch available apps
  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch("/backend/api/available-apps.php");
        const data = await response.json();
        if (data.success) {
          setApps(data.apps);
        }
      } catch (err) {
        console.error("Error fetching apps:", err);
        setError("Failed to load apps");
      }
    };

    fetchApps();
  }, []);

  // Fetch stats when app is selected
  useEffect(() => {
    if (!selectedApp) return;

    const fetchStats = async () => {
      try {
        setLoading(true);

        const [thisMonthRes, last30DaysRes, avgRatingRes] = await Promise.all([
          fetch(`/backend/api/this-month-reviews.php?app_name=${selectedApp}`),
          fetch(
            `/backend/api/last-30-days-reviews.php?app_name=${selectedApp}`
          ),
          fetch(`/backend/api/average-rating.php?app_name=${selectedApp}`),
        ]);

        const [thisMonth, last30Days, avgRating] = await Promise.all([
          thisMonthRes.json(),
          last30DaysRes.json(),
          avgRatingRes.json(),
        ]);

        setStats({
          thisMonth: thisMonth.count || 0,
          last30Days: last30Days.count || 0,
          averageRating: avgRating.average_rating || 0,
        });

        setError(null);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [selectedApp]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Shopify App Review Analytics1</h1>
        <p>
          Comprehensive analytics dashboard for tracking and analyzing Shopify
          app reviews
        </p>
      </header>

      <main className="app-main">
        {/* App Selector */}
        <section className="app-selector">
          <div className="selector-container">
            <label htmlFor="app-select">Select App:</label>
            <select
              id="app-select"
              value={selectedApp}
              onChange={(e) => setSelectedApp(e.target.value)}
              className="app-select"
            >
              <option value="">Choose an app to analyze</option>
              {apps.map((app) => (
                <option key={app} value={app}>
                  {app}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Show content only when app is selected */}
        {selectedApp ? (
          <>
            {/* Summary Stats */}
            <section className="summary-stats">
              {loading ? (
                <div className="loading">Loading statistics...</div>
              ) : error ? (
                <div className="error">{error}</div>
              ) : (
                <>
                  <div className="stat-card">
                    <h3>This Month</h3>
                    <div className="stat-value">{stats.thisMonth}</div>
                    <div className="stat-label">Total Reviews</div>
                  </div>

                  <div className="stat-card">
                    <h3>Last 30 Days</h3>
                    <div className="stat-value">{stats.last30Days}</div>
                    <div className="stat-label">Total Reviews</div>
                  </div>

                  <div className="stat-card">
                    <h3>Average Rating</h3>
                    <div className="stat-value">{stats.averageRating}</div>
                    <div className="stat-label">⭐ Stars</div>
                  </div>
                </>
              )}
            </section>

            {/* Rating Distribution */}
            <section className="review-distribution">
              <h2>Rating Distribution for {selectedApp}</h2>
              <p>Complete rating distribution data from live Shopify pages</p>
            </section>
          </>
        ) : (
          <div className="no-app-selected">
            <h2>Choose an app to analyze</h2>
            <p>
              Select an app from the dropdown above to view its analytics and
              rating distribution.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default MinimalApp;
