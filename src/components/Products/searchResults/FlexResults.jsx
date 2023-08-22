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
      }} className="border-slate-300 border-solid border-b bg-white placeholder:justify-start flex 3xs:flex-col  2xs:flex-col 3xs:h-auto 2xs:h-auto xs:h-56 h-60  hover:text-blue-800">
      <span className="py-4 3xs:w-20 2xs:w-16 sm:w-24 md:w-40 lg:w-60 xl:w-72 2xl:w-80 3xl:w-80 pl-6 xs:pl-4 2xs:pl-0 2xs:m-auto 3xs:m-auto">
        <img className="object-contain 3xs:h-20 2xs:h-14 xs:h-20 sm:h-24 md:h-24 lg:h-28 xl:h-32 2xl:h-40 3xl:h-40 mx-auto" src={product.image} />
      </span> 
      <div className="flex flex-col w-full 3xl:p-4 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-3 xs:p-3 2xs:p-2 3xs:p-2">
        <span className="font-semibold mb-2 3xs:text-xs 2xs:text-xs xs:text-sm ">
          <h1>{product.title}</h1>
        </span>
        <span className="mr-auto 3xs:text-xs 2xs:text-xs xs:text-xs">
          <Rating rating={product.rating} />
        </span>
        <span>
          <p className="whitespace-normal text-start text-overflow-2 3xs:text-xs 2xs:text-xs xs:text-xs">{product.description}</p>
        </span>
      </div>
      <span className="w-40 2xs:w-full text-2xl font-bold xs:text-lg 3xs:text-sm 2xs:text-sm 2xs:pl-2 3xs:pl-2">
      <p>${product.price}</p>
      </span>
    </Link>
  );
};

export default FlexResults;
