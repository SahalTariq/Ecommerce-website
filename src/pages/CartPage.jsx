// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../slice.js"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="pt-28 text-center text-gray-700 px-4">
        <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block underline">
          Go Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 px-4 sm:px-8 lg:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Shopping Cart</h2>
        <button
          onClick={() => dispatch(clearCart())}
          className="text-sm bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 transition"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center justify-between gap-4 border-b pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded"
              />
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-blue-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-sm text-red-500 hover:underline mt-1"
              >
                Remove
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total Amount */}
      <div className="mt-8 text-right">
        <h3 className="text-xl font-bold text-gray-800">
          Total: ${totalAmount.toFixed(2)}
        </h3>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 shadow"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
