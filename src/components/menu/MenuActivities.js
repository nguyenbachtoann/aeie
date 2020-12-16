import React from "react";
import "./style.less";
import searchIcon from "../../assets/images/icons/icon-search.png";
import cartIcon from "../../assets/images/icons/icon-cart.png";
function MenuActivities() {
  return (
    <div id="menu-activities">
      <div className="menu-activities-container">
        <div className="menu-activities-search activities-options">
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </div>

        <div className="menu-activities-cart activities-options">
          <img src={cartIcon} alt="cart-icon" className="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export { MenuActivities };
