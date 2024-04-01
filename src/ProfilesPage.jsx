import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const profiles = [1,2,3,4,5]

const ProfilesPage = () => {

  return (
    <div className='profiles-container'>
    <div className='profiles'>
      {/* {profiles.map((profile) => {<Link key={profile}>Profile {profile} to='/' </Link>})} */}

      {profiles.map((profile) => (
            <Link key={profile} to={`/profiles/${profile}`}>
             Profile {profile}
            </Link>
        ))}
    {/* Outlet tells where to place the child component */}
    
    </div>
    <Outlet />
    </div>
  )
}

export default ProfilesPage
