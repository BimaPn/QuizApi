import FormEditQuiz from "@/components/quiz/FormEditQuiz"
import axios from "axios"

type Props = {
  params : {id:string}
}

const page = async ({params}:Props) => {
  const quiz = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/quizzes/${params.id}/get`)
  .then((res) => {
    return res.data.quiz;
  })
  .catch((err) => {
    console.log(err.response.data);
  });
  return (
  <>
  <FormEditQuiz quiz={quiz}/>
  </>
  )
}

export default page
