import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import WebDevelopment from './pages/WebDevelopment'
import Automation from './pages/Automation'
import ImageProcessing from './pages/ImageProcessing'
import MobileApps from './pages/MobileApps'
import Robotics from './pages/Robotics'
import AI from './pages/AI'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-2xl font-bold gradient-text">
                IPSS TECH
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/web-development" className="hover:text-purple-400 transition-colors">Web Yazılımları</Link>
                <Link to="/automation" className="hover:text-purple-400 transition-colors">Otomasyon</Link>
                <Link to="/image-processing" className="hover:text-purple-400 transition-colors">Görüntü İşleme</Link>
                <Link to="/mobile-apps" className="hover:text-purple-400 transition-colors">Mobil Uygulamalar</Link>
                <Link to="/robotics" className="hover:text-purple-400 transition-colors">Robotik</Link>
                <Link to="/ai" className="hover:text-purple-400 transition-colors">Yapay Zeka</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/image-processing" element={<ImageProcessing />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/robotics" element={<Robotics />} />
            <Route path="/ai" element={<AI />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
