import { Link } from "react-router-dom"


const Social = () => {
  return (
    <div className="flex flex-col w-44">
      <h1 className="font-light mb-2 uppercase">Social</h1>
      <div className="flex flex-col text-sm font-semibold">
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Youtube</Link>
      </div>
    </div>
  )
}

export default Social
