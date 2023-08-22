import CategorySelect from "./CategorySelect";
import CustomerRating from "./CustomerRating";
import PriceSlider from "./PriceSlider";


const Filters = () => {
  return (
    <div className="bg-slate-300 w-72 2xs:w-40 xs:w-52 sm:w-56 md:w-60 lg:w-60">
      <div className="flex flex-col bg-white rounded-sm">
        <h1 className="text-xl font-semibold border-b border-slate-200 p-3 xs:p-2 2xs:text-sm xs:text-lg">
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
