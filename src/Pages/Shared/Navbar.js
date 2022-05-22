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
  };
  return (
    <div class="navbar bg-base-100 fixed z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
            <li>
              {user ? (
                <button onClick={handleSignOut}>SignOut</button>
              ) : (
                <Link to="/login">
                  <span className="text-primary">Login</span>
                  <i class="fa-solid fa-right-to-bracket px-1 text-primary"></i>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/home">
          <img src={logo} alt="this logo" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
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
          <li>
            {user ? (
              <button onClick={handleSignOut}>
                SignOut
                <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            ) : (
              <Link to="/login">
                <span className="text-primary">Login</span>
                <i class="fa-solid fa-right-to-bracket px-1 text-primary"></i>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
