import React, { useState } from "react";
import "./Item.css";
import { BsFillDashSquareFill, BsFillPlusSquareFill } from "react-icons/bs";

function ItemRadio({
  itemData,
  itemLevel,
  isExpanded,
  onClickMinus,
  onClickPlus,
}) {
  const [expandedItem, setExpandedItem] = useState(null);
  const fontSize = itemLevel < 5 ? itemLevel * 0.2 : 1;

  return (
    <div
      className={
        itemLevel === 1 ? "itemZero" : isExpanded ? "itemExpanded" : "item"
      }
      style={{
        fontSize: `${2 - fontSize}rem`,
      }}
    >
      {itemLevel === 1 ? null : (
        <div className="itemRow">
          <div className="iconContainer">
            {itemData.subitems.length === 0 ? null : isExpanded ? (
              <BsFillDashSquareFill className="icon" onClick={onClickMinus} />
            ) : (
              <BsFillPlusSquareFill className="icon" onClick={onClickPlus} />
            )}
          </div>
          {itemData.name}
        </div>
      )}
      <div className={isExpanded ? "subItemsShow" : "subItemsHide"}>
        {itemData.subitems === []
          ? null
          : itemData.subitems.map((item, index) => {
              return (
                <ItemRadio
                  itemData={item}
                  itemLevel={itemLevel + 1}
                  isExpanded={expandedItem === index}
                  onClickPlus={() => setExpandedItem(index)}
                  onClickMinus={() => setExpandedItem(null)}
                />
              );
            })}
      </div>
    </div>
  );
}

export default ItemRadio;
