import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Stars from "./Stars";
import { Link } from "react-router-dom";

const Details = () => {
  const { product } = useContext(AppContext);

  return (
    product && (
      <div className="flex flex-col sticky">
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <Stars />
        <hr />
        <div className="price relative h-16">
          <span className="text-xs font-bold absolute top-0.5 pt-4">
            $
          </span>
          &nbsp;
          <span className="text-2xl font-semibold absolute -top-0.5 left-2 pt-4">
            {product.price}
          </span>
        </div>
        <div className="about flex flex-col items-start">
          <h1 className="text-lg font-semibold border border-solid border-slate-300 w-full p-3 mt-4">
            About this Item
          </h1>
          <p className="whitespace-normal border-x border-b border-solid border-slate-300 w-full p-3">{product.description}</p>
        </div>
        <div className="faq flex flex-col items-start">
          <h1 className="text-lg font-semibold border border-solid border-slate-300 w-full p-3 mt-4">Frequently Asked Questions</h1>
          <div className="flex flex-col whitespace-normal border-x border-b border-solid border-slate-300 w-full p-3">
          <span>Q: Lorem ipsum dolor sit amet?</span>
          <span>A: Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col whitespace-normal border-x border-b border-solid border-slate-300 w-full p-3">
          <span>Q: Lorem ipsum dolor sit amet?</span>
          <span>A: Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col whitespace-normal border-x border-b border-solid border-slate-300 w-full p-3">
          <span>Q: Lorem ipsum dolor sit amet?</span>
          <span>A: Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col whitespace-normal border-x border-b border-solid border-slate-300 w-full p-3">
          <Link className="text-orange-700">All questions</Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
