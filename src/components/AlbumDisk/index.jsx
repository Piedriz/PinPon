import React from 'react'
import './styles.css'

export const AlbumDisk = ({ albumImage }) => {
  return (

    <div className='album'>
      <img className='musicCover' src={albumImage} />
    </div>

  )
}
