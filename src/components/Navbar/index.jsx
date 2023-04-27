import "./styles.css";
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">StockInsights</h1>
      <div className="link">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
