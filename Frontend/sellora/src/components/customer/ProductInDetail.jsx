import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { createCartProduct } from '../../stores/slice/cartSlice';
import CreateReview from '../review/CreateReview';
import ShowReview from '../review/ShowReview';

const ProductInDetail = () => {

    // handle Cart Product
    const dispatch = useDispatch();
    const handleAddToCart = (productId) => {
        dispatch(createCartProduct(productId))
    }


    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [isError, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const token = localStorage.getItem("token")
            const res = await fetch(`http://localhost:3000/api/customer/${id}/product`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (res.status === 200) {
                setProduct(data.product)
            } else {
                setError(data.errorMessage)
            }
        }
        fetchProduct()
    }, [id]);

    if (isError) {
        return (
            <div className="flex justify-center items-center h-[70vh] bg-gray-50">
                <p className="text-red-600 bg-red-100 px-6 py-3 rounded-xl shadow font-semibold">
                    {isError}
                </p>
            </div>
        );
    }


    if (!product || product.length === 0) {
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
            <div className="bg-gray-50 min-h-screen py-10 px-6">

                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SIDE - LARGE IMAGE */}
                    <div className="w-full">
                        <div className="h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden">
                            <img
                                src={`http://localhost:3000/uploads/${product?.image}`}
                                alt={product?.title}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src =
                                        "https://placehold.co/600x600?text=No+Image";
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE - PRODUCT DETAILS */}
                    <div className="flex flex-col justify-center space-y-6">

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-800">
                            {product?.title}
                        </h1>

                        {/* Brand + Category */}
                        <div className="flex gap-6 text-gray-500 text-sm">
                            <span>Brand: {product?.brand}</span>
                            <span>Category: {product?.category}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 text-yellow-500 text-lg">
                            ⭐⭐⭐⭐☆
                            <span className="text-gray-500 text-sm">(4.0 Reviews)</span>
                        </div>

                        {/* Price */}
                        <div>
                            <span className="text-3xl font-bold text-blue-600">
                                ₹{product?.price}
                            </span>
                        </div>


                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                Product Description
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product?.description}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => handleAddToCart(product?._id)}
                                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
                            >
                                Add to Cart
                            </button>

                            <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl hover:bg-gray-300 transition">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
                <CreateReview productId={product._id} />
                {product.reviews.map((review) => (
                    <ShowReview key={review._id} review={review} />
                ))}
            </div>


        </>
    )
}

export default ProductInDetail