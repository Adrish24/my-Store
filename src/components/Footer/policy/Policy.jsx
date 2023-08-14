import { Link } from "react-router-dom"


const Policy = () => {
  return (
    <div className="flex flex-col w-44">
      <h1 className="font-light mb-2 uppercase">Consumer Policy</h1>
      <div className="flex flex-col text-sm font-semibold">
        <Link>Terms of Use</Link>
        <Link>Security</Link>
        <Link>Privacy</Link>
      </div>
    </div>
  )
}

export default Policy;
