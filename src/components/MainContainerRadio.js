import React, { useState } from "react";
import data from "./data.json";
import ItemRadio from "./ItemRadio";
import "./MainContainer.css";

function MainContainerRadio() {
  return (
    <div className="mainContainer">
      Radio
      <ItemRadio
        itemData={data}
        itemLevel={1}
        isExpanded={true}
        onClick={() => {}}
      />
    </div>
  );
}

export default MainContainerRadio;
