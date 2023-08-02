import { FakeVideoContext } from '@/app/context/FakeVideosContext';
import React, { useContext } from 'react'

function TitleOfSideBar() {
    const [videos,PlayingVideo, sections, chosenVideo] = useContext(FakeVideoContext);
  return (
    <div className='flex items-center gap-4'>
    <div>LOGO</div>
    <div className='flex flex-col'>
        <div>MERN stack from scratch</div>
        <div className='flex text-xs gap-4'>
            <div>
                {videos.length} Lessons
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