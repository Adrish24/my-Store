
import { homeData } from '../../../data'

import { useContext } from 'react';
import AppContext from '../../../context/AppContext';

// eslint-disable-next-line react/prop-types
const Categories = ({ show }) => {
  
  const { category, setCategory } = useContext(AppContext) 

  const uniqeCategories = new Set();
  homeData.map((item) => uniqeCategories.add(item.category, item.id));

  const All = ['All categories']

  const options = [...All.map((category) => ({
    category: category,
    id: 0,
  })),...Array.from(uniqeCategories).map((category, index) => ({
    category: category,
    id: index +1,
  }))]

  

  const handleClick = (e) => {
    const text = e.target.textContent;
    setCategory(text);
    console.log(category)
  };

  

  return (
    <div className={show ? "flex" : "hidden"}>
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
              onClick={(e) => handleClick(e)}
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
