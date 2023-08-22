import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import { options } from "../../Navbar/category/Categories";

import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function CategorySelect() {
  const [drop, setDrop] = useState(true);
  const { handleCategorySelect, select } = useContext(AppContext);

  const toggleDropDown = () => {
    setDrop((prevDropDown) => !prevDropDown);
  };

  return (
    <div className="flex flex-col 3xl:p-3 2xl:p-3 xl:p-3 lg:p-3 md:p-3 xs:p-3 2xs:p-2 3xs:p-2 border-b border-slate-200">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropDown}
      >
        <h1 className="text-xs font-semibold uppercase mb-2 2xs:text-2xs 3xs:text-2xs">Categories</h1>
        <span>
          {drop ? (
            <RiArrowDropUpLine className="3xs:text-sm 2xs:text-sm text-xl" />
          ) : (
            <RiArrowDropDownLine className="3xs:text-sm 2xs:text-sm text-xl" />
          )}
        </span>
      </div>
      <div className="flex flex-col">
        {drop &&
          options.map((option) => (
            <Link
              className={`text-sm 
              3xl:px-2 3xl:py-1
              2xl:px-2 2xl:py-1
              xl:px-2 xl:py-1
              lg:px-2 lg:py-1
              md:px-2 md:py-1
              xs:px-2 xs:py-1
              2xs:px-2 2xs:py-0
              3xs:px-1 3xs:py-1
               mb-1 
               rounded-sm 
               border-2 
               border-slate-200 
               xs:text-xs 
               2xs:text-2xs
               3xs:text-2xs ${
                select === option.category
                  ? "bg-slate-400"
                  : "hover:bg-slate-300"
              }`}
              to={`/products/${option.category}`}
              key={option.id}
              onClick={() =>{
                if(select !== option.category){
                  handleCategorySelect(option.category)
                }
              }}
            >
              {option.category}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategorySelect;
