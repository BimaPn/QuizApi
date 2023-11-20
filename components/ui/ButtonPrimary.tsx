import { ButtonHTMLAttributes } from "react"

const ButtonPrimary = ({className,children,...props}:ButtonHTMLAttributes<HTMLButtonElement> & {children:React.ReactNode,className?:string}) => {
  return (
     <button 
    className={`bg-primary font-bold text-white px-4 py-2 rounded-[10px] ${className}`}
      {...props}
      >{children}</button>
  )
}

export default ButtonPrimary
