import React from 'react'
import { SiTailwindcss, SiVite, SiReact } from 'react-icons/si'

const Footer = () => {
    return (
        <div className=' w-full mx-auto py-4 px-4 flex flex-col md:flex-row justify-center items-center bg-[#001b5e] text-white'>
            <h3>This site is powered by</h3>
            <div className='flex flex-col md:flex-row gap-6 p-4'>
                <div className='flex justify-center items-center'>
                    <SiReact />
                    <h4 className=' pl-1'>React</h4>
                </div>
                <div className='flex justify-center items-center'>
                    <SiVite />
                    <h4 className=' pl-1'>Vite</h4>
                </div>
                <div className='flex justify-center items-center'>
                    <SiTailwindcss />
                    <h4 className=' pl-1'>Tailwindcss</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer