import React from 'react'

function AboutMe() {
  return (
    <section className='w-full h-[450px] bg-AboutUsBg'>
      <div className='w-full h-full flex'>

        {/* === LeftPart === */}
        <div className='w-[50%] h-full  grid place-content-center'>
            <img src="/Images/profile-pic.png" alt="Profile Img" className='w-72 h-72' />
        </div>
        {/* ================ */}

        {/* === RightPart === */}
        <div className='w-[50%] h-full text-white flex items-center'>
          <div className='space-y-2'>
            <h3 className='text-xs font-bold'>About Me</h3>
            <h1 className='text-3xl font-bold'>Hassan <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>Mahmood</span></h1>

            <p className='text-sm text-slate-500 w-[80%] pt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui facilis, nobis hic, molestias ratione eveniet consectetur pariatur recusandae nam aliquam adipisci quo, soluta nihil. Temporibus omnis quod molestiae necessitatibus. Modi.</p>


            {/* ===== Skills ====== */}
            <div className='pt-6 space-y-5'>
              <h3 className='text-xs font-bold'>My Skills</h3>
              <div className='w-[80%] flex  flex-wrap'>
                  {/* 01 */}
                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      JavaScript
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      REACT
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      MERN
                  </div>

                  
                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      Next JS
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      TypeScript
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      TailwindCSS
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      MongoDB
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      Python
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      OOP
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      MySQL
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      DSA
                  </div>

                  <div className='bg-HeroBg px-5 py-1.5 text-sm mb-3 mr-2'>
                      System Design
                  </div>
                  
              </div>
            </div>
            {/* =================== */}


          </div>
        </div>
        {/* ================ */}

      </div>
    </section>
  )
}

export default AboutMe
