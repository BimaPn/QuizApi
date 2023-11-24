"use client"
import { useEffect, useState } from "react"
import QuestionItem from "./QuestionItem"
import axios from "axios";
import QuestionItemSkeleton from "../skeletons/QuestionItemSkeleton";

const ShowQuestions = ({quizId,className}:{quizId:string,className?:string}) => {
  const [questions,setQuestions] = useState<QuestionItem[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quizzes/${quizId}/questions`)
    .then((res) => {
      setQuestions(res.data.questions);
      setIsLoading(false);
    })
    .catch((err) => {
      alert("error")
      console.log(err.response.data)
    });
  },[]);

  const deleteQuestion = (questionId:string) => {
    const filtered = questions.filter((item) => item.id !== questionId);
    setQuestions(filtered);
  }
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
        solution={item.solution}  
        onDelete={(questionId) => deleteQuestion(questionId)}/>

      ))}
    </section>
  )
}

export default ShowQuestions  
