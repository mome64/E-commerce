export default function Navbars() {
  return (
    <div className="amazon-header">
      <img
        src="/images/amazon-logo-white.png"
        alt="amazon-logo"
        className="amazon-logo"
      />
      <form action="" className="amazon-header-middle-section">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-button">
          <img
            src="/images/icons/search-icon.png"
            className="search-icon"
            alt=""
          />
        </button>
      </form>
      <div className="amazon-header-right-section">
        <div>Return & Orders</div>
        <div>
          <img src="/images/icons/cart-icon.png" alt="Cart" />
          Cart
        </div>
      </div>
    </div>
  );
}
