import Link from "next/link"
import QuizItem from "./cards/QuizItem"
import QuizItemSkeleton from "./skeletons/QuizItemSkeleton"

const QuizzesSlider = ({title,isLoading,quizzes}:{title:string,isLoading:boolean ,quizzes?:QuizPreview[]}) => {
  return (
  <section>
    <div className="flex flex-col gap-4 mt-12">
      <div className="flexBetween">
      <span className="text-2xl font-bold">
        {title}
      </span>
      </div>
      <div className="text-gray-700 grid grid-cols-5 gap-4">
      {isLoading && <QuizItemSkeleton count={5} />}

      {quizzes?.length !== 0 && (
        <>
          {quizzes?.map((item:QuizPreview) => (
          <Link key={item.id as string } href={`/quiz/play/${item.id as string}`}>
            <QuizItem media={item.media} title={item.title} level={item.level}/>
          </Link>
        ))}
        </>
      )}
      </div>
    </div>
  </section>
  )
}

export default QuizzesSlider
