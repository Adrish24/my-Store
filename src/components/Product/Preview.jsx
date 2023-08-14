import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const Preview = () => {
  const [isOpen, setOpen] = useState(false);
  const { product, handleCartAdd } = useContext(AppContext);

  const handleZoomIn = () => {
    setOpen(true);
  };
  const handleZoomOut = () => {
    setOpen(false);
  };

  return (
    product && (
      <div className="flex flex-col w-full sticky">
        <div
          onMouseEnter={handleZoomIn}
          onMouseLeave={handleZoomOut}
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
        {isOpen && (
          <div className="zoom drop-shadow-2xl">
            <img src={product.image} alt="" />
          </div>
        )}
        <div className="flex justify-evenly gap-2 text-white">
          <button
            onClick={() => handleCartAdd(product, true)}
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
