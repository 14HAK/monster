import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </nav>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
