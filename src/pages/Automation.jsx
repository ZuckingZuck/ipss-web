import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Automation = () => {
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
            <source src="/oto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Arka Plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />

        {/* Koyu Arka Plan */}
        <div className="absolute inset-0 bg-black opacity-40" />  {/* Opak koyu katman */}

        {/* İçerik */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Otomasyon Sistemleri
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
              İş süreçlerinizi optimize eden, verimliliği artıran ve maliyetleri düşüren akıllı otomasyon çözümleri sunuyoruz. Modern teknolojilerle işletmenizi geleceğe taşıyoruz.
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
            Otomasyon Çözümlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Endüstriyel Otomasyon',
                description: 'Üretim hatlarınızı optimize eden, verimliliği artıran endüstriyel otomasyon sistemleri. PLC, SCADA ve DCS sistemleri ile üretim süreçlerinizi otomatikleştiriyoruz.',
                icon: '🏭',
                image: 'https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Robotik Süreç Otomasyonu (RPA)',
                description: 'Tekrarlayan iş süreçlerini otomatikleştiren, hata oranını düşüren RPA çözümleri. Yapay zeka destekli süreç otomasyonu ile iş akışlarınızı optimize ediyoruz.',
                icon: '🤖',
                image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Akıllı Bina Sistemleri',
                description: 'Enerji verimliliği sağlayan, güvenliği artıran akıllı bina otomasyon sistemleri. Aydınlatma, iklimlendirme ve güvenlik sistemlerini merkezi olarak yönetiyoruz.',
                icon: '🏢',
                image: 'https://plus.unsplash.com/premium_photo-1745056197520-50c8a6bb9f64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Üretim Planlama ve Kontrol',
                description: 'Üretim süreçlerinizi optimize eden, stok yönetimini kolaylaştıran sistemler. ERP ve MES entegrasyonları ile üretim planlamanızı otomatikleştiriyoruz.',
                icon: '📊',
                image: 'https://images.unsplash.com/photo-1562601553-b67e9e26f364?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Kalite Kontrol Sistemleri',
                description: 'Ürün kalitesini artıran, hata tespitini otomatikleştiren kontrol sistemleri. Görüntü işleme ve sensör teknolojileri ile kalite kontrol süreçlerinizi güçlendiriyoruz.',
                icon: '✅',
                image: 'https://images.unsplash.com/photo-1599583863916-e06c29087f51?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Veri Toplama ve Analiz',
                description: 'Üretim verilerinizi toplayan, analiz eden ve raporlayan akıllı sistemler. IoT sensörleri ve veri analiz platformları ile süreçlerinizi izliyoruz.',
                icon: '📈',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
            Otomasyon Çözümlerinin Avantajları
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
                  <span>Üretim hızında artış</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Hata oranında düşüş</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>İş gücü verimliliği</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Kaynak optimizasyonu</span>
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
                  <span>İşçilik maliyetlerinde düşüş</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Enerji tasarrufu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Malzeme israfında azalma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Bakım maliyetlerinde düşüş</span>
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
            Otomasyon Çözümlerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için özel otomasyon çözümleri geliştirmek için bizimle iletişime geçin
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

export default Automation 