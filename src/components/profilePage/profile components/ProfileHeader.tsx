import React , {useContext}from 'react'
import ProfileAndName from './ProfileAndName'
import ProfileCard from './ProfileCard'
import { ProfileContext } from '@/context/ProfileContext'

function ProfileHeader() {
    const [ShowEditInfo] = useContext(ProfileContext)
  return (
    <div className="flex max-[920px]:flex-col max-[920px]:justify-center max-[920px]:gap-4 justify-between items-center">
          <ProfileAndName name="studentsxpertbot" time={6} img="user.png" />

          <div className="flex gap-4">
            <ProfileCard
              text="Lessons completed"
              number={100}
              img="xp-lesson.svg"
            />
            <ProfileCard
              text="Total experience"
              number={1453}
              img="xp-level.svg"
            />
          </div>
        </div>
  )
}

export default ProfileHeader