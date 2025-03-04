// 1. Relative Paths: Using "profile" or "settings" in the to prop makes these links relative to /dashboard.
// 2. NavLink: Provides an active class (or other styling) automatically when the link’s destination matches the current URL.

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RelativeRouting(): React.ReactElement {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
        {" | "}
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Settings
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
