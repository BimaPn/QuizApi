"use client"
import {createContext,useState,useEffect} from 'react'

export const quizContext = createContext<QuizProvider | null>(null);

const QuizProvider = ({children,slidesValue}:{children:React.ReactNode,slidesValue:QuizSlide[]}) => {
  const [slides,setSlides] = useState<QuizSlide[]>(slidesValue);
  const [currentSlide,setCurrentSlide] = useState<number>(0);
  const [countCorrect,setcountCorrect] = useState<number>(0);
  const [streak,setStreak] = useState<number>(0);

  useEffect(() => {

  })

  const getScores = () => {
    return Math.floor(countCorrect/slides.length * 100);
  }

  const countWrong = () => {
    return slides.length - countCorrect;
  }

  const addStreak = () => {
    setStreak(prev => prev+1);
  }

  const resetStreak = () => {
    setStreak(0);
  }
 
  const addCorrect = () => {
    setcountCorrect(prev => prev+1);
  }
      
  const changeCurrentSlide = () => {
    setCurrentSlide(prev => prev+1);
  }

  const getProgress = () => {
    return Math.floor(currentSlide/slides.length * 100);
  }
  return (
    <quizContext.Provider value={{slides,currentSlide,changeCurrentSlide,countCorrect,addCorrect,getScores,countWrong,streak,addStreak,resetStreak,getProgress}}>
    {children}
    </quizContext.Provider>
  )
}

export default QuizProvider
