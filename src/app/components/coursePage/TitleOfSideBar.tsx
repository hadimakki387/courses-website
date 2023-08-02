import { FakeVideoContext } from '@/app/context/FakeVideosContext';
import React, { useContext } from 'react';

function TitleOfSideBar() {
  const [videos] = useContext(FakeVideoContext);

  let totalMinutes = 0;
  let totalSeconds = 0;

  videos.forEach((vid:any) => {
    totalMinutes += vid.duration.mins;
    totalSeconds += vid.duration.secs;
  });

  // Calculate total hours, minutes, and remaining seconds
  const totalHours = Math.floor(totalMinutes / 60);
  totalMinutes %= 60;

  // Adjust minutes and seconds if seconds exceed 60
  totalMinutes += Math.floor(totalSeconds / 60);
  totalSeconds %= 60;

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
            {totalHours > 0 && `${totalHours}h `}
            {totalMinutes}m {totalSeconds}s
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleOfSideBar;
