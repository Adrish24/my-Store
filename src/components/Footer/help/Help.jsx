import { Link } from "react-router-dom"


const Help = () => {
  return (
    <div className="flex flex-col w-44">
      <h1 className="font-light mb-2 uppercase">Help</h1>
      <div className="flex flex-col text-sm font-semibold">
        <Link>Payments</Link>
        <Link>Shipping</Link>
        <Link>Cancelllation & Returns</Link>
        <Link>FAQ</Link>
      </div>
    </div>
  )
}

export default Help
