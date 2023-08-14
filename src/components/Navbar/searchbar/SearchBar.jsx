import { FiSearch } from "react-icons/fi";
import  Category from "../category/Category"
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import SearchList from "../searchList/SearchList";

const SearchBar = () => {
  const { value, handleChange, handleSearch } = useContext(AppContext)
  
  

  const searchBar =
    "flex justify-center items-center rounded-md bg-gray-200 2xl:w-10/12 3xl:w-11/12 h-10 relative";

  return (
    <form className={searchBar} onSubmit={handleSearch}>
      <Category/>
      &nbsp; &nbsp;
      <input
        value={value}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search for Products"
        className="flex-1 bg-transparent outline-none py-2 pr-2"
      />
      <button
        type="submit"
        className="flex justify-center items-center w-10 h-full hover:bg-slate-300 rounded-r-md"
      >
        <FiSearch size={20} />
      </button>
      <SearchList/>
    </form>
  );
};

export default SearchBar;
