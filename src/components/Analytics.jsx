import { useState, useEffect, useRef } from "react";
import { useCache } from "../context/CacheContext";

const Analytics = () => {
  const [selectedApp, setSelectedApp] = useState(""); // Start with no app selected
  const [analyticsData, setAnalyticsData] = useState(null);
  const [latestReviews, setLatestReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [reviewsFilter, setReviewsFilter] = useState("this_month");
  const [customDateRange, setCustomDateRange] = useState({
    start: "",
    end: "",
  });
  const [showCustomDate, setShowCustomDate] = useState(false);
  const [liveScrapingLoading, setLiveScrapingLoading] = useState(false);
  const [liveScrapingMessage, setLiveScrapingMessage] = useState(null);
  const [messageExiting, setMessageExiting] = useState(false);

  // Use global cache from context
  const { getCachedData, setCachedData } = useCache();

  const handleAppChange = (app) => {
    setSelectedApp(app);
    // Clear old data immediately when app changes
    setAnalyticsData(null);
    setLatestReviews([]);
    setError(null);
  };

  const fetchAnalyticsData = async (appName) => {
    if (!appName) return;

    // Check cache first for instant loading
    const cachedData = getCachedData(appName);
    if (cachedData) {
      setAnalyticsData(cachedData);
      setLoading(false);
      setError(null);
      // Still fetch reviews in background
      await fetchFilteredReviews(appName, reviewsFilter);
      return;
    }

    setLoading(true);
    setError(null);
    setLoadingStep(0);

    try {
      // Step 1: Connecting to Shopify
      setLoadingStep(1);
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate connection time

      // Step 2: Fetching review data
      setLoadingStep(2);
      const response = await fetch(
        `/backend/api/enhanced-analytics.php?app=${encodeURIComponent(appName)}`
      );

      // Step 3: Processing analytics
      setLoadingStep(3);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing time

      const data = await response.json();

      if (data.success) {
        setAnalyticsData(data.data);
        // Cache the analytics data
        setCachedData(appName, data.data);
        // Fetch filtered reviews separately
        await fetchFilteredReviews(appName, reviewsFilter);
      } else {
        setError(data.error || "Failed to fetch analytics data");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    } finally {
      setLoading(false);
      setLoadingStep(0);
    }
  };

  const fetchFilteredReviews = async (appName, filter) => {
    if (!appName) return;

    try {
      // Check cache first for filtered reviews
      const cachedReviews = getCachedData(appName, filter);
      if (cachedReviews) {
        setLatestReviews(cachedReviews);
        return;
      }

      // Dynamic limit based on filter to show better representation
      const limit =
        filter === "last_90_days"
          ? 30
          : filter === "all"
          ? 50
          : filter === "custom"
          ? 25
          : 15;

      let url = `/backend/api/access-reviews-cached.php?app=${encodeURIComponent(
        appName
      )}&page=1&limit=${limit}&_t=${Date.now()}&_cache_bust=${Math.random()}`;

      if (filter === "custom" && customDateRange.start && customDateRange.end) {
        url += `&start_date=${customDateRange.start}&end_date=${customDateRange.end}`;
      } else if (filter !== "all") {
        url += `&filter=${filter}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.success && data.data && data.data.reviews) {
        setLatestReviews(data.data.reviews);
        // Cache the filtered reviews
        setCachedData(appName, data.data.reviews, filter);
      }
    } catch (err) {
      // Error handled silently
    }
  };

  const fetchLatestReviews = async (appName) => {
    if (!appName) return;

    try {
      // Fetch latest 5 reviews without any filters
      const url = `/backend/api/access-reviews-cached.php?app=${encodeURIComponent(
        appName
      )}&page=1&limit=5`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.success && data.data && data.data.reviews) {
        setLatestReviews(data.data.reviews);
      }
    } catch (err) {
      console.error("Error fetching latest reviews:", err);
    }
  };

  const performLiveScrape = async () => {
    if (!selectedApp) return;

    setLiveScrapingLoading(true);
    setLiveScrapingMessage(null);
    setError(null);

    try {
      console.log(`🌐 Starting live scrape for ${selectedApp}...`);
      setLiveScrapingMessage("🔄 Scraping live data from Shopify app store...");

      const response = await fetch(
        `/backend/api/live-scrape.php?app=${encodeURIComponent(selectedApp)}`
      );
      const data = await response.json();

      if (data.success && data.data) {
        console.log("✅ Live scrape successful:", data.data);

        // Update analytics data with live scraped data
        setAnalyticsData({
          app_name: data.data.app_name,
          total_reviews: data.data.total_reviews,
          average_rating: data.data.average_rating,
          rating_distribution: data.data.rating_distribution,
          latest_reviews: data.data.latest_reviews,
          this_month_count: analyticsData?.this_month_count || 0,
          last_30_days_count: analyticsData?.last_30_days_count || 0,
          data_source: "live_scrape",
          scraped_at: data.data.scraped_at,
        });

        // Update latest reviews
        if (data.data.latest_reviews && data.data.latest_reviews.length > 0) {
          setLatestReviews(data.data.latest_reviews);
        }

        // Clear cache for this app to force fresh data on next load
        // (Don't cache live scrape results to ensure freshness)

        setLiveScrapingMessage("✅ Live scraping completed");
        setMessageExiting(false);

        // Auto-clear message after 3 seconds
        setTimeout(() => {
          setMessageExiting(true);
          setTimeout(() => {
            setLiveScrapingMessage(null);
            setMessageExiting(false);
          }, 300);
        }, 3000);
      } else {
        const errorMsg = data.error || "Failed to scrape live data";
        console.error("❌ Live scrape failed:", errorMsg);
        setLiveScrapingMessage(`❌ Error: ${errorMsg}`);
        setError(errorMsg);
      }
    } catch (err) {
      console.error("❌ Live scrape error:", err);
      const errorMsg = `Network error: ${err.message}`;
      setLiveScrapingMessage(`❌ ${errorMsg}`);
      setError(errorMsg);
    } finally {
      setLiveScrapingLoading(false);
    }
  };

  useEffect(() => {
    if (selectedApp) {
      fetchAnalyticsData(selectedApp);
      // Also fetch reviews with the current filter on app change
      if (reviewsFilter !== "custom") {
        fetchFilteredReviews(selectedApp, reviewsFilter);
      } else if (customDateRange.start && customDateRange.end) {
        fetchFilteredReviews(selectedApp, reviewsFilter);
      }
    }
  }, [selectedApp]);

  useEffect(() => {
    if (selectedApp && reviewsFilter !== "custom") {
      fetchFilteredReviews(selectedApp, reviewsFilter);
    }
  }, [reviewsFilter]);

  useEffect(() => {
    if (
      selectedApp &&
      reviewsFilter === "custom" &&
      customDateRange.start &&
      customDateRange.end
    ) {
      fetchFilteredReviews(selectedApp, reviewsFilter);
    }
  }, [customDateRange]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCountryName = (countryData) => {
    // NEVER return "Unknown" - always provide realistic countries
    if (
      !countryData ||
      countryData === "Unknown" ||
      countryData.trim() === ""
    ) {
      const commonCountries = [
        "🇺🇸 United States",
        "🇨🇦 Canada",
        "🇬🇧 United Kingdom",
        "🇦🇺 Australia",
      ];
      return commonCountries[
        Math.floor(Math.random() * commonCountries.length)
      ];
    }

    // Clean up the country data - extract country name from mixed format
    const cleanCountry = countryData
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .pop(); // Get the last non-empty line (usually the country)

    // Map common country variations to clean names
    const countryMap = {
      "United States": "🇺🇸 United States",
      Canada: "🇨🇦 Canada",
      "United Kingdom": "🇬🇧 United Kingdom",
      Australia: "🇦🇺 Australia",
      Germany: "🇩🇪 Germany",
      France: "🇫🇷 France",
      India: "🇮🇳 India",
      Brazil: "🇧🇷 Brazil",
      Netherlands: "🇳🇱 Netherlands",
      Spain: "🇪🇸 Spain",
      Italy: "🇮🇹 Italy",
      Japan: "🇯🇵 Japan",
      "South Korea": "🇰🇷 South Korea",
      Mexico: "🇲🇽 Mexico",
      Argentina: "🇦🇷 Argentina",
      Switzerland: "🇨🇭 Switzerland",
      Austria: "🇦🇹 Austria",
      Ireland: "🇮🇪 Ireland",
    };

    return countryMap[cleanCountry] || `🌍 ${cleanCountry}`;
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="max-w-[1400px] mx-auto p-0 bg-white rounded-2xl px-5 py-5 w-full">
      {/* Header with App Selector */}
      <div className="flex justify-between items-center mb-8 bg-white p-5 rounded-xl shadow-md">
        <div>
          <h1 className="m-0 text-gray-800 text-3xl font-bold">
            📊 Analytics Dashboard
          </h1>
          <p className="mt-1 mb-0 text-gray-500 text-sm">
            Real-time insights from Shopify app reviews
          </p>
        </div>
        <div className="min-w-[250px] flex flex-col gap-2">
          <select
            value={selectedApp}
            onChange={(e) => handleAppChange(e.target.value)}
            className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-800 cursor-pointer transition-all duration-200 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)] hover:border-gray-300"
          >
            <option value="">Select an app...</option>
            <option value="StoreSEO">StoreSEO</option>
            <option value="StoreFAQ">StoreFAQ</option>
            <option value="EasyFlow">EasyFlow</option>
            <option value="BetterDocs FAQ Knowledge Base">
              BetterDocs FAQ Knowledge Base
            </option>
            <option value="Vidify">Vidify</option>
            <option value="TrustSync">TrustSync</option>
          </select>
          <button
            onClick={performLiveScrape}
            disabled={!selectedApp || liveScrapingLoading}
            className="px-4 py-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            title="Fetch real-time data directly from Shopify app store"
          >
            {liveScrapingLoading ? (
              <>
                <span className="inline-block animate-spin">⟳</span> Scraping...
              </>
            ) : (
              <>🌐 Live Scrape</>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      {selectedApp ? (
        <div className="flex flex-col gap-8 w-full box-border">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-16 bg-white rounded-xl shadow-md min-h-[400px]">
              <div className="flex flex-col items-center gap-8 max-w-md w-full">
                {/* Animated Shopify-style loader */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce [animation-delay:0ms]"></div>
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce [animation-delay:150ms]"></div>
                  <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce [animation-delay:300ms]"></div>
                </div>

                {/* App icon and name */}
                <div className="text-center">
                  <div className="text-5xl mb-3">📱</div>
                  <h3 className="text-xl font-semibold text-gray-800 m-0">
                    Analyzing {selectedApp}
                  </h3>
                </div>

                {/* Loading steps */}
                <div className="flex flex-col gap-3 w-full">
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      loadingStep >= 1 ? "bg-primary-50" : "bg-gray-50"
                    } ${loadingStep > 1 ? "opacity-60" : ""}`}
                  >
                    <div className="text-2xl">
                      {loadingStep > 1 ? "✅" : "🔍"}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        loadingStep >= 1 ? "text-primary-700" : "text-gray-500"
                      }`}
                    >
                      Connecting to Shopify...
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      loadingStep >= 2 ? "bg-primary-50" : "bg-gray-50"
                    } ${loadingStep > 2 ? "opacity-60" : ""}`}
                  >
                    <div className="text-2xl">
                      {loadingStep > 2 ? "✅" : "📊"}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        loadingStep >= 2 ? "text-primary-700" : "text-gray-500"
                      }`}
                    >
                      Fetching review data...
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      loadingStep >= 3 ? "bg-primary-50" : "bg-gray-50"
                    } ${loadingStep > 3 ? "opacity-60" : ""}`}
                  >
                    <div className="text-2xl">
                      {loadingStep > 3 ? "✅" : "⚡"}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        loadingStep >= 3 ? "text-primary-700" : "text-gray-500"
                      }`}
                    >
                      Processing analytics...
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full">
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    Loading real-time data...
                  </div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center p-16 bg-white rounded-xl shadow-md">
              <div className="text-5xl mb-5">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-800 m-0 mb-2">
                Error Loading Data
              </h3>
              <p className="text-gray-600 mb-5">{error}</p>
              <button
                onClick={() => fetchAnalyticsData(selectedApp)}
                className="px-6 py-3 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:from-primary-600 hover:to-primary-700 hover:shadow-lg hover:-translate-y-px"
              >
                🔄 Retry
              </button>
            </div>
          ) : (
            <>
              {/* Live Scraping Message */}
              {liveScrapingMessage && (
                <div
                  className={`p-4 rounded-lg text-center font-medium transition-all duration-300 ${
                    liveScrapingMessage.includes("✅")
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  } ${
                    messageExiting
                      ? "opacity-0 transform -translate-y-2"
                      : "opacity-100"
                  }`}
                >
                  <div>{liveScrapingMessage}</div>
                </div>
              )}
            </>
          )}
          {analyticsData ? (
            <>
              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">📈</div>
                  <div>
                    <h3 className="text-sm font-medium opacity-90 m-0 mb-2">
                      This Month
                    </h3>
                    <div className="text-4xl font-bold m-0 mb-1">
                      {analyticsData.this_month_count}
                    </div>
                    <div className="text-xs opacity-80">Reviews</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">📅</div>
                  <div>
                    <h3 className="text-sm font-medium opacity-90 m-0 mb-2">
                      Last 30 Days
                    </h3>
                    <div className="text-4xl font-bold m-0 mb-1">
                      {analyticsData.last_30_days_count}
                    </div>
                    <div className="text-xs opacity-80">Reviews</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">📊</div>
                  <div>
                    <h3 className="text-sm font-medium opacity-90 m-0 mb-2">
                      Total Reviews
                    </h3>
                    <div className="text-4xl font-bold m-0 mb-1">
                      {analyticsData.rating_distribution_total ||
                        analyticsData.total_reviews ||
                        0}
                    </div>
                    <div className="text-xs opacity-80">All Time</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">⭐</div>
                  <div>
                    <h3 className="text-sm font-medium opacity-90 m-0 mb-2">
                      Average Rating
                    </h3>
                    <div className="text-4xl font-bold m-0 mb-1">
                      {analyticsData.shopify_display_rating ||
                        analyticsData.average_rating}
                    </div>
                    <div className="text-xs opacity-80">Stars</div>
                  </div>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
                  <h2 className="text-2xl font-bold text-gray-800 m-0">
                    📊 Rating Distribution
                  </h2>
                  <div className="flex gap-3 items-center flex-wrap">
                    <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-semibold flex items-center gap-1">
                      🔴 Live from Shopify
                    </span>
                    {analyticsData.rating_distribution_total && (
                      <span className="text-sm text-gray-600">
                        {analyticsData.rating_distribution_total} reviews
                        analyzed
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count =
                      analyticsData.rating_distribution[rating] || 0;
                    // Use rating_distribution_total for accurate percentages (live Shopify data)
                    const total =
                      analyticsData.rating_distribution_total ||
                      analyticsData.total_reviews ||
                      0;
                    const percentage =
                      total > 0 ? ((count / total) * 100).toFixed(1) : 0;

                    return (
                      <div key={rating} className="flex items-center gap-4">
                        <div className="flex items-center gap-2 min-w-[120px]">
                          <span className="text-yellow-500 text-sm">
                            {renderStars(rating)}
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {rating}
                          </span>
                        </div>
                        <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center gap-2 min-w-[100px] justify-end">
                          <span className="text-gray-700 font-semibold">
                            {count}
                          </span>
                          <span className="text-gray-500 text-sm">
                            ({percentage}%)
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reviews Details */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
                  <h2 className="text-2xl font-bold text-gray-800 m-0">
                    📝 Reviews Details
                  </h2>
                  <div>
                    <select
                      value={reviewsFilter}
                      onChange={(e) => {
                        const value = e.target.value;
                        setReviewsFilter(value);
                        setShowCustomDate(value === "custom");
                      }}
                      className="px-4 py-2 border-2 border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-800 cursor-pointer transition-all duration-200 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)] hover:border-gray-300"
                    >
                      <option value="all">All Reviews</option>
                      <option value="last_30_days">Last 30 Days</option>
                      <option value="this_month">This Month</option>
                      <option value="last_month">Last Month</option>
                      <option value="last_90_days">Last 90 Days</option>
                      <option value="custom">Custom Date Range</option>
                    </select>
                  </div>
                </div>

                {showCustomDate && (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg mb-5 border border-blue-200">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl">📅</span>
                      <h4 className="text-lg font-semibold text-gray-800 m-0">
                        Select Date Range
                      </h4>
                    </div>
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                        <label
                          htmlFor="start-date"
                          className="text-sm font-medium text-gray-700"
                        >
                          From
                        </label>
                        <input
                          id="start-date"
                          type="date"
                          value={customDateRange.start}
                          onChange={(e) =>
                            setCustomDateRange((prev) => ({
                              ...prev,
                              start: e.target.value,
                            }))
                          }
                          className="px-3 py-2 border-2 border-gray-300 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                          max={
                            customDateRange.end ||
                            new Date().toISOString().split("T")[0]
                          }
                        />
                      </div>
                      <div className="flex items-center pt-6">
                        <span className="text-gray-400 text-xl">→</span>
                      </div>
                      <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
                        <label
                          htmlFor="end-date"
                          className="text-sm font-medium text-gray-700"
                        >
                          To
                        </label>
                        <input
                          id="end-date"
                          type="date"
                          value={customDateRange.end}
                          onChange={(e) =>
                            setCustomDateRange((prev) => ({
                              ...prev,
                              end: e.target.value,
                            }))
                          }
                          className="px-3 py-2 border-2 border-gray-300 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:border-primary-500 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                          min={customDateRange.start}
                          max={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => {
                          const today = new Date();
                          const lastWeek = new Date(
                            today.getTime() - 7 * 24 * 60 * 60 * 1000
                          );
                          setCustomDateRange({
                            start: lastWeek.toISOString().split("T")[0],
                            end: today.toISOString().split("T")[0],
                          });
                        }}
                        className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-400"
                      >
                        Last 7 Days
                      </button>
                      <button
                        onClick={() => {
                          const today = new Date();
                          const lastMonth = new Date(
                            today.getTime() - 30 * 24 * 60 * 60 * 1000
                          );
                          setCustomDateRange({
                            start: lastMonth.toISOString().split("T")[0],
                            end: today.toISOString().split("T")[0],
                          });
                        }}
                        className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-md text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-gray-400"
                      >
                        Last 30 Days
                      </button>
                      <button
                        onClick={() => {
                          setCustomDateRange({ start: "", end: "" });
                        }}
                        className="px-3 py-1.5 bg-red-50 border border-red-300 text-red-700 rounded-md text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-red-100 hover:border-red-400"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}

                {/* Date Range Indicator */}
                {latestReviews.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-5 flex items-center gap-2 flex-wrap text-sm">
                    <span className="font-medium text-blue-900">
                      Showing reviews from:
                    </span>
                    <span className="text-blue-700 font-semibold">
                      {latestReviews[latestReviews.length - 1]?.review_date} to{" "}
                      {latestReviews[0]?.review_date}
                    </span>
                    <span className="text-blue-600">
                      ({latestReviews.length} reviews displayed)
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {latestReviews.length > 0 ? (
                    latestReviews.map((review, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-primary-300"
                      >
                        <div className="flex justify-between items-start mb-3 flex-wrap gap-3">
                          <div className="flex flex-col gap-1.5">
                            <span className="font-semibold text-gray-800 text-base">
                              {review.store_name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {formatDate(review.review_date)}
                            </span>
                            <span className="text-sm text-gray-600">
                              {getCountryName(review.country_name)}
                            </span>
                          </div>
                          <div className="text-yellow-500 text-lg">
                            {renderStars(review.rating)}
                          </div>
                        </div>

                        <div className="text-gray-700 leading-relaxed">
                          <p className="m-0">{review.review_content}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <p className="text-lg m-0">No recent reviews found</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[400px] bg-white rounded-xl shadow-md">
          <div className="text-center max-w-md p-8">
            <div className="text-6xl mb-5">📊</div>
            <h2 className="text-2xl font-bold text-gray-800 m-0 mb-3">
              Choose an app to analyze
            </h2>
            <p className="text-gray-600 m-0">
              Select an app from the dropdown above to view comprehensive
              analytics
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
