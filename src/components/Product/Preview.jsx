import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const Preview = () => {
  const { product, handleCartAdd } = useContext(AppContext);
  return (
    product && (
      <div className="flex flex-col w-full sticky">
        <div
          className="
          flex
          justify-center
          items-center
          cursor-pointer 
          relative 
          border-2 
          border-solid 
          border-slate-300 
          rounded-sm 
          mb-3 py-2"
        >
          <img className="object-contain max-h-96 w-96" src={product.image} />
        </div>
        <div className="flex justify-evenly gap-2 text-white">
          <button
            onClick={() => handleCartAdd(product)}
            className="bg-yellow-500 px-2 py-3 w-full rounded-sm drop-shadow-lg"
          >
            ADD TO CART
          </button>
          <Link className="bg-red-500 px-2 py-3 w-full text-center rounded-sm drop-shadow-lg">
            BUY NOW
          </Link>
        </div>
      </div>
    )
  );
};

export default Preview;
