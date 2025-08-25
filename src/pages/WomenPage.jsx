import products from "../products";
import ProductCard from "../componnents/ProductCard";
import { useSelector } from "react-redux";

const WomenPage = () => {
  const womenProducts = products.filter((p) => p.category === "Woman");
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const searchProducts = womenProducts.filter ((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 mt-24">
      <h2 className="text-center mb-10 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Womens Products</h2>

      {searchProducts.length === 0 ? 
      (<p className="text-center">No Products Found</p> ) 
      
      :
      
      (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
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
      
      
    </div>
  );
};

export default WomenPage;
