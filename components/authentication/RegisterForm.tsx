import Link from "next/link"
import TextInput from "../ui/TextInput"
import ButtonPrimary from "../ui/ButtonPrimary"

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-2">

      <TextInput 
      type="text"
      className="!py-[6px] mb-1"
      placeholder="Your Name"/>
      <TextInput
      type="text"
      className="!py-[6px] mb-1"
      placeholder="Your email"/>
      <TextInput
      type="password"
      className="!py-[6px] mb-1"
      placeholder="Your password"/>
      <TextInput 
      type="password"
      className="!py-[6px]"
      placeholder="Confirm password"/>
      <ButtonPrimary className="mt-2">Register</ButtonPrimary>
    </form>
  )
}

export default RegisterForm
