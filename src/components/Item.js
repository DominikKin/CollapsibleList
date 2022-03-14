import React, { useState } from "react";
import "./Item.css";
import { BsFillDashSquareFill, BsFillPlusSquareFill } from "react-icons/bs";

function Item({ itemData, itemLevel }) {
  const [isExpanded, setIsExpanded] = useState(itemLevel === 1);

  const styling = itemLevel < 5 ? itemLevel * 0.2 : 1;

  function handleClick() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div
      className={
        itemLevel === 1 ? "itemZero" : isExpanded ? "itemExpanded" : "item"
      }
      style={{
        fontSize: `${2 - styling}rem`,
      }}
    >
      {itemLevel === 1 ? null : (
        <div className="itemRow">
          <div className="iconContainer">
            {itemData.subitems.length === 0 ? null : isExpanded ? (
              <BsFillDashSquareFill className="icon" onClick={handleClick} />
            ) : (
              <BsFillPlusSquareFill className="icon" onClick={handleClick} />
            )}
          </div>
          {itemData.name}
        </div>
      )}
      <div className={isExpanded ? "subItemsShow" : "subItemsHide"}>
        {itemData.subitems === []
          ? null
          : itemData.subitems.map((item) => {
              return <Item itemData={item} itemLevel={itemLevel + 1} />;
            })}
      </div>
    </div>
  );
}

export default Item;
