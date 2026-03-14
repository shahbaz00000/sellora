import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, deleteToCart, fetchCartProduct } from '../../stores/slice/cartSlice';
import CartSummary from './CartSummary';

const Cart = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCartProduct());
    }, []);

    const { carts, isLoading, isError } = useSelector((state) => state.cart);
    console.log(carts);

    const handleRemoveFromCart = (cartId)=>{
        dispatch(deleteFromCart(cartId))
    }

    return (
       <>
  <div className="p-6 bg-gray-50 min-h-screen">

    {/* Page Title */}
    <h1 className="text-2xl font-bold mb-6 text-gray-800">
      My Cart
    </h1>

    {/* 2 Column Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* ================= LEFT SIDE — CART PRODUCTS ================= */}
      <div className="lg:col-span-2 space-y-4">

        {carts.map((cart) => (
          <div
            key={cart._id}
            className="flex items-center gap-4 bg-white border rounded-xl shadow p-4 hover:shadow-md transition"
          >

            {/* Product Image */}
            <div className="h-24 w-24 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={`http://localhost:3000/uploads/${cart.product.image}`}
                alt={cart.product.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://placehold.co/100x100?text=No+Image";
                }}
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 space-y-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {cart.product.title}
              </h2>

              <p className="text-sm text-gray-500">
                Brand: {cart.product.brand}
              </p>

              <p className="text-blue-600 font-bold text-lg">
                ₹{cart.product.price}
              </p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() =>
                handleRemoveFromCart(cart._id)
              }
              className="px-4 py-2 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Delete From Cart
            </button>

          </div>
        ))}

      </div>

      <div className="lg:col-span-1 sticky top-24 h-fit">

        <CartSummary carts={carts} />

      </div>

    </div>
  </div>
</>

    );

}

export default Cart
