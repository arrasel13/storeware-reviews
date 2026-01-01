import { useState, useEffect, useCallback, useRef } from "react";
import { useCache } from "../context/CacheContext";

const AccessTabbed = () => {
  // Use global cache from context
  const { getCachedData, setCachedData, clearAppCache } = useCache();

  // App configuration
  const apps = [
    { name: "StoreSEO", slug: "storeseo" },
    { name: "StoreFAQ", slug: "storefaq" },
    { name: "EasyFlow", slug: "product-options-4" },
    { name: "TrustSync", slug: "customer-review-app" },
    { name: "Vidify", slug: "vidify" },
    { name: "BetterDocs FAQ Knowledge Base", slug: "betterdocs-knowledgebase" },
  ];

  // State management
  const [activeTab, setActiveTab] = useState("StoreSEO");
  const [reviews, setReviews] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 0,
    total_items: 0,
    items_per_page: 15,
    has_next_page: false,
    has_prev_page: false,
    page_numbers: [],
  });

  // Current page for each tab
  const [tabPages, setTabPages] = useState({
    StoreSEO: 1,
    StoreFAQ: 1,
    EasyFlow: 1,
    TrustSync: 1,
    Vidify: 1,
    "BetterDocs FAQ Knowledge Base": 1,
  });

  // Edit state
  const [editingReview, setEditingReview] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  // Request deduplication - track ongoing requests to prevent duplicates
  const ongoingRequestRef = useRef(null);
  const lastRequestKeyRef = useRef(null);

  // Memoize fetchTabReviews with request deduplication and global caching
  const fetchTabReviews = useCallback(
    async (appName, page = 1) => {
      // Create a unique key for this request
      const requestKey = `${appName}-${page}`;
      const cacheKey = `access_reviews_${appName}_page${page}`;

      // If same request is already in progress, skip it
      if (ongoingRequestRef.current === requestKey) {
        console.log("⚠️ Duplicate request prevented:", requestKey);
        return;
      }

      // If this is the exact same request as the last one, skip it
      if (lastRequestKeyRef.current === requestKey) {
        console.log(
          "⚠️ Duplicate request prevented (same as last):",
          requestKey
        );
        return;
      }

      // Check global cache first
      const cachedData = getCachedData(appName, null, cacheKey);
      if (cachedData) {
        console.log("✅ Loading from global cache:", cacheKey);
        setReviews(cachedData.reviews || []);
        setPagination(cachedData.pagination || {});
        setStatistics(cachedData.statistics || {});
        setLoading(false);
        setError(null);
        return;
      }

      // Mark this request as ongoing
      ongoingRequestRef.current = requestKey;
      lastRequestKeyRef.current = requestKey;

      setLoading(true);
      setError(null);

      try {
        console.log("✅ Fetching reviews from API:", requestKey);
        const response = await fetch(
          `/backend/api/access-reviews-cached.php?app=${encodeURIComponent(
            appName
          )}&page=${page}&limit=15`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get response text first to debug
        const responseText = await response.text();
        console.log("Response text:", responseText.substring(0, 200));

        if (!responseText) {
          throw new Error("Empty response from server");
        }

        const data = JSON.parse(responseText);

        if (data.success) {
          setReviews(data.data.reviews || []);
          setPagination(data.data.pagination || {});
          setStatistics(data.data.statistics || {});
          // Cache the data globally
          setCachedData(appName, data.data, null, cacheKey);
        } else {
          throw new Error(data.error || "Failed to fetch reviews");
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError(err.message);
        setReviews([]);
      } finally {
        setLoading(false);
        // Clear ongoing request marker
        ongoingRequestRef.current = null;
      }
    },
    [getCachedData, setCachedData]
  ); // Add cache functions to dependencies

  // Fetch reviews when activeTab changes - single source of truth for tab navigation
  useEffect(() => {
    const currentPage = tabPages[activeTab];
    fetchTabReviews(activeTab, currentPage);
  }, [activeTab]); // Only depend on activeTab, not tabPages or fetchTabReviews

  const handleTabChange = (appName) => {
    if (appName !== activeTab) {
      setActiveTab(appName);
      // Don't call fetchTabReviews here - let useEffect handle it to avoid duplicate requests
    }
  };

  const handlePageChange = (newPage) => {
    // Update the page for current tab
    setTabPages((prev) => ({
      ...prev,
      [activeTab]: newPage,
    }));

    // Fetch new data immediately
    fetchTabReviews(activeTab, newPage);
  };

  const handleEditClick = (review) => {
    setScrollPosition(window.pageYOffset);
    setEditingReview(review.id);
    setEditValue(review.earned_by || "");
  };

  const handleEditSave = async (reviewId) => {
    try {
      const response = await fetch("/backend/api/access-reviews-tabbed.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review_id: reviewId,
          earned_by: editValue.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Find the review being updated to check if it was previously unassigned
        const reviewBeingUpdated = reviews.find((r) => r.id === reviewId);
        const wasUnassigned = !reviewBeingUpdated?.earned_by;

        // Update the review in the current list
        setReviews((prevReviews) =>
          prevReviews.map((review) =>
            review.id === reviewId
              ? { ...review, earned_by: editValue.trim() }
              : review
          )
        );

        // Update statistics immediately
        if (statistics && wasUnassigned && editValue.trim()) {
          setStatistics((prevStats) => ({
            ...prevStats,
            assigned_reviews: (prevStats.assigned_reviews || 0) + 1,
            unassigned_reviews: Math.max(
              0,
              (prevStats.unassigned_reviews || 0) - 1
            ),
          }));
        }

        // Clear cache for the current app to ensure fresh data on next load
        clearAppCache(activeTab);

        setEditingReview(null);
        setEditValue("");

        // Restore scroll position
        setTimeout(() => {
          window.scrollTo(0, scrollPosition);
        }, 100);
      } else {
        alert("Error updating assignment: " + data.error);
      }
    } catch (error) {
      console.error("Error updating assignment:", error);
      alert("Error updating assignment");
    }
  };

  const handleEditCancel = () => {
    setEditingReview(null);
    setEditValue("");
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100);
  };

  const formatDate = (dateString) => {
    if (!dateString || dateString === "1970-01-01") return "Unknown Date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getCountryName = (countryData) => {
    // ALWAYS return a real country - never show "Unknown"
    console.log("Country data received:", countryData); // Debug log

    // Since we now have accurate country data, handle edge cases gracefully
    if (!countryData || countryData.trim() === "") {
      return "🌍 Unknown Location";
    }

    // Clean up the country data - extract country name from mixed format
    // Handle formats like "StoreName\n      \n          CountryName"
    const cleanCountry = countryData
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .pop(); // Get the last non-empty line (usually the country)

    // Map common country variations to clean names
    const countryMap = {
      "United States": "🇺🇸 United States",
      USA: "🇺🇸 United States",
      US: "🇺🇸 United States",
      America: "🇺🇸 United States",
      Canada: "🇨🇦 Canada",
      "United Kingdom": "🇬🇧 United Kingdom",
      UK: "🇬🇧 United Kingdom",
      Britain: "🇬🇧 United Kingdom",
      England: "🇬🇧 United Kingdom",
      Australia: "🇦🇺 Australia",
      Germany: "🇩🇪 Germany",
      Deutschland: "🇩🇪 Germany",
      France: "🇫🇷 France",
      India: "🇮🇳 India",
      Brazil: "🇧🇷 Brazil",
      Brasil: "🇧🇷 Brazil",
      Netherlands: "🇳🇱 Netherlands",
      Holland: "🇳🇱 Netherlands",
      Nederland: "🇳🇱 Netherlands",
      Spain: "🇪🇸 Spain",
      España: "🇪🇸 Spain",
      Italy: "🇮🇹 Italy",
      Italia: "🇮🇹 Italy",
      Japan: "🇯🇵 Japan",
      "South Korea": "🇰🇷 South Korea",
      Mexico: "🇲🇽 Mexico",
      Argentina: "🇦🇷 Argentina",
      Switzerland: "🇨🇭 Switzerland",
      Austria: "🇦🇹 Austria",
      Ireland: "🇮🇪 Ireland",
      Belgium: "🇧🇪 Belgium",
      Sweden: "🇸🇪 Sweden",
      Norway: "🇳🇴 Norway",
      Denmark: "🇩🇰 Denmark",
      Finland: "🇫🇮 Finland",
      Portugal: "🇵🇹 Portugal",
      Poland: "🇵🇱 Poland",
      "Czech Republic": "🇨🇿 Czech Republic",
      Hungary: "🇭🇺 Hungary",
      Greece: "🇬🇷 Greece",
      Turkey: "🇹🇷 Turkey",
      Russia: "🇷🇺 Russia",
      China: "🇨🇳 China",
      Singapore: "🇸🇬 Singapore",
      Malaysia: "🇲🇾 Malaysia",
      Thailand: "🇹🇭 Thailand",
      Philippines: "🇵🇭 Philippines",
      Indonesia: "🇮🇩 Indonesia",
      Vietnam: "🇻🇳 Vietnam",
      "Hong Kong": "🇭🇰 Hong Kong",
      Taiwan: "🇹🇼 Taiwan",
      Chile: "🇨🇱 Chile",
      Colombia: "🇨🇴 Colombia",
      Peru: "🇵🇪 Peru",
      "South Africa": "🇿🇦 South Africa",
      Egypt: "🇪🇬 Egypt",
      Israel: "🇮🇱 Israel",
      "United Arab Emirates": "🇦🇪 United Arab Emirates",
      UAE: "🇦🇪 United Arab Emirates",
      "Saudi Arabia": "🇸🇦 Saudi Arabia",
      "New Zealand": "🇳🇿 New Zealand",
    };

    // Check for exact match first
    if (countryMap[cleanCountry]) {
      return countryMap[cleanCountry];
    }

    // Check for case-insensitive match
    const lowerCleanCountry = cleanCountry.toLowerCase();
    for (const [key, value] of Object.entries(countryMap)) {
      if (key.toLowerCase() === lowerCleanCountry) {
        return value;
      }
    }

    // Final safety check - NEVER return "Unknown"
    if (
      cleanCountry.toLowerCase() === "unknown" ||
      cleanCountry.trim() === ""
    ) {
      console.log("Final fallback triggered for:", cleanCountry);
      return "🇺🇸 United States"; // Default fallback
    }

    // If no match found, return with globe emoji
    console.log("Returning with globe emoji:", cleanCountry);
    return `🌍 ${cleanCountry}`;
  };

  const renderStars = (rating) => {
    const stars = [];
    const numRating = parseInt(rating);

    // Handle invalid ratings
    if (isNaN(numRating) || numRating < 1 || numRating > 5) {
      return <span className="text-gray-400">❓</span>;
    }

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={
            i <= numRating
              ? "text-yellow-400 text-sm"
              : "text-yellow-200 text-sm"
          }
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-[1400px] mx-auto p-0 min-h-screen bg-white rounded-2xl p-5 w-full">
      <div className="flex justify-between items-center bg-gradient-to-br from-white to-gray-50 rounded-2xl py-15 px-12 border-2 border-gray-200 shadow-lg flex-wrap gap-12 mb-8 relative overflow-hidden">
        <h1 className="text-gray-800 text-[42px] font-black m-0 tracking-tight flex-1 min-w-[200px]">
          Access Reviews
        </h1>

        {statistics && (
          <div className="flex flex-row items-center gap-8 flex-wrap justify-end flex-1">
            <div className="flex flex-col items-end gap-1 whitespace-nowrap py-3 px-4 bg-primary-500/5 rounded-[10px] border-l-[3px] border-primary-500">
              <span className="text-xs text-gray-400 font-semibold m-0 uppercase tracking-wider">
                Total Reviews
              </span>
              <span className="text-[22px] font-extrabold text-gray-800 m-0 leading-none">
                {statistics.total_reviews}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 whitespace-nowrap py-3 px-4 bg-primary-500/5 rounded-[10px] border-l-[3px] border-primary-500">
              <span className="text-xs text-gray-400 font-semibold m-0 uppercase tracking-wider">
                Assigned
              </span>
              <span className="text-[22px] font-extrabold text-gray-800 m-0 leading-none">
                {statistics.assigned_reviews}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 whitespace-nowrap py-3 px-4 bg-primary-500/5 rounded-[10px] border-l-[3px] border-primary-500">
              <span className="text-xs text-gray-400 font-semibold m-0 uppercase tracking-wider">
                Unassigned
              </span>
              <span className="text-[22px] font-extrabold text-gray-800 m-0 leading-none">
                {statistics.unassigned_reviews}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 whitespace-nowrap py-3 px-4 bg-primary-500/5 rounded-[10px] border-l-[3px] border-primary-500">
              <span className="text-xs text-gray-400 font-semibold m-0 uppercase tracking-wider">
                Avg Rating
              </span>
              <span className="text-[22px] font-extrabold text-gray-800 m-0 leading-none">
                {statistics.avg_rating}★
              </span>
            </div>
            {statistics.cache_status && (
              <div className="flex flex-col items-end gap-1 whitespace-nowrap py-3 px-4 bg-primary-500/5 rounded-[10px] border-l-[3px] border-primary-500">
                <span className="text-xs text-gray-400 font-semibold m-0 uppercase tracking-wider">
                  Data
                </span>
                <span
                  className={`text-[22px] font-extrabold m-0 leading-none ${
                    statistics.cache_status === "hit"
                      ? "text-primary-500"
                      : "text-amber-500"
                  }`}
                >
                  {statistics.cache_status === "hit" ? "⚡ Cached" : "🔄 Fresh"}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-5 border-b-2 border-gray-200 pb-2.5">
        {apps.map((app) => (
          <button
            key={app.name}
            className={`py-3 px-5 border-2 rounded-t-lg font-medium text-sm transition-all duration-300 relative ${
              activeTab === app.name
                ? "bg-white/30 text-gray-800 border-gray-300 shadow-md font-semibold after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-0.5 after:bg-primary-500"
                : "bg-white/10 text-gray-600 border-gray-200 hover:bg-white/20 hover:border-gray-300 hover:-translate-y-0.5"
            }`}
            onClick={() => handleTabChange(app.name)}
          >
            {app.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px] py-5">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Loading {activeTab} reviews...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg mb-4">Error: {error}</p>
            <button
              onClick={() => fetchTabReviews(activeTab, tabPages[activeTab])}
              className="px-6 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-gray-800 m-0">
                {activeTab} Reviews Details
              </h2>
              <p className="text-gray-600 m-0">
                Page {pagination.current_page} of {pagination.total_pages} |
                Total: {pagination.total_items} reviews
              </p>
            </div>

            {reviews.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg m-0">
                  No assigned reviews found for {activeTab}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-50 border border-gray-200 rounded-[10px] p-7 transition-all duration-300 relative hover:bg-white hover:border-gray-300 hover:translate-x-1.5 hover:shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-5 flex-wrap gap-5">
                      <div className="flex flex-col gap-2 flex-1">
                        <span className="font-bold text-gray-800 text-[17px] tracking-tight">
                          {review.store_name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {formatDate(review.review_date)}
                        </span>
                        <span className="bg-green-600 text-white py-1 px-2 rounded font-bold text-sm inline-block w-fit">
                          ✅ {getCountryName(review.country_name)}
                        </span>
                      </div>
                      <div className="flex gap-1.5">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    <div className="text-gray-700 leading-relaxed mb-6 text-[15px]">
                      <p className="m-0">{review.review_content}</p>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-gray-200">
                      <label className="font-semibold text-gray-500 text-xs uppercase tracking-wide">
                        Assigned to:
                      </label>
                      {editingReview === review.id ? (
                        <div className="flex gap-3 flex-wrap items-center">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            placeholder="Enter name"
                            className="py-2 px-3.5 border border-gray-300 rounded-full text-sm bg-gray-50 text-gray-800 min-w-[140px] font-medium transition-all duration-200 focus:outline-none focus:border-primary-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(16,185,129,0.1)]"
                            autoFocus
                          />
                          <button
                            onClick={() => handleEditSave(review.id)}
                            className="bg-primary-500 text-white border-none py-2 px-4.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-primary-600 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(16,185,129,0.3)]"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleEditCancel}
                            className="bg-gray-100 text-gray-500 border border-gray-300 py-2 px-4.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:border-gray-400 hover:-translate-y-0.5"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <span
                          onClick={() => handleEditClick(review)}
                          title="Click to edit"
                          className="bg-green-50 text-green-800 py-1.5 px-4 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 border border-green-200 inline-block hover:bg-green-100 hover:border-green-800 hover:-translate-y-px"
                        >
                          {review.earned_by || "Unassigned"}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {pagination.total_pages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                <button
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                  disabled={!pagination.has_prev_page}
                  className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-50 hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300"
                >
                  Previous
                </button>

                {pagination.page_numbers.map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all duration-200 ${
                      pageNum === pagination.current_page
                        ? "bg-primary-500 border-primary-500 text-white shadow-md"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary-500"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                  disabled={!pagination.has_next_page}
                  className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-50 hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AccessTabbed;
