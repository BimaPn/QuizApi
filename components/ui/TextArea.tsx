import { TextareaHTMLAttributes } from "react"

const TextArea = ({className,...props}:TextareaHTMLAttributes<HTMLTextAreaElement> & {className ?:string}) => {
  return (
     <textarea 
    className={`w-full border-2 border-gray-300 rounded-[10px] py-2 px-3 focus:outline-none focus:border-blue-400 ${className}`}
      {...props}>
    </textarea>
  )
}

export default TextArea
