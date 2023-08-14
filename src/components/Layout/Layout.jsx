import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='mainContianer relative'>
      <Navbar/>
      <div className='contentContianer'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
