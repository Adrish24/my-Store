
import Hero from "../../components/Home/hero/Hero";
import First from "../../components/Home/advertisements/First";
import Second from "../../components/Home/advertisements/Second";
import Third from "../../components/Home/advertisements/Third";
import Fourth from "../../components/Home/advertisements/Fourth";

import CarouselOne from "../../components/Home/carousel/carouselOne/CarouselOne";
import CarouselTwo from "../../components/Home/carousel/carouselTwo/CarouselTwo";
import RatedItems from "../../components/Home/ratedItems/RatedItems"

import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {


  const style = "drop-shadow-sm bg-white"
  const advertisements = "grid grid-cols-4 grid-flow-dense row-auto gap-3 bg-transparent mb-3 z-5"
  const carousels = "bg-white py-4 px-3 mb-3"

  return (
    <div className="home flex flex-col justify-center items-center bg-slate-300 w-full pt-16 select-none">
      <div className="2xl:w-11/12 3xl:w-9/12">
        <div className="carousel w-full mb-3 mt-2">
          <Hero />
        </div>
        <div className={advertisements}>
          <div className={style}>
            <First/>
          </div>
          <div className={style}>
            <Second/>
          </div>
          <div className={style}>
            <Third/>
          </div>
          <div className={style}>
            <Fourth/>
          </div>
        </div>
        <div className={carousels}>
          <h1 className="font-semibold text-xl pb-3">Best of Electronics</h1>
          <CarouselOne/>
        </div>
        <div className={carousels}>
          <h1 className="font-semibold text-xl pb-3">Best of  Women&#39;s Clothing</h1>
          <CarouselTwo/>
        </div>
      </div>
      <div className="bg-white w-full px-4 py-3">
          <h1 className="font-semibold text-xl mb-3">Top 7 items you might like</h1>
          <RatedItems/>
      </div>
    </div>
  );
};

export default Home;
