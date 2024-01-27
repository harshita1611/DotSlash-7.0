import React, { useState } from "react";

function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${searchQuery}&apikey=demo`
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data.feed)) {
          // Extract title, url, banner_image, and overall_sentiment_label from each item in the feed
          const formattedResults = data.feed.map((item) => ({
            title: item.title,
            url: item.url,
            banner_image: item.banner_image,
            overall_sentiment_label: item.overall_sentiment_label,
          }));
          setSearchResults(formattedResults);
        } else {
          console.error("Invalid data format:", data);
        }
      } else {
        console.error("Failed to fetch news");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <h1>News</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.map((newsItem, index) => (
          <div key={index}>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.url}</p>
            <img src={newsItem.banner_image} alt={newsItem.title} />
            <p>{newsItem.overall_sentiment_label}</p>
            {/* Render buttons based on sentiment label */}
            <div>
              <button
                className={
                  newsItem.overall_sentiment_label === "Bullish"
                    ? "highlight"
                    : ""
                }
              >
                Buy
              </button>
              <button
                className={
                  newsItem.overall_sentiment_label === "Bearish"
                    ? "highlight"
                    : ""
                }
              >
                Sell
              </button>
              <button
                className={
                  newsItem.overall_sentiment_label === "Neutral"
                    ? "highlight"
                    : ""
                }
              >
                Hold
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )};

export default News;
