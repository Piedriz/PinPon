import React from 'react'
import { AlbumDisk } from '../AlbumDisk'
import './styles.css'

export const VideoDescription = ({ author, description, albumImage }) => {
  return (
    <footer className='description'>

      <div>
        <strong>
          <a className='author' href={`/user/${author}`}>
            @{author}
          </a>
        </strong>
        <p className='descrip'>{description}</p>
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>

    </footer>
  )
}
