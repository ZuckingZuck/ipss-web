import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Robotics = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA0MmMwIDMuMzEzLTIuNjg3IDYtNiA2cy02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNiA2IDIuNjg3IDYgNnoiIGZpbGw9IiM2NjYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Robotik Çözümler
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
              Endüstriyel ve ticari robotik sistemler ile üretim süreçlerinizi optimize ediyoruz. Modern robotik teknolojilerle işletmenizin verimliliğini artırıyor, maliyetleri düşürüyor ve rekabet gücünüzü artırıyoruz.
            </p>
            <Link 
              to="/"
              className="inline-block px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all"
            >
              Ana Sayfaya Dön
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Robotik Çözümlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Endüstriyel Robotlar',
                description: 'Üretim hatlarında kullanılan, yüksek hassasiyetli endüstriyel robotlar. Kaynak, montaj, boyama ve malzeme taşıma gibi işlemlerde kullanılan, programlanabilir ve esnek robotik sistemler.',
                icon: '🤖',
                image: '/images/industrial-robots.jpg'
              },
              {
                title: 'Kolaboratif Robotlar (Cobotlar)',
                description: 'İnsanlarla güvenli bir şekilde çalışabilen cobot sistemleri. Güvenlik sensörleri ve yumuşak dokunuş teknolojileri ile donatılmış, insan-robot işbirliğine uygun robotik çözümler.',
                icon: '🤝',
                image: '/images/cobots.jpg'
              },
              {
                title: 'Otonom Mobil Robotlar (AMR)',
                description: 'Depo ve lojistik operasyonları için otonom mobil robotlar. LIDAR ve kamera sistemleri ile donatılmış, çevresini algılayabilen ve otonom hareket edebilen mobil robotik sistemler.',
                icon: '🚀',
                image: '/images/amr.jpg'
              },
              {
                title: 'Robotik Proses Otomasyonu (RPA)',
                description: 'Üretim süreçlerini otomatikleştiren robotik sistemler. Veri toplama, analiz ve raporlama süreçlerini otomatikleştiren, hata oranını minimize eden akıllı sistemler.',
                icon: '⚙️',
                image: '/images/rpa.jpg'
              },
              {
                title: 'Robotik Görü Sistemleri',
                description: 'Robotlar için görüntü işleme ve nesne tanıma sistemleri. Yapay zeka destekli görüntü analizi ile nesneleri tanıyan, sınıflandıran ve konumlandıran akıllı sistemler.',
                icon: '👁️',
                image: '/images/vision-systems.jpg'
              },
              {
                title: 'Robotik Kontrol Sistemleri',
                description: 'Robot hareketlerini kontrol eden ve optimize eden sistemler. Gerçek zamanlı kontrol ve optimizasyon algoritmaları ile robot hareketlerini hassas bir şekilde yöneten sistemler.',
                icon: '🎮',
                image: '/images/control-systems.jpg'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Robotik Çözümlerin Avantajları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Verimlilik Artışı</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>7/24 kesintisiz çalışma imkanı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Yüksek üretim hızı ve tutarlılık</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Hata oranında önemli düşüş</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Optimize edilmiş üretim süreçleri</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Maliyet Avantajları</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Uzun vadeli işçilik maliyetlerinde düşüş</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Enerji verimliliği ve tasarrufu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Malzeme israfında azalma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Hızlı yatırım geri dönüşü</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Robotik Çözümlerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için özel robotik çözümler geliştirmek için bizimle iletişime geçin
          </p>
          <a 
            href="mailto:fix@ipsstech.com.tr"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            fix@ipsstech.com.tr
          </a>
        </div>
      </section>
    </div>
  )
}

export default Robotics 