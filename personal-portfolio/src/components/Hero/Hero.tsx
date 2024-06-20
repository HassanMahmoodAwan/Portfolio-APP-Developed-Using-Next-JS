import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const steps = [
    'Web Development', 500,
    'UI-UX Designer', 500,
    'Programmer', 500,
  ];
  return (
    <div className='w-full h-[450px] text-white grid place-content-center'>
        <div className='text-center space-y-3'>
            <h1 className='text-5xl font-bold'>Full Stack
            <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text' > Software Engineer</span></h1>

            <h3 className='text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text'>
            <TypeAnimation
              sequence={[
                'Web Development', 1000, 
                'Web Designs',  1500, 
                'Backend Development', 1500,
                'System Design', 1500,                  
                'Machine Learning / AI', 1500, 
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{  display: 'inline-block' }}
            />
            </h3>
              
              
            <div className='w-[800px] pt-2'>
                <p className='text-base text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita excepturi quo ullam esse quos illo, quam eius alias nulla deleniti, at laboriosam voluptate, nam!</p>
            </div>
            <div className='pt-8'>
                <button className='px-5 py-2 rounded bg-sky-500 text-black font-bold space-x-2'>
                    <img src="/icons/download.svg" alt="downloadIcon" className='w-8 h-7 text-black font-extrabold inline' />
                    {/* <DownloadIcon className="w-5 h-5 mr-2 text-black" /> */}
                    <span className='pt-2'>Hassan's Resume</span></button>
            </div>
            
        
            

        </div>
    </div>
  )
}

export default Hero
