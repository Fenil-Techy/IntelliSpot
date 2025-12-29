import { Link } from "react-router-dom"

export const Categories = () => {

    const CategoryList=["Chatbot","Search","Image Generation","Video","Voice","Design","Writing","Productivity"]
    return (
        <div>
            <h1 className="w-350 font-semibold text-3xl p-2">Categories</h1>
            <div className="grid grid-cols-4 gap-8 place-items-center mt-8 ">
                {
                    CategoryList.map((category)=>(

                        <Link key={category} to={`/category/${category}`}>
                    <div className="flex justify-center items-center rounded-2xl h-60 w-60 shadow-[0_0px_20px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-4 hover:border-blue-300 hover:shadow-blue-300">
                        <p className="text-2xl">{category}</p>

                    </div>
                </Link>
                    ))
                }


            </div>
        </div>
    )
}