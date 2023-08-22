import { Link } from "react-router-dom"


const Fourth = () => {
  return (
    <div className="flex flex-col py-3">
      <h1 className="pl-4 mb-3 text-xl font-semibold 2xs:text-xs">Up To 50% off</h1>
      <div className="flex justify-center items-center px-3 hover:cursor-pointer text-xs  text-blue-600 hover:text-yellow-600">
        <Link>
          <img
            className="h-60 w-screen lg:w-96 2xs:h-36"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            alt=""
          />
          <p className="mt-3">View more</p>
        </Link>
      </div>
    </div>
  )
}

export default Fourth
