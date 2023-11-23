import QuizProvider from "@/components/providers/QuizProvider"
import PlayQuiz from "@/components/quiz/PlayQuiz"
import axios from "axios"

type Props = {
  id : string
}
const page = async ({params}:{params:Props}) => {
  
  const questions = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quizzes/${params.id}/play`)
  .then((res) => {
    return res.data.questions
  })
  .catch((err) => {
      throw Error("Not Found.");
  });

  return (
  <section className="h-screen bg-white">
    <QuizProvider slidesValue={questions}>
      <PlayQuiz quizId={params.id} />
    </QuizProvider>
  </section>
  )
}

export default page
