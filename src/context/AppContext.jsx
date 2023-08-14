import { createContext, useEffect, useState } from "react";
import fetchProdutcs from "../api/fetchProducts";
import fetchSingleProduct from "../api/fetchSingleProduct";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("All");

  const [activeSerchList, setActiveSearchList] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [searchList, setSearchList] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [cloths, setCloths] = useState([]);
  const [jewelerys, setjewelerys] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [Wcloths, setWcloths] = useState([]);

  const [addToCart, setAddToCart] = useState([]);

  const [count, setCount] = useState(0);
  const [price, addPrice] = useState(0);

  const getProducts = async () => {
    try {
      const productData = await fetchProdutcs();
      setProducts(productData);
    } catch (err) {
      console.error(err);
    }
  };

  const getSingleProduct = async (id) => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    try {
      setLoading(true);
      const productData = await fetchSingleProduct(id);
      sessionStorage.setItem("productID", JSON.stringify(productData));
      setProduct(productData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // separting men's cloths from products
  const getCloths = () => {
    const clothData = products.filter(
      (product) => product.category === "men's clothing"
    );
    setCloths(clothData);
  };

  // separting women's cloths from products
  const getWcloths = () => {
    const clothData = products.filter(
      (product) => product.category === "women's clothing"
    );
    setWcloths(clothData);
  };

  // separating jewelery category from products
  const getJewelerys = () => {
    const jeweleryData = products.filter(
      (product) => product.category === "jewelery"
    );
    setjewelerys(jeweleryData);
  };

  // separating elctronics category from products
  const getElectronics = () => {
    const electronicsData = products.filter(
      (product) => product.category === "electronics"
    );
    setElectronics(electronicsData);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if(newValue.length === 0){
      setActiveSearchList(false)
    }
    
    if(newValue.length > 0){
        const search = products.filter(product => product.title.toLowerCase().includes(newValue.toLowerCase())).slice(0,8);
        setSearchList(search)
        console.log(search)
        setActiveSearchList(true)
    } 
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`${category} ${value}`);
    setValue("");
  };

  const handlePopState = () => {
    setCategory("All");
    const newUrl = window.location.pathname;
    if (newUrl.match(/^\/products\/(\d+)$/)) setCategory(product.category);
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  });

  useEffect(() => {
    getProducts();
    setActiveSearchList(false);
  }, []);

  //excuting functions everytime produtcs changes
  useEffect(() => {
    getCloths();
    getWcloths();
    getJewelerys();
    getElectronics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);


  // fetching cart save data
  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cart"));
    if (savedCart) setAddToCart(savedCart);
  }, []);
  
  // handling cart save, price sum, count
  useEffect(() => {
    if (addToCart.length === 0) return sessionStorage.removeItem("cart");

    const selectedItems = addToCart.filter((item) => item.selected === true);

    sessionStorage.setItem("cart", JSON.stringify(addToCart));

    const newPrice = selectedItems
      .reduce((sum, item) => sum + item.price * Math.floor(item.count), 0)
      .toFixed(2);
    addPrice(newPrice);

    const newCount = selectedItems.reduce(
      (sum, item) => sum + Math.floor(item.count),
      0
    );
    setCount(newCount);
  }, [addToCart]);

  // handling boolean
  const handleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleSelected = (id) => {
    const updatedCart = [...addToCart];
    const cart = updatedCart.find((item) => item.id === id);
    cart.selected = !cart.selected;
    setAddToCart(updatedCart);
  };

  const handleCartAdd = (product) => {
    const updatedItems = [...addToCart];
    const existingItems = updatedItems.find((item) => item.id === product.id);

    if (existingItems) existingItems.count++;
    if (!existingItems)
      updatedItems.push({ ...product, count: 1, selected: true });

    setAddToCart(updatedItems);
  };

  const handleCartRemove = (product) => {
    setAddToCart((prevProduct) => {
      const updatedCart = prevProduct.map((item) =>
        item.id === product.id ? { ...item, count: item.count - 1 } : item
      );

      const filteredCart = updatedCart.filter((item) => item.count > 0);

      return filteredCart;
    });
  };

  return (
    <AppContext.Provider
      value={{
        value,
        handleChange,
        handleSearch,
        searchList,
        activeSerchList,
        category,
        setCategory,
        show,
        setShow,
        handleShow,
        products,
        cloths,
        Wcloths,
        jewelerys,
        electronics,
        product,
        setProduct,
        getSingleProduct,
        isLoading,
        addToCart,
        setAddToCart,
        handleCartAdd,
        handleCartRemove,
        price,
        count,
        handleSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
