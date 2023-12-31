import AddQuestionProvider from "@/components/providers/AddQuestionProvider"
import FormAddQuiz from "@/components/quiz/FormAddQuiz"
import QuizCreateSubmit from "@/components/quiz/headers/QuizCreateSubmit"

const page = () => {
  return (
  <AddQuestionProvider>
    <FormAddQuiz>
      <QuizCreateSubmit /> 
    </FormAddQuiz>
   </AddQuestionProvider>
  )
}

export default page
