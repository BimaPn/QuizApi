import RegisterForm from "@/components/authentication/RegisterForm"
import Register from "@/components/ilustration/Register"
import Link from "next/link"

const page = () => {
  return (
    <section className="h-screen flexCenter">
      <div className="w-[1124px] mx-auto flexBetween ">

        <div className="w-[464px] bg-white rounded-[14px] flex flex-col gap-3 px-8 pt-3 pb-4">
          <h1 className=" text-xl">Register</h1> 
          <RegisterForm />
          <div className="flexCenter mt-1">
            <span className="text-sm">Already have an account ? <Link href={`/login`} className="font-bold text-primary">Login</Link></span>
          </div>
        </div>

        <div>
        <Register />
        </div>

      </div>
    </section>
  )
}

export default page
