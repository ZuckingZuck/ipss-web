import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MobileApps = () => {
  return (
    <div className="light-page min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Video Arka Planı */}
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/mobil.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Arka Plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />

        {/* Koyu Opak Katman */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* İçerik */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Mobil Uygulamalar
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
              iOS ve Android platformları için modern, kullanıcı dostu ve yüksek performanslı mobil uygulamalar geliştiriyoruz. İşletmenizi mobil dünyaya taşıyoruz.
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
            Mobil Uygulama Çözümlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'iOS Uygulamaları',
                description: 'Swift ve Objective-C ile geliştirilen, App Store standartlarına uygun iOS uygulamaları. Modern tasarım ve yüksek performans ile kullanıcı deneyimini en üst seviyeye çıkarıyoruz.',
                icon: '📱',
                image: 'https://images.unsplash.com/photo-1657032633395-1cb34612f86d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Android Uygulamaları',
                description: 'Kotlin ve Java ile geliştirilen, Google Play standartlarına uygun Android uygulamaları. Material Design prensipleri ile kullanıcı dostu arayüzler tasarlıyoruz.',
                icon: '📱',
                image: 'https://images.unsplash.com/photo-1694878982190-6e37aa9eb306?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Cross-Platform Uygulamalar',
                description: 'React Native ve Flutter ile geliştirilen, hem iOS hem de Android platformlarında çalışan uygulamalar. Tek kod tabanı ile maliyetleri düşürüyor, geliştirme sürecini hızlandırıyoruz.',
                icon: '🔄',
                image: 'https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Mobil Oyunlar',
                description: 'Unity ve Unreal Engine ile geliştirilen, yüksek performanslı mobil oyunlar. 2D ve 3D grafikler, fizik motorları ve çoklu oyuncu desteği ile etkileyici oyun deneyimleri sunuyoruz.',
                icon: '🎮',
                image: 'https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Mobil E-ticaret',
                description: 'Online alışveriş deneyimini mobil platformlara taşıyan e-ticaret uygulamaları. Güvenli ödeme sistemleri, ürün yönetimi ve müşteri ilişkileri yönetimi ile satışlarınızı artırıyoruz.',
                icon: '🛒',
                image: 'https://plus.unsplash.com/premium_photo-1683288295826-9c0bfba5d10b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Mobil Güvenlik',
                description: 'Uygulama güvenliği, veri şifreleme ve kimlik doğrulama sistemleri ile mobil uygulamalarınızı koruyoruz. OWASP standartlarına uygun güvenlik önlemleri ile verilerinizi güvende tutuyoruz.',
                icon: '🔒',
                image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
            Mobil Uygulama Çözümlerinin Avantajları
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
                  <span>Müşteri erişiminde artış</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Marka bilinirliğinde artış</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Satış ve gelir artışı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Müşteri sadakati</span>
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
                  <span>Yüksek performans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Güvenli ve güncel teknolojiler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Kolay bakım ve güncelleme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Ölçeklenebilir mimari</span>
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
            Mobil Uygulama Projelerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için özel mobil uygulama çözümleri geliştirmek için bizimle iletişime geçin
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

export default MobileApps 