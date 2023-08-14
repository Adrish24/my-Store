import { useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import Details from "../../components/Product/Details";
import Preview from "../../components/Product/Preview";
import Spinner from "react-bootstrap/Spinner";

const Product = () => {
  const { isLoading, product, setProduct, setCategory } = useContext(AppContext);

  useEffect(() => {
      const getItem = JSON.parse(sessionStorage.getItem("productID"));
      if (getItem) {
        setProduct(getItem);
      }
  }, []);

  useEffect(() => {
    if (product) setCategory(product.category);
  }, [product]);

  return (
    <div className="product flex justify-center bg-slate-300 w-full pt-16 select-none">
      <div className="2xl:w-11/12 3xl:w-9/12">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen bg-white">
            <Spinner animation="border" role="status" />
          </div>
        ) : (
          <div className="flex  bg-white w-full px-3 py-5">
            <div className="w-5/12 pr-4 flex items-start z-30">
              <Preview />
            </div>
            <div className="w-6/12 grow pl-4 fadebottom-border z-10">
              <Details />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
