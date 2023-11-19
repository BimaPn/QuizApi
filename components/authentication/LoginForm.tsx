import Link from "next/link"
import TextInput from "../ui/TextInput"
import ButtonPrimary from "../ui/ButtonPrimary"

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <TextInput 
      className="!py-[6px] mb-1"
      placeholder="Your email"/>
      <TextInput 
      className="!py-[6px]"
      placeholder="Your Password"/>
      <Link href={`/forgot`} className="font-bold text-gray-400 text-sm text-end">Forgot password?</Link>
      <ButtonPrimary className="mt-2">Log in</ButtonPrimary>
    </form>
  )
}

export default LoginForm
