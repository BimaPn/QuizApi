interface QuestionProvider {
  formData : AddQuestion,
  setQuestion : (content:string) => void,
  setMedia : (file:File) => void,
  setAnswer : (content:string,index:number) => void,
  setSolution : (solution:string) => void,
}
type Question = {
  content : string,
  media : File | null,
}
type Answer = {
  content : string,
  isCorrect : boolean
}

interface AddQuestion {
  question : Question
  answers : Answer[],
  solution : string,
}
