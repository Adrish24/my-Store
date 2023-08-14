/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const [show, setShow] = useState(false);

  const ratingStar = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="text-yellow-500 text-md">
        {rating.rate >= index + 1 ? (
          <FaStar />
        ) : rating.rate >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div
      className="relative flex justify-center items-center mb-2 hover:text-yellow-800"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {ratingStar}
      <span className="text-sm ml-2 text-slate-500">({rating.count})</span>
      {show && (
        <span className="absolute top-5  bg-black text-white font-thin text-xs p-1 border-white">
          {rating.rate} out of 5 stars
        </span>
      )}
    </div>
  );
};

export default Rating;
