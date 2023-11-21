"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import QuizzesSlider from "../QuizzesSlider";

const Mathematics = () => {
  const [quizzes,setQuizzes] = useState<QuizPreview[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/math/quizzes`)
    .then((res) => {
      setQuizzes(res.data.quizzes); 
      setIsLoading(false);
    })
    .catch(err => {
      alert('error');
      console.log(err.response.data);
    });
  },[]);
  return (
  <div>
    <QuizzesSlider title="Mathematics" isLoading={isLoading} quizzes={quizzes} />
  </div>
  )
}

export default Mathematics
