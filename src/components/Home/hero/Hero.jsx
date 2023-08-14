import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import carousel from "../../../assets/carousel.png";
import carousel1 from "../../../assets/carousel1.png";
import carousel2 from "../../../assets/carousel2.png";



const Hero = () => {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <Link>
          <img className="h-56 w-full" src={carousel} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link>
          <img className="h-56 w-full" src={carousel1} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link>
          <img className="h-56 w-full" src={carousel2} alt="" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
