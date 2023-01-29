import React from 'react'
import { VideoPlayer } from '../VideoPlayer'
import './styles.css'
import { getVideos } from '../../services'

export const FeedVideos = () => {
  const [videos, setVideos] = React.useState([])
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    getVideos().then(([error, videos]) => {
      console.log(videos)
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
      {
        videos.map(video => (
          <div key={video.id} className='item'>
            <VideoPlayer {...video} />
          </div>
        )
        )
      }
    </section>
  )
}
