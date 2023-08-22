import React , {useContext}from 'react'
import ProfileAndName from './ProfileAndName'
import ProfileCard from './ProfileCard'
import { ProfileContext } from '@/context/ProfileContext'

function ProfileHeader() {
    const [ShowEditInfo, editProfile, planSettings, data,user] = useContext(ProfileContext)
  
  return (
    <>
    <div className="flex max-[920px]:flex-col max-[920px]:justify-center max-[920px]:gap-4 justify-between items-center">
          <ProfileAndName name="studentsxpertbot" time={6} img="user.png" />
         
          <div className="flex gap-4">
            <ProfileCard
              text="Lessons completed"
              number={user.watchedVideos.length}
              img="xp-lesson.svg"
            />
            <ProfileCard
              text="Total experience"
              number={user.watchedVideos.length*100}
              img="xp-level.svg"
            />
          </div>
        </div>
        <div className='w-1/2 m-auto my-4 max-[920px]:w-full'>
          <button
          onClick={ShowEditInfo}
          className="text-center w-full py-2 m-auto bg-[#24395a] rounded-md hover:bg-[#324b74] hover:text-sky-500 transition-all duration-300"
        >
          Upgrade Your Plan
        </button>
        </div>
         
    </>
    
  )
}

export default ProfileHeader