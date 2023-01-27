import React from 'react'
import './styles.css'
import clsx from 'clsx'
import { VideoPlayerAside } from '../VideoPlayerActions'

export const VideoPlayer = ({ src }) => {
  console.log(src)
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
  const playerClassName = clsx({ hidden: playing }, { player: !playing })

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
      <button className={playerClassName} onClick={handlePlay} />
      <VideoPlayerAside />
    </div>

  )
}
