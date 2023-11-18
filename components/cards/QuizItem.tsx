import Image from "next/image"

const QuizItem = ({media,title,level}:QuizPreview) => {
  return (
    <div className=" rounded-[20px] overflow-hidden bg-white">
      <div className="relative w-full aspect-video">
        < Image 
        src={media} 
        alt={title}
        fill
        style={{objectFit:"cover"}}
        />
      </div>
      <div className="pl-3 py-2 pb-4 flex flex-col gap-3">
        <span className="block font-bold">{title}</span>
        <div className="w-fit bg-[#92cbdf] rounded-lg px-2 py-[3px] text-xs font-bold">
          {level} 
        </div>
      </div>
    </div>
  )
}

export default QuizItem
