import { Link } from "react-router-dom";
import Banner from "../componnents/Banner";
import ProductCard from "../componnents/ProductCard";
import products from "../products";
import { useSelector } from "react-redux";

const Home = () => {
  const featuredProducts = products.filter((p)=> p.isFeatured === true)
  const searchTerm = useSelector((state) => state.search.searchTerm);
  // 1. Filter the products based on the search term
  const searchProducts = featuredProducts.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <>
      <div className="container mx-auto px-4 mt-20 animate-fadeIn">
        {/* Hero Banner */}
        <Banner />

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-12">
          <Link to="/men">
            <button className="font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-blue-600 hover:to-indigo-500 shadow-md transition-all duration-300">
              Mens
            </button>
          </Link>
          <Link to="/women">
            <button className="font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-rose-500 hover:to-pink-600 shadow-md transition-all duration-300">
              Womens
            </button>
          </Link>
          <Link to="/children">
            <button className="font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:from-teal-500 hover:to-emerald-500 shadow-md transition-all duration-300">
              Childrens
            </button>
          </Link>
        </div>

        {/* Featured Heading */}
        <div>
          <h1 className="text-center mt-14 mb-6 text-gray-900 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Featured Products
          </h1>
          <p className="text-center text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of best-selling items for everyone.
          </p>
        </div>

        {/* Product Grid */}
      {searchProducts.length === 0 ? (<p className="text-center mt-5">No Products Found!</p>) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-16 pb-24">

          {searchProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              index={index}
            />
          ))}
        </div>

      )}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pt-16 pb-24">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              index={index}
            />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Home;
