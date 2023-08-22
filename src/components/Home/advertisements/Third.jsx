import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Third = () => {
  const { jewelerys, setCategory, getSingleProduct, handleCategorySelect } =
    useContext(AppContext);
  return (
    <div className="py-3">
      <div className="flex flex-col">
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <h1 className="pl-4 mb-3 text-xl font-semibold 2xs:text-xs 3xs:text-xs">Top in Jewelerys</h1>
        <div className="grid grid-cols-2 gap-2 px-3 h-60 2xs:h-36 3xs:h-24">
          {jewelerys &&
            jewelerys.map((jewelery) => (
              <Link
                to={`/products/${jewelery.category}/${jewelery.id}`}
                onClick={() => {
                  setCategory(jewelery.category);
                  getSingleProduct(jewelery.id);
                }}
                className="flex flex-col justify-center items-center"
                key={jewelery.id}
              >
                <img
                  className="object-contain h-10 lg:h-14 px-2 mb-1 3xs:h-12"
                  src={jewelery.image}
                  alt="logo"
                />
                <p className="text-xs px-1 text-overflow 2xs:text-2xs 3xs:hidden">{jewelery.title}</p>
              </Link>
            ))}
        </div>
        <Link
          to={`/products/${
            jewelerys.length > 0 ? jewelerys[0].category : "category"
          }`}
          onClick={() => handleCategorySelect(jewelerys[0].category)}
          className="text-xs pl-3 mt-3 text-blue-600 hover:text-yellow-600 3xs:text-2xs"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default Third;
