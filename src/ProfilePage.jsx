import React from 'react'
import {useParams} from 'react-router-dom'

const ProfilePage = () => {
    const { profileId } = useParams();
  return (
    <div>
      <h2>Profile {profileId}</h2>
    </div>
  )
}

export default ProfilePage
