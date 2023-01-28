import React from 'react'
import { IoMusicalNotesSharp } from 'react-icons/io5'
import './styles.css'
import Marquee from 'react-fast-marquee'

export const SongTicker = ({ songTitle }) => {
  return (
    <div className='songTicker'>
      <div className='songTickerIcon'>
        <IoMusicalNotesSharp size={15} />
      </div>
      <Marquee speed={100} gradient={false}>
        {songTitle}
      </Marquee>
    </div>
  )
}
