import { categories } from "@/contants/categories"
import Link from "next/link"

const Footer = () => {
  const nav = ["Home","About","Why","Shit"];
  const socialMedia = ["Instagram","Facebook","Twitter","Reedit"];
  return (
  <footer className="bg-white pb-6 pt-7 px-6">
    <div className="boxWidth mx-auto flex flex-col gap-10">
      <div className="grid grid-cols-4">
        <h1 className="font-bold text-3xl">
          Quizzes
        </h1>
        <div>
          <span className="font-bold">All Categories</span>
          <ul className="mt-1">
            {categories.map(item => (
            <li key={item.slug}>
              <Link href={item.slug}>{item.label}</Link>
            </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-bold">Navigation</span>
          <ul className="mt-1">
          {nav.map(item => (
          <li key={item}>
            <Link href={item}>{item}</Link>
          </li>
          ))}
          </ul>
        </div>  
        <div>
          <span className="font-bold">Follow Us</span>
          <ul className="mt-1">
            {socialMedia.map(item => (
              <li key={item}>
                <Link href={item}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        Created at 2023 By someone who has been fucked his own life
      </div>
    </div>
  </footer>
  )
}

export default Footer
