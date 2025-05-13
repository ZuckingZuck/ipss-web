import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
  return (
    <div className="min-h-screen">
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
            <source src="/web.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Gradient Arka Plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 z-10" />

        {/* Koyu arka plan */}
        <div className="absolute inset-0 bg-black opacity-40 z-20" />  {/* Koyu ve transparan katman */}

        {/* İçerik */}
        <div className="relative z-30 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Web Yazılımları
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
              Modern web teknolojileri ile özel yazılım çözümleri geliştiriyoruz. Kullanıcı dostu, performanslı ve güvenli web uygulamaları ile işletmenizin dijital varlığını güçlendiriyoruz.
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
            Web Yazılım Çözümlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Geliştirme',
                description: 'React, Vue.js ve Angular gibi modern frameworkler ile kullanıcı dostu, responsive ve performanslı web arayüzleri geliştiriyoruz. Progressive Web Apps (PWA) ve Single Page Applications (SPA) ile kullanıcı deneyimini en üst seviyeye çıkarıyoruz.',
                icon: '💻',
                image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Backend Geliştirme',
                description: 'Node.js, Python, Java ve .NET gibi teknolojiler ile güvenli, ölçeklenebilir ve yüksek performanslı backend sistemleri geliştiriyoruz. RESTful API ve GraphQL servisleri ile veri yönetimini optimize ediyoruz.',
                icon: '⚙️',
                image: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'E-ticaret Çözümleri',
                description: 'Magento, WooCommerce ve özel e-ticaret platformları ile online satış kanallarınızı güçlendiriyoruz. Ödeme sistemleri entegrasyonu, stok yönetimi ve müşteri ilişkileri yönetimi ile e-ticaret süreçlerinizi optimize ediyoruz.',
                icon: '🛒',
                image: 'https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Kurumsal Web Siteleri',
                description: 'Modern tasarım ve SEO uyumlu kurumsal web siteleri geliştiriyoruz. İçerik yönetim sistemleri (CMS) ile web sitenizi kolayca yönetebilir, güncelleyebilir ve optimize edebilirsiniz.',
                icon: '🏢',
                image: 'https://plus.unsplash.com/premium_photo-1661389260743-babc1591dcf7?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Web Uygulamaları',
                description: 'Özel ihtiyaçlarınıza yönelik web uygulamaları geliştiriyoruz. Kullanıcı yönetimi, veri analizi, raporlama ve entegrasyon özellikleri ile iş süreçlerinizi dijitalleştiriyoruz.',
                icon: '📱',
                image: 'https://plus.unsplash.com/premium_photo-1720903984809-62de3f4ca814?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              },
              {
                title: 'Web Güvenliği',
                description: 'SSL sertifikaları, güvenlik duvarları ve güvenlik testleri ile web uygulamalarınızı koruyoruz. OWASP standartlarına uygun güvenlik önlemleri ile verilerinizi güvende tutuyoruz.',
                icon: '🔒',
                image: 'https://plus.unsplash.com/premium_photo-1700681802465-63aae555de29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
            Web Yazılım Çözümlerinin Avantajları
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
                  <span>Dijital varlığınızı güçlendirme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Müşteri erişimini artırma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>İş süreçlerini otomatikleştirme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Veri yönetimini kolaylaştırma</span>
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
                  <span>Yüksek performans ve hız</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Güvenli ve güncel teknolojiler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Ölçeklenebilir mimari</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  <span>Kolay bakım ve güncelleme</span>
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
            Web Projelerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için özel web çözümleri geliştirmek için bizimle iletişime geçin
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

export default WebDevelopment 