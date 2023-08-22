
import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";

import ItemsList from "../../components/MyCart/ItemsList";
import { Link } from "react-router-dom";

const MyCart = () => {
 
  const {  price, count, setCategory, setValue, setSearchList, handleDselected  } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    setValue("")
    setSearchList([])
    setCategory('All')
  },[])

  return (
    <div className="cart flex flex-col items-center justify-center bg-slate-300 w-full pt-16 select-none">
      <div className="xl:w-full 2xl:w-11/12 3xl:w-9/12 flex 3xs:flex-col 2xs:flex-col sm:flex-col sm:justify-start 3xs:justify-start 2xs:justify-start xs:justify-start xs:flex-col justify-center bg-slate-300 p-2 min-h-screen">
        <div className="w-1/2 3xs:w-full 2xs:w-full sm:w-full xs:w-full md:flex-1 lg:flex-1 xl:flex-1 2xl:flex-1 3xl:flex-1">
          <div className="bg-white w-full h-auto 3xl:p-3 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-2 xs:p-2 2xs:p-2 3xs:p-2 mt-2 rounded-sm drop-shadow-xl">
            <div className="title flex flex-col justify-center p-3">
              <h1 className="text-2xl font-semibold 2xs:text-lg 3xs:text-sm">Shopping Cart</h1>
              <Link className="text-orange-500 2xs:text-xs 3xs:text-2xs" onClick={handleDselected}>Deselect all items</Link>
            <ItemsList />
            </div>
          </div>
        </div>
        <div className="w-1/3 3xs:w-full 2xs:w-full sm:w-full xs:w-full">
          <div className="bg-slate-300 mt-2 pl-3 sticky">
            <div className="bg-white rounded-sm drop-shadow-lg">
              <h1 className="p-3 text-lg font-semibold text-slate-400 border-b border-slate-300 3xs:text-xs 2xs:text-sm xs:text-base">
                Price Details
              </h1>
              <div className="flex flex-col px-3 ">
                <div className="flex justify-between py-3 font-semibold 3xs:text-2xs 2xs:text-xs xs:text-sm">
                  <span>Price({count}items)</span>
                  <span>${price}</span>
                </div>
                <div className="flex justify-between font-semibold 3xs:text-2xs 2xs:text-xs xs:text-sm">
                  <span>Discount</span>
                  <span className="text-green-600 3xs:text-2xs 2xs:text-xs xs:text-sm">-$0</span>
                </div>
                <div className="flex justify-between py-3 font-semibold 3xs:text-2xs 2xs:text-xs xs:text-sm">
                  <span>Delivery Charges</span>
                  <span className="text-green-600 3xs:text-2xs 2xs:text-xs xs:text-sm">Free</span>
                </div>
                <div className="flex justify-between py-3 text-xl font-bold border-y-2 border-dashed border-slate-300 3xs:text-xs 2xs:text-sm xs:text-base">
                  <span>Total Amount</span>
                  <span>${price}</span>
                </div>
                <span className="p-2 text-green-600">You save $0 on this order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
