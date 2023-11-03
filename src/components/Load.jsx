import React from 'react'
import imgLoading from '../assets/pre.svg'

const Load = () => {
    return (
        <div className=' fixed top-0 left-0 z-[100] bg-[#0c0513] w-full h-screen flex justify-center items-center'>
            <img className='w-[50px] h-[50px]' src={imgLoading} alt="/" />
        </div>
    )
}

export default Load