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

  // const updateScrollX = () => {
  //   if (window.innerWidth >= 1535) {
  //     if (carouselItemTwo.length === 1) setScrollX(8.8);
  //   }
  //   if (window.innerWidth <= 1535 && window.innerWidth >= 1280) {
  //     if (carouselItemTwo.length === 1) setScrollX(20);
  //   }
  //   if (window.innerWidth <= 1280 && window.innerWidth >= 1024) {
  //     if (carouselItemTwo.length === 1) setScrollX(30);
  //   }
  //   if (window.innerWidth <= 1023 && window.innerWidth >= 768) {
  //     if (carouselItemTwo.length === 1) setScrollX(40);
  //   }
  //   if (window.innerWidth <= 768 && window.innerWidth >= 640) {
  //     if (carouselItemTwo.length === 1) setScrollX(50);
  //   }
  //   if (window.innerWidth <= 640 && window.innerWidth >= 520) {
  //     if (carouselItemTwo.length === 1) setScrollX(65);
  //   }
  // };

  return (
    <div 
       className="flex flex-col justify-center relative bg-white overflow-hidden">
      <div
        className="whitespace-nowrap flex duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselItems.map((items, index) => (
          <div key={index} className="w-full 3xs:h-28 2xs:h-32 xs:h-32 sm:h-52 md:h-52 h-60 inline-flex gap-2">
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
        xs:h-14 xs:w-8
        2xs:h-14 2xs:w-8
        3xs:h-12 3xs:w-6
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
        <GrNext className="2xs:text-xs 3xs:text-xs text-xl" />
      </button>
      <button
        onClick={() => {
          updatIndex(activeIndex - 1);
        }}
        className={`
        absolute 
        z-5 
        h-20 w-10 
        xs:h-16 xs:w-8
        2xs:h-12 2xs:w-8
        3xs:h-12 3xs:w-6
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
        <GrPrevious  className="2xs:text-xs 3xs:text-xs text-xl"/>
      </button>
    </div>
  );
};

export default CarouselTwo;
