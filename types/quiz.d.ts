interface QuizPreview {
  id ?: string,
  media : string,
  title : string,
  level : string,
}

interface QuizSlide {
  question : string,
  media ?: string,
  answers : SlideAnswer[],
  solution : string,
}

interface SlideAnswer {
  content : string,
  isCorrect : boolean
}

interface QuizProvider {
  slides : QuizSlide[],
  currentSlide : number,
  changeCurrentSlide : () => void,
  countCorrect : number,
  addCorrect : () => void,
  streak : number,
  addStreak : () => void,
  resetStreak : () => void,
  countWrong : () => number,
  getScores : () => number,  
  getProgress : () => number,
  resetQuiz : () => void,
  isQuizDone : () => boolean
}

interface QuizResult {
  quizId:string,
  scores:number,
  correctAnswers:number,
  wrongAnswers:number,
  streak:number,
  onPlayAgain:()=>void,
  className?:string
}

interface QuizEdit {
  id ?: string,
  title : string,
  description : string,
  media : File | string | null,
  category_id ?:number,
  level_id : number
}

