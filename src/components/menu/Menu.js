import React from "react";
import { MenuOptions } from "./MenuOptions";
import { MenuTitle } from "./MenuTitle";
import { MenuActivities } from "./MenuActivities";
function Menu() {
  return (
    <div id="menu">
      <div className="menu-container">
        <MenuOptions />
        <MenuTitle />
        <MenuActivities />
      </div>
    </div>
  );
}

export { Menu };
