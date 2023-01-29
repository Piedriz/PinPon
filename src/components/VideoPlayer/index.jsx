import React, { useEffect } from 'react'
import './styles.css'
import { VideoPlayerAside } from '../VideoPlayerActions'
import { VideoDescription } from '../VideoDescription'
import { useInView } from 'react-intersection-observer'

export const VideoPlayer = ({ src, user, description, albumImage, song }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5
  })

  const [playing, setPlaying] = React.useState(true)
  const video = React.useRef()

  const handlePlay = () => {
    if (!playing) {
      video.current.play()
    } else {
      video.current.pause()
    }
    setPlaying(!playing)
  }
  useEffect(() => {
    if (inView && video.current) {
      video.current.play()
      setPlaying(true)
    } else if (!inView && video.current) {
      video.current.pause()
    }
  }, [inView])

  return (
    <div ref={ref} className='container'>
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
        user={user}
        song={song}
      />
    </div>

  )
}
