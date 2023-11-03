import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ title, img, introduction, techstack, link, open, onClose }) => {
    return (
        //backdrop
        <div onClick={onClose} className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-10 backdrop-blur-sm transition-colors
    ${open ? "visible bg-blue/20" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()} className='relative bg-white border-2 border-white rounded-xl shadow-lg p-6 transition-all sm:max-w-lg md:max-w-2xl
             ${open? "scale-100 opacity-100":" scale-125 opacity-0}'>
                <AiOutlineClose onClick={onClose} className=' absolute top-3 right-3 hover:text-gray-300' />
                <div className='flex flex-col max-w-sm md:max-w-lg lg:max-w-none md:flex-row'>
                    <img className='mx-2 md:mx-0 md:w-[40%] md:px-0 object-cover object-left rounded-md shadow-lg shadow-gray-500' src={img} alt="" />
                    <div className='px-2 flex flex-col'>
                        <div className="divide-y divide-gray-300/50">
                            <h2 className=' mb-2 text-xl font-bold text-[#001b5e]'>{title}</h2>
                            <div>
                                <h3 className='text-lg font-semibold text-[#001b5e]'>Introduction:</h3>
                                <p className='mb-2 text-base font-normal text-stone-500'>
                                    {introduction}
                                </p>
                                <h3 className='text-lg font-semibold text-[#001b5e]'>Tech Stack:</h3>
                                <p className='mb-2 text-base font-normal text-stone-500'>
                                    {techstack}
                                </p>
                            </div>
                            <div className='flex justify-between gap-4 mt-2 pt-2'>
                                <a href={link} className=' bg-red-800 hover:bg-red-400 text-white rounded-lg shadow-md shadow-gray-300 px-4 py-2 '>Visit Project</a>
                                <button onClick={onClose} className=' bg-[#001b5e] hover:bg-slate-500 text-white rounded-lg shadow-md shadow-gray-300 px-4 py-2 '>Close</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Modal