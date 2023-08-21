import { FiShoppingCart } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";

const Cart = () => {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(AppContext)

  useEffect(() => {
  
    const newCount = addToCart.reduce((sum, item) => sum + Math.floor(item.count), 0);
    setCount(newCount)

  },[addToCart])
  return (
    <>
      <div>
        <FiShoppingCart className="xs:text-lg" />
        <span className="flex justify-center items-center absolute translate-x-2 -top-1 xs:-top-1 left-6 xs:left-2 bg-red-600 w-5 xs:w-4 h-5 xs:h-4 rounded-full text-xs">
          {count}
        </span>
      </div>
      Cart
    </>
  );
};

export default Cart;
