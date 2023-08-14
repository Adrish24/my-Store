import axios from 'axios'

const fetchProducts = async() => {

    const BaseUrl = 'https://fakestoreapi.com/products'
  try{
    const response = await axios.get(BaseUrl)
    //  console.log(response.data)
     return response.data
  }
  catch(error){
    console.error(error)
  }
}

export default fetchProducts
