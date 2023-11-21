"use client"
import { useEffect, useState } from "react"
import QuizzesSlider from "../QuizzesSlider"
import axios from "axios";

const Entertainments = ({className}:{className?:string}) => {
  const [quizzes,setQuizzes] = useState<QuizPreview[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/entertainments/quizzes`)
    .then((res) => {
      setIsLoading(false);
      setQuizzes(res.data.quizzes); 
    })
    .catch(err => {
      alert('error');
      console.log(err.response.data);
    });
  },[]);
  return (
  <div>
    <QuizzesSlider title="Entertainment" isLoading={isLoading} quizzes={quizzes} />
  </div>
  )
}

export default Entertainments
