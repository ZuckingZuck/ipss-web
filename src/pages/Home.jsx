import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const smoothScrollToTop = (duration) => {
  const start = window.scrollY;
  const startTime = performance.now();

  const scroll = (timestamp) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, start * (1 - progress)); // Kaydırma
    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };
  
  requestAnimationFrame(scroll);
};

const handleNavigation = (path) => {
  navigate(path);  // Sayfaya yönlendirme
  smoothScrollToTop(500);  // 1500 ms süresince animasyonlu kaydırma
};


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
      <source src="/bg.mov" type="video/mp4" />
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
        IPSS TECH
      </h1>
      <p className="text-2xl text-gray-300 mb-8 max-w-3xl">
        Modern teknolojilerle işletmenizi geleceğe taşıyoruz. Web yazılımları, otomasyon sistemleri, görüntü işleme, mobil uygulamalar, robotik ve yapay zeka çözümleri ile iş süreçlerinizi optimize ediyoruz.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:fix@ipsstech.com.tr"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          İletişime Geç
        </a>
        <Link
          to="/about"
          className="inline-block px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all"
        >
          Hakkımızda
        </Link>
      </div>
    </motion.div>
  </div>
</section>






      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Hakkımızda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Biz Kimiz?</h3>
              <p className="text-gray-300 mb-4">
                IPSS TECH olarak, 2015 yılından bu yana teknoloji dünyasında yenilikçi çözümler sunuyoruz. Uzman ekibimiz ve geniş deneyimimizle, işletmelerin dijital dönüşüm süreçlerinde güvenilir bir partner olarak hizmet veriyoruz.
              </p>
              <p className="text-gray-300">
                Müşteri odaklı yaklaşımımız ve kaliteli hizmet anlayışımızla, her projede en iyi sonuçları elde etmek için çalışıyoruz. Modern teknolojileri kullanarak, işletmelerin rekabet gücünü artırmayı ve sürdürülebilir büyümeyi hedefliyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Misyonumuz</h3>
              <p className="text-gray-300 mb-4">
                İşletmelerin dijital dönüşüm süreçlerinde, yenilikçi ve sürdürülebilir teknoloji çözümleri sunarak, verimliliklerini artırmak ve rekabet güçlerini güçlendirmek.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Vizyonumuz</h3>
              <p className="text-gray-300">
                Teknoloji dünyasında öncü ve güvenilir bir marka olarak, müşterilerimize en iyi hizmeti sunmak ve sektörde fark yaratan çözümler geliştirmek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Yazılımları',
                description: 'Modern web teknolojileri ile özel yazılım çözümleri geliştiriyoruz.',
                icon: '🌐',
                link: '/web-development'
              },
              {
                title: 'Otomasyon Sistemleri',
                description: 'İş süreçlerinizi optimize eden akıllı otomasyon çözümleri sunuyoruz.',
                icon: '⚙️',
                link: '/automation'
              },
              {
                title: 'Görüntü İşleme',
                description: 'Yapay zeka destekli görüntü ve ses analiz sistemleri geliştiriyoruz.',
                icon: '👁️',
                link: '/image-processing'
              },
              {
                title: 'Mobil Uygulamalar',
                description: 'iOS ve Android için modern ve kullanıcı dostu mobil uygulamalar.',
                icon: '📱',
                link: '/mobile-apps'
              },
              {
                title: 'Robotik',
                description: 'Endüstriyel ve ticari robotik sistemler ile üretim süreçlerini optimize ediyoruz.',
                icon: '🤖',
                link: '/robotics'
              },
              {
                title: 'Yapay Zeka',
                description: 'Makine öğrenmesi ve derin öğrenme teknolojileri ile akıllı çözümler.',
                icon: '🧠',
                link: '/ai'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <button
                  onClick={() => { handleNavigation(service.link) }}
                  className="inline-block hover:cursor-pointer px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all"
                >
                  Detaylı Bilgi
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Projelerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Aycell ERP',
                description: 'Aycell Bilişim, telekomünikasyon sektöründe kurulum, bakım ve işletme hizmetlerinde, iş süreçlerini daha verimli yönetmek için geliştirdiğimiz ERP çözümünü kullanarak, çözüm ortaklıklarıyla müşterilerine zamanında ve etkili hizmet sunmaktadır.',
                image: 'http://www.aycell.com.tr/Gorseller/Aycell.png',
                category: 'İş Yönetimi'
              },
              {
                title: 'Mobil E-ticaret Platformu',
                description: 'iOS ve Android için geliştirilen, yapay zeka destekli öneri sistemi içeren mobil alışveriş uygulaması.',
                image: 'https://www.pngplay.com/wp-content/uploads/6/Mobile-Application-Icon-Transparent-PNG.png',
                category: 'Mobil Uygulamalar'
              },
              {
                title: 'Görüntü İşleme Sistemi',
                description: 'Üretim hattında otomatik kalite kontrol ve hata tespiti yapan yapay zeka destekli görüntü işleme sistemi.',
                image: 'https://png.pngtree.com/png-vector/20230327/ourmid/pngtree-process-flat-icon-vector-png-image_6670690.png',
                category: 'Görüntü İşleme'
              },
              {
                title: 'Yapay Zeka Çözümleri',
                description: 'Gelişmiş yapay zeka teknolojileri ile iş süreçlerini dönüştüren, verimliliği artıran ve stratejik karar almayı kolaylaştıran yenilikçi yazılım çözümleri.',
                image: 'https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-artificial-intelligence-modern-computing-concept-png-image_10074799.png',
                category: 'Yapay Zeka Yazılımları'
              }

            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Projelerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için özel yazılım çözümleri geliştirmek için bizimle iletişime geçin
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

export default Home 