import React from "react";
import { NavLink } from "react-router-dom";

const Header = (): React.ReactElement => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400"
              }
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400"
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/protected-route"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray-400"
              }
            >
              ProtectedRoute
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
