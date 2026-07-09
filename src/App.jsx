import './App.css'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import MapSection from './components/MapSection'
import Navbar from './components/Navbar'
import OfferSection from "./components/OfferSection"
import OtherSection from './components/OtherSection'
import VideoSection from './components/VideoSection'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <MainBody/>
      <OfferSection/>
      <VideoSection/>
      <MapSection/>
      <OtherSection/>
      <Footer/>
    </div>
  )
}

export default App
