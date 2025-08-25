
import ProductCard from "../componnents/ProductCard";
import products from "../products";
import { useSelector } from 'react-redux';

const ProductsPage = () => {

    const searchTerm = useSelector((state) => state.search.searchTerm);

  // 1. Filter the products based on the search term
  const searchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-24 animate-fadeIn">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          All Products
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Explore our full catalog of quality items made for everyone.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
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
    </div>
  );
};

export default ProductsPage;
