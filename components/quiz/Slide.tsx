"use client"
import Image from "next/image"
import { useState,useContext } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { quizContext } from "../providers/QuizProvider"
import ProgressBar from "../ProgressBar"
import ButtonPrimary from "../ui/ButtonPrimary"

const Slide = ({question,media,answers,solution,className}:QuizSlide & {className?:string}) => {
  const options = ["a","b","c","d"];
  const { changeCurrentSlide,addCorrect,streak,addStreak,resetStreak,getProgress,currentSlide } = useContext(quizContext) as QuizProvider;
  const [pickedOption,setPickedOption] = useState<number>(-1);
  const [highlight,setHighlight] = useState<number>(-1);
  const [showSolution,setShowSolution] = useState<boolean>(false);

  const onSubmit = (e:React.MouseEvent,index:number) => {
    e.preventDefault();
    if(pickedOption !== -1) return;

    setHighlight(index);

    const showAnswer = setTimeout(() => {
      setPickedOption(index);
      if(answers[index].isCorrect) {
        addCorrect();
        addStreak(); 
      }else{
        streak > 0 && resetStreak();
      }
    },1500);

    const _showSolution = setTimeout(() => {
      setShowSolution(true);
    },3200); 

    return () => {
      clearTimeout(showAnswer);
      clearTimeout(_showSolution);
    }
  }

  const nextQuestion = (e:React.MouseEvent) => {
    e.preventDefault();
    setPickedOption(-1);
    setHighlight(-1);
    setShowSolution(false);
    changeCurrentSlide();
  }
  return (
    <div className={`w-[1440px] flex items-start justify-center mx-auto bg-white ${className} right-to-left`}>
      <div className="w-[720px] flex flex-col gap-7">
        <div className="w-[70%] mb-6">
          <ProgressBar progress={getProgress()}/>
        </div>

        <div key={currentSlide} className="flex flex-col gap-7 left-to-right">
          <h1 className="font-bold text-xl">{question}</h1>
          <div className="flex flex-col gap-4">
            {answers.map((answer,index) => (
              <button
              key={index}
              onClick={e => onSubmit(e,index)} 
              className={`w-[60%] flex items-start gap-1 bg-light px-4 pt-3 rounded-[12px] cursor-pointer bg-transition
              ${(highlight != -1 && highlight != index && pickedOption == -1) && "opacity-30"}
              ${pickedOption == -1 && "hover:bg-semiLight"}
              ${(pickedOption != -1 && answer.isCorrect) && "!bg-success text-white font-bold"}
              ${(pickedOption == index && !answer.isCorrect) && "!bg-error text-white font-bold"}
              `}>
                <div className="w-6 aspect-square font-bold">
                  {options[index]}.              
                </div>
                <div className="flex flex-col justify-start items-start gap-2 border border-transparent">
                  <span>{answer.content}</span>
                  
                  <div className={`text-start flex flex-col expand-container ${(showSolution && answer.isCorrect) ? "expanded" :"shrink-container"} pb-[6px]`}>
                    <span className="font-bold">Solution :</span>    
                    <span className="font-normal">{solution}</span>
                  </div>
                </div>
              </button>
            ))}
            
            {showSolution && (
              <div className="w-[60%] flexCenter mt-4">
                <ButtonPrimary onClick={nextQuestion} className="w-fit flexCenter gap-2">
                  <span className="font-bold leading-6">Next</span>
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </ButtonPrimary>
              </div>
            )}

        </div>
   

        </div>

      </div>
      {media && (
        <div key={currentSlide} className="w-[60%] flexCenter right-to-left">
          <div className="relative w-[90%] aspect-[16/10] rounded-[20px] overflow-hidden">
            < Image 
            src={media} 
            alt={`trest`}
            fill
            style={{objectFit:"cover"}}
            />
          </div>
        </div>
      )}
    </div>

  )
}

export default Slide
