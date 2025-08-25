
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4 sm:px-10 mt-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">ShopSmart</h2>
          <p className="text-sm mb-4">
            Your one-stop shop for all things tech, fashion, and more. Fast shipping and premium support.
          </p>
          <div className="flex gap-3 text-lg">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            {/* <li><Link to="/about" className="hover:text-white transition">About Us</Link></li> */}
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-white transition">Returns</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition">Shipping Info</Link></li>
            <li><Link to="/policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-blue-500" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-blue-500" /> support@shopsmart.com</li>
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="text-blue-500 mt-1" /> 123 Mall Street, Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
