import React from "react";
import { AiOutlineBank } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark">
      <Link to="/" className="navbar-brand" href="#">
        <AiOutlineBank />
      </Link>

      <ul className="nav ">
        <li className="nav-item">
          <Link
            to="/squad"
            className="nav-link text-white font-weight-bold"
            href="#"
          >
            Players
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
