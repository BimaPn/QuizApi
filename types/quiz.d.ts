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
  answer : string,
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
}

