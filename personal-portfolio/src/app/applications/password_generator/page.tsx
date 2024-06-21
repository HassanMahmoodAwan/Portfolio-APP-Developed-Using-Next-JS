import Header from '@/components/Header_Footer/Header'
import PasswordGenerator from '@/app_components/PasswordGenerator/PasswordGenerator'
import React from 'react'


function page() {
  return (
    <section className='w-full h-screen text-white'>
        <Header/>
        <div className='w-full h-auto  mt-40  flex justify-center items-center'>

            <div className='w-[600px] h-auto '>
                <PasswordGenerator />
            </div>
        </div>

      
    </section>
  )
}

export default page
