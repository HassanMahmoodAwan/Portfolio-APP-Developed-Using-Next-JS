import Header from '@/components/Header_Footer/Header'
import PasswordGenerator from '@/components/Applications/PasswordGenerator/PasswordGenerator'
import React from 'react'


function page() {
  return (
    <section className='w-full h-screen text-white'>
        <Header/>
       <PasswordGenerator/>

      
    </section>
  )
}

export default page
