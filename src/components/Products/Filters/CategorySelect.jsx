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
    <div className="flex flex-col p-3 border-b border-slate-200">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropDown}
      >
        <h1 className="text-xs font-semibold uppercase mb-2">Categories</h1>
        <span>
          {drop ? (
            <RiArrowDropUpLine size={20} />
          ) : (
            <RiArrowDropDownLine size={20} />
          )}
        </span>
      </div>
      <div className="flex flex-col">
        {drop &&
          options.map((option) => (
            <Link
              className={`text-sm px-2 py-1 mb-1 rounded-sm border-2 border-slate-200 ${
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