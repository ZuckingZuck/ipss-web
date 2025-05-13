import { useNavigate } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { useEffect } from 'react'

function Layout({ children }) {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    setTimeout(() => {
      scroller.scrollTo('top', {
        duration: 500,
        smooth: 'easeInOutQuart',
        offset: -70,
      })
    }, 100) // Route değişimi sonrası scroll animasyonu için küçük bir gecikme
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => handleNavigation('/')} className="text-2xl hover:cursor-pointer font-bold gradient-text">
              IPSS TECH
            </button>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => handleNavigation('/web-development')} className="hover:text-purple-400 transition-colors hover:cursor-pointer">
                Web Yazılımları
              </button>
              <button onClick={() => handleNavigation('/automation')} className="hover:text-purple-400 transition-colors hover:cursor-pointer">
                Otomasyon
              </button>
              <button onClick={() => handleNavigation('/image-processing')} className="hover:text-purple-400 transition-colors hover:cursor-pointer">
                Görüntü İşleme
              </button>
              <button onClick={() => handleNavigation('/mobile-apps')} className="hover:text-purple-400 transition-colors hover:cursor-pointer">
                Mobil Uygulamalar
              </button>
              <button onClick={() => handleNavigation('/robotics')} className="hover:text-purple-400 transition-colors hover:cursor-pointer">
                Robotik
              </button>
              <button onClick={() => handleNavigation('/ai')} className="hover:text-purple-400 transition-colors hover:cursor-pointer">
                Yapay Zeka
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Sayfa içeriği */}
        <div id="top" />
        {children}
      </main>
    </div>
  )
}

export default Layout
