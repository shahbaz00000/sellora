import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../stores/slice/authslice';

const Navbar = () => {

  const { isLoggedIn, userType } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <nav className=" sticky top-0 bg-slate-900 text-white px-10 py-3 flex justify-between items-center">

      <div className="flex items-center gap-6">
        <Link
          to="/home"
          className="text-2xl font-bold text-sky-400 hover:text-sky-300"
        >
          Sellora
        </Link>
        {isLoggedIn && userType === "seller" &&
          <Link to="/create-product" className="hover:text-sky-400 transition">
            Create Product
          </Link>
        }
        {isLoggedIn && userType === "customer" &&
          <>
            <Link to="/cart" className="hover:text-sky-400 transition">
              Cart
            </Link>

            <Link to="/order" className="hover:text-sky-400 transition">
              Order
            </Link>
          </>
        }
      </div>

      <form
        className="flex flex-1 max-w-xl"
      >
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-4 py-2 rounded-l-md text-black focus:outline-none bg-white"
        />
        <button
          type="submit"
          className="bg-sky-400 px-5 rounded-r-md hover:bg-sky-500 transition"
        >
          Search
        </button>
      </form>

      <div className="flex items-center gap-4">
        {!isLoggedIn &&
          <>
            <Link
              to="/login"
              className="border border-sky-400 text-sky-400 px-4 py-1.5 rounded-md hover:bg-sky-400 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-sky-400 px-4 py-1.5 rounded-md hover:bg-sky-500 transition"
            >
              Signup
            </Link>
          </>
        }
        {isLoggedIn &&
          <button onClick={handleLogout} className="bg-sky-400 px-4 py-1.5 rounded-md hover:bg-sky-500 transition"
          >
            Logout
          </button>
        }
      </div>


    </nav>
  )
}

export default Navbar
