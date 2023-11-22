import AddQuestionProvider from "@/components/providers/AddQuestionProvider"
import FormAddQuiz from "@/components/quiz/FormAddQuiz"

const page = () => {
  return (
  <AddQuestionProvider>
  <FormAddQuiz />
   </AddQuestionProvider>
  )
}

export default page
