import { Col, Row } from "antd";
import React from "react";

function ArrivalItem(item) {
  const renderItemInfo = () =>
    item.prices.map((x, i) => (
      <div key={i} className={`item-info-detail-${x.type}`}>
        <Row justify="center" align="center">
          <Col span={24}>
            <Row justify="center" align="center"  className="detail-row-container">
              <Col span={10}>
                <div className="divider-container">
                  <div className="divider" />
                </div>
              </Col>
              <Col span={14}>
                <div className="detail-container">
                  <div className="detail-name">
                    <span className="detail-name-text">{x.name}</span>
                    <span className="detail-type-text">{x.type}</span>
                  </div>
                  <div className="detail-price">
                    <span className="detail-price-text">${x.price}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    ));
  return (
    <div className="shop-arrival-item">
      <div className="shop-item-container">
        <img
          src={item.image}
          alt="shop-arrival-item"
          className="shop-item-img"
        />
        <div className="item-info">{renderItemInfo()}</div>
      </div>
    </div>
  );
}

export { ArrivalItem };
