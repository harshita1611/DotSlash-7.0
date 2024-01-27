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
    <>
      <div className="bg-black w-1/2 rounded-[3px] h-28 px-3 pt-2">
        <h1 className="text-white">YOUE DAILY UPDATES ARE HERE!</h1>
        <input
          className="w-[72.66%] h-[42.33px] rounded-[40px]  bg-zinc-300 mt-6 pl-4 "
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
        />
        <button
          className="w-[140.25px] h-[42.33px] bg-zinc-300 rounded-[40px] ml-10"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="bg-slate-400 w-1/2">
        {searchResults.map((newsItem, index) => (
          <div key={index}>
            <div className="flex">
              <h2 className="">
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {newsItem.title}
                </a>
              </h2>
              <div className="w-[300px] h-[150px] ml-20">
                <img className="h-[150px]" src={newsItem.banner_image} alt={newsItem.title} />{" "}
              </div>
            </div>
            <p>{newsItem.overall_sentiment_label}</p>
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
    </>
  );
}

export default News;
