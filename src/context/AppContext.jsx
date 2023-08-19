import { createContext, useEffect, useState } from "react";
import fetchProdutcs from "../api/fetchProducts";
import fetchSingleProduct from "../api/fetchSingleProduct";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("All");
  const [select, setSelect] = useState("");

  const [activeSearchList, setActiveSearchList] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [categoryList, setCategoryList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [cloths, setCloths] = useState([]);
  const [jewelerys, setjewelerys] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [Wcloths, setWcloths] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [minMaxPriceRange, setMinMaxPriceRange] = useState([]);

  const [count, setCount] = useState(0);
  const [price, addPrice] = useState(0);
  const [minMax, setMinMax] = useState([0, 0]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(-1);
  const [ratingSelect, setRatingSelect] = useState(3);

  const getProducts = async () => {
    try {
      const productData = await fetchProdutcs();
      setProducts(productData);
    } catch (err) {
      console.error(err);
    }
  };

  const getSingleProduct = async (id) => {
    setValue("");
    setSearchList([]);
    setActiveSearchList(false);
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

  // handling popstate events
  const handlePopState = () => {
    setActiveSearchList(false);
    setValue("");
    setCategory("All");
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  });

  // handling search logic nad results
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`${category} ${value}`);
    // if (value.length > 0 && categoryList.length > 0) {
    //   const newSearchList = categoryList
    //     .filter((search) =>
    //       search.title.toLowerCase().includes(value.toLowerCase())
    //     )
    //     .slice(0, 8);
    //   setSearchList(newSearchList);
    // }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length === 0) {
      setSearchList([]);
      setActiveSearchList(false);
    }
    handleCategorySearch(category.trim());
  };

  const handleCategorySearch = (category) => {
    let filterSearch = [];

    switch (category) {
      case "men's clothing":
        filterSearch = cloths;
        break;
      case "women's clothing":
        filterSearch = Wcloths;
        break;
      case "electronics":
        filterSearch = electronics;
        break;
      case "jewelery":
        filterSearch = jewelerys;
        break;
      default:
        filterSearch = products;
        break;
    }
    setCategoryList(filterSearch);
  };

  useEffect(() => {
    if (category) {
      handleCategorySearch(category.trim());
    }
  }, [category]);

  useEffect(() => {
    if (value.length > 0 && categoryList.length > 0) {
      const newSearchList = categoryList
        .filter((search) =>
          search.title.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 8);
      setSearchList(newSearchList);
      setActiveSearchList(true);
    }
  }, [categoryList, value]);

  // fetching products from api, then updating othet states
  useEffect(() => {
    getProducts();
    setValue("");
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

  // handling cart save, price sum, count
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setAddToCart(savedCart);
  }, []);

  useEffect(() => {
    if (addToCart.length === 0) return;

    const selectedItems = addToCart.filter((item) => item.selected === true);

    localStorage.setItem("cart", JSON.stringify(addToCart));

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

  // handling select,deselect,add,remove
  const handleSelected = (id) => {
    const updatedCart = [...addToCart];
    const cart = updatedCart.find((item) => item.id === id);
    cart.selected = !cart.selected;
    setAddToCart(updatedCart);
  };

  const handleDselected = () => {
    const updatedCart = [...addToCart];
    const newCart = updatedCart.map((item) => ({ ...item, selected: false }));
    setAddToCart(newCart);
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

      localStorage.setItem("cart", JSON.stringify(filteredCart));

      return filteredCart;
    });
  };

  // handling category selection, rating selection
  const handleCategorySelect = (category) => {
    let selectedCategory = [];
    let minMaxprice = [];

    if (products) {
      switch (category) {
        case "men's clothing":
          if (cloths) selectedCategory = cloths;
          minMaxprice = [
            { value: 0 },
            { value: 25 },
            { value: 50 },
            { value: 75 },
            { value: 100 },
            { value: 125 },
          ];
          setMin(0);
          setMax(125);
          setMinMax([0, 125]);
          setStep(25);
          break;
        case "women's clothing":
          if (Wcloths) selectedCategory = Wcloths;
          minMaxprice = [
            { value: 0 },
            { value: 25 },
            { value: 50 },
            { value: 75 },
            { value: 100 },
            { value: 125 },
          ];
          setMin(0);
          setMax(125);
          setMinMax([0, 125]);
          setStep(25);
          break;
        case "electronics":
          if (electronics) selectedCategory = electronics;
          minMaxprice = [
            { value: 0 },
            { value: 200 },
            { value: 400 },
            { value: 600 },
            { value: 800 },
            { value: 1000 },
          ];
          setMin(0);
          setMax(1000);
          setMinMax([0, 1000]);
          setStep(200);
          break;
        case "jewelery":
          if (jewelerys) selectedCategory = jewelerys;
          minMaxprice = [
            { value: 0 },
            { value: 200 },
            { value: 400 },
            { value: 600 },
            { value: 800 },
            { value: 1000 },
          ];
          setMin(0);
          setMax(1000);
          setMinMax([0, 1000]);
          setStep(200);
          break;

        default:
          selectedCategory = products;
          minMaxprice = [
            { value: 0 },
            { value: 200 },
            { value: 400 },
            { value: 600 },
            { value: 800 },
            { value: 1000 },
          ];
          setMin(0);
          setMax(1000);
          setMinMax([0, 1000]);
          setStep(200);
          break;
      }
    }
    setValue("");
    setSearchList([]);
    setActiveSearchList(false);
    setCategory(category);
    setSelect(category);
    setMinMaxPriceRange(minMaxprice);
    setSelectedItems(selectedCategory);
  };

  const handleRatingSelect = (newRating) => {
    setRating(newRating);
    setRatingSelect(newRating);
  };

  //handling Products page reload
  useEffect(() => {
    const savedItems = JSON.parse(sessionStorage.getItem("filterItemsByPrice"));
    if (savedItems) {
      const {
        select,
        sortedProducts,
        minMaxPriceRange,
        minMax,
        min,
        max,
        step,
        ratingSelect,
        rating,
        hover,
      } = savedItems;
      setActiveSearchList(false);
      setSelect(select);
      setMinMaxPriceRange(minMaxPriceRange);
      setSelectedItems(sortedProducts);
      setMax(max);
      setMin(min);
      setMinMax(minMax);
      setStep(step);
      setRatingSelect(ratingSelect);
      setRating(rating);
      setHover(hover);
    }
  }, []);

  useEffect(() => {
    if (select === "") return;
    if (ratingSelect === null && rating === null) return;
    if (
      products.length === 0 ||
      cloths.length === 0 ||
      Wcloths.length === 0 ||
      electronics.length === 0 ||
      jewelerys.length === 0
    )
      return;

    const handleFilterProducts = () => {
      let sortedProducts = [];
      switch (select) {
        case "men's clothing":
          sortedProducts = cloths.filter(
            (product) =>
              product.price >= minMax[0] &&
              product.price <= minMax[1] &&
              product.rating.rate >= ratingSelect
          );
          break;
        case "women's clothing":
          sortedProducts = Wcloths.filter(
            (product) =>
              product.price >= minMax[0] &&
              product.price <= minMax[1] &&
              product.rating.rate >= ratingSelect
          );
          break;
        case "electronics":
          sortedProducts = electronics.filter(
            (product) =>
              product.price >= minMax[0] &&
              product.price <= minMax[1] &&
              product.rating.rate >= ratingSelect
          );
          break;
        case "jewelery":
          sortedProducts = jewelerys.filter(
            (product) =>
              product.price >= minMax[0] &&
              product.price <= minMax[1] &&
              product.rating.rate >= ratingSelect
          );
          break;
        default:
          sortedProducts = products.filter(
            (product) =>
              product.price >= minMax[0] &&
              product.price <= minMax[1] &&
              product.rating.rate >= ratingSelect
          );
          break;
      }
      sessionStorage.setItem(
        "filterItemsByPrice",
        JSON.stringify({
          select,
          sortedProducts,
          minMaxPriceRange,
          minMax,
          min,
          max,
          step,
          rating,
          ratingSelect,
          hover,
        })
      );
      setSelectedItems(sortedProducts);
    };
    handleFilterProducts();
  }, [minMax, select, ratingSelect]);

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        handleChange,
        handleSearch,
        searchList,
        setSearchList,
        activeSearchList,
        setActiveSearchList,
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
        handleDselected,
        select,
        setSelect,
        handleCategorySelect,
        selectedItems,
        setSelectedItems,
        minMax,
        setMinMax,
        minMaxPriceRange,
        setMinMaxPriceRange,
        min,
        setMin,
        max,
        setMax,
        step,
        setStep,
        handleRatingSelect,
        rating,
        hover,
        setHover,
        ratingSelect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
