import React from 'react'

function TitleOfSideBar() {
  return (
    <div className='flex items-center gap-4'>
    <div>LOGO</div>
    <div className='flex flex-col'>
        <div>MERN stack from scratch</div>
        <div className='flex text-xs gap-4'>
            <div>
                20 Lessons
            </div>
            <div>
                9h 40m
            </div>
        </div>
    </div>
</div>
  )
}

export default TitleOfSideBar