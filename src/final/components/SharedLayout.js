import React from "react";
import { Link, Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <div>shared layout</div>
      <Outlet />
    </>
  );
};
export default SharedLayout;
