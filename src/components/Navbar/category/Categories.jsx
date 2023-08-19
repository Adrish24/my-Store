
import { homeData } from '../../../data'

import { useContext } from 'react';
import AppContext from '../../../context/AppContext';

const uniqeCategories = new Set();
  homeData.forEach((item) => uniqeCategories.add(item.category, item.id));

  const All = ['All categories']

export const options = [...All.map((category) => ({
    category: category,
    id: 0,
  })),...Array.from(uniqeCategories).map((category, index) => ({
    category: category,
    id: index +1,
  }))]

// eslint-disable-next-line react/prop-types
const Categories = ({ show }) => {
  
  const { setCategory } = useContext(AppContext) 

  const handleSelect = (e) => {
    const text = e.target.textContent;
    setCategory(text);
  };

  return (
    <div className={show ? "flex z-50" : "hidden"}>
      <div
        className="
    absolute 
    flex
    flex-col 
    top-9
    left-1
    border-x
    border-y
    border-solid
    border-zinc-600
    w-32
    h-auto
    bg-white
    text-left
    gap-x-px
    z-50
    "
      >
        {options &&
          options.map((option) => (
            <span
              onClick={handleSelect}
              className="hover:bg-slate-200 text-sm"
              key={option.id}
            >
              &nbsp;{option.category}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Categories;

