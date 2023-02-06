import React from 'react'
import { VideoPlayer } from '../VideoPlayer'
import './styles.css'
import { getVideos } from '../../services'
import { BsFillVolumeMuteFill } from 'react-icons/bs'

export const FeedVideos = () => {
  const [videos, setVideos] = React.useState([])
  const [error, setError] = React.useState(null)
  const [muted, setMuted] = React.useState(true)
  React.useEffect(() => {
    getVideos().then(([error, videos]) => {
      if (!error) {
        setVideos(videos)
      } else {
        setError(error)
      }
    })
  }, [])
  if (error) {
    return (
      <span>{error}</span>
    )
  }
  return (
    <section className='feed'>
      {muted &&
        <BsFillVolumeMuteFill
          className='mutedButton'
          onClick={() => { setMuted(!muted) }}
          size={50}
          color='rgba(255, 255, 255, 0.849)'
        />}

      {
        videos.map(video => (
          <div key={video.id} className='item'>
            <VideoPlayer muted={muted} {...video} />
          </div>
        )
        )
      }
    </section>
  )
}
