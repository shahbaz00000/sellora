import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Seller Products
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link
              to={`/showProduct/${product._id}`}
              key={product._id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {/* Discount Badge (optional) */}
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-md shadow">
                  -20%
                </span>

                <img
                  src={`http://localhost:3000/uploads/${product.image}`}
                  alt={product.title}
                  className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://placehold.co/300x200?text=No+Image";
                  }}
                />

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs bg-white px-3 py-1 rounded-full shadow">
                    View Product
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-1">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition">
                  {product.title}
                </h2>

                <p className="text-xs text-gray-500">{product.brand}</p>

                {/* Price Section */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-base font-bold text-gray-900">
                    ₹{product.price}
                  </span>

                  {/* Old price (optional) */}
                  <span className="text-xs text-gray-400 line-through">
                    ₹999
                  </span>
                </div>

                {/* Rating (optional UI boost) */}
                <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                  ⭐⭐⭐⭐☆
                  <span className="text-gray-500">(120)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
