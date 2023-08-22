import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Second = () => {
  const { cloths, setCategory, getSingleProduct, handleCategorySelect } =
    useContext(AppContext);

  return (
    <div className="py-3 3xs:py-2">
      <div className="flex flex-col">
        <h1 className="pl-4 mb-3 text-xl font-semibold text-overflow 2xs:text-xs 3xs:text-xs">
          Top in Men&#39;s Clothing
        </h1>
        <div className="grid grid-cols-2 gap-2 px-3 h-60 2xs:h-36 3xs:h-24">
          {cloths &&
            cloths.map((cloth) => (
              <Link
                to={`/products/${cloth.category}/${cloth.id}`}
                onClick={() => {
                  setCategory(cloth.category);
                  getSingleProduct(cloth.id);
                }}
                className="flex flex-col justify-center items-center"
                key={cloth.id}
              >
                <img
                  className="h-20 lg:h-24 px-2 mb-1 2xs:h-10 3xs:h-12"
                  src={cloth.image}
                  alt="logo"
                />
                <p className="text-xs px-1 text-overflow 2xs:text-2xs 3xs:hidden">{cloth.title}</p>
              </Link>
            ))}
        </div>
        <Link
          to={`/products/${
            cloths.length > 0 ? cloths[0].category : "category"
          }`}
          onClick={() => handleCategorySelect(cloths[0].category)}
          className="text-xs pl-3 mt-3 text-blue-600 hover:text-yellow-600 3xs:text-2xs"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default Second;
