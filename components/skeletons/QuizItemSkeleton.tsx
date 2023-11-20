import Skeleton from 'react-loading-skeleton'

const QuizItemSkeleton = () => {
  return (
    <div className=" rounded-[20px] overflow-hidden bg-white">
      <div className='w-full aspect-video relative'>

        <Skeleton className='absolute h-full -top-1 left-0 right-0'/>
      </div>


      <div className="px-3 py-2 pb-4 flex flex-col gap-3">
        <div className='w-[80%]'>
          <Skeleton />
        </div>
        <div className='w-1/4'>
          <Skeleton />
        </div>
      </div>
    </div>
  )
}

export default QuizItemSkeleton
