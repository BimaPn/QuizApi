import axios from 'axios';
import {useState,useEffect} from 'react'
import QuizzesSlider from '../QuizzesSlider';

const Science = () => {
  const [quizzes,setQuizzes] = useState<QuizPreview[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/science/quizzes`)
    .then((res) => {
      setQuizzes(res.data.quizzes); 
      setIsLoading(false);
    })
    .catch(err => {
      alert('error');
      console.log(err.response.data);
    });
  },[]);
  return (
  <div>
    <QuizzesSlider title="Science" isLoading={isLoading} quizzes={quizzes} />
  </div>
  )
}

export default Science
