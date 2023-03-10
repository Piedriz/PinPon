import React, { useEffect } from 'react'
import './styles.css'
import { VideoPlayerAside } from '../VideoPlayerActions'
import { VideoDescription } from '../VideoDescription'
import { useInView } from 'react-intersection-observer'
import { BsFillPlayFill } from 'react-icons/bs'

export const VideoPlayer = ({ muted, src, user, description, albumImage, song, likes, comments, shares }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.9
  })

  const [playing, setPlaying] = React.useState(false)

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
        muted={muted}
        className='video'
        src={src}
        controls={false}
      />
      {!playing && <BsFillPlayFill size={90} onClick={handlePlay} className='player' />}
      <VideoPlayerAside user={user} likes={likes} comments={comments} shares={shares} />
      <VideoDescription
        albumImage={albumImage}
        description={description}
        user={user}
        song={song}
      />

    </div>

  )
}
