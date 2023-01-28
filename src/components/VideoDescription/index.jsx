import React from 'react'
import { AlbumDisk } from '../AlbumDisk'
import './styles.css'
import { SongTicker } from '../SongTicker'

export const VideoDescription = ({ author, description, albumImage, songTitle }) => {
  return (
    <footer className='description'>

      <div>
        <strong>
          <a className='author' href={`/user/${author}`}>
            @{author}
          </a>
        </strong>
        <p className='descrip'>{description}</p>
        <SongTicker songTitle={songTitle} />
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>

    </footer>
  )
}
