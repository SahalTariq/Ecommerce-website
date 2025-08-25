import React from "react";
import { useParams } from "react-router-dom";
import products from "../products"; // your shared data
import { motion } from "framer-motion"; // optional if you want nicer animation

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = React.useState(1);

  if (!product) return <p className="pt-24 text-center text-red-600">Product not found</p>;

  return (
    <div className="pt-28 px-6 sm:px-12 lg:px-24 opacity-0 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section: Heading + Image */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-left animate-fadeIn">
            {product.name}
          </h1>

          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full max-w-xs object-contain rounded shadow-lg transition-transform hover:scale-105 duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            />

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-medium">Quantity:</span>
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Right Section: Price, Description, Colors, Button */}
        <div className="mt-12">
          <p className="text-xl font-semibold text-blue-600 mb-3">${product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Colors */}
          <div className="mb-6">
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

          {/* Add to Cart Button - centered */}
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
