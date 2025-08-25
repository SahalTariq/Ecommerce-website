import PropTypes from 'prop-types';
import { useState } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from '../searchSlice';
// import { setSearchTerm } from './searchSlice';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation
import {
  FiMenu,
  FiX,
  // FiSearch,
  FiShoppingCart,
  FiUser
} from 'react-icons/fi';
import CartPage from '../pages/CartPage';

const Navbar = ( ) => {
  const dispatch = useDispatch();
   const searchTerm = useSelector((state) => state.search.searchTerm);
    const location = useLocation(); // 2. Get the current location object
    const handleInputChange = (event) => {
    // Dispatch the setSearchTerm action with the new input value
    dispatch(setSearchTerm(event.target.value));
  };
  // 3. Define the pages where you want the search bar
  const pagesWithSearchBar = ['/products', '/men','/', '/women','/children']; 
  const shouldShowSearchBar = pagesWithSearchBar.includes(location.pathname);

  const [isOpen, setIsOpen] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);

   const cartItems = useSelector((state) => state.cart.cartItems);
   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // setShowSearch(false); // Hide search when toggling menu
  };

  // const toggleSearch = () => {
  //   // On small screens, open inside menu
  //   if (window.innerWidth < 768 && !isOpen) return;
  //   setShowSearch(!showSearch);
  // };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
            //   src="src/images/logo (2).png"
            src='src/images/shopping store logo.png'
              alt="Logo"
              className="h-14 w-auto "
            />
          </a>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-10 text-[16px] font-medium text-gray-200">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/products" className="hover:text-white transition">Products</a>
          <a href="/contact" className="hover:text-white transition">Contact Us</a>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4 text-xl text-gray-400">
          {/* Search */}

          {/* {showSearchBar && (

            <div className="hidden md:block relative">
            <FiSearch
              className="cursor-pointer hover:text-blue-500 transition"
              onClick={toggleSearch}
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search products..."
                className="absolute right-0 mt-2 w-64 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black z-40"
                value={searchTerm} // Controlled component: input value is tied to Redux state
                onChange={handleInputChange} // Dispatch action on every change
              />
            )}
          </div>

          )} */}

          {shouldShowSearchBar && 
          
          (
            <div>
            {/* <FiSearch
              className="cursor-pointer hover:text-blue-500 transition"
              onClick={toggleSearch}
            /> */}
            
              <input
                type="text"
                placeholder="Search products..."
                className=" right-0  w-40 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black z-40"
                value={searchTerm}
                onChange={handleInputChange}
              />
            
          </div>
          )}
          {/* <div className="hidden md:block relative">
            <FiSearch
              className="cursor-pointer hover:text-blue-500 transition"
              onClick={toggleSearch}
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search products..."
                className="absolute right-0 mt-2 w-64 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black z-40"
              />
            )}
          </div> */}

          {/* Cart and User */}
          {/* <FiShoppingCart className="cursor-pointer hover:text-blue-500 transition hidden md:block" /> */}
          
           <Link to="/cart" className="relative">
              <FiShoppingCart onClick={CartPage} size={22} className="text-gray-700 hover:text-blue-500" />
                 {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                 {totalItems}
               </span>
              )}
          </Link>

          <FiUser className="cursor-pointer hover:text-blue-500 transition " />

          {/* Hamburger */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <FiX
            className="text-2xl cursor-pointer text-gray-800"
            onClick={toggleMenu}
          />
        </div>

        <div className="flex flex-col px-6 space-y-6 text-gray-800 font-semibold text-lg mt-4">
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/products" onClick={toggleMenu}>Products</a>
          <a href="/contact" onClick={toggleMenu}>Contact Us</a>

          {/* <div className="flex space-x-4 mt-4 text-xl">
            <FiSearch
              className="cursor-pointer text-gray-600"
              onClick={() => setShowSearch(!showSearch)}
            /> */}
            {/* <FiShoppingCart className="cursor-pointer text-gray-600" />
            <FiUser className="cursor-pointer text-gray-600" />
          </div> */}

          {/* Mobile Search Box (Inside menu only) */}
          {/* {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 mt-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-black"
            />
          )} */}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
    showSearchBar: PropTypes.bool  // Validates type + warns if missing
};

export default Navbar;
