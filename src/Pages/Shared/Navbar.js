import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../src/images/logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/tools">Tools</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/businessSummary">Business Summary</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button className="text-primary" onClick={handleSignOut}>
            SignOut
            <i className="fa-solid fa-right-to-bracket text-primary"></i>
          </button>
        ) : (
          <Link to="/login">
            <span className="text-primary">Login</span>
            <i className="fa-solid fa-right-to-bracket text-primary"></i>
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 justify-between fixed-top z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/home"
          className="btn btn-ghost hover:bg-white normal-case text-xl"
        >
          <img src={logo} alt="this logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
