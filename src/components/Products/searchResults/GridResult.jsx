import { Link } from "react-router-dom"
import Rating from "../../Home/ratedItems/Rating"
import { useContext } from "react"
import AppContext from "../../../context/AppContext"


const GridResults = ({product}) => {
    const { setCategory, getSingleProduct } = useContext(AppContext)
  return (
    <Link to={`/products/${product.category}/${product.id}`} onClick={() => {
        setCategory(product.category);
        getSingleProduct(product.id);
      }} className="bg-white flex flex-col 3xs:h-48 2xs:h-52 xs:h-56 sm:h-56 h-96 p-2 hover:scale-105 hover:drop-shadow-2xl">
      <span className="w-60 3xs:w-16 2xs:w-20 xs:w-20 sm:w-20 md:w-40  px-3 mb-2 mx-auto">
        <img className="object-contain 3xs:h-16 2xs:h-20 xs:h-20 sm:h-20 h-60 mx-auto" src={product.image}  />
      </span>
      <span className="whitespace-normal hyphens-auto font-medium text-sm mt-2 text-overflow 2xs:text-xs 3xs:text-2xs">
      <h1>{product.title}</h1>
      </span>
      <span className="mr-auto mt-auto">
      {<Rating rating={product.rating}/>}
      </span>
      <span className="font-bold text-xl pb-6 sm:text-sm 2xs:text-xs 3xs:text-2xs">
      <h1>${product.price}</h1>
      </span>
    </Link>
  )
}

export default GridResults
