import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "../../components/NavbarComponent/NavComponent";

export default function Home() {
  return (
    <div>
      <h1>Router 5</h1>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
      </ul>
    </div>
  );
}
