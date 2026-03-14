import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = ({ products }) => {

    return (
        <>
            <div className="p-6 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    Customer Products
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
    )
}

export default CardProduct
