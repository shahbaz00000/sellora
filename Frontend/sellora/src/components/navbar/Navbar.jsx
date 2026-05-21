import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../stores/slice/authslice";

const Navbar = () => {
  const { isLoggedIn, userType } = useSelector((state) => state.auth);

  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearching = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigation(`/search?query=${query}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-blue-950 text-white px-10 py-3 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-2xl font-bold text-sky-400 hover:text-sky-300"
        >
          Sellora
        </Link>
        {isLoggedIn && userType === "seller" && (
          <>
            <Link
              to="/create-product"
              className="hover:text-sky-400 transition"
            >
              Create Product
            </Link>
            <Link to="/category" className="hover:text-sky-400 transition">
              Add Category
            </Link>
          </>
        )}
        {isLoggedIn && userType === "customer" && (
          <>
            <Link to="/cart" className="hover:text-sky-400 transition">
              Cart
            </Link>

            <Link to="/order" className="hover:text-sky-400 transition">
              Order
            </Link>
          </>
        )}
      </div>

      <form onSubmit={handleSearching} className="flex flex-1 max-w-xl">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-4 py-2 rounded-l-md text-black focus:outline-none bg-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-sky-400 px-5 rounded-r-md hover:bg-sky-500 transition"
        >
          Search
        </button>
      </form>

      <div className="flex items-center gap-4">
        {!isLoggedIn && (
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
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-sky-400 px-4 py-1.5 rounded-md hover:bg-sky-500 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
