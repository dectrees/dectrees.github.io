import React, { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail, AiOutlineGlobal, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const [topnav, setTopnav] = useState(true);
    var down = false;
    const handleNav = () => {
        setNav(!nav);

    }

    const scrollHandler = () => {

        if (window.scrollY > 100) {

            if (down) {
                setTopnav(false);

            }
            else {
                setTopnav(true);

            }
        }
    }

    const scrollFunc = (e) => {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                if (down) {
                    down = false;

                }
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                if (!down) {
                    down = true;

                }
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail > 0) { //当滑轮向上滚动时
                if (down) {
                    down = false;

                }
            }
            if (e.detail < 0) { //当滑轮向下滚动时
                if (!down) {
                    down = true;

                }

            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        if (document.addEventListener) {//firefox
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //滚动滑轮触发scrollFunc方法  //ie 谷歌
        window.onmousewheel = document.onmousewheel = scrollFunc;
        return () => {
            window.removeEventListener("scroll", scrollHandler);
            document.removeEventListener('DOMMouseScroll', scrollFunc);
        }
    }, []);

    return (
        <div>
            <div className={topnav ? 'fixed top-1 max-w-[1040px] w-full bg-transparent md:bg-slate-500/50 z-[99] left-[50%] translate-x-[-50%] rounded-lg backdrop-blur-sm ease-in-out duration-300' : ' fixed top-[-60px] left-[50%] translate-x-[-50%] ease-in-out duration-300  bg-transparent md:bg-slate-500/50 z-[99] rounded-lg backdrop-blur-sm w-full max-w-[1040px]'}>
                <div className='flex justify-between items-center h-15 max-w-[1040px] mx-auto px-8 text-white'>
                    <h1 className=' w-full text-3xl pl-8 font-bold text-[#001b5e]'>ALEX</h1>
                    <ul className=' hidden md:flex gap-10 p-4 uppercas'>
                        <li>
                            <a href="#main" className='flex items-center hover:text-[#001b5e]'>
                                <AiOutlineHome size={20} />
                                <span className='pl-1'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#work" className='flex items-center hover:text-[#001b5e]'>
                                <AiOutlineGlobal size={20} />
                                <span className='pl-1'>Work</span>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className='flex items-center hover:text-[#001b5e]'>
                                <AiOutlineProject size={20} />
                                <span className='pl-1'>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href="#main" className='flex items-center hover:text-[#001b5e]'>
                                <BsPerson size={20} />
                                <span className='pl-1'>Resume</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className='flex items-center hover:text-[#001b5e]'>
                                <AiOutlineMail size={20} />
                                <span className='pl-1'>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {!nav ? <AiOutlineMenu onClick={handleNav} className=' fixed top-3.5 right-4 z-[99] md:hidden' /> : <AiOutlineClose onClick={handleNav} className=' fixed top-3.5 right-4 z-[99] md:hidden' />}

            <div className={nav ? 'md:hidden fixed w-[300px] top-0 right-0 bg-gray-300 flex flex-col gap-2 justify-center items-center z-20 shadow-lg shadow-gray-500 rounded-lg ease-in duration-300' : 'fixed right-[-100%] ease-in-out duration-300'}>
                <a onClick={handleNav} href="#main" className='w-[75%] p-2 mt-16 cursor-pointer hover:scale-110 ease-in duration-200 flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400' >
                    <AiOutlineHome size={20} />
                    <span className=' pl-4'>Home</span>
                </a>

                <a onClick={handleNav} href="#work" className='w-[75%] m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400' >
                    <AiOutlineGlobal size={20} />
                    <span className=' pl-4'>Work</span>
                </a>

                <a onClick={handleNav} href="#projects" className='w-[75%] m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400' >
                    <AiOutlineProject size={20} />
                    <span className=' pl-4'>Projects</span>
                </a>

                <a onClick={handleNav} href="#main" className='w-[75%] m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400' >
                    <BsPerson size={20} />
                    <span className=' pl-4'>Resume</span>
                </a>

                <a onClick={handleNav} href="#contact" className='w-[75%] mb-16 p-2 cursor-pointer hover:scale-110 ease-in duration-200 flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400' >
                    <AiOutlineMail size={20} />
                    <span className=' pl-4'>Contact</span>
                </a>
            </div>

            <div className=' hidden md:block fixed top-[25%] z-20'>
                <div className=' flex flex-col'>
                    <a href="#main" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#work" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineGlobal size={20} />
                    </a>
                    <a href="#projects" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#main" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20} />
                    </a>
                    <a href="#contact" className=' rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Sidenav