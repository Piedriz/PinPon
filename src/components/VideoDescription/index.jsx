import React from 'react'
import { AlbumDisk } from '../AlbumDisk'
import './styles.css'

export const VideoDescription = ({ author, description, albumImage }) => {
  return (
    <footer className='description'>

      <div>
        <strong>{author}</strong>
        <p>{description}</p>
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>

    </footer>
  )
}
