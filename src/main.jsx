// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import "./index.css"; // Tailwind styles
import MenPage from "./pages/MenPage.jsx";
import WomenPage from "./pages/WomenPage.jsx";
import ChildrenPage from "./pages/ChildrenPage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import {Provider} from "react-redux";
import store from "./store.js"; // Redux store
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckOutPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* App layout applied to all child routes */}
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail/>} />
          <Route path="/men" element={<MenPage/>}/>
          <Route path="/women" element={<WomenPage/>}/>
          <Route path="/children" element={<ChildrenPage/>}/>
          <Route path ="/contact" element={<ContactUs/>}/> 
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products" element={<ProductsPage/>}/>
          {/* More routes can be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
