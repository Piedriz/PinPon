import React from 'react'
import './styles.modules.css'
const SRC = 'https://scontent.fbaq1-1.fna.fbcdn.net/v/t42.1790-2/10000000_654609502612263_6489387452965771497_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjUxMSwicmxhIjoxMzg2LCJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=gdH0h93e4K4AX-vBTx-&_nc_rml=0&_nc_ht=scontent.fbaq1-1.fna&oh=00_AfCzHp3eCIIRyNcvudt5M8mVI_9KN5sTHdQUAfI5pte5Xg&oe=63D4D83E'

export const VideoPlayer = () => {
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
    <div>
      <video
        ref={video}
        className='video'
        src={SRC}
        controls={false}
      />
      <button className='player' onClick={handlePlay} />
    </div>

  )
}
