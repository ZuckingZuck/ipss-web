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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-sky-200/95 via-blue-100/95 to-indigo-200/95 backdrop-blur-sm border-b border-blue-300 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => handleNavigation('/')} className="text-2xl hover:cursor-pointer font-bold gradient-text">
              IPSS TECH
            </button>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => handleNavigation('/web-development')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                Yazılım
              </button>
              <button onClick={() => handleNavigation('/image-processing')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                Görüntü İşleme
              </button>
              <button onClick={() => handleNavigation('/robotics')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                Robotik
              </button>
              <button onClick={() => handleNavigation('/ai')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                Yapay Zeka
              </button>
              <button onClick={() => handleNavigation('/internet-ve-altyapi')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                İnternet ve Altyapı
              </button>
              <button onClick={() => handleNavigation('/sinyalizasyon-ve-agir-bakim')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                Sinyalizasyon ve Ağır Bakım
              </button>
              <button onClick={() => handleNavigation('/makine-ve-techizat')} className="text-slate-800 font-medium hover:text-blue-800 transition-colors hover:cursor-pointer">
                Makine ve Teçhizat
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
