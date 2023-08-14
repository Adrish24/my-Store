import { Link } from "react-router-dom";

import sale from '../../../assets/sale.png'

const First = () => {
  return (
    <div className="flex flex-col py-3">
      <h1 className="pl-4 mb-3 text-xl font-semibold">Up To 70% off</h1>
      <div className="flex justify-center items-cente px-3 hover:cursor-pointer text-xs  text-blue-600 hover:text-yellow-600">
        <Link>
          <img
            className="h-60 w-screen"
            src={sale}
            alt=""
          />
          <p className="mt-3">View more</p>
        </Link>
      </div>
    </div>
  );
};

export default First;
