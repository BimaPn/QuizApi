"use client"
import { quizContext } from "@/components/providers/QuizProvider"
import Slide from "@/components/quiz/Slide"
import Image from "next/image"
import Result from "@/components/quiz/Result"
import { useContext } from "react"
import ApiClient from "@/app/api/axios/ApiClient"
import axios from "axios"

const PlayQuiz = ({quizId}:{quizId:string}) => {
  const { slides,currentSlide,resetQuiz,getScores,countCorrect,countWrong,streak,isQuizDone } = useContext(quizContext) as QuizProvider;

  const playAgain = () => {
    resetQuiz();
  }
  return (
    <>
    {isQuizDone() ? 
      <Result
      quizId={quizId}
      onPlayAgain={() => playAgain()}
      scores={getScores()}
      correctAnswers={countCorrect}
      wrongAnswers={countWrong()}
      streak={streak}
      className="pt-20"/>
    : 
      <Slide 
      question={slides[currentSlide].question}
      answers={slides[currentSlide].answers}
      media={slides[currentSlide].media}
      solution={slides[currentSlide].solution}
      className="pt-24"/>  
    }
    </>
  )
}

export default PlayQuiz 
