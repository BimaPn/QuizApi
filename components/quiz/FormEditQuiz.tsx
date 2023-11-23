"use client"
import { MdAdd, MdOutlineAddCircle, MdSave } from "react-icons/md"
import TopBar from "../TopBar"
import ButtonPrimary from "../ui/ButtonPrimary"
import ShowQuestions from "./ShowQuestions"
import Link from "next/link"
import TextInput from "../ui/TextInput"
import TextArea from "../ui/TextArea"
import { useState } from "react"
import { categories, levels } from "@/contants/quiz"
import ImageInput from "../ui/ImageInput"
import axios from "axios"
import { useRouter } from "next/navigation"

const FormEditQuiz = ({quiz}:{quiz:QuizEdit}) => {
  const [formData,setFormData] = useState<QuizEdit>({
    title : quiz.title,
    description : quiz.description,
    category_id : quiz.category_id ? quiz.category_id : 1,
    level_id : quiz.level_id,
    media : null
  });

  const router = useRouter();
  
  const submit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quizzes/${quiz.id as string}/update`,formData,{
      headers: { "Content-Type" : "multipart/form-data" }})
    .then(() => {
      router.push("/home");
    })
    .catch((err) => {
          alert("gagal")
          console.log(err.response.data)
        })
  }
  return (
    <form onSubmit={submit} className="pb-10">

      <Header>
        <ButtonPrimary type="submit" className="w-fit flexCenter gap-1 !pl-2 !pr-3 !py-2 text-sm">
          <MdSave className="text-lg" />
          <span className="font-bold">Publish</span> 
        </ButtonPrimary>
      </Header> 

      <section className="w-[1440px] flex items-start justify-center gap-10 relative mx-auto mt-6">
        <Questions quizId={quiz.id as string} />

        <div className="w-[464px] flex flex-col gap-3 bg-white rounded-[14px] px-6 pt-4 pb-8 sticky top-14">
          <ImageInput
          defaultImage={quiz.media as string}
          onChange={(file) => setFormData({...formData,media:file})}
          imageRatio="video"/> 

          <div className="flex flex-col gap-1">
            <label className="font-bold tex-xl" htmlFor="title">Quiz title</label>
            <TextInput
            value={formData.title}
            onChange={(e) => setFormData({...formData,title:e.target.value})}
            placeholder="Type here"/>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold tex-xl" htmlFor="description">Description</label>
            <TextArea
            value={formData.description}
            onChange={(e) => setFormData({...formData,description:e.target.value})}
            placeholder="Type here"/>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold tex-xl" htmlFor="categories">Level</label>
            <select
            value={formData.level_id}
            onChange={(e) => setFormData({...formData,level_id:parseInt(e.target.value)})}
            className="border-2 border-gray-300 rounded-[10px] py-2 px-3 bg-transparent">
              {levels.map(item => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold tex-xl" htmlFor="level">Category</label>
            <select
            value={formData.category_id}
            onChange={(e) => setFormData({...formData,category_id:parseInt(e.target.value)})}
            className="border-2 border-gray-300 rounded-[10px] py-2 px-3 bg-transparent">
              {categories.map(item => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>

        </div>
      </section>
    </form>
  )
}

const Header = ({children}:{children:React.ReactNode}) => {
  return (
    <header className="sticky top-0 z-[999]">
      <TopBar>
        {children}
      </TopBar>
    </header>
  )
}

const Questions = ({quizId}:{quizId:string}) => {
  return (
    <div className="flex flex-col justify-start gap-6">
      <ShowQuestions quizId={quizId} />
      <div>
        <Link href={`/create`} className="w-fit flexCenter bg-blue-300 pl-1 pr-3 py-[7px] rounded-[10px] text-white text-xs mx-auto">
          <MdAdd className="text-lg" />
          <span className="font-bold">Add question</span> 
        </Link>
      </div>
    </div>
  )
}

export default FormEditQuiz
