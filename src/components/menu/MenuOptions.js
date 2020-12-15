import React from "react";
import { resource } from "../../constants";
import {Button} from "antd";
import "./style.less";
import { commonFunc } from "../../services";
function MenuOptions() {
  const { isArrayHadValue } = commonFunc;
  const { HOST } = resource;
  const menuOpts = [
    {
      name: "shop",
      link: `${HOST}/#`,
      subMenu: [
        {
          name: "new arrivals",
          link: `${HOST}/new-arrivals/`,
        },
        {
          name: "tops",
          link: `${HOST}/tops/`,
        },
        {
          name: "bottoms",
          link: `${HOST}/bottoms/`,
        },
        {
          name: "outerwears",
          link: `${HOST}/outerwears/`,
        },
        {
          name: "dresses",
          link: `${HOST}/dresses/`,
        },
        {
          name: "accessories",
          link: `${HOST}/accessories/`,
        },
        {
          name: "shoes",
          link: `${HOST}/shoes/`,
        },
      ],
    },
    {
      name: "digitorial",
      link: `${HOST}/digitorial`,
      subMenu: [],
    },
    {
      name: "commumity",
      link: `${HOST}/commumity`,
      subMenu: [],
    },
    {
      name: "about",
      link: `${HOST}/#`,
      subMenu: [
        {
          name: "us",
          link: `${HOST}/who-we-are/`,
        },
        {
          name: "contact",
          link: `${HOST}/contact/`,
        },
        {
          name: "shipping",
          link: `${HOST}/shipping/`,
        },
        {
          name: "exchanges & returns",
          link: `${HOST}/exchangesreturns/`,
        },
      ],
    },
  ];
  const handleRenderSubMenu = (subs) => {
    return (
      isArrayHadValue(subs) && (
        <div className="sub-menu">
          <div className="sub-menu-container">
            <ul className="sub-menu-item-list">
              {subs.map((item, i) => (
                <li className="sub-menu-item" key={i}>
                  <a className="sub-menu-item-href" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    );
  };

  return (
    <div id="menu-options">
      <Button/>
      <div className="menu-options-container">
        {menuOpts.map((item, i) => (
          <div className="menu-item menu-item-wrapper" key={i}>
            <span className="menu-item-text base-text">{item.name}</span>
            {handleRenderSubMenu(item.subMenu)}
          </div>
        ))}
      </div>
    </div>
  );
}

export { MenuOptions };
