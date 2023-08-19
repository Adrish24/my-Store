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
      } xs:40 sm:w-72  md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-full 3xl:w-full`}
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
              <span className="w-10">
                <img className="object-contian h-10 mx-auto" src={item.image}/>
              </span>
              <div className="flex-1 flex flex-col px-2">
                <span className="font-semibold whitespace-normal">
                  {item.title}
                </span>
                <span className="text-xs font-medium">in {item.category}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchList;
