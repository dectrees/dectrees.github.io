import React from 'react'
import mainImg from '/assets/main.jpg'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main'>
            <img className=' w-full h-screen object-cover' src={mainImg} alt="" />
            <div className=' w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className=' max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi! I'm Alex Liu</h1>
                    <h2 className=' sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Full Stack Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'DevOps Engineer',
                                2000,
                                'System Integration Engineer',
                                2000,
                                'Business Analyst',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 w-full max-w-[200px]'>
                        <a href="https://github.com/dectrees"><FaGithub className='cursor-pointer' size={20} /></a>
                        <FaFacebook className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main