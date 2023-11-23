"use client"

import { MdSave } from "react-icons/md"
import TextArea from "../ui/TextArea"
import TextInput from "../ui/TextInput"
import { useContext, useRef, useState } from "react"
import { addQuestionContext } from "../providers/AddQuestionProvider"
import TopBar from "../TopBar"
import ButtonPrimary from "../ui/ButtonPrimary"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/navigation"

const FormAddQuiz = ({children}:{children:React.ReactNode}) => {
  const { 
    formData,setQuestion,
    setMedia,setAnswer,setSolution
    } = useContext(addQuestionContext) as QuestionProvider;

  return (
  <>
  {children}
  <section className="flex justify-center mt-6">
    <div className="grid grid-cols-2 gap-6">
      <Media onChange={(file) => setMedia(file)} />
      <div className="bg-white w-[484px] flex flex-col gap-6 px-6 pt-5 pb-12 rounded-[17px]">

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="question">Question</label>
          <TextArea
          value={formData.question.content}
          onChange={(e) => setQuestion(e.target.value)}
          id="question"
          placeholder="Type here"/>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="rightAnswer">Right answer</label>
          <TextInput
          value={formData.answers[0].content}
          onChange={(e) => setAnswer(e.target.value,0)}
          placeholder="Type here"/>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="wrongAnswer">Wrong answer</label>
          <div className="flex flex-col gap-3">
            {[1,2,3].map((index) => (
              <TextInput
              key={index}
              value={formData.answers[index].content}
              onChange={(e) => setAnswer(e.target.value,index)}
              placeholder="Type here"/>
            ))}
          </div>  
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold tex-xl" htmlFor="solution">Solution</label>
          <TextArea
          value={formData.solution}
          onChange={(e) => setSolution(e.target.value)}
          placeholder="Type here"/>
        </div>

      </div>
    </div>
  </section>
  </>
  )
}

const Media = ({onChange}:{onChange:(file:File)=>void}) => {
  const fileInput = useRef<HTMLInputElement>(null)
  const [imagePreview,setImagePreview] = useState<string>("/images/empty.jpg");

    const changeImage = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const selectedFile = fileInput.current!.files![0];
      if (selectedFile) {
          const blob = URL.createObjectURL(selectedFile);
          onChange(selectedFile)
          setImagePreview(blob)
      }
    }
  return (
    <div className="w-full flexCenter flex-col aspect-square bg-white rounded-[17px]">

      <div className={`w-[60%] relative flexCenter aspect-square rounded-2xl overflow-hidden`}>
       <Image 
        src={imagePreview}
        fill
        objectFit="cover"
        alt="cover photo"/>
      </div>

      <input ref={fileInput} type="file" accept="image/*"  onChange={changeImage} className="hidden"/>
      <button onClick={() => fileInput.current?.click()} className="w-fit flexCenter bg-primary px-3 py-[8px] rounded-[10px] font-bold text-white text-sm mt-8">
       Change media 
      </button>
    </div> 
  )
}

export default FormAddQuiz
