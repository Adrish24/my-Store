import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Items from "./Items";

const ItemsList = () => {
  const { addToCart } = useContext(AppContext);
  
  
  return (
    <>
      {addToCart && addToCart.map((item, index) =>(<Items key={index} item={item} />))}
    </>
  );
};

export default ItemsList;
