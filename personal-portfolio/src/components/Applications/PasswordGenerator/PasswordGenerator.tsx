import React from 'react'
import {Slider, Button, Checkbox} from "@nextui-org/react";

function PasswordGenerator() {
  return (
    <div className='w-full flex justify-center items-center mt-12'>
        <div className='h-auto w-[580px] bg-gray-900 rounded-xl p-5 box-border space-y-6 shadow-sm shadow-gray-950'>

          {/* ===== Heading ==== */}
          <h1 className='text-center text-2xl font-bold mb-9'> 
            <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>Password </span> 
            Generator</h1>
          {/* ================== */}
          
          {/* ====== Password Field ======= */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px] h-[45px] bg-gray-950 rounded flex items-center px-4'>
              <h3 className='text-gray-600'>Password</h3>
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
              defaultValue={8}
              className="max-w-md"
            />
            </div>
          </div>
          {/* ======================== */}

          {/* ===== CheckBox Options ===== */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px]'>
              <Checkbox defaultSelected color="secondary" size='sm'>Numbers</Checkbox> <br />
              <Checkbox defaultSelected color="primary" size='sm'>UpperCase</Checkbox> <br />
              <Checkbox defaultSelected color="success" size='sm'>Special Chars</Checkbox>
            </div>

          </div>
          {/* ============================ */}

          {/* ===== Generate Button ==== */}
          <div className='w-full flex justify-center'>
            <div className='w-[430px]'>
              <Button color="primary" variant="flat" className='w-full text-blue-200 mb-2'>
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
