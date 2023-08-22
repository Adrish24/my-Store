import { useContext } from "react"
import AppContext from "../../../context/AppContext"
import FlexResults from "./FlexResults"
import GridResults from "./GridResult"


const SearchResults = () => {
  const { selectedItems } = useContext(AppContext)
 
  return (
    <div className="flex-1 bg-slate-300 rounded-sm">
        {selectedItems[0] && selectedItems[0].category === 'electronics'?(<div className= "bg-white">
         {selectedItems.map((product, index) => (
          <FlexResults key={index} product={product}/>
         ))}
        </div>):(<div className= "bg-white p-3 grid grid-cols-4 3xs:grid-cols-2 2xs:grid-cols-2 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
         {selectedItems.map((product, index) => (
          <GridResults key={index} product={product}/>
         ))}
        </div>)}
    </div>
  )
}

export default SearchResults
