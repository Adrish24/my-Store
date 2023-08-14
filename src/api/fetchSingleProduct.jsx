import axios from "axios"

const fetchSingleProduct = async(id) => {
  const baseUrl = `https://fakestoreapi.com/products/${id}`

  try{
    const response = await axios.get(baseUrl)
    return response.data
  }catch(err){
    console.error(err)
  }
}

export default fetchSingleProduct
