import { Link } from "react-router-dom";

import Cart from "./cart/Cart";

import { useContext } from "react";
import AppContext from "../../context/AppContext";
import SearchBar from "./searchbar/SearchBar";

const Navbar = () => {
  const { setCategory } = useContext(AppContext);

  const navBar =
    "navbar flex fixed  justify-center items-center w-full h-16 bg-white z-50";
  
  return (
    <div className={navBar}>
      <div className="flex w-1/2 items-center justify-start gap-5">
        <Link to="/" onClick={() => setCategory("All")}>
          myStore
        </Link>
        <SearchBar/>
      </div>
      <div className="flex items-center justify-center ml-10">
        <Link to="/login" className="px-4">
          Login
        </Link>
        <Link to="#" className="px-4">
          Return & Order
        </Link>
        <Link
          to="/cart"
          className="flex justify-center items-center gap-1 px-4 relative"
        >
          <Cart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
