import Image from "next/image"
import { CiSearch } from "react-icons/ci"

const Navbar = () => {
  return (
    <nav className="px-4 py-3 bg-white">
      <div className="w-[1440px] flexBetween mx-auto">
        <div className="flex items-center gap-8">
          <h1 className="font-bold text-3xl">Quizzez</h1>
          <ul className="flexCenter gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Why</li>
          <li>Shit</li>
          </ul>
        </div>
        <div className="w-[23%] flexBetween gap-5">
          <div className="w-[90%] flexCenter border border-gray-300 rounded-full py-[6px] px-4 overflow-hidden focus-within:border-blue-400">
            <input type="text" className="w-full focus:outline-none" placeholder="Find a quiz"/>
            <div className="text-[21px] text-gray-400">
              <CiSearch />
            </div>
          </div>
          <div className="relative w-[40px] aspect-square rounded-full overflow-hidden">
            < Image 
            src={`/images/person.jpg`} 
            alt={`trest`}
            fill
            style={{objectFit:"cover"}}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
