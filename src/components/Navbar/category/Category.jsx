import { RiArrowDropDownLine } from "react-icons/ri";
import Categories from "./Categories";
import { useContext, useRef } from "react";
import AppContext from "../../../context/AppContext";

const Category = () => {
  const {show, setShow, handleShow, category } = useContext(AppContext)
  const containerRef = useRef();

  
  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  window.addEventListener("click", handleOutsideClick);

  

  return (
    <>
      <div
        onClick={handleShow}
        ref={containerRef}
        className={`
      relative 
      flex 
      justify-center 
      w-auto 
      items-center 
      h-full 
      bg-slate-300
      hover:cursor-pointer 
      rounded-l-md 
      text-xs
      select-none 
      p-2
      ${show? 'bg-zinc-300 ring ring-yellow-400': ''}
      whitespace-nowrap
      sm:text-2xs
      `}
      >
        <div>{category}</div>
        <div>
          <RiArrowDropDownLine size={20} />
        </div>
        {<Categories show={show} />}
      </div>
    </>
  );
};

export default Category;
