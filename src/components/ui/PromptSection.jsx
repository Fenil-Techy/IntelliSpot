import { VscCopy } from "react-icons/vsc";
import { Heart } from 'lucide-react';
import { useState } from "react";

export const PromptSection = () => {

    const promptData = [
        {
            id: 1,
            name: "Fenil",
            prompt: "Write a short story about a time traveler who accidentally changes a small event in history, causing unexpected consequences.",
            likes: 0,
            liked: false
        },
        {
            id: 2,
            name: "Vishva",
            prompt: "Write a Python program that reads a CSV file of student grades, calculates the average for each student, and outputs the results to a new file.",
            likes: 0,
            liked: false
        },
        {
            id: 3,
            name: "Harsh",
            prompt: "Explain quantum computing in simple terms for a high school student, using real-world analogies.",
            likes: 0,
            liked: false

        },
        {
            id: 4,
            name: "Govind",
            prompt: "Suggest three ways a small bakery can increase online sales without spending more than $500 per month.",
            likes: 0,
            liked: false

        },
        {
            id: 5,
            name: "Vansh",
            prompt: "Generate 5 catchy social media captions for a new eco-friendly water bottle brand targeting young professionals.",
            likes: 0,
            liked: false

        },
        {
            id: 6,
            name: "Hayan",
            prompt: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quis similique ab. Sunt odit perspiciatis quaerat, eum quis placeat, neque, veniam nam nesciunt delectus laboriosam pariatur provident. Sapiente repellat vero assumenda sint ex, saepe esse! Nesciunt eligendi veritatis numquam ipsum quos. Praesentium quia sunt tempore fuga, quam officia! Dignissimos adipisci molestiae repellendus nihil esse vel a expedita vitae tempore dolore modi est eligendi rem dolores, eos culpa quam dolorum magni obcaecati itaque consequuntur praesentium? Vel culpa omnis deserunt ab eos ratione dicta temporibus. Accusamus, nisi atque labore ad necessitatibus sed a ex consequuntur officiis temporibus aspernatur, aperiam vero aliquid harum.",
            likes: 0,
            liked: false,
            expanded: false

        },
    ]

    const [prompts, setPrompts] = useState(promptData)

    const handleClick = (id) => {
        setPrompts(prevprompts => prevprompts.map(prompt => prompt.id == id ?
            { ...prompt, liked: !prompt.liked, likes: prompt.liked ? prompt.likes - 1 : prompt.likes + 1 }
            : prompt
        ))
    }

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            alert("prompt copied")
        } catch (error) {
            console.error(error)
        }
    }
    const toggleExpand = (id) => {
        setPrompts(prev =>
            prev.map(p =>
                p.id === id
                    ? { ...p, expanded: !p.expanded }
                    : p
            )
        );
    };


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold mb-8">Prompts</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center  gap-8">
                {
                    prompts.slice(0,3).map((prompt) => (
                        <div key={prompt.id} className="shadow-[2px_10px_10px_rgba(0,0,0,0.1)] h-55 md:h-60 overflow-y-auto w-full rounded-2xl flex flex-col  ">
                            <div className="flex w-full justify-between border-b px-4 py-2 mt-2 ">
                        
                                <p className="font-semibold">Posted by {prompt.name}</p>
                                <VscCopy onClick={() => handleCopy(prompt.prompt)} className="h-5 w-5 text-gray-400 " />
                            </div >
                            <div className="flex flex-col px-3 ">
                            <p className={`text-left text-sm mx-2 my-4 ${prompt.expanded ? "" : "line-clamp-3"
                                }`}>{prompt.prompt}</p>
                            {prompt.prompt.length > 150 && (
                                <button className="text-right -mt-5 "onClick={() => toggleExpand(prompt.id)}>
                                    {prompt.expanded ? "Show less" : "Show more"}
                                </button>
                            )}
                            </div>

                            <div className="flex justify-between items-center mx-4 mt-6 ">
                                <p className="flex gap-2"><Heart strokeWidth={1.5} onClick={() => handleClick(prompt.id)} className={prompt.liked ? "fill-red-500 stroke-red-500 " : ""} /> {prompt.likes}</p>
                                <button className=" border px-5 py-1 text-white rounded-lg  bg-indigo-400 transition-all hover:-translate-y-1 duration-100 hover:shadow-md text-sm hover:bg-indigo-500">Try it with tools</button>
                            </div>
                        </div>
                    ))
                }


            </div>
            <button className=" mt-6 flex m-auto text-sm px-3 py-2  md:px-5 md:py-4 text-white rounded-lg md:text-md bg-indigo-500 transition-all hover:-translate-y-1 duration-100 hover:shadow-md hover:bg-indigo-600">Explore All Prompts</button>
        </div>
    )
}