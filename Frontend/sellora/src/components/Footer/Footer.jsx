import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/seller/category");

        const data = await res.json();

        if (res.status === 200) {
          console.log(data.categories);
          setCategories(data.categories);
        } else {
          throw new Error("Something went wrong in category get");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">
          Browse Categories
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <span
              key={category.id}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer 
          hover:bg-blue-600 hover:text-white transition duration-300 shadow-sm"
            >
              {category.name}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
