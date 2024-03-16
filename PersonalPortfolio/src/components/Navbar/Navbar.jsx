import React, {useEffect, useState, useRef} from 'react'
import { Button, Container} from '@radix-ui/themes';
import {NavLink} from "react-router-dom"

function Navbar() {
  const [appToggle, setAppToggle] = useState(true)
  const [menuToggle, setmenuToggle] = useState(true)
  const [submenuToggle, setSubmenuToggle] = useState(true)

  const appdropdownRef = useRef(null)
  const menudropdownRef = useRef(null)
  const submenudropdownRef = useRef(null)

  useEffect(()=>{
    function handleOutsideClick(event){
      if (appdropdownRef.current && !appdropdownRef.current.contains(event.target)){
        setAppToggle(true)
      }
      if (menudropdownRef.current && !menudropdownRef.current.contains(event.target)){
        setmenuToggle(true)  
      }
      if (submenudropdownRef.current && !submenudropdownRef.current.contains(event.target)){
        setSubmenuToggle(true)}

      
    }
    
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };

  }, [])
  

  return (
    <div className='w-screen h-14 bg-gray-900 flex items-center'>
      <Container size={"4"} className='px-2'>
        <div className='h-full w-full flex items-center justify-between'>
        {/* LOGO */}
          <div className='flex space-x-2'>
            <h1 className='text-2xl font-bold text-blue-600'>Portfolio</h1>
          </div>

          {/* Links */}
          <div className='hidden md:block'>
            <ul className='flex items-center space-x-10'>
              <NavLink to={"/"}
              className={({isActive})=>
              (`${isActive?"text-blue-500":"text-gray-100"}`)}
               >Home</NavLink>
              
              <NavLink to={"/Projects"}
              className={({isActive})=>`${isActive?"text-blue-500":"text-gray-100"}`}>Projects</NavLink>

              <div className='text-center'>
                <NavLink to={"/Apps"}
                className={({isActive})=>`${isActive?"text-blue-500":"text-gray-100"}`}
                onClick={()=>setAppToggle(prev=>!prev)}>Apps</NavLink>

                {/* ====== SubMenu ===== */}
                <div ref={appdropdownRef} className={`absolute top-16 
                ${appToggle?"invisible":"visible"}`}>
                  <div className='relative right-16 w-[160px] h-40 bg-gray-800 opacity-70 text-center rounded'>
                        
                  <ul className='w-full h-full flex flex-col justify-center space-y-2'>

                    <NavLink to={'apps/passwordGenerate'}
                    className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>
                    Password Generator</NavLink>

                    <NavLink to={'apps/CurrConvert'}
                    className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>
                    Currency Convertor</NavLink>

                    <NavLink to={'apps/TodoApp'}
                    className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>
                    TodoApp</NavLink>

                  </ul>
                        
                  </div>

                </div>
              </div>

              <NavLink to={"/AboutUs"}
              className={({isActive})=>`${isActive?"text-blue-500":"text-gray-100"}`}>About Me</NavLink>

            </ul>
          </div>


          {/* ====== Buttons ===== */}
          <div className='hidden md:flex space-x-2'>
            <Button size={"2"} variant='soft' color='cyan'>Contact Me</Button>
            <Button size={"2"} variant='solid' color='indigo' className='bg-blue-900'>Linkedin</Button>
          </div>

          {/* ===== Hamburger Menu ===== */}
          <div className='block md:hidden relative top-20 text-center'>
            <div
            className='text-3xl text-blue-400 cursor-pointer'
            onClick={()=>setmenuToggle((prev)=>!prev)}>
              &#9776;
            </div>

            <div ref={menudropdownRef} className={`relative top-5 bg-gray-800 opacity-60 rounded w-[160px] h-40 border-gray-700 border-2
            ${menuToggle?"invisible":"visible" }`}
            >
              <div className='w-full h-full'>
                  <ul className='w-full h-full flex flex-col justify-center space-y-2'>
                    
                    <NavLink to={'/'}
                    className={({isActive})=>`${isActive?"text-blue-400":"text-white"}`}>Home</NavLink>
                  
                    <NavLink to={'Projects'}
                    className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>Projects</NavLink>

                    <NavLink to={'Apps'}
                    className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}
                    onClick={()=>{setSubmenuToggle(prev=>!prev)}}>Utility Apps</NavLink>

                    <NavLink to={'AboutUs'}
                    className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>About Me</NavLink>
                    
                  </ul>
              </div>


              {/* SUBMENU */}
              <div ref={submenudropdownRef} className={`relative bottom-24 right-40 w-full h-[80%] bg-gray-800  rounded
              ${submenuToggle?"hidden":"block"}`}>
                  
                  <ul className='w-full h-full flex flex-col justify-center space-y-2'>

                    <NavLink to={'apps/passwordGenerate'}
                      className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>Password Generator</NavLink>

                      <NavLink to={'apps/CurrConvert'}
                      className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>Currency Convertor</NavLink>

                      <NavLink to={'apps/TodoApp'}
                      className={({isActive})=>`${isActive?"text-blue-300":"text-white"}`}>TodoApp</NavLink>

                  </ul>
              </div>
            </div>
          </div>


        </div>
      </Container>
    </div>
  )
}

export default Navbar
