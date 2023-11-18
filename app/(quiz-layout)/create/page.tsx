import TopBar from "@/components/TopBar"
import Link from "next/link"
import { MdAdd } from "react-icons/md"
import { MdSave } from "react-icons/md";

const page = () => {
  return (
  <>
  <header className="sticky top-0">
    <TopBar>
      <Link href={`/edit`} className="w-fit flexCenter gap-1 bg-primary pl-2 pr-3 py-[8px] rounded-[10px] text-white text-sm">
        <MdSave className="text-lg" />
        <span className="font-bold">Save question</span> 
      </Link>
    </TopBar>
  </header>
  
  <section className="flex justify-center mt-6">
    <div className="grid grid-cols-2 gap-6">
      <div className="w-full flexCenter aspect-square bg-white rounded-[17px]">
        <Link href={`/create`} className="w-fit flexCenter bg-primary pl-2 pr-4 py-[8px] rounded-[10px] text-white text-sm mt-8">
          <MdAdd className="text-xl" />
          <span className="font-bold">Add Media</span> 
        </Link>
      </div> 

      <div className="bg-white w-[484px] flex flex-col gap-6 px-6 pt-5 pb-12 rounded-[17px]">

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="question">Question</label>
          <textarea id="question" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here"></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="rightAnswer">Right answer</label>
          <input id="rightAnswer" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="wrongAnswer">Wrong answer</label>
          <div className="flex flex-col gap-3">
            <input id="wrongAnswer" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here" />
            <input id="wrongAnswer" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here" />
            <input id="wrongAnswer" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here" />
          </div>  

        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="solution">Solution</label>
          <textarea id="solution" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here"></textarea>
        </div>

      </div>

    </div>
  </section>
  </>

  )
}

export default page
