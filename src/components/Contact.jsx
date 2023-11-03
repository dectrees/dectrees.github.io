import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className=' py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Contact
            </h1>
            <form action="https://getform.io/f/7909dd9a-f917-4c4c-9b39-db859a788e76" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className=' uppercase text-sm py-2 font-semibold'>Name</label>
                        <input className=' rounded-lg p-2 border-2 flex border-gray-300' type="text" name='name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className=' uppercase text-sm py-2 font-semibold'>Phone</label>
                        <input className=' rounded-lg p-2 border-2 flex border-gray-300' type="text" name='phone' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className=' uppercase text-sm py-2 font-semibold'>Email</label>
                    <input type="text" name='email' className=' rounded-lg p-2 border-2 flex border-gray-300' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className=' uppercase text-sm py-2 font-semibold'>Subject</label>
                    <input type="s" name='subject' className=' rounded-lg p-2 border-2 flex border-gray-300' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className=' uppercase text-sm py-2 font-semibold'>Message</label>
                    <textarea className=' rounded-lg border-2 p-3 border-gray-300' name="mesage" rows="10"></textarea>
                </div>
                <div className='flex justify-center items-center'>
                    <button className=' rounded-lg text-gray-100 p-2 mt-4 w-[250px] bg-[#001b5e] hover:scale-105 duration-300'>
                        Send message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact