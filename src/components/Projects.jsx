import React, { useState } from 'react'
import ProjectItem from './ProjectItem'
import Modal from './Modal'
import projectdata from '../Data/ProjectData'


const Projects = () => {
    const [open, setOpen] = useState(false);
    const [imgId, setImgId] = useState(1);
    const openModel = (e) => {
        setImgId(e);
        setOpen(true);
    }
    return (
        <div id='projects' className=' max-w-[1040px] m-auto p-4 md:pl-20 py-16'>
            <h1 className=' text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className=' text-center py-8'>
                Projects down below are some works at hand currently, and more projects are open for a coffee chat if you are interested, feel free to drop a message via the contact form at the end of ths page
            </p>
            {
                projectdata.filter((item) => item.id === imgId).map((item) => (
                    <Modal key={item.id} title={item.title} brief={item.brief} img={item.img} introduction={item.introduction} techstack={item.techstack} link={item.link} open={open} onClose={() => setOpen(false)}></Modal>
                ))
            }

            <div className='grid sm:grid-cols-2 gap-12'>
                {
                    projectdata.map((item) => (
                        <ProjectItem key={item.id} img={item.img} title={item.title} brief={item.brief} onOpen={() => openModel(item.id)} />
                    ))
                }

            </div>
        </div>
    )
}

export default Projects