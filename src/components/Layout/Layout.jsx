import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Layout = () => {
  const { activeSearchList  } = useContext(AppContext)
  return (
    <div className='mainContianer relative'>
      <Navbar/>
      <div className={`bg-black h-screen w-full opacity-60 fixed z-40 ${ activeSearchList? '' : 'hidden'}`}></div>
      <div className='contentContianer'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
