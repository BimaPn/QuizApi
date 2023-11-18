import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"
import { MdAdd } from "react-icons/md"
import Link from "next/link"

const HeroSection = () => {
  return (
  <section className="mt-4 bg-white rounded-[32px] flexCenter p-8">
    <div className=" flex items-center gap-10">
      <Image src={`/images/hero.png`} className="w-[32%]" width={5000} height={5000} alt="hero" />

      <div className="w-[45%] flex flex-col gap-4">

        <h1 className="font-bold text-4xl ">Choose which quiz you wanna take</h1>
        <span>As the sun dipped below the horizon, casting a warm glow across the tranquil lake, a gentle breeze rustled the leaves.</span>

        <div className="flexCenter border-2 border-gray-300 rounded-[17px] my-2 overflow-hidden focus-within:border-blue-400">
          <input className="w-full py-[11px] px-5 text-lg placeholder:text-gray-400 focus:outline-none" type="text" placeholder="Search for a quiz"/>
          <div className="p-3 text-2xl text-gray-400">
            <IoIosArrowForward/>
          </div>
        </div>

        <Link href={`/create`} className="w-fit flexCenter bg-primary pl-2 pr-4 py-[9px] rounded-[14px] text-white mt-8">
          <MdAdd className="text-[22px]" />
          <span className="font-bold">Create quiz</span> 
        </Link>

      </div>

    </div>
  </section>
  )
}

export default HeroSection
