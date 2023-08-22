/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useContext } from "react";
import AppContext from "../../../../context/AppContext";

const CarouselOneItems = ({item}) => {
  const { setCategory, getSingleProduct } = useContext(AppContext)
  
  return (
    <Link to={`/products/${item.category}/${item.id}`} onClick={() => {
      setCategory(item.category);
      getSingleProduct(item.id);
    }} className=" flex flex-col rounded-lg items-center pt-1 2xs:w-16 xs:w-32 sm:w-40 w-60">
      <img className="object-contain 2x:h-28 xs:h-32 sm:h-32 h-36 mb-3" src={item.image} alt="logo" />
      <h1 className="text-xs whitespace-normal px-2 text-center mb-auto decoration-slate-300 text-overflow 3xs:hidden 2xs:hidden xs:hidden">{item.title}</h1>
      <p className="text-sm mb-2 font-bold 3xs:hidden 2xs:hidden xs:hidden">$ {item.price}</p>
    </Link>
  )
}

export default CarouselOneItems
