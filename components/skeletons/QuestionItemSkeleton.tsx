import Skeleton from "react-loading-skeleton"

const QuestionItemSkeleton = ({count = 1}:{count ?: number}) => {
  return Array(count).fill(0).map((_,index) => (
    <div key={index} className="w-full bg-white rounded-[14px] px-6 pb-4 pt-2">
      <div className="w-[30%] py-1 mt-1">
        <Skeleton />
      </div>  
      
      <div className="mt-4">
        <div className="w-[60%]">
         <Skeleton />
        </div>
       <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-4">
       {[1,2,3,4].map((item) => (
        <Skeleton />
       ))}
       </div>
      </div>

      <div className="w-[60%] mt-5">
        <Skeleton />
      </div>
    </div>
  ))
}

export default QuestionItemSkeleton
