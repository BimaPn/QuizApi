import TopBar from "@/components/TopBar"
import Link from "next/link"
import { MdAdd, MdOutlineModeEditOutline, MdSave } from "react-icons/md"
import { MdOutlineDelete } from "react-icons/md"
import { MdCheckCircle } from "react-icons/md"
import { MdCancel } from "react-icons/md"
import { MdOutlineAddCircle } from "react-icons/md"

const page = () => {
  return (
  <>
  <header className="sticky top-0">
    <TopBar>
      <Link href={`/create`} className="w-fit flexCenter gap-1 bg-primary pl-2 pr-3 py-[8px] rounded-[10px] text-white text-sm">
        <MdSave className="text-lg" />
        <span className="font-bold">Publish</span> 
      </Link>
    </TopBar>
  </header>
  
  <section className="w-[1440px] flex items-start justify-center gap-10 relative mx-auto mt-6">

    <div>
      <div className="w-[764px] bg-white rounded-[14px] px-6 pb-6 pt-2">
        
        <div className="flexBetween border-b pb-1">
          <span className="font-bold">Question 1</span>
          <div className="flexCenter gap-2">
            <div className="flexCenter gap-1 px-3 py-[3px] rounded-lg">
              <MdOutlineModeEditOutline className="text-[17px]"/>
              <span>Edit</span>
            </div>
            <div className="flexCenter px-[5px] aspect-square rounded-lg">
              <MdOutlineDelete className="text-[21px]" />
            </div>
          </div>
        </div>  

        <div className="mt-4">
         <span>What happen if you get someone by accidentally punch them in their face ?</span>
         <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-4">

          <div className="flex items-start gap-2">
            <div className="w-10 aspect-square mt-1">
              <MdCancel className="text-xl text-error" />
            </div>

            <span className="block leading-6">Punch them with full power hehe (just kidding though) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, aut.</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-10 aspect-square mt-1">
              <MdCancel className="text-xl text-error" />
            </div>

            <span className="block leading-6">Punch them with full power hehe (just kidding though) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, aut.</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-10 aspect-square mt-1">
              <MdCheckCircle className="text-xl text-success" />
            </div>

            <span className="block leading-6">Punch them with full power hehe (just kidding though) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, aut.</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-10 aspect-square mt-1">
              <MdCancel className="text-xl text-error" />
            </div>

            <span className="block leading-6">Punch them with full power hehe (just kidding though) Lorem ipsum dolor</span>
          </div>

         </div>
        </div>

        <div className="mt-4">
          <span className="font-bold">Solution :</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis totam alias aspernatur hic corrupti, et nulla error magnam modi tenetur praesentium ullam voluptate minus illum.</p>
        </div>

      </div>

      <Link href={`/create`} className="w-fit flexCenter bg-blue-300 pl-1 pr-3 py-[7px] rounded-[10px] text-white text-xs mt-4 mx-auto">
        <MdAdd className="text-lg" />
        <span className="font-bold">Add question</span> 
      </Link>
    </div>


    <div className="w-[464px] flex flex-col gap-3 bg-white rounded-[14px] px-6 pt-4 pb-8 sticky top-0">
      <div className="flexCenter flex-col border-dashed border-2 border-gray-300 rounded-[10px] aspect-[21/9]">
         <MdOutlineAddCircle className="text-4xl text-blue-200"/>
         <span>Add cover image</span>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold tex-xl" htmlFor="title">Quiz title</label>
        <input id="title" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold tex-xl" htmlFor="description">Description</label>
        <textarea id="description" className="w-full border-2 border-gray-300 rounded-[10px] py-2 px-3" placeholder="Type here"></textarea>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold tex-xl" htmlFor="level">Level</label>
        <select id="level" className="border-2 border-gray-300 rounded-[10px] py-2 px-3 bg-transparent">
          <option value="">Beginner</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold tex-xl" htmlFor="categories">Categories</label>
        <select id="categories" className="border-2 border-gray-300 rounded-[10px] py-2 px-3 bg-transparent">
          <option value="">Entertainment</option>
        </select>
      </div>
    </div>
  </section>
  </>
  )
}

export default page
