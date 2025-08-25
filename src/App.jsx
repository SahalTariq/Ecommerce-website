// App.jsx
// import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./componnents/Navbar";
import Footer from "./componnents/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <Outlet /> {/* Your pages render here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
