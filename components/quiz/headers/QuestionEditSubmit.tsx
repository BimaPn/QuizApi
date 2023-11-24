"use client"
import TopBar from "@/components/TopBar";
import { addQuestionContext } from "@/components/providers/AddQuestionProvider";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MdSave } from "react-icons/md";

const QuestionEditSubmit = ({questionId}:{questionId:string}) => {
  const { formData } = useContext(addQuestionContext) as QuestionProvider; 
  const router = useRouter();

  const submit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      ...formData,
      _method:"PUT"
    };
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${questionId}/update`,data,{
      headers: { "Content-Type" : "multipart/form-data" },
      })
    .then(res => {
      const quizId = res.data.quiz_id;
      // router.push(`/quiz/edit/${quizId}`);      
      console.log(res.data)
    })
    .catch(err => {
      alert("error");
      console.log(err.response)
    });
  }
  return (
    <TopBar>
      <ButtonPrimary onClick={submit} className="w-fit flexCenter gap-1 !pl-2 !pr-3 !py-2 text-sm">
        <MdSave className="text-lg" />
        <span className="font-bold">Publish</span> 
      </ButtonPrimary>
    </TopBar>
  )
}

export default QuestionEditSubmit
