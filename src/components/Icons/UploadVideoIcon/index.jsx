import React from 'react'
import './styles.css'
import { RiVideoUploadFill } from 'react-icons/ri'

export const UploadVideoIcon = () => {
  return (
    <>
      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#6dd5ed' offset='0%' />
          <stop stopColor='#2193b0' offset='100%' />
        </linearGradient>
      </svg>
      <RiVideoUploadFill size={40} style={{ fill: 'url(#blue-gradient)' }} />
    </>

  )
}
