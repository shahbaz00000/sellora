import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../../Error/Error";

const ShowCategoryPages = () => {
  const { category } = useParams();
  const [catProducts, setCatProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products/category/${category}`,
          {
            method: "GET",
          },
        );
        const data = await res.json();
        console.log(data);
        setCatProducts(data.products);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setError(error.message);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <>
      <Error message={error} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {catProducts.length === 0 ? (
          <div className="flex justify-center items-center h-[70vh] bg-gray-50">
            <p className="text-gray-600 text-xl font-medium">
              No products found in this category.
            </p>
          </div>
        ) : (
          catProducts.map((product) => (
            <Link
              to={`/showProduct/${product._id}`}
              key={product._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-36 w-full bg-gray-100 overflow-hidden">
                <img
                  src={`http://localhost:3000/uploads/${product.image}`}
                  alt={product.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
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
          ))
        )}
      </div>
    </>
  );
};
export default ShowCategoryPages;
