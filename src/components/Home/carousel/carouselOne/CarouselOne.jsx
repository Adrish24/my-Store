import { useContext, useState } from "react";
import CarouselOneItems from "./CarouselOneItems";
import { GrNext, GrPrevious } from "react-icons/gr";
import AppContext from "../../../../context/AppContext";

const CarouselOne = () => {
  // handling the carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollX, setScrollX] = useState(100);
  
  // handling left and right arrow button's onhover and disabled state
  const [rightDisabled, setRightDisabled] = useState(false);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [onHover, setOnHover] = useState(false);
  
  // handling items from useContext
  const { electronics } = useContext(AppContext);

  const carouselItemOne = [...electronics.slice(0, 5)];
  const carouselItemTwo = [...electronics.slice(5, 6)];

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

  const updateScrollX = () => {
    if (carouselItemTwo.length === 1) setScrollX(8.8);
    // if (item2.length === 2) setScrollX(30);
    // if (item2.length === 3) setScrollX(50);
    // if (item2.length === 4) setScrollX(70);
    // if (item2.length === 5) setScrollX(90);
  };
  
  // handling left and right show
  const onMouseEnter = () => {
    setOnHover(true)
  }

  const onMouseLeave = () => {
    setOnHover(false)
  }

  return (
    <div 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} className="flex flex-col justify-center relative bg-white overflow-hidden">
      <div
        className="whitespace-nowrap flex duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * scrollX}%)` }}
      >
        {carouselItems.map((items, index) => (
          <div key={index} className="w-full h-60 inline-flex gap-2">
            {items.map((item) => (
              <CarouselOneItems key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          updateScrollX();
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
        ${onHover? 'opacity-100': 'opacity-0'}
        ${rightDisabled? ' bg-slate-200': 'bg-white'}`
        }
        disabled={rightDisabled}
      >
        <GrNext size={20}/>
      </button>
      <button
        onClick={() => {
          updateScrollX();
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
        ${onHover? 'opacity-100': 'opacity-0'}
        ${leftDisabled? 'bg-slate-200': 'bg-white'}`
        }
        disabled={leftDisabled}
      >
        <GrPrevious size={20} />
      </button>
    </div>
  );
};

export default CarouselOne;
