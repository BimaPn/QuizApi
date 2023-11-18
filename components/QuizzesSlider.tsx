import QuizItem from "./cards/QuizItem"

const QuizzesSlider = ({title,quizzes}:{title:string,quizzes:QuizPreview[]}) => {
  return (
  <section>
    <div className="flex flex-col gap-4 mt-12">
      <div className="flexBetween">
      <span className="text-2xl font-bold">
        {title}
      </span>
      </div>
      <div className="text-gray-700 grid grid-cols-5 gap-4">
      {quizzes.map((item,index) => (
        <QuizItem key={index} media={item.media} title={item.title} level={item.level}/>
      ))}
      </div>
    </div>
  </section>
  )
}

export default QuizzesSlider
