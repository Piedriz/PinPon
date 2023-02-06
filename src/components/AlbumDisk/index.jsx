import React from 'react'
import './styles.css'
import { FaCompactDisc } from 'react-icons/fa'

export const AlbumDisk = ({ albumImage }) => {
  return (

    <div className='album'>
      <FaCompactDisc color='rgb(49 46 46 / 86%)' size={42} />
      <img className='musicCover' src={albumImage} />
    </div>

  )
}
