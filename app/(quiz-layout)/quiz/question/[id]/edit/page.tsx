
import AddQuestionProvider from "@/components/providers/AddQuestionProvider"
import FormAddQuiz from "@/components/quiz/FormAddQuiz"
import QuestionCreateSubmit from "@/components/quiz/headers/QuestionCreateSubmit"
import QuestionEditSubmit from "@/components/quiz/headers/QuestionEditSubmit"
import axios from "axios"

type Props = {
  params:{id:string}
}

const page = async ({params}:Props) => {
  let defaultMedia = "";
  const question = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${params.id}/get`)
  .then((res) => {
    defaultMedia = res.data.defaultMedia;
    return res.data.question;
  })
  .catch((err) => {
    throw Error(err.response.data.message);
    console.log(err.response.data);
  });

  return (
  <AddQuestionProvider defaultValue={question}> 
    <FormAddQuiz defaultMedia={defaultMedia}>
      <QuestionEditSubmit questionId={params.id} /> 
    </FormAddQuiz>
   </AddQuestionProvider>
  )
}

export default page
