import Link from "next/link"

const TopBar = ({children}:{children?:React.ReactNode}) => {
  return (
  <nav className="flexCenter bg-white px-4 py-2">
    <div className="w-[1440px] flexBetween">
      <Link href="/home" className="font-bold text-3xl">Quizzes</Link>
      {children}
    </div>
  </nav>
  )
}

export default TopBar
