import LoginForm from "@/components/authentication/LoginForm"
import Login from "@/components/ilustration/Login"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const page = () => {
  return (
    <section className="h-screen flexCenter">
      <div className="w-[1124px] mx-auto flexBetween ">

        <div className="w-[464px] bg-white rounded-[14px] flex flex-col gap-3 px-8 pt-3 pb-4">
          <h1 className=" text-xl">Log in</h1>
          <LoginWith /> 
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Or log in with</span>
            <LoginForm />
          </div>
          <div className="flexCenter mt-1">
            <span className="text-sm">Already have an account ? <Link href={`/register`} className="font-bold text-primary">Register</Link></span>
          </div>
        </div>

        <div>
        <Login />
        </div>

      </div>
    </section>
  )
}

const LoginWith = ({className}:{className?:string}) => {
  return (
   <div className={`flexBetween border-2 border-gray-300 rounded-[10px] py-[2px] ${className}`}  >
      <div className="flex items-center">
        <div className="w-10 aspect-square flexCenter">
          <FcGoogle className="text-xl" />
        </div>
        <span className="font-bold">Continue with Google</span>
      </div>
      <div className="w-10 aspect-square flexCenter">
        <HiOutlineArrowNarrowRight className="text-xl text-gray-400" />
      </div>
    </div>
  )
}

export default page
