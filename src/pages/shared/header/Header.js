import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className=" flex justify-center pt-2">
      <div className="navbar bg-base-0 text-white w-full lg:w-4/5">
        <div className="flex-1">
          

          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
            >
              <li>
                <Link to='/home'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/hotel'>
                  Hotel
                </Link>
              </li>
              <li>
                <Link to='/blog'>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            hotel lagbe ?
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
