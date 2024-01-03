import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtuctedRoute = () => {
  return (
    <>
      <div style={{ overflowY: "auto", maxHeight: "100vh" }}>
        <Navbar />
      </div>

      <hr style={{ color: "grey" }} />
      <Outlet />
    </>
  );
};

export default ProtuctedRoute;
