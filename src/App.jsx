import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import LiveShotVideo from './pages/LiveShotVideo'
import ExplainerVideos from './pages/ExplainerVideos'
import ThreeDModelling from './pages/ThreeDModelling'
import InteractiveContent from './pages/InteractiveContent'
import CharacterAnimation from './pages/CharacterAnimation'
import VisualEffects from './pages/VisualEffects'
import LMSContent from './pages/LMSContent'
import ContactFooter from './components/Footer'
import AmorphicVideos from './components/AmorphicVideos'
import ArchitectureModels from './components/Architecture'
import ProductModel from './components/ProductModel'
import ProjectSimulations from './components/ProjectModel'
import ARVRExperiences from './components/ARVRExperience'
import ArchitectureVr from './components/ArchitectureVr'
import InteractiveEBooks from './components/Ebook'
import InteractiveProductApps from './components/InteractiveProductApps'
import Portfolio from './pages/Portfolio'
import { Toaster } from 'react-hot-toast'
import TDanimation from './components/TDanimation'
import THDanimation from './components/THDanimation'
import Compositing from './components/Compositing'
import Aianimation from './pages/Aianimation'
import Motivation from './pages/Motivation'
import ScrollToTop from './components/ScrollToTop'
import Clean from './pages/Clean-ups'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />
        <div className="sm:pt-0 pt-16">
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='services' >
              <Route path="live-shot-video" element={<LiveShotVideo />} />
              <Route path="/services/explainer-videos" element={<ExplainerVideos />} />
              <Route path="/services/3d-modelling" element={<ThreeDModelling />} />
              <Route path="/services/interactive-content" element={<InteractiveContent />} />
              <Route path="/services/ar-vr" element={<ARVRExperiences />} />
              <Route path="/services/architecture-vr" element={<ArchitectureVr />} />
              <Route path="/services/e-book" element={<InteractiveEBooks />} />
              <Route path="/services/productApps" element={<InteractiveProductApps />} />
              <Route path="/services/character-animation" element={<CharacterAnimation />} />
              <Route path="/services/lms-content" element={<LMSContent />} />
              <Route path="/services/visual-effects" element={<VisualEffects />} />
              <Route path="/services/amorphic-videos" element={<AmorphicVideos />} />
              <Route path="/services/architecture-videos" element={<ArchitectureModels />} />
              <Route path="/services/product-videos" element={<ProductModel />} />
              <Route path="/services/project-videos" element={<ProjectSimulations />} />
              <Route path="/services/2d" element={<TDanimation />} />
              <Route path="/services/3d" element={<THDanimation />} />
              <Route path="/services/compositing" element={<Compositing />} />
              <Route path="/services/aibasedanimation" element={<Aianimation />} />
              <Route path="/services/motivation" element={<Motivation />} />
              <Route path="/services/clean" element={<Clean />} />
            </Route>
          </Routes>
        </div>
        <ContactFooter />

      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

    </>
  )
}

export default App