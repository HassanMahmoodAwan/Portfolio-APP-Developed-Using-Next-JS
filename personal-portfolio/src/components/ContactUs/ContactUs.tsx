"use clients"
import React from 'react'

function ContactUs() {
  return (
    <section className='w-full h-[360px] flex justify-center items-center my-16'>
        <div className='h-full w-[600px] bg-AboutUsBg rounded-xl text-white px-20 py-10'>
            <div className='text-center text-xl font-bold text-gray-200'>Contact US</div>
            <p className='text-center text-gray-500 text-xs py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis eveniet id! Sequi quisquam quos ipsam porro vel, voluptates sapiente?</p>
            
            <div className='my-4 space-y-3'>
                <div className='flex flex-col'>
                    <label htmlFor="fullName" className='text-gray-300 text-xs font-bold pb-1 px-1'>Full-Name : </label>
                    <input type="text" name="fullName" id="fullName"
                    placeholder='Enter your Name'
                    className='text-gray-500 rounded px-4 py-2 bg-slate-800 text-sm' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="fullName" className='text-gray-300 text-xs font-bold pb-1 px-1'>Full-Name : </label>
                    <input type="text" name="fullName" id="fullName"
                    placeholder='Enter your Name'
                    className='text-gray-500 rounded px-4 py-2 bg-slate-900 text-sm' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="fullName" className='text-gray-300 text-xs font-bold pb-1 px-1'>Full-Name : </label>
                    <input type="text" name="fullName" id="fullName"
                    placeholder='Enter your Name'
                    className='text-gray-500 rounded px-4 py-2 bg-slate-900 text-sm' />
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default ContactUs