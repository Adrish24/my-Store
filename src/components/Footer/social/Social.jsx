import { Link } from "react-router-dom"


const Social = () => {
  return (
    <div className="flex flex-col w-44">
      <h1 className="font-light mb-2 uppercase xs:text-xs 2xs:text-xs 3xs:text-xs">Social</h1>
      <div className="flex flex-col text-sm xs:text-xs 2xs:text-xs 3xs:text-xs font-semibold">
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Youtube</Link>
      </div>
    </div>
  )
}

export default Social
