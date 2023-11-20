"use client"
import { quizContext } from "@/components/providers/QuizProvider"
import Slide from "@/components/quiz/Slide"
import Image from "next/image"
import Result from "@/components/quiz/Result"
import { useContext } from "react"

const page = () => {
  const { slides,currentSlide } = useContext(quizContext) as QuizProvider;
  return (
  <section className="h-screen bg-white">
    {currentSlide === slides.length ? (
      <Result className="pt-20"/>
    ): (
      <Slide 
      question={slides[currentSlide].question}
      answers={slides[currentSlide].answers}
      media={slides[currentSlide].media}
      solution={slides[currentSlide].solution}
      className="pt-24"/>  
    )}
  </section>
  )
}

export default page
