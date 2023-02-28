import './App.css'
import { Upload } from './pages/Upload/Upload'
import { FeedVideos } from './components/FeedVideos'
import { Route } from 'wouter'
import { NavBar } from './components/NavBar'
function App () {
  return (

    <div className='App'>
      <main>
        <Route path='/' component={FeedVideos} />
        <Route path='/upload' component={Upload} />
      </main>
      <NavBar />

    </div>

  )
}

export default App
