import React from 'react'
import './styles.css'
import { HomeIcon } from '../Icons/HomeIcon'
import { TrendingIcon } from '../Icons/TrendingIcon'
// import { UploadVideoIcon } from '../Icons/UploadVideoIcon'
import { NotificationIcon } from '../Icons/NotificationIcon'
import { PerfilIcon } from '../Icons/PerfilIcon'
import { RiVideoUploadFill } from 'react-icons/ri'

// ...

export const NavBar = () => {
  return (

    <nav className='navBar'>

      <div><HomeIcon /></div>
      <div><TrendingIcon /></div>
      <div><RiVideoUploadFill size={50} color='green' /></div>
      {/* <div ><UploadVideoIcon /></div> */}
      <div><NotificationIcon /></div>
      <div><PerfilIcon /></div>

    </nav>

  )
}
