"use client"
import { createContext, useState } from "react";

export const addQuestionContext = createContext<QuestionProvider | null>(null);

const AddQuestionProvider = ({children,defaultValue}:{children:React.ReactNode,defaultValue?:AddQuestion}) => {
  const [formData,setFormData] = useState<AddQuestion>(() => {
        if(defaultValue) return defaultValue;
        return {
          question : {
            content : "",
            media : null,
          },
          answers : [
          {
            content : "",
            isCorrect : true,
          },
          {
            content : "",
            isCorrect : false,
          },
          {
            content : "",
            isCorrect : false,
          },
          {
            content : "",
            isCorrect : false,
          },
          ],
          solution : "",
        }
      });

  const setQuestion = (content:string) => {
    setFormData({...formData,question:{...formData.question,content}});
  }

  const setMedia = (file:File) => {
    setFormData({...formData,question:{...formData.question,media:file}});
  }

  const setAnswer = (content:string,index:number) => {
    let answers = formData.answers;
    answers[index].content = content;
    setFormData({...formData,answers});
  }
  
  const setSolution = (solution:string) => {
    setFormData({...formData,solution});
  }

  return (
    <addQuestionContext.Provider value={{ formData,setQuestion,setMedia,setAnswer,setSolution }}>
    {children}
    </addQuestionContext.Provider>
  )
}

export default AddQuestionProvider
