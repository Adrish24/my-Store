
import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";

import ItemsList from "../../components/MyCart/ItemsList";
import { Link } from "react-router-dom";

const MyCart = () => {
 
  const {  price, count, setCategory, setValue, setSearchList, handleDselected  } = useContext(AppContext);

  useEffect(() => {
    setValue("")
    setSearchList([])
    setCategory('All')
  },[])

  return (
    <div className="cart flex flex-col items-center justify-center bg-slate-300 w-full pt-16 select-none">
      <div className="xl:w-full 2xl:w-11/12 3xl:w-9/12 flex sm:flex-col xs:flex-col justify-center bg-slate-300 p-2 min-h-screen">
        <div className="w-1/2 sm:w-full xs:w-full flex-1">
          <div className="bg-white w-full h-auto py-3 mt-2 rounded-sm drop-shadow-xl">
            <div className="title flex flex-col justify-center p-3">
              <h1 className="text-2xl font-semibold">Shopping Cart</h1>
              <Link className="text-orange-500" onClick={handleDselected}>Deselect all items</Link>
            <ItemsList />
            </div>
          </div>
        </div>
        <div className="w-1/3 sm:w-1/2 xs:w-1/2">
          <div className="bg-slate-300 mt-2 pl-3 sticky">
            <div className="bg-white rounded-sm drop-shadow-lg">
              <h1 className="p-3 text-lg font-semibold text-slate-400 border-b border-slate-300 xs:text-base">
                Price Details
              </h1>
              <div className="flex flex-col px-3 ">
                <div className="flex justify-between py-3 font-semibold xs:text-sm">
                  <span>Price({count}items)</span>
                  <span>${price}</span>
                </div>
                <div className="flex justify-between font-semibold xs:text-sm">
                  <span>Discount</span>
                  <span className="text-green-600 xs:text-sm">-$0</span>
                </div>
                <div className="flex justify-between py-3 font-semibold xs:text-sm">
                  <span>Delivery Charges</span>
                  <span className="text-green-600 xs:text-sm">Free</span>
                </div>
                <div className="flex justify-between py-3 text-xl font-bold border-y-2 border-dashed border-slate-300 xs:text-base">
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
