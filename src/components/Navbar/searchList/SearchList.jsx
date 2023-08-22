import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";

const SearchList = () => {
  const {
    searchList,
    activeSearchList,
    setActiveSearchList,
    handleCategorySelect,
  } = useContext(AppContext);

  const handleSearchListShow = () => {
    setActiveSearchList(false);
  };

  return (
    <div
      className={`searchList bg-white justify-self-end rounded-b-sm drop-shadow-xl z-40 ${
        activeSearchList ? "" : "hidden"
      } w-full 2xs:w-full`}
    >
      <div className="flex flex-col overflow-auto">
        {searchList &&
          searchList.map((item) => (
            <Link
              key={item.id}
              onClick={() => {
                handleSearchListShow;
                handleCategorySelect(item.category);
              }}
              to={`/products/${item.category}`}
              className="flex px-2 pb-2 pt-1 hover:bg-slate-1
              00"
            >
              <span className="w-10 2xs:w-7 3xs:w-7">
                <img className="object-contian 3xs:h-7 2xs:h-7 h-10 mx-auto" src={item.image}/>
              </span>
              <div className="flex-1 flex flex-col px-2 2xs:text-xs 3xs:text-xs">
                <span className="font-semibold whitespace-normal">
                  {item.title}
                </span>
                <span className="text-xs font-medium 2xs:text-2xs 3xs:text-2xs">in {item.category}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchList;
