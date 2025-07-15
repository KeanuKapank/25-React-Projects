import MenuList from "./menuList";
import "./index.css";

const NavMenu = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default NavMenu;
