import React from "react";
import logo from "../assets/logoipsum.png";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="flex w-full justify-between items-center py-4 px-[8%] bg-stone-200/10">
      <div className="max-w-32">
        <img src={logo} className="w-2xs"></img>
      </div>
      <ul className="py-2.5 px-7 rounded-3xl shadow-2xl ">
        <NavLink to="/">
          <li className="inline-block py-1 px-2.5 mx-2.5 text-black">Home</li>
        </NavLink>
        <NavLink to="/products">
          <li className="inline-block py-1 px-2.5 mx-2.5 text-black">
            Products
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="inline-block py-1 px-2.5 mx-2.5 text-black">About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="inline-block py-1 px-2.5 mx-2.5 text-black">
            Contact
          </li>
        </NavLink>
        <NavLink to="/jobs">
          <li className="inline-block py-1 px-2.5 mx-2.5 text-black">
            Jobs 
          </li>
        </NavLink>
      </ul>
      <button onClick={()=> navigate('/about', {replace:true})} className="bg-black text-white rounded-4xl cursor-pointer text-lg py-2.5 px-6">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
