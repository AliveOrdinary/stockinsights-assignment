import { useState } from "react";
import "./styles.css";

const StockSearchPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("");
  const [selectedStocks, setSelectedStocks] = useState([]);

  const stocksDropdown = [
    { value: "", label: "Selected Stocks" },
    { value: "AAPL", label: "AAPL" },
    { value: "GOOG", label: "GOOG" },
    { value: "TSLA", label: "TSLA" },
    { value: "AMZN", label: "AMZN" },
    { value: "MSFT", label: "MSFT" },
  ];

  const handleTimeframeChange = (e) => {
    setSelectedTimeframe(e.target.value);
  };

  const handleStocksChange = (e) => {
    setSelectedStocks(e.target.value);
  };

  //   const handleClearStocks = () => {
  //     setSelectedStocks([]);
  //   };

  const handleSearch = () => {
    console.log(`Timeframe: ${selectedTimeframe}`);
    console.log(
      `Selected stocks: ${selectedStocks
        .map((option) => option.value)
        .join(", ")}`
    );
  };

  return (
    <div>
      <div className="search-field">
        <input type="text" placeholder="Enter any question here" />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="dropdown-container">
        <p>Search within :</p>
        <div>
          <select
            id="timeframe"
            value={selectedTimeframe}
            onChange={handleTimeframeChange}
          >
            <option value="" disabled>
              Selected time
            </option>
            <option value="1m">1 Month</option>
            <option value="3m">3 Months</option>
            <option value="6m">6 Months</option>
            <option value="1y">1 Year</option>
            <option value="5y">5 Years</option>
          </select>
        </div>
        <div>
          <select
            id="stocks"
            value={selectedStocks}
            onChange={handleStocksChange}
          >
            {stocksDropdown.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StockSearchPage;
