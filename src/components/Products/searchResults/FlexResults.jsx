import { Link } from "react-router-dom";
import Rating from "../../Home/ratedItems/Rating";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const FlexResults = ({ product }) => {
    const { setCategory, getSingleProduct } = useContext(AppContext)
  return (
    <Link to={`/products/${product.category}/${product.id}`} onClick={() => {
        setCategory(product.category);
        getSingleProduct(product.id);
      }} className="border-slate-300 border-solid border-b bg-white placeholder:justify-start flex h-60  hover:text-blue-800">
      <span className="py-4 md:w-40 lg:w-60 xl:w-72 2xl:w-80 3xl:w-80 pl-6">
        <img className="object-contain md:h-24 lg:h-28 xl:h-32 2xl:h-40 3xl:h-40 mx-auto" src={product.image} />
      </span> 
      <div className="flex flex-col w-full px-4 pt-4 md:px-2 md:pt-2">
        <span className="font-semibold mb-2">
          <h1>{product.title}</h1>
        </span>
        <span className="mr-auto">
          <Rating rating={product.rating} />
        </span>
        <span>
          <p className="whitespace-normal text-start text-overflow-2">{product.description}</p>
        </span>
      </div>
      <span className="w-40 py-4 pr-4 text-2xl font-bold">
      <p>${product.price}</p>
      </span>
    </Link>
  );
};

export default FlexResults;
