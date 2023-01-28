import React from 'react'
import { IoMusicalNotesSharp } from 'react-icons/io5'
import './styles.css'

export const SongTicker = ({ songTitle }) => {
  return (
    <div className='songTicker'>
      <div className='songTickerIcon'>
        <IoMusicalNotesSharp size={15} />
      </div>
      <marquee className='marquee'>
        {songTitle}
      </marquee>
    </div>
  )
}
