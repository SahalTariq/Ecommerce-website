import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice.js";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
      })
    );
  };

  if (!product)
    return (
      <p className="pt-24 text-center text-red-600">Product not found</p>
    );

  return (
    <div className=" overflow-x-hidden pt-28 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* ✅ Image Animation: Slide from Left */}
        <motion.div
          className="w-full max-w-sm mx-auto aspect-square bg-white flex items-center justify-center rounded-lg shadow-md"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
        </motion.div>

        {/* ✅ Content Animation: Slide from Right */}
        <motion.div
          className="space-y-5 scroll-x-none"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold text-blue-600">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          {/* Colors */}
          <div>
            <span className="font-medium">Available Colors:</span>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
