
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ProductCard = ({image , id , name , price , index}) => {
    //  const navigate = useNavigate();
  return (
    <div 
    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 w-full max-w-sm mx-auto
    //   >>> New Animation Classes <<<
         opacity-0                   
         animate-fadeIn 
      "
      // >>> Staggering Effect <<<
      style={{ animationDelay: `${index * 0.1}s` }} /* Delays each card's animation based on its position */
    >
      <div className="flex items-center justify-center h-56 mb-4 overflow-hidden">
        <img 
        src={image} 
        alt={name}
        className=" object-contain h-full w-full transition-transform duration-300 hover:scale-105"
         />
      </div>

      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
        <p className="text-blue-600 font-bold text-sm mt-1">{price}</p>
      </div>

     <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-4 w-full">
  
  {/* <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-400 transition">
    Add to Cart
  </button> */}
  
  <Link to={`/product/${id}`} className="w-full sm:w-auto">
    <button className="w-full sm:w-auto bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
      View Details
    </button>
  </Link>

</div>


     </div>

  )
}

ProductCard.propTypes = {
    image:PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired, 
}
export default ProductCard;

// const ProductCard = ({ image, name, price }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 w-full max-w-sm mx-auto">
//       {/* Product Image */}
//       <div className="flex items-center justify-center h-56 mb-4 overflow-hidden">
//         <img
//           src={image}
//           alt={name}
//           className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="text-center mb-4">
//         <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
//         <p className="text-blue-600 font-bold text-sm mt-1">${price}</p>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center gap-3">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
//           Add to Cart
//         </button>
//         <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
