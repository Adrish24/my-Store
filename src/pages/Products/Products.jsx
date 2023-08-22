import { useContext, useEffect } from "react"
import AppContext from "../../context/AppContext"
import Filters from "../../components/Products/Filters/Filters"
import SearchResults from "../../components/Products/searchResults/SearchResults"

const Products = () => {

  const { select , setCategory, setSearchList} = useContext(AppContext)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },[])

  useEffect(() => {
    setSearchList([])
    if(select !== ''){
      setCategory(select)
    }
  },[select])


  return (
    <div className="shop flex flex-col justify-center items-center bg-slate-300 w-full pt-16 select-none">
      <div className="flex md:w-full min-h-screen lg:w-full xl:w-full 2xl:w-full 3xl:w-9/12 p-2 gap-2">
        <Filters/>
        <SearchResults/>
      </div>
    </div>
  )
}

export default Products
