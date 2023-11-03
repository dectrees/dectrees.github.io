import React from 'react'
import workdata from '../Data/WorkData'
import WorkItem from './WorkItem'

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className=' text-4xl py-8 font-bold text-center text-[#001b5e]'>Work</h1>
            {
                workdata.map((item, index) => (
                    <WorkItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
                ))
            }
        </div>
    )
}

export default Work