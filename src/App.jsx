import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/hero'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import LiveShotVideo from './pages/LiveShotVideo'
import ExplainerVideos from './pages/ExplainerVideos'
import ThreeDModelling from './pages/ThreeDModelling'
import InteractiveContent from './pages/InteractiveContent'
import CharacterAnimation from './pages/CharacterAnimation'
import VisualEffects from './pages/VisualEffects'
import LMSContent from './pages/LMSContent'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="sm:pt-20 pt-16">
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='services' >
            <Route path="live-shot-video" element={<LiveShotVideo />} />
            <Route path="/services/explainer-videos" element={<ExplainerVideos />} />
            <Route path="/services/3d-modelling" element={<ThreeDModelling />} />
            <Route path="/services/interactive-content" element={<InteractiveContent />} />
            <Route path="/services/character-animation" element={<CharacterAnimation />} />
            <Route path="/services/lms-content" element={<LMSContent />} />
            <Route path="/services/visual-effects" element={<VisualEffects />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App