import { string } from "zod"
import { categories } from "@/utils/categories"
import Link from "next/link"
const CategoryList = ({ search, category }: { search?: string, category?: string }) => {
    const searchTem = search
        ? `&search=${search}`
        : ''
    return (
        <div>
             <div className="flex justify-center items-center my-4 font-bold gap-x-4">
            {
               
                  categories.map((item) => {
                    const isActive = item.label === category
                    return (
                    <Link key={item.label}
                        href={`/?category=${item.label}${searchTem}`}
                    >
                        <article className={`flex p-3  flex-col justify-center items-center ${isActive ? "text-primary" : ""} hover:text-primary hover:scale-105 hover:duration-200`}>
                            <item.icon />
                            <p> {item.label}</p>
                        </article>
                    </Link>
                    )
                })
            

            }
                </div>
        </div>
    )
}
export default CategoryList