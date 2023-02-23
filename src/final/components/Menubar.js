import React from "react";
import { useState, useEffect } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { useGlobalContext } from "../pages/context";

// const getStorageTheme = () => {
//   let theme = "light-theme";
//   if (localStorage.getItem("theme")) {
//     theme = localStorage.getItem("theme");
//   }
//   return theme;
// };

const Menubar = () => {
  const { openSidebar, toggleTheme, theme } = useGlobalContext();

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <section className="menubar-container">
      <button onClick={openSidebar}>
        <CgMenuLeft className="menu-icon " />
      </button>
      <button className="darkmode-icon " onClick={toggleTheme}>
        <MdDarkMode />
      </button>
    </section>
  );
};

export default Menubar;
