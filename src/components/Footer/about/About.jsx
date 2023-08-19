import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="flex flex-col w-44">
      <h1 className="font-light mb-2 uppercase xs:text-xs text-base">About</h1>
      <div className="flex flex-col text-sm xs:text-xs font-semibold">
        <Link>Contact Us</Link>
        <Link>About Us</Link>
        <Link>Careers</Link>
        <Link>Press</Link>
        <Link>Corporate Information</Link>
      </div>
    </div>
  );
};

export default About;
