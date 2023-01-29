import React from 'react'
import { AlbumDisk } from '../AlbumDisk'
import './styles.css'
import { SongTicker } from '../SongTicker'

export const VideoDescription = ({ user, description, albumImage, song }) => {
  return (
    <footer className='description'>

      <div>
        <strong>
          <a className='author' href={`/user/${user.username}`}>
            @{user.username}
          </a>
        </strong>
        <p className='descrip'>{description}</p>
        <SongTicker song={song} />
      </div>

      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>

    </footer>
  )
}
