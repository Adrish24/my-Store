import { FiSearch } from "react-icons/fi";
import Category from "../category/Category";
import { useContext, useRef } from "react";
import AppContext from "../../../context/AppContext";
import SearchList from "../searchList/SearchList";

const SearchBar = () => {
  const { value, handleChange, handleSearch, setActiveSearchList } =
    useContext(AppContext);

  const formRef = useRef();

  const searchBar =
    "flex flex-1  items-center rounded-md bg-gray-200 xs:w-60 sm:w-72  md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-full 3xl:w-full h-10";

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setActiveSearchList(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  const handleSearchListShow = () => {
    setActiveSearchList(true);
  };

  return (
    <div className={`flex flex-1 justify-center items-center rounded-md xs:w-60 sm:w-72 md:w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-full 3xl:w-full h-10 sm:h-9 xs:h-8 flex-wrap`}>
      <form className={searchBar} onSubmit={handleSearch} ref={formRef}>
        <Category />
        &nbsp; &nbsp;
        <input
          value={value}
          onChange={(e) => handleChange(e)}
          onClick={handleSearchListShow}
          type="text"
          placeholder="Search for Products"
          className="flex-1 bg-transparent outline-none py-2 pr-2 xs:w-80"
        />
        <button
          type="submit"
          className="flex justify-center items-center w-10 xs:w-10 sm:w-20 h-full hover:bg-slate-300 rounded-r-md "
        >
          <FiSearch className="sm:xs flex-1" />
        </button>
      </form>
      <SearchList />
    </div>
  );
};

export default SearchBar;
