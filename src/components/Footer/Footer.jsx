import About from "./about/About";
import Help from "./help/Help";
import Policy from "./policy/Policy";
import Social from "./social/Social";

const Footer = () => {

  const goTo = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <div className="bg-slate-800 text-center text-slate-200 py-3 font-thin text-sm cursor-pointer"
       onClick={goTo}
      >Back to top</div>
      <div className="flex justify-center h-60 w-full px-10 pt-12 gap-20 bg-slate-200">
        <About />
        <Help />
        <Policy />
        <Social />
      </div>
      <hr />
      <div className="text-center text-xs font-semibold bg-slate-100">
        © 2023, myStore.com 
      </div>
    </div>
  );
};

export default Footer;
