import CategorySelect from "./CategorySelect";
import CustomerRating from "./CustomerRating";
import PriceSlider from "./PriceSlider";


const Filters = () => {
  return (
    <div className="bg-slate-300 w-72">
      <div className="flex flex-col bg-white rounded-sm">
        <h1 className="text-xl font-semibold border-b border-slate-200 p-3">
          Filters
        </h1>
        <CategorySelect/>
        <PriceSlider/>
        <CustomerRating/>
      </div>
    </div>
  );
};

export default Filters;
