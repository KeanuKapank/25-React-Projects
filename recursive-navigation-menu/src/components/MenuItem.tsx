import React, { useEffect, useState } from "react";
import MenuList from "./menuList";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item = "" }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(itemLabel: string) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [itemLabel]: !displayCurrentChildren[itemLabel],
    });
  }

  return (
    <li>
      <div className="list-item-container">
        <p>{item.label} </p>
        {item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size="20px" />
            ) : (
              <FaPlus color="#fff" size="20px" />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
