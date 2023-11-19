"use client"
import Link from "next/link"
import TextInput from "../ui/TextInput"
import ButtonPrimary from "../ui/ButtonPrimary"
import { signIn } from "next-auth/react"
import InputError from "../ui/InputError"
import { useState } from "react"
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const [formData,setFormData] = useState({
    email : "",
    password : "",
  });
  const [errors,setErrors] = useState<string|null>(null);
  const router = useRouter();

  const formSubmit = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault()
    signIn('credentials',{...formData,redirect:false})
    .then((callback) => {
        if(callback?.error){
          setErrors(callback.error);
        }
        if(callback?.ok && !callback.error){
            router.push("/home")
        }
    }) 
  }
  return (
    <form onSubmit={formSubmit} className="flex flex-col gap-2">
      <InputError message={errors && errors} />
      <TextInput 
      type="text"
      value={formData.email}
      onChange={e => setFormData({...formData,email:e.target.value})}
      className="!py-[6px] mb-1"
      placeholder="Your email"/>

      <TextInput 
      type="password"
      value={formData.password}
      onChange={e => setFormData({...formData,password:e.target.value})}
      className="!py-[6px]"
      placeholder="Your Password"/>

      <Link href={`/forgot`} className="font-bold text-gray-400 text-sm text-end">Forgot password?</Link>
      <ButtonPrimary type="submit" className="mt-2">Log in</ButtonPrimary>
    </form>
  )
}

export default LoginForm
