"use clients"
import React from 'react'

function ContactUs() {
  return (
    <section className='w-full h-[450px] flex justify-center items-center my-16'>
        <div className='h-full w-[600px] bg-AboutUsBg rounded-xl text-white px-20 py-8 border-gray-700 border-[1px]'>
            <div className='text-center text-xl font-bold text-gray-200'>Contact US</div>
            <p className='text-center text-gray-500 text-xs py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis eveniet id! Sequi quisquam quos ipsam porro vel, voluptates sapiente?</p>
            
            <div className='my-4 space-y-4 px-4'>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-sky-300 text-xs font-bold pb-1 px-1'>Email : </label>
                    <input type="text" name="email" id="email"
                    placeholder='Enter your Email Here'
                    className='text-gray-500 rounded px-4 py-2 bg-HeroBg text-sm placeholder-gray-500 focus:border-[2px] focus:border-gray-600 outline-none' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="subject" className='text-sky-300 text-xs font-bold pb-1 px-1'>Subject : </label>
                    <input type="text" name="subject" id="subject"
                    placeholder='Subject for Query'
                    className='text-gray-300 rounded px-4 py-2 bg-HeroBg text-sm placeholder-gray-500 focus:border-[2px] focus:border-gray-600 outline-none' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="Description" className='text-sky-300 text-xs font-bold pb-1 px-1'>Description : </label>
                    
                    <textarea name="Description" id="Description" rows={5}
                    placeholder='Your Message here' 
                    className='text-gray-300 rounded px-4 py-2 bg-HeroBg text-sm resize-none placeholder-gray-500 focus:border-[2px] focus:border-gray-600 outline-none' />
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default ContactUs