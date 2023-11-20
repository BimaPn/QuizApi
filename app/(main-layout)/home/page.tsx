"use client"

import { useState } from "react"
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import QuizItem from "@/components/cards/QuizItem";
import Entertainment from "@/components/icons/Entertainment";
import Sport from "@/components/icons/Sport";
import Science from "@/components/icons/Science";
import { categories } from "@/contants/categories";
import QuizzesSlider from "@/components/ui/QuizzesSlider";
import { quizzes } from "@/contants/dumpQuizItem";
import Categories from "@/components/home/Categories";
const page = () => {
  const [count,setCount] = useState([new Date()]);
  return (
  <>
  <HeroSection />
  <Categories />
  <QuizzesSlider title="Entertainment" quizzes={quizzes} />
  <QuizzesSlider title="Science" quizzes={quizzes} />
  <QuizzesSlider title="Sport" quizzes={quizzes} />
  <QuizzesSlider title="Mathematics" quizzes={quizzes} />
  </>
  )
}

export default page
