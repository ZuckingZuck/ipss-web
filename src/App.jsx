import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WebDevelopment from './pages/WebDevelopment'
import Automation from './pages/Automation'
import ImageProcessing from './pages/ImageProcessing'
import MobileApps from './pages/MobileApps'
import Robotics from './pages/Robotics'
import AI from './pages/AI'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/image-processing" element={<ImageProcessing />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="/ai" element={<AI />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
