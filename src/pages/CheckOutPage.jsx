import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../slice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();

    const { name, email, address, phone } = formData;

    if (!name || !email || !address || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      to_email: email,         // 👈 dynamic recipient for user
      user_name: name,
      user_email: email,
      user_address: address,
      user_phone: phone,
      cart_items: cartItems
        .map(
          (item) =>
            `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`
        )
        .join("\n"),
      total_price: totalAmount.toFixed(2),
      // to_email: email // Replace this with your actual receiving email address or variable
    };

    // Replace with your actual EmailJS credentials

      // Send confirmation to user
  emailjs
    .send("service_yt8s705", "template_jcztyii", templateParams, "kPzpb6i26278HHHHy")
    // .then(() => {
    //   // Then send to admin
    //   emailjs.send(
    //     "service_yt8s705", 
    //     "template_admin", 
    //     templateParams, 
    //     "qH0vfVCdKnYUCKrYJ"
    //   );
    // })

    // emailjs
    //   .send(
    //     "service_yt8s705",
    //     "template_qe6oowb",
    //     templateParams,
    //     "kPzpb6i26278HHHHy"
    //   )
      .then(() => {
        setIsSubmitted(true);
        dispatch(clearCart());

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  if (isSubmitted) {
    return (
      <div className="pt-28 text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-green-600 text-3xl font-bold"
        >
          ✅ Order Confirmed!
        </motion.div>
        <p className="text-gray-600 mt-2">We have emailed your order details.</p>
      </div>
    );
  }

  return (
    <div className="pt-28 px-4 sm:px-8 lg:px-20 max-w-4xl mx-auto">
      <h2 className="text-2xl text-center font-semibold mb-6">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form
          onSubmit={handleConfirmOrder}
          className="bg-white p-6 shadow-md rounded space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            rows={3}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Confirm Order
          </button>
        </form>

        {/* Cart Summary */}
        <div className="bg-gray-50 p-6 rounded shadow-sm space-y-4">
          <h3 className="text-lg font-medium mb-2">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × ${item.price}
                  </p>
                </div>
              </div>
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <hr />
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
