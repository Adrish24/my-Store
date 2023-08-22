import { Link } from "react-router-dom"


const Policy = () => {
  return (
    <div className="flex flex-col w-44">
      <h1 className="font-light mb-2 xs:text-xs 2xs:text-xs 3xs:text-xs uppercase">Consumer Policy</h1>
      <div className="flex flex-col text-sm xs:text-xs 2xs:text-xs 3xs:text-xs font-semibold">
        <Link>Terms of Use</Link>
        <Link>Security</Link>
        <Link>Privacy</Link>
      </div>
    </div>
  )
}

export default Policy;
