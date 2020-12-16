import React from "react";
import { Menu } from "../menu";

import { commonFunc } from "../../services";
import "./style.less";
function Main() {
  return (
    <div id="main">
      <div className="main-container">
        <Menu />
        {commonFunc.fakeRouter()}
      </div>
    </div>
  );
}

export { Main };
