import React from "react";
import { useState } from "react";
import { links } from "../data";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../pages/context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, sidevalue, setsideValue } =
    useGlobalContext();
  // const [value, setValue] = useState(0);
  return (
    <section
      className={`${
        isSidebarOpen
          ? "sidebar-container show-sidebar-container"
          : "sidebar-container"
      }`}
    >
      <button onClick={closeSidebar}>
        <VscChromeClose className="close-icon " />
      </button>
      <ul className="links">
        {links.map((link, index) => {
          const { id, url, text } = link;
          return (
            <div
              key={id}
              // onClick={() => setsideValue(index)}
              className={` ${index === sidevalue && "active-btn"}`}
            >
              <li key={id}>
                {/* <a href={url}>{text}</a> */}
                <Link
                  onClick={() => setsideValue(index)}
                  className={` ${index === sidevalue && "active-text"}`}
                  to={url}
                >
                  {text}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
