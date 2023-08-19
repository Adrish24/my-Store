import { Link } from "react-router-dom"
import Rating from "../../Home/ratedItems/Rating"
import { useContext } from "react"
import AppContext from "../../../context/AppContext"


const FlexResult = ({product}) => {
    const { setCategory, getSingleProduct } = useContext(AppContext)
  return (
    <Link to={`/products/${product.category}/${product.id}`} onClick={() => {
        setCategory(product.category);
        getSingleProduct(product.id);
      }} className="bg-white flex flex-col  h-96 p-2 hover:scale-105 hover:drop-shadow-2xl">
      <span className="w-60 px-3 mb-2 mx-auto">
        <img className="object-contain h-60 mx-auto" src={product.image}  />
      </span>
      <span className="whitespace-normal hyphens-auto font-medium text-sm mt-2 text-overflow">
      <h1>{product.title}</h1>
      </span>
      <span className="mr-40 mt-auto">
      {<Rating rating={product.rating}/>}
      </span>
      <span className="font-bold text-xl pb-6">
      <h1>${product.price}</h1>
      </span>
    </Link>
  )
}

export default FlexResult
