import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Second = () => {
  const { cloths, setCategory, getSingleProduct } = useContext(AppContext);

  return (
    <div className="py-3">
      <div className="flex flex-col">
        <h1 className="pl-4 mb-3 text-xl font-semibold">
          Top in Men&#39;s Clothing
        </h1>
        <div className="grid grid-cols-2 gap-2 px-3 h-60">
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
                <img className="h-20 px-2 mb-1" src={cloth.image} alt="logo" />
                <p className="text-xs px-1">{cloth.title}</p>
              </Link>
            ))}
        </div>
        <Link to={`/products/${cloths.length > 0 ? cloths[0].category : "category"}`}  className="text-xs pl-3 mt-3 text-blue-600 hover:text-yellow-600">
          View all
        </Link>
      </div>
    </div>
  );
};

export default Second;