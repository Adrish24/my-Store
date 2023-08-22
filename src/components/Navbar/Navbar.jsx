import { Link } from "react-router-dom";

import Cart from "./cart/Cart";

import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/AppContext";
import SearchBar from "./searchbar/SearchBar";

import { SlOptionsVertical } from "react-icons/sl";

const Navbar = () => {
  const { setCategory, setValue, setSearchList } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const optionsRef = useRef();

  const navBar =
    "navbar flex flex-nowrap fixed  justify-center sm:justify-end items-center w-full h-16 bg-white z-50 select-none";

  const handleOnlick = () => {
    setCategory("All");
    setValue("");
    setSearchList([]);
  };

  const handlePopUpMenu = (e) => {
    e.stopPropagation();
    setShow((preShow) => !preShow);
  };

  const handleSelect = () => {
    setShow(false);
  };

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
      <div
        className="
      flex 
      3xs:flex-auto
      2xs:flex-auto
      sm:flex-1 
      xs:flex-1 
      w-1/2 
      items-center 
      justify-start 
      md:justify-center 
      xs:justify-center
      2xs:justify-around 
      relative"
      >
        <SlOptionsVertical
          className="hidden 3xs:block 2xs:block xs:block  cursor-pointer 3xs:mx-2 2xs:mx-2 xs:mx-4"
          onClick={handlePopUpMenu}
        />
        <Link
          to="/"
          onClick={handleOnlick}
          className="3xs:hidden 2xs:hidden xs:hidden mr-10 md:mr-3 lg:mr-5 xl:mr-5font-semibold"
        >
          myStore
        </Link>
        <SearchBar />
      </div>
      <div className="flex items-end justify-center  ml-10 md:m-0 sm:m-0 xs:m-0 2xs:mx-2 3xs:mx-2">
        <Link
          to="/login"
          className="font-semibold 3xl:px-5 2xl:px-5 xl:px-4 lg:px-4 md:px-3 sm:px-2 xs:px-2 sm:ml-2  xs:hidden 2xs:hidden 3xs:hidden"
        >
          Login
        </Link>
        <Link
          to="#"
          className="3xl:px-5 2xl:px-5 xl:px-4 lg:px-4 md:px-3 sm:px-2 xs:px-2 xs:hidden 2xs:hidden  3xs:hidden flex flex-col"
        >
          <span className="text-xs">Returns</span>
          <span className="font-semibold">& Order</span>
        </Link>
        <div
          ref={optionsRef}
          className={`flex flex-col bg-white absolute top-12 left-2 p-1 rounded-sm drop-shadow-2xl ${
            show ? "flex" : "hidden"
          }`}
        >
          <Link to={`/`} onClick={handleSelect} className="text-sm hover:bg-slate-100">Home</Link>
          <Link
            to={`/login`}
            className="text-sm mb-1 hover:bg-slate-100"
            onClick={handleSelect}
          >
            Login
          </Link>
          <Link className="text-sm mb-1 hover:bg-slate-100" onClick={handleSelect}>
            Returns & Order
          </Link>
        </div>
        <Link
          to="/cart"
          className="
          flex 
          justify-center 
          items-center 
          font-semibold 
          gap-1 
          3xl:px-5 
          2xl:px-5 
          xl:px-4 
          lg:px-4 
          md:px-3 
          sm:px-2 
          xs:px-2 
          xs:text-xs 
          relative"
        >
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
