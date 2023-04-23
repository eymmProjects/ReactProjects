import React from "react";
import { Data } from "../data/data";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div className="menuTitle">Our Menu</div>
      <div className="menuList">
        {Data.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
