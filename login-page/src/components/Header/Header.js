import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {/* Brand */}
      <NavLink className="navbar-brand" to="/home">
        Logo
      </NavLink>
      {/* Links */}
      <ul className="navbar-nav">
        {["home", "about", "product", "login"].map((text, index) => (
          <li className="nav-item">
            <NavLink key={index} className="nav-link" to={`/${text}`}>
              {text.charAt(0).toUpperCase()}
              {text.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
