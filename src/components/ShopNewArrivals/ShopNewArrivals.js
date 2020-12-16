import React, { useEffect, useState } from "react";
import { Img01, Img02, Img03, Img04 } from "../../assets/images/page/4";
import { ArrivalItem } from "./ArrivalItem";
import { Row, Col } from "antd";
import "./style.less";

const imgs = [Img01, Img02, Img03, Img04];

function ShowNewArrivals() {
  const [items, setItems] = useState([]);

  const generateItem = () => {
    const itemArr = [];
    for (let i = 0; i < 4; i++) {
      itemArr.push({
        image: imgs[i],
        prices: {
          shirt: {
            name: "abc",
            price: "390",
          },
          skirt: {
            name: "xyz",
            price: "390",
          },
        },
      });
    }
    console.log(itemArr);
    setItems(itemArr);
  };

  useEffect(() => {
    generateItem();
  }, []);
  return (
    <div id="shop-new-arrival">
      <div className="shop-new-arrival-container">
        <Row className="shop-new-arrival-container-row">
          {items.map((item, i) => (
            <Col key={i} xs={24} sm={12} md={12} lg={12} xl={6}>
              <Row justify="space-around" align="bottom">
                <Col>
                  <div>
                    <ArrivalItem {...item} />
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export { ShowNewArrivals };
