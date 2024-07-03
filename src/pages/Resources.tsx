import React from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";

function Resources() {
  return (
    <div className="flex">
      <div>
        <SideNav />
      </div>
      <Outlet />
    </div>
  );
}

export default Resources;
