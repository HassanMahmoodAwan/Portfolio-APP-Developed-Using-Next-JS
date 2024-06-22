'use client'

import React, {useState, useEffect} from 'react'
import {Slider, Button, Checkbox} from "@nextui-org/react";
 
function PasswordGenerator() {
  const [password, setPassword] = useState<string>("")
  const [Length, setLength] = useState<number | any>(8)
  const [isnumber, setIsNumber] = useState<boolean>(false)
  const [isUppercase, setIsUppercase] = useState<boolean>(false)
  const [isSpecialChar, setIsSpecialChar] = useState<boolean>(false)

  const [showPassword, setShowPassword] = useState("password")


  ;(()=>{
    let passwordStr = "abcdefghijklmnopqrstvwxyz"
    const pass_Uppercase = "ABCDEFGHIJKLMNOPQRSTVWXYZ"
    const pass_number = "0123456789"
    const pass_specialChar = "!@#$%^&*():'}{[]?.,"
    let index = 0
    let pass = ''
    

    useEffect(()=>{
      if (isnumber){
        passwordStr += pass_number
      }
      if (isUppercase){
        passwordStr += pass_Uppercase
      }
      if (isSpecialChar){
        passwordStr += pass_specialChar
      }

      while (index < Length){
        pass += passwordStr[Math.floor(Math.random()*(passwordStr.length-1))]
        index++
      }
      setPassword(pass)
      return

    }, [isnumber, isUppercase, isSpecialChar, Length, showPassword])


  })();


  return (
    <div className='w-full flex justify-center items-center mt-12'>
        <div className='h-auto w-[580px] bg-gray-900 rounded-xl p-5 box-border space-y-6 shadow-s=>m shadow-gray-950'>

          {/* ===== Heading ==== */}
          <h1 className='text-center text-2xl font-bold mb-9'> 
            <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>Password </span> 
            Generator</h1>
          {/* ================== */}
          
          {/* ====== Password Field ======= */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px] h-[45px] bg-gray-950 rounded flex items-center px-4'>
              
              <h3 className='text-gray-600'>{showPassword}</h3>
              
             
              {/* <FontAwesomeIcon icon={faCopy} /> */}
            </div>
          </div>
          {/* ============================= */}

          {/* ===== Slider Length ==== */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px]'>
            <Slider 
              label="Length of Password" 
              step={1} 
              maxValue={16} 
              minValue={8} 
              value={Length}
              onChange={(value)=>setLength(value)}
              className="max-w-md"
            />
            </div>
          </div>
          {/* ======================== */}

          {/* ===== CheckBox Options ===== */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px]'>
              <Checkbox  color="secondary" size='sm'
              isSelected = {isnumber}
              onChange={()=>setIsNumber((prev)=>!prev)}
              >Numbers</Checkbox> <br />

              <Checkbox defaultSelected color="primary" size='sm'
              isSelected={isUppercase}
              onChange={()=>setIsUppercase((prev)=>!prev)}
              >UpperCase</Checkbox> <br />

              <Checkbox defaultSelected color="success" size='sm'
              isSelected={isSpecialChar}
              onChange={()=>setIsSpecialChar((prev)=>!prev)}
              >Special Chars</Checkbox>
            </div>

          </div>
          {/* ============================ */}

          {/* ===== Generate Button ==== */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px]'>
              <Button color="primary" variant="flat" className='w-full text-blue-200 mb-2'
              onClick={()=>setShowPassword(password)}
              >
                Generate Password
              </Button>
            </div>
          </div>
          {/* ======================== */}


        </div>
    </div>
  )
}

export default PasswordGenerator
