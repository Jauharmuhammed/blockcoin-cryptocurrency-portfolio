import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 md:px-16 md:py-4 bg-slate-50 mb-10">
      <Link to="/">
        <h2 className="font-morganite text-5xl cursor-pointer">
          block<span className="text-gray-500">coin</span>
        </h2>
      </Link>
      <ul className="list-none flex gap-5 items-center ">
        <Link to='/'>
            <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300 ">Home</li>
        </Link>
        <Link to='/coins'>
            <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300 ">Cryptocurrencies</li>
        </Link>
        <Link to='/exchanges'>
            <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300 ">Exchange</li>
        </Link>
        <Link to='/news'>
            <li className="text-slate-700 hover:text-slate-900 hover:pb-1 transition duration-300 ">News</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
