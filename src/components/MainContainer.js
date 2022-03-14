import React from "react";
import data from "./data.json";
import Item from "./Item";
import "./MainContainer.css";

function MainContainer() {
  return (
    <div className="mainContainer">
      Checkbox
      <Item
        itemData={data}
        itemLevel={1}
        isExpanded={true}
        onClick={() => {}}
      />
    </div>
  );
}

export default MainContainer;
