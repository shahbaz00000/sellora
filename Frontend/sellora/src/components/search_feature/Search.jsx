import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Search = () => {
  const [query] = useSearchParams();
  //   console.log(query.get("query"));
  const searchQuery = query.get("query");

  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      const res = await fetch(
        `http://localhost:3000/api/products/search?query=${searchQuery}`,
        {
          method: "GET",
        },
      );
      const data = await res.json();
      console.log(data);
      setSearchResults(data.products);
    };
    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Search Products
        </h1>
        {searchResults.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-2xl shadow-sm border border-gray-200">
            {/* Icon */}
            <div className="bg-gray-200 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-6h13M9 5h13M3 7h.01M3 17h.01M3 12h.01"
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-700">
              No products found
            </h2>

            {/* Message */}
            <p className="text-gray-500 text-sm mt-1 text-center">
              We couldn’t find anything for{" "}
              <span className="font-medium text-gray-700">"{searchQuery}"</span>
            </p>

            {/* Suggestion */}
            <p className="text-gray-400 text-xs mt-2 text-center">
              Try searching with different keywords or check spelling.
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {searchResults.map((product) => (
            <Link
              to={`/showProduct/${product._id}`}
              key={product._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-36 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={`http://localhost:3000/uploads/${product.image}`}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/300x200?text=No+Image";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-3 space-y-1">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-xs text-gray-500">{product.brand}</p>

                <span className="text-sm font-bold text-blue-600">
                  ₹{product.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
