import React, { useEffect } from 'react';
import { fetchOrderThunk } from '../../stores/slice/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {

    const dispatch = useDispatch();
    const { orders, isLoading, isError } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(fetchOrderThunk());
    }, [dispatch]);

    if (isLoading) {
        return <h2 className="text-center mt-10 text-lg">Loading Orders...</h2>;
    }

    if (isError) {
        return <h2 className="text-center mt-10 text-red-500">{isError}</h2>;
    }

    if (!orders || orders.length === 0) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-xl font-semibold">No Orders Found</h2>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-5">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>

            {orders.map((order) => (
                <div
                    key={order._id}
                    className="bg-white shadow-md rounded-lg p-6 mb-6 border"
                >
                    {/* Order Header */}
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="font-semibold text-gray-700">
                                Order ID: {order._id}
                            </p>
                            <p className="text-sm text-gray-500">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-lg font-bold text-green-600">
                                ₹ {order.totalPrice}
                            </p>
                        </div>
                    </div>

                    {/* Product List */}
                    {order.items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-6 border-t pt-4 mt-4"
                        >
                            {/* Product Image */}
                            <div className="w-24 h-24">
                                <img
                                    src={`http://localhost:3000/uploads/${item.image}`}
                                    alt={item.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src =
                                            "https://placehold.co/300x200?text=No+Image";
                                    }}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600">
                                    Quantity: {item.quantity}
                                </p>
                                <p className="text-gray-600">
                                    Price: ₹ {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};


export default Order