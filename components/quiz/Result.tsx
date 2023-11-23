"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Winner from "../icons/Winner"
import { MdCancel, MdCheckCircle } from "react-icons/md"
import { ImFire } from "react-icons/im"
import Link from "next/link"
import { quizContext } from "../providers/QuizProvider"
import axios from "axios"

const Result = ({quizId,scores,correctAnswers,wrongAnswers,streak,onPlayAgain,className}:QuizResult) => {
  const [showResult,setShowResult] = useState<boolean>(false);

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quizzes/${quizId}/attempt/add`,
    {
      scores,
      correct_answers : correctAnswers,
      wrong_answers : wrongAnswers,
      streak
    })
    .then(() => {
      setShowResult(true);
    })
    .catch((err) => {
      console.log(err.response);
    });
  },[]);

  return showResult && (
    <div className={`w-fit mx-auto flex flex-col gap-6 ${className}`}>
      <div className="flexCenter flex-col gap-1">
        <div className="relative w-[38px] aspect-square rounded-full overflow-hidden">
          < Image 
          src={`/images/person.jpg`} 
          alt={`trest`}
          fill
          style={{objectFit:"cover"}}
          />
        </div>
        <span className="text-xs">Ujang Wahyudi</span>
      </div>
    
    <div className="flexCenter flex-col gap-4">
      <Winner className="w-64 h-fit"/>
      <span className="font-bold text-xl">Good Job !</span>  
    </div>

    <div className="w-fit mx-auto flexCenter flex-col gap-4">
     <span className="font-bold leading-4">Scores :</span> 
     <span className="font-bold text-3xl leading-4">{scores}</span>
    </div>

    <div className="flex flex-col gap-2 mt-5 mb-7">
      <div className="grid grid-cols-3 gap-3">
        <div className="flexCenter flex-col bg-light px-3 py-1 rounded-[12px]">
          <span className="text-sm">Wrong answers</span>
          <div className="flex items-center gap-[6px]">
            <MdCancel className="text-xl text-error"/>
            <span className="font-bold text-lg">{wrongAnswers}</span>
          </div>
        </div>
        <div className="flexCenter flex-col bg-light px-3 py-1 rounded-[12px]">
          <span className="text-sm">Correct answers</span>
          <div className="flex items-center gap-[6px]">
            <MdCheckCircle className="text-xl text-success"/>
            <span className="font-bold text-lg">{correctAnswers}</span>
          </div>
        </div>
        <div className="flexCenter flex-col bg-light px-3 py-1 rounded-[12px]">
          <span className="text-sm">Streak</span>
          <div className="flex items-center gap-[6px]">
            <ImFire className="text-lg text-orange-400"/>
            <span className="font-bold text-lg">{streak}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <button onClick={() => onPlayAgain()} className="text-center text-white font-bold bg-primary py-[10px] rounded-[12px]">Play again</button>
      <Link href={`/home`} className="text-center font-bold bg-light py-[10px] rounded-[12px]">Find another quiz</Link>
    </div>

    </div>
  )
}

export default Result
