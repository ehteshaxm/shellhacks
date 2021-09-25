import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navColor sticky top-0 z-50 bg-gray-800">
      <div className="flex items-center justify-between md:justify-between mx-auto w-10/12 py-4 navTextColor">
        <h1 className="navTitle">
          <Link to="/">My Page</Link>
        </h1>
        <div className="text-base space-x-10 font-body md:block hidden py-1">
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          <Link to="/page3">Page3</Link>
          <button className="btnbasic bg-green-500 hover:bg-green-600">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
