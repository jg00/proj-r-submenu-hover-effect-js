import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    e.stopPropagation();

    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom }); // Update context location and page (used in Submenu)
  };

  const handleSubmenu = (e) => {
    // Approach 1
    // if (!e.target.classList.contains("link-btn")) {
    //   closeSubmenu();
    // }

    // Approach 2 using e.stopPropagation() on displaySubmen()
    closeSubmenu();
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
              company
            </button>
          </li>
        </ul>

        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
