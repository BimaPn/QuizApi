import AddQuestionProvider from "@/components/providers/AddQuestionProvider"
import FormAddQuiz from "@/components/quiz/FormAddQuiz"
import QuestionCreateSubmit from "@/components/quiz/headers/QuestionCreateSubmit"
import QuizCreateSubmit from "@/components/quiz/headers/QuizCreateSubmit"

type Props = {
  params:{id:string}
}

const page = ({params}:Props) => {
  return (
  <AddQuestionProvider>
    <FormAddQuiz>
      <QuestionCreateSubmit quizId={params.id} /> 
    </FormAddQuiz>
   </AddQuestionProvider>
  )
}

export default page
