import React from 'react'
import './styles.css'
import { HomeIcon } from '../Icons/HomeIcon'
import { TrendingIcon } from '../Icons/TrendingIcon'
import { UploadVideoIcon } from '../Icons/UploadVideoIcon'
import { NotificationIcon } from '../Icons/NotificationIcon'
import { PerfilIcon } from '../Icons/PerfilIcon'
import { Link } from 'wouter'

// ...

export const NavBar = () => {
  return (

    <nav className='navBar'>

      <Link href='/' className='active'><div><HomeIcon /></div></Link>
      <div><TrendingIcon /></div>
      {/* <div><RiVideoUploadFill size={50} color='green' /></div> */}
      <Link href='/upload' className='active'><div><UploadVideoIcon /></div></Link>
      <div><NotificationIcon /></div>
      <div><PerfilIcon /></div>

    </nav>

  )
}
