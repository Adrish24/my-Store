import { useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../../context/AppContext"


const SearchList = () => {
     
    const { searchList, activeSerchList } = useContext(AppContext)

  return (
    <div className={`searchList absolute top-9 right-0  overflow-auto bg-white rounded-b-sm drop-shadow-xl ${activeSerchList? "opacity-1": "opacity-0"}`}>
      <div className="flex flex-col overflow-auto px-2 pb-2 pt-1">
       {searchList && searchList.map(item => (
        <Link key={item.id} className="flex flex-col mb-2">
        <span className="font-semibold whitespace-normal">{item.title}</span>
        <span className="text-xs">in {item.category}</span>
       </Link>
       ))}
       {/* <Link className="flex flex-col mb-2">
        <span className="font-semibold whitespace-normal">oidfgfgf</span>
        <span className="text-xs">in idfodgf</span>
       </Link> */}
      </div>
    </div>
  )
}

export default SearchList
