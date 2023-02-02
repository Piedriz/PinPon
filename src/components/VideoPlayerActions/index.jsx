import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaCommentDots, FaShare } from 'react-icons/fa'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FollowButton } from '../FollowButton'

import './styles.css'

export const VideoPlayerAside = ({ user, likes, comments, shares, hearted }) => {
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
      <div className='userImageContainer'>
        <img className='userImage' alt={user.username} src={user.userImage} />
        <div className='userAdd'>
          {/* <AiFillPlusCircle className='icon' color='rgb(254, 44, 85)' size={24} /> */}
          <FollowButton />
        </div>
      </div>
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
