import { InputHTMLAttributes } from "react"

const TextInput = ({className,...props}:InputHTMLAttributes<HTMLInputElement> & {className ?:string}) => {
  return (
    <input
    className={`w-full border-2 border-gray-300 rounded-[10px] py-2 px-3 focus:outline-none focus:border-blue-400 ${className}`} 
    {...props}/>
  )
}

export default TextInput
