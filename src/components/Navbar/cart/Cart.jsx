import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";

const Cart = () => {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(AppContext);

  useEffect(() => {
    const newCount = addToCart.reduce(
      (sum, item) => sum + Math.floor(item.count),
      0
    );
    setCount(newCount);
  }, [addToCart]);
  return (
    <>
      <div>
        <FiShoppingCart size={20} className="xs:text-lg 2xs:text-sm text-xl" />
        <span
          className="
        flex 
        justify-center 
        items-center 
        absolute 
        translate-x-2 
        -top-1 
        xs:-top-1 
        left-6 
        xs:left-2 
        2xs:left-0 
        xl:left-5
        lg:left-5
        md:left-4
        sm:left-3
        bg-red-600 
        w-5 
        xs:w-4 
        2xs:w-4 
        h-5 
        xs:h-4 
        2xs:h-4 
        rounded-full 
        text-xs"
        >
          {count}
        </span>
      </div>
      <h1 className="2xs:hidden">Cart</h1>
    </>
  );
};

export default Cart;
