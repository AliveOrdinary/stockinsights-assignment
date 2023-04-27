import StockSearchPage from "../Search";
import "./styles.css";
function Home() {
  return (
    <div className="home-container">
      <div>
        <h2 className="heading">Welcome to EquityGPT!</h2>
        <p className="info">
          You can now ask questions to search through Earnings Calls
          Transcripts!
        </p>
      </div>
      <div className="warning">
        <span></span>
        <p>
          Please note: This is a beta version. We are in the progress of adding
          more data and improving the search
        </p>
      </div>
      <div className="search-container">
        <StockSearchPage />
      </div>
    </div>
  );
}

export default Home;
