import React, { useEffect, useState } from "react";
import { resource } from "../../constants";
import "./style.less";
import { commonFunc } from "../../services";

const { HOST } = resource;
const menuOpts = [
  {
    name: "shop",
    link: `${HOST}/#`,
    subChosen: undefined,
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
    subChosen: undefined,
    subMenu: [],
  },
  {
    name: "commumity",
    link: `${HOST}/commumity`,
    subChosen: undefined,
    subMenu: [],
  },
  {
    name: "about",
    link: `${HOST}/#`,
    subChosen: undefined,
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

function MenuOptions() {
  const { isArrayHadValue } = commonFunc;

  const [chosenMenu, setChosenMenu] = useState({});

  const updateMenu = () => {
    const currentMenu = JSON.parse(localStorage.getItem("currentMenu"));
    if (currentMenu) {
      setChosenMenu(currentMenu);
    }
  };

  const checkRenderChosenMenu = (item) => {
    return chosenMenu.parent === item.name;
  };

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

  useEffect(() => {
    updateMenu();
  }, []);

  return (
    <div id="menu-options">
      <div className="menu-options-container">
        {menuOpts.map((item, i) => (
          <div className="menu-item menu-item-wrapper" key={i}>
            <div className="menu-item-text-container">
              <span className="menu-item-text base-text">{item.name}</span>
              {checkRenderChosenMenu(item) && (
                <span className="menu-item-text base-text">
                  {chosenMenu.name}
                </span>
              )}
            </div>
            {handleRenderSubMenu(item.subMenu)}
          </div>
        ))}
      </div>
    </div>
  );
}

export { MenuOptions };
