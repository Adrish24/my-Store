import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const RatedItems = () => {
  const { products, setCategory, getSingleProduct } = useContext(AppContext);
  const highestRatedItems = products.filter((item) => item.rating.rate >= 4);

  return (
    <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap gap-3 py-2 border-1 border-solid border-slate-300 rounded-md">
      {highestRatedItems.map((item) => (
        <Link
          to={`/products/${item.category}/${item.id}`}
          onClick={() => {
            setCategory(item.category);
            getSingleProduct(item.id);
          }}
          key={item.id}
          className=" flex flex-col rounded-lg items-center pt-1 w-60"
        >
          <img
            className="object-contain w-full h-36 mb-3"
            src={item.image}
            alt="logo"
          />
          <h1 className="text-xs whitespace-normal px-2 text-center mb-2 decoration-slate-300">
            {item.title}
          </h1>
          <Rating rating={item.rating} />
          <p className="text-sm mb-2 font-bold">$ {item.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default RatedItems;
