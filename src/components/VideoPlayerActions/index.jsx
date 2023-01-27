import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaCommentDots, FaShare } from 'react-icons/fa'

import './styles.css'

export const VideoPlayerAside = () => {
  return (
    <aside className='actions'>
      <div className='action'>
        <BsFillHeartFill color='white' size={25} />
      </div>
      <div className='action'>
        <FaCommentDots color='white' size={25} />
      </div>
      <div className='action'>
        <FaShare color='white' size={25} />
      </div>
    </aside>
  )
}
