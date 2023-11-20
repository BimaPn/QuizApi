"use client"
import Link from "next/link"
import TextInput from "../ui/TextInput"
import ButtonPrimary from "../ui/ButtonPrimary"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import InputError from "../ui/InputError"



const RegisterForm = () => {
  const [formData,setFormData] = useState({
    name : "",
    email : "",
    password : "",
    password_confirmation : "",
  });
  const [errors,setErrors] = useState<RegisterErrors|null>(null);
  const router = useRouter();

    const formSubmit =  (e:React.FormEvent<EventTarget>) => {
      e.preventDefault()

      axios.post(`http://127.0.0.1:8000/api/auth/register`,formData)
      .then(() => {
        router.push("/login");      
      })
      .catch(error => {
        const validatedErrors = error.response.data.errors;
        setErrors(validatedErrors);
      });
    }
  return (
    <form onSubmit={formSubmit} className="flex flex-col gap-2">
      <div>
        <TextInput 
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData,name:e.target.value})}
        className="!py-[6px] mb-1"
        required
        placeholder="Your Name"/>
        <InputError message={errors?.name && errors.name[0]} />
      </div>
      <div>
        <TextInput
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData,email:e.target.value})}
        className="!py-[6px] mb-1"
        required
        placeholder="Your email"/>
        <InputError message={errors?.email && errors.email[0]} />
      </div>
      <div>
        <TextInput 
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({...formData,password:e.target.value})}
        className="!py-[6px] mb-1"
        required
        placeholder="Password"/>
        <InputError message={errors?.password && errors.password[0]} />
      </div>
      <div>
        <TextInput 
        type="password"
        value={formData.password_confirmation}
        onChange={(e) => setFormData({...formData,password_confirmation:e.target.value})}
        className="!py-[6px] mb-1"
        required
        placeholder="Confirm password"/>
      </div>
      
      <ButtonPrimary type="submit" className="mt-2">Register</ButtonPrimary>
    </form>
  )
}

export default RegisterForm
