/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Stars = () => {
  const { product } = useContext(AppContext);

  if (!product || !product.rating) {
    return null; 
  }
  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="text-yellow-500 text-md">
        {product.rating.rate >= index + 1 ? (
          <FaStar />
        ) : product.rating.rate >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div
      className="relative flex items-center text-md mb-2"
    >
      <span className="font-semibold">{product.rating.rate}</span>
      <span className="flex ml-2">{ratingStar}</span>
      <span className="text-sm ml-2 text-slate-500">{product.rating.count} ratings</span>
    </div>
  );
};

export default Stars;
