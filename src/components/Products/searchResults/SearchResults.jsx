import { useContext } from "react"
import AppContext from "../../../context/AppContext"
import Results from "./Results"
import FlexResult from "./FlexResult"


const SearchResults = () => {
  const { selectedItems } = useContext(AppContext)
 
  return (
    <div className="flex-1 bg-slate-300 rounded-sm">
        {selectedItems[0] && selectedItems[0].category === 'electronics'?(<div className= "bg-white">
         {selectedItems.map((product, index) => (
          <Results key={index} product={product}/>
         ))}
        </div>):(<div className= "bg-white p-3 grid grid-cols-4">
         {selectedItems.map((product, index) => (
          <FlexResult key={index} product={product}/>
         ))}
        </div>)}
    </div>
  )
}

export default SearchResults
