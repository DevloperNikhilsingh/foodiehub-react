import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Navbar({ setShowLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();


  return (
    <nav className="relative sticky top-0 z-50  m-auto bg-white shadow flex justify-between items-center px-4 py-3">
      {/* Hamburger icon */}
      <div className="inline-block cursor-pointer md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <img src="/menu-svgrepo-com.svg" alt="menu" className="w-6" />
      </div>

      {/* Logo */}
      <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-lg">
        FoodieHub
      </div>

      {/* Menu items */}
      <div
        className={`absolute top-0 left-0  w-full bg-gray-200 md:bg-white md:static md:flex md:w-auto md:space-x-4 transition-all duration-300 ease-in ${
          isOpen ? "flex flex-col pt-12 pl-4" : "hidden md:flex"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline font-semibold" : "text-black hover:text-orange-500"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline font-semibold" : "text-black hover:text-orange-500"
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline font-semibold" : "text-black hover:text-orange-500"
          }
        >
          Menu
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline font-semibold" : "text-black hover:text-orange-500"
          }
        >
          About
        </NavLink>
      </div>

      {/* Login / Cart Icons */}
      <div className="login-signup flex items-center space-x-2.5 ">
        <button  onClick={() => navigate("/login")}
        className='relative'>
           <img src="user_person_profile_avatar_icon_190943.svg" alt="" className="w-6 hover:cursor-pointer" />
        </button>

        
        <button onClick={() => navigate("/cart")}
      className="relative">
      <img src="shopping-cart-02-svgrepo-com.svg" className="w-6 hover:cursor-pointer" alt="cart"/>
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
