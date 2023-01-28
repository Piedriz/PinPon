import React from 'react'
import './styles.css'
import { VideoPlayerAside } from '../VideoPlayerActions'
import { VideoDescription } from '../VideoDescription'

export const VideoPlayer = ({ src, author, description, albumImage, songTitle }) => {
  const [playing, setPlaying] = React.useState(false)
  const video = React.useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className='container'>
      <video
        onClick={handlePlay}
        ref={video}
        loop
        className='video'
        src={src}
        controls={false}
      />
      {!playing && <button className='player' onClick={handlePlay} />}
      <VideoPlayerAside />
      <VideoDescription
        albumImage={albumImage}
        description={description}
        author={author}
        songTitle={songTitle}
      />

    </div>

  )
}
