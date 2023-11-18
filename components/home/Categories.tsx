import { categories } from "@/contants/categories"

const Categories = () => {
  return (
  <section className="grid grid-cols-9 gap-6 my-8">
    {categories.map((item,index) => (
    <div className="flexCenter flex-col gap-3">
      <div className="flexCenter p-5 aspect-square bg-blue-100 rounded-full">
      {item.icon}
      </div>

      <span className="font-bold">{item.label}</span>
    </div> 
    ))}
  </section>
  )
}

export default Categories
