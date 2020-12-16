import React from "react";

import { ShowNewArrivals } from "../components/ShopNewArrivals";
import { Home } from "../components/home";

function isArrayHadValue(arr) {
  return arr && arr !== undefined && arr !== null && arr.length > 0;
}

function fakeRouter() {
  let path = window.location.pathname;
  if (window.location.pathname === "/") {
    localStorage.removeItem("currentMenu");
    return <Home />;
  }
  if (window.location.pathname === "/new-arrivals/") {
    stringifyToLocalStorage(path, "shop", "new arrivals");
    return <ShowNewArrivals />;
  }
  localStorage.removeItem("currentMenu");
  return <Home />;
}

function stringifyToLocalStorage(pathname, parent, name) {
  const router = {};
  pathname = pathname.split("/").join("");
  router.subChosen = pathname;
  router.parent = parent;
  router.name = name;
  localStorage.setItem("currentMenu", JSON.stringify(router));
}

export const commonFunc = {
  isArrayHadValue,
  fakeRouter,
};
