import { useContext, useState } from "react";
import CarouselTwoItems from "./CarouselTwoItems";
import { GrNext, GrPrevious } from "react-icons/gr";
import AppContext from "../../../../context/AppContext";

const CarouselTwo = () => {
  // handling the carousel
  const [activeIndex, setActiveIndex] = useState(0);
  
  
  // handling left and right arrow button's onhover and disabled state
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(true);
  
  
  // handling items from useContext
  const { Wcloths } = useContext(AppContext);

  const carouselItemOne = [...Wcloths];
  const carouselItemTwo = [...Wcloths.reverse()];

  const carouselItems = [carouselItemOne, carouselItemTwo];
  
  // updating the carousel
  const updatIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    }

    if (newIndex >= carouselItems.length) {
      newIndex = carouselItems.length - 1;
    }

    setActiveIndex(newIndex);

    setRightDisabled( newIndex === carouselItems.length - 1);
    setLeftDisabled(newIndex === 0)
  };

  return (
    <div 
       className="flex flex-col justify-center relative bg-white overflow-hidden">
      <div
        className="whitespace-nowrap flex duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselItems.map((items, index) => (
          <div key={index} className="w-full h-60 inline-flex gap-2">
            {items.map((item) => (
              <CarouselTwoItems key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          updatIndex(activeIndex + 1);
        }}
        className={`
        absolute 
        z-5  
        h-20 w-10 
        right-0 
        flex 
        justify-center 
        items-center 
        rounded-l-lg
        border-y
        border-solid
        border-slate-100
        drop-shadow-md
        
        ${rightDisabled? 'hidden': 'bg-white'}`
        }
        disabled={rightDisabled}
      >
        <GrNext size={20} />
      </button>
      <button
        onClick={() => {
          updatIndex(activeIndex - 1);
        }}
        className={`
        absolute 
        z-5 
        h-20 w-10 
        left-0 
        flex 
        justify-center 
        items-center 
        rounded-r-lg
        border-y
        border-solid
        border-slate-100
        drop-shadow-md
        ${leftDisabled? 'hidden': 'bg-white'}`
        }
        disabled={leftDisabled}
      >
        <GrPrevious size={20} />
      </button>
    </div>
  );
};

export default CarouselTwo;
