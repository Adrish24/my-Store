/* eslint-disable react/prop-types */
import { useContext } from "react";
import AppContext from "../../context/AppContext";

import { RiDeleteBin5Line, RiShareForwardLine } from "react-icons/ri";
import { FiSave } from "react-icons/fi";
import { BiPlus, BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  

  const { addToCart, setAddToCart, handleCartAdd, handleCartRemove, handleSelected, getSingleProduct } =
    useContext(AppContext);

  const removeItem = () => {
    const newItems = addToCart.filter((it) => it.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newItems));
    setAddToCart(newItems);
  };


  return (
    <div className="flex justify-start p-3 border-t border-slate-300">
      <span className="flex justify-center items-center mr-2">
        <input type="checkbox" checked={item.selected} onChange={() => handleSelected(item.id)} />
      </span>
      <img className="object-contain 2xs:h-20 w-40 h-40 p-2 2xs:m-auto" src={item.image} />
      <div className="flex flex-col w-7/12 border-r border-slate-300">
        <div className="details ml-2 border-b border-slate-300">
          <Link to={`/products/${item.category}/${item.id}`} onClick={() => getSingleProduct(item.id)} className="text-lg whitespace-normal 3xs:text-xs 2xs:text-sm">{item.title}</Link>
          <div className="priceTag flex">
            <span className="text-xs mt-1 font-semibold 3xs:text-3xs 2xs:text-2xs">$</span>
            <span className="text-lg font-semibold flex-1 3xs:text-xs 2xs:text-sm">{item.price}</span>
          </div>
          <p className="text-green-600 3xs:text-xs 2xs:text-sm">In Stock</p>
        </div>
        <div className="flex-1 flex justify-end">
          <button onClick={() => removeItem()} className="px-2 text-red-700">
            <RiDeleteBin5Line className="2xs:text-sm 3xs:text-xs text-xl" />
          </button>
          <button className="px-2 text-lime-600">
            <FiSave className="2xs:text-sm 3xs:text-xs text-xl" />
          </button>
          <button className="px-2 mr-2 text-blue-600">
            <RiShareForwardLine className="3xs:text-xs 2xs:text-sm text-xl" />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center ml-2 3xs:text-xs 2xs:text-xs">
        <div className="flex pt-4 mb-3 drop-shadow-lg">
          <button
            className="bg-slate-300 w-6 rounded-l-md p-1"
            onClick={() => handleCartRemove(item)}
          >
            <BiMinus />
          </button>
            <span 
            className="w-10 text-center p-1 border-y border-slate-300"
            type="textbox"
          >
            {item.count}
          </span>
          <button
            className="bg-slate-300 w-6 rounded-r-md p-1"
            onClick={() => handleCartAdd(item)}
          >
            <BiPlus />
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center 3xs:text-xs 2xs:text-sm">
          <button className="bg-orange-600 py-2 px-3 font-semibold text-white rounded-sm drop-shadow-lg xs:text-xs sm:text-sm whitespace-nowrap">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
