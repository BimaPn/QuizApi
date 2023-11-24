import { MdCancel, MdCheckCircle, MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md"
import DeleteButton from "./DeleteButton"
import Link from "next/link"

const QuestionItem = ({id,content,answers,solution,index,onDelete}
:QuestionItem & {onDelete:(questionId:string)=>void,index:number}) => {
  return (
      <div className="w-full bg-white rounded-[14px] px-6 pb-4 pt-2">
        
        <div className="flexBetween border-b pb-1">
          <span className="font-bold">Question {index}</span>
          <div className="flexCenter">
            <Link href={`/quiz/question/${id}/edit`} className="flexCenter px-2 py-[3px] rounded-lg">
              <MdOutlineModeEditOutline className="text-xl"/>
            </Link>
            <DeleteButton questionId={id} onDelete={() => onDelete(id)}>
              <div className="flexCenter px-2 aspect-square rounded-lg">
                <MdOutlineDelete className="text-xl" />
              </div>
            </DeleteButton>
          </div>
        </div>  

        <div className="mt-4">
         <span>{content}</span>
         <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-4">

         {answers.map((answer,index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-6 aspect-square mt-1">
              {answer.isCorrect ? (
              <MdCheckCircle className="text-xl text-success" />
              ) : (
              <MdCancel className="text-xl text-error" />
              )}
            </div>
            <span className="block leading-6">{answer.content}</span>
          </div>
         ))}
         </div>
        </div>

        <div className="mt-4">
          <span className="font-bold">Solution :</span>
          <p>{solution}</p>
        </div>

      </div>

  )
}

export default QuestionItem
