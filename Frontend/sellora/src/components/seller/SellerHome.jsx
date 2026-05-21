import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSellerProduct } from "../../stores/slice/sellerSlice";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

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

  return <ProductCard products={products} />;
};

export default SellerHome;
