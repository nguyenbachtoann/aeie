import React from "react";

function ArrivalItem(item) {
  return (
    <div className="shop-arrival-item">
      <div className="shop-item-container">
        <img
          src={item.image}
          alt="shop-arrival-item"
          className="shop-item-img"
        />

        {/* <div className="item-info">
          <div className="item-info-detail">
            <div className="detail-name-wrapper">
              <div className="item-name-divider" />
              <div className="item-name">{item.prices.shirt.name} shirt</div>
            </div>
            <div className="item-price">${item.prices.shirt.price}</div>
          </div>
          <div className="item-info-detail">
            <div className="detail-name-wrapper">
              <div className="item-name-divider" />
              <div className="item-name">{item.prices.skirt.name} skirt</div>
            </div>
            <div className="item-price">${item.prices.skirt.price}</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export { ArrivalItem };
