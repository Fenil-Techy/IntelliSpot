import { useState, useEffect } from "react"
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md"
import { useParams } from "react-router-dom"
import tools from "../data/ToolData.json"

export const ToolDetails = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const maxLength = 160

    const {id}=useParams()
    const tool=tools.find(t=>t.id=== parseInt(id))

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setSelectedImageIndex(null)
            }
        }
        if (selectedImageIndex !== null) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [selectedImageIndex])

    const openImageViewer = (index) => {
        setSelectedImageIndex(index)
    }

    const closeImageViewer = () => {
        setSelectedImageIndex(null)
    }

    const nextImage = (images, e) => {
        e.stopPropagation()
        setSelectedImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (images, e) => {
        e.stopPropagation()
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    

    return (
        <div className="mx-auto p-4">

                    <div>

                        <div className="grid grid-cols-[1fr_2fr] justify-center items-center">
                            <div>
                                <img src={tool.logo} alt="gemini" className="w-22" />
                            </div>
                            <div className="flex flex-col gap-3 justify-center">
                                <h1 className="text-3xl font-semibold">{tool.name}</h1>
                                <p className="text-base">{tool.provider}</p>
                            </div>



                        </div>
                        <div className="py-5 grid grid-cols-2 gap-2 w-full">
                            <button className="border-gray-400 text-indigo-500 border rounded-2xl ">Add to favourite</button>
                            <a href={tool.website}><button className="w-full text-center bg-indigo-500 text-white py-2 rounded-full">Visit</button></a>
                        </div>

                        <div className="grid grid-cols-1 py-5">
                            <h1 className="text-xl font-semibold pb-3">About Tool</h1>
                            <div >
                                <p className="text-gray-600 leading-7">
                                    {isExpanded || tool.longDescription.length <= maxLength
                                        ? tool.longDescription
                                        : `${tool.longDescription.substring(0, maxLength)}...`}
                                    {tool.longDescription.length > maxLength && (
                                        <button
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className="text-indigo-500 hover:text-indigo-800 font-medium transition-colors"
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </p>
                            </div>

                            <div className="overflow-x-auto py-5 scroll-smooth no-scrollbar">
                                <div className="flex gap-2 whitespace-nowrap">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${tool.videos.split("v=")[1]}`}
                                        className="h-48 w-80 shrink-0 rounded-lg"
                                        title="Tool video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />

                                    {tool.images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${tool.name} ${index + 1}`}
                                            onClick={() => openImageViewer(index)}
                                            className="h-48 w-auto shrink-0 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded-lg"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Image Viewer Modal */}
                            {selectedImageIndex !== null && tool.images && (
                                <div
                                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                                    onClick={closeImageViewer}
                                >
                                    <button
                                        onClick={closeImageViewer}
                                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                                        aria-label="Close"
                                    >
                                        <MdClose className="w-8 h-8" />
                                    </button>

                                    {tool.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => prevImage(tool.images, e)}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                                                aria-label="Previous image"
                                            >
                                                <MdChevronLeft className="w-8 h-8" />
                                            </button>
                                            <button
                                                onClick={(e) => nextImage(tool.images, e)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
                                                aria-label="Next image"
                                            >
                                                <MdChevronRight className="w-8 h-8" />
                                            </button>
                                        </>
                                    )}

                                    <div className="max-w-7xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                        <img
                                            src={tool.images[selectedImageIndex]}
                                            alt={`${tool.name} ${selectedImageIndex + 1}`}
                                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                        />
                                    </div>

                                    {tool.images.length > 1 && (
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {tool.images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setSelectedImageIndex(i)
                                                    }}
                                                    className={`h-2 rounded-full transition-all ${selectedImageIndex === i
                                                        ? "bg-white w-8"
                                                        : "bg-white/50 w-2 hover:bg-white/70"
                                                        }`}
                                                    aria-label={`Go to image ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="pt-5">
                                <h1 className="text-lg font-semibold">Features</h1>
                                <ul className="flex flex-col gap-2 pt-2 list-disc list-inside">
                                    {
                                        tool.features.map((feature, index) => (

                                            <li key={index} className="text-gray-600 ">{feature}</li>

                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="pt-5">
                                <h1 className="text-xl font-semibold pb-3">Tags</h1>
                                <ul className="grid grid-cols-3 gap-2 ">
                                    {tool.tags.map((tag, index) => (
                                        <li key={index} className="rounded-full text-xs border-blue-500 bg-blue-50 text-blue-700 place-items-center text-center py-1">{tag}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

        </div>
    )
}