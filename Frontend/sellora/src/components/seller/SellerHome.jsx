import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSellerProduct } from '../../stores/slice/sellerSlice';
import { Link } from "react-router-dom"

const SellerHome = () => {

  const dispatch = useDispatch();

  const { products, isLoading, isError } = useSelector((state) => state.seller);
  console.log(products);

  useEffect(() => {
    dispatch(fetchSellerProduct());
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh] bg-gray-50">
        <p className="text-2xl font-semibold text-sky-600 animate-pulse">
          Product is Loading......
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[70vh] bg-gray-50">
        <p className="text-red-600 bg-red-100 px-6 py-3 rounded-xl shadow font-semibold">
          {isError}
        </p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-[70vh] bg-gray-50">
        <p className="text-gray-600 text-xl font-medium">
          There is no product available
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Seller Products
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {products.map((product) => (
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

                <p className="text-xs text-gray-500">
                  {product.brand}
                </p>

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

}

export default SellerHome
