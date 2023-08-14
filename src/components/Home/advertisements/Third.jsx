import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Third = () => {

    const { jewelerys, setCategory, getSingleProduct } = useContext(AppContext)
  return (
    <div className="py-3">
      <div className="flex flex-col">
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        <h1 className="pl-4 mb-3 text-xl font-semibold">Top in Jewelerys</h1>
        <div className="grid grid-cols-2 gap-2 px-3 h-60">
          {jewelerys &&
            jewelerys.map((jewelery) => (
              <Link to={`/products/${jewelery.category}/${jewelery.id}`} onClick={() => {
                setCategory(jewelery.category);
                getSingleProduct(jewelery.id);
              }} className="flex flex-col justify-center items-center" key={jewelery.id}>
                <img className="h-10 px-2 mb-1" src={jewelery.image} alt="logo" />
                <p className="text-xs px-1">{jewelery.title}</p>
              </Link>
            ))}
        </div>
        <Link to={`/products/${jewelerys.length > 0 ? jewelerys[0].category : "category"}`} className="text-xs pl-3 mt-3 text-blue-600 hover:text-yellow-600">View all</Link>
      </div>
    </div>
  )
}

export default Third