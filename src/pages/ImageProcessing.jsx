import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ImageProcessing = () => {
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
              Görüntü ve Ses İşleme
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
              Yapay zeka destekli görüntü ve ses analiz sistemleri ile işletmenizin verimliliğini artırın. Modern teknolojilerle görüntü ve ses verilerinizi anlamlı bilgilere dönüştürüyoruz.
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
            Görüntü ve Ses İşleme Çözümlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Nesne Tanıma ve Sınıflandırma',
                description: 'Görüntülerdeki nesneleri tanıyan ve sınıflandıran yapay zeka sistemleri. Derin öğrenme modelleri ile nesneleri otomatik olarak tespit ediyor ve kategorize ediyoruz.',
                icon: '🔍',
                image: '/images/object-detection.jpg'
              },
              {
                title: 'Yüz Tanıma Sistemleri',
                description: 'Güvenlik ve kimlik doğrulama için gelişmiş yüz tanıma teknolojileri. Yapay zeka destekli yüz analizi ile güvenlik sistemlerinizi güçlendiriyoruz.',
                icon: '👤',
                image: '/images/face-recognition.jpg'
              },
              {
                title: 'Ses Tanıma ve İşleme',
                description: 'Ses komutlarını anlayan ve işleyen akıllı sistemler. Doğal dil işleme teknolojileri ile ses verilerinizi analiz ediyor ve anlamlandırıyoruz.',
                icon: '🎤',
                image: '/images/speech-recognition.jpg'
              },
              {
                title: 'Görüntü İyileştirme',
                description: 'Düşük kaliteli görüntüleri yapay zeka ile iyileştiren sistemler. Görüntü kalitesini artıran, gürültüyü azaltan ve detayları belirginleştiren çözümler sunuyoruz.',
                icon: '🖼️',
                image: '/images/image-enhancement.jpg'
              },
              {
                title: 'Video Analizi',
                description: 'Video akışlarını analiz eden, anomali tespiti yapan sistemler. Hareket analizi, nesne takibi ve olay tespiti ile güvenlik sistemlerinizi güçlendiriyoruz.',
                icon: '🎥',
                image: '/images/video-analysis.jpg'
              },
              {
                title: 'Ses Sentezi',
                description: 'Metin konuşmaya dönüştüren, doğal ses sentezi yapan sistemler. Yapay zeka destekli ses sentezi ile kullanıcı deneyimini zenginleştiriyoruz.',
                icon: '🗣️',
                image: '/images/voice-synthesis.jpg'
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
            Görüntü ve Ses İşleme Çözümlerinin Avantajları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">İş Avantajları</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Otomatik veri analizi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Güvenlik sistemlerinde gelişim</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Kullanıcı deneyiminde iyileşme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Veri odaklı karar alma</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Teknik Avantajlar</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Yüksek doğruluk oranı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Gerçek zamanlı işleme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Ölçeklenebilir mimari</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Entegre çözümler</span>
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
            Görüntü ve Ses İşleme Çözümlerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için özel görüntü ve ses işleme çözümleri geliştirmek için bizimle iletişime geçin
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

export default ImageProcessing 