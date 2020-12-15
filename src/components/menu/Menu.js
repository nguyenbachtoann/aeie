import React from "react";
import { MenuOptions } from "./MenuOptions";
import {MenuTitle} from "./MenuTitle";
function Menu() {
  return (
    <div id="menu">
      <div className="menu-container">
        <MenuOptions />

        <MenuTitle/>

        <span>dasdasd</span>

        {/* App Tile*/}
        {/* Activities*/}
      </div>
    </div>
  );
}

export { Menu };
