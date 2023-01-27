import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaCommentDots, FaShare } from 'react-icons/fa'

import './styles.css'

export const VideoPlayerAside = ({ likes = 1122, comments = 142, shares = 1241, hearted = false }) => {
  const handleLike = () => {
    console.log('liked')
  }
  const handleComment = () => {
    console.log('comment')
  }
  const handleShare = () => {
    console.log('shared')
  }
  return (
    <aside className='actions'>

      <button onClick={handleLike} className='actionButton'>
        <BsFillHeartFill color={hearted ? 'red' : 'whites'} size={30} />
        <span title='likes'>{likes}</span>
      </button>

      <button onClick={handleComment} className='actionButton'>
        <FaCommentDots color='white' size={30} />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className='actionButton'>
        <FaShare color='white' size={30} />
        <span title='shares'>{shares}</span>
      </button>

    </aside>
  )
}
