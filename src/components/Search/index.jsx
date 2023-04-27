import { useState } from "react";
import "./styles.css";
import SelectComponent from "../Dropdown";
import MultipleSelectCheckmarks from "../Dropdown";

const StockSearchPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("");
  const [selectedStocks, setSelectedStocks] = useState([]);

  const stocksDropdown = [
    { value: "", label: "Select Stocks" },
    { value: "AAPL", label: "AAPL" },
    { value: "GOOG", label: "GOOG" },
    { value: "TSLA", label: "TSLA" },
    { value: "AMZN", label: "AMZN" },
    { value: "MSFT", label: "MSFT" },
    { value: "FB", label: "FB" },
    { value: "NVDA", label: "NVDA" },
    { value: "PYPL", label: "PYPL" },
  ];

  const timeFrame = [
    { value: "", label: "Select Year" },
    { value: "2013-2014", label: "2013-2014" },
    { value: "2014-2015", label: "2014-2015" },
    { value: "2015-2016", label: "2015-2016" },
    { value: "2016-2017", label: "2016-2017" },
    { value: "2017-2018", label: "2017-2018" },
    { value: "2018-2019", label: "2018-2019" },
    { value: "2019-2020", label: "2019-2020" },
    { value: "2020-2021", label: "2020-2021" },
    { value: "2021-2022", label: "2021-2022" },
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
        {/* <div>
          <select
            id="timeframe"
            value={selectedTimeframe}
            onChange={handleTimeframeChange}
          >
            {timeFrame.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
        </div> */}

        {/* <SelectComponent options={timeFrame} /> */}
        <MultipleSelectCheckmarks options={timeFrame} />
        <MultipleSelectCheckmarks options={stocksDropdown} />
      </div>
    </div>
  );
};

export default StockSearchPage;
