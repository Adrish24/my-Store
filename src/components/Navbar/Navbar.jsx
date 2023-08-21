import { Link } from "react-router-dom";

import Cart from "./cart/Cart";

import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/AppContext";
import SearchBar from "./searchbar/SearchBar";

import { SlOptionsVertical } from "react-icons/sl"

const Navbar = () => {
  const { setCategory, setValue, setSearchList } = useContext(AppContext);
  const [show, setShow] = useState(false)
  const optionsRef = useRef()

  const navBar =
    "navbar flex flex-nowrap fixed  justify-center sm:justify-end items-center w-full h-16 bg-white z-50 select-none";

    const handleOnlick = () => {
      setCategory("All")
      setValue('')
      setSearchList([])
    }

    const handlePopUpMenu = (e) => {
      e.stopPropagation()
      setShow(preShow => !preShow)
    }

    const handleSelect = () => {
      setShow(false)
    }
    
    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (optionsRef.current && !optionsRef.current.contains(e.target)) {
          setShow(false);
        }
      };
  
      window.addEventListener("click", handleOutsideClick);
  
      return () => {
        window.removeEventListener("click", handleOutsideClick);
      };
    }, []);

  return (
    <div className={navBar}>
      <div className="flex sm:flex-1 xs:flex-1 w-1/2 items-center justify-start sm:justify-center xs:justify-center 3xl:gap-5 2xl:gap-5 xl:gap-5 lg:gap-3 md:gap-2 sm:gap-2 relative">
        <Link to="/" onClick={handleOnlick} className="xs:text-xs mr-12 xs:mx-2 sm:mx-2 font-semibold">
          myStore
        </Link>
        <SearchBar/>
      </div>
      <div className="flex items-end justify-center ml-10 md:m-0 sm:m-0 xs:m-0">
        <Link to="/login" className="font-semibold 3xl:px-5 2xl:px-5 xl:px-4 lg:px-4 md:px-3 sm:px-2 xs:px-2 sm:ml-2  xs:hidden 2xs:hidden">
          Login
        </Link>
        <Link to="#" className="3xl:px-5 2xl:px-5 xl:px-4 lg:px-4 md:px-3 sm:px-2 xs:px-2  xs:hidden flex flex-col">
          <span className="text-xs">Returns</span>
          <span className="font-semibold">& Order</span>
        </Link>
        <SlOptionsVertical  className="hidden xs:block xs:mx-4 cursor-pointer" onClick={handlePopUpMenu}/>
        <div
        ref={optionsRef}
          className={`flex flex-col bg-white absolute top-12 right-16 p-1 rounded-sm drop-shadow-2xl ${show? 'flex': 'hidden'}`}>
          <Link to={`/login`} className="text-xs mb-1 hover:bg-sl" onClick={handleSelect}>Login</Link>
          <Link className="text-xs mb-1" onClick={handleSelect}>Returns & Order</Link>
        </div>
        <Link
          to="/cart"
          className="flex justify-center items-center font-semibold gap-1 3xl:px-5 2xl:px-5 xl:px-4 lg:px-4 md:px-3 sm:px-2 xs:px-2 xs:text-xs relative"
        >
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
