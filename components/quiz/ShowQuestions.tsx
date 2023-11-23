"use client"
import { useEffect, useState } from "react"
import QuestionItem from "./QuestionItem"
import axios from "axios";
import QuestionItemSkeleton from "../skeletons/QuestionItemSkeleton";

const ShowQuestions = ({quizId,className}:{quizId:string,className?:string}) => {
  const [questions,setQuestios] = useState<QuestionItem[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quizzes/${quizId}/questions`)
    .then((res) => {
      setQuestios(res.data.questions);
      setIsLoading(false);
      console.log(res.data.questions)
    })
    .catch((err) => {
      alert("error")
      console.log(err.response.data)
    });
  },[]);
  return (
    <section className={`w-[720px] flex flex-col gap-5 ${className}`}>
    {isLoading && <QuestionItemSkeleton count={3} />}

    {questions.length !== 0 && 
      questions.map((item,index) => (
        <QuestionItem 
        key={index} 
        index={index+1} 
        id={item.id} 
        content={item.content} 
        answers={item.answers} 
        solution={item.solution}  />
      ))}
    </section>
  )
}

export default ShowQuestions  
