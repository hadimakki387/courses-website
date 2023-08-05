import React from 'react'
import CheckSvg from '../In/SVGs/CheckSvg'

function NameInput() {
  return (
    <div className='mb-4'>
      <label
        className=" text-xs font-medium text-grey-600 block text-2xs text-grey-800 dark:text-grey-600"
        htmlFor="password"
      >
        Your Name
      </label>
      <div className="relative flex items-center border-b border-panel-700">
        <input
          type="text"
          name="UserPassword"
          className="input is-minimal text-sm text-white"
          autoComplete="current-password"
          placeholder="enter name"
         
        />
        
        <div className="absolute right-0 mx-auto -mt-px flex h-4 w-4 items-center justify-center rounded-full p-1 bg-gray-600">
          <CheckSvg />
        </div>
      </div>
    </div>
  )
}

export default NameInput