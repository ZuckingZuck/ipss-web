import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'İnternet ve Altyapı',
      description: 'FTTx, FTTB dönüşüm, POP ve güzergâh bakım çalışmalarıyla güçlü altyapı çözümleri sunuyoruz.',
      icon: '📡',
      link: '/internet-ve-altyapi'
    },
    {
      title: 'Sinyalizasyon ve Ağır Bakım',
      description: 'Belediye projelerinde sinyalizasyon, mobil EDS, trafik ve ağır bakım süreçlerini yönetiyoruz.',
      icon: '🚦',
      link: '/sinyalizasyon-ve-agir-bakim'
    },
    {
      title: 'Makine ve Teçhizat',
      description: '16 saha ekibi ve güçlü ekipman envanteriyle eş zamanlı, kesintisiz saha imalatı sağlıyoruz.',
      icon: '🛠️',
      link: '/makine-ve-techizat'
    },
    {
      title: 'Web Yazılımları',
      description: 'Modern web teknolojileri ile özel yazılım çözümleri geliştiriyoruz.',
      icon: '🌐',
      link: '/web-development'
    },
    {
      title: 'Görüntü İşleme',
      description: 'Yapay zeka destekli görüntü ve ses analiz sistemleri geliştiriyoruz.',
      icon: '👁️',
      link: '/image-processing'
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
  ]

  const highlights = [
    { label: 'Deplase', value: '12.600' },
    { label: 'Fibersite', value: '630' },
    { label: 'Kurumsal Firma', value: '920' },
    { label: 'Backbone Kazı', value: '92 km' },
    { label: 'HomePass Altyapı', value: '114.000' },
    { label: 'FTTB Dönüşüm', value: '32.000' },
    { label: 'Güzergâh Kazı', value: '480 km' },
    { label: 'Bakım Çalışması', value: '1.600 km' },
  ]

  const aboutCards = [
    {
      title: 'Saha ve Operasyon Yetkinliği',
      description: 'Altyapı, sinyalizasyon ve ağır bakım projelerinde planlı, hızlı ve sürdürülebilir saha operasyonları yürütüyoruz.'
    },
    {
      title: 'Mühendislik ve Teknoloji Birikimi',
      description: 'Web, yapay zeka, görüntü işleme ve robotik çözümleri saha tecrübesiyle birleştirerek uçtan uca değer üretiyoruz.'
    },
    {
      title: 'Güvenilir İş Ortaklığı',
      description: 'Kamu ve özel sektör projelerinde kaliteli teslimat, şeffaf süreç yönetimi ve uzun vadeli destek yaklaşımı sunuyoruz.'
    },
  ]

  const partnerLogos = [
    { name: 'Türknet', src: '/turknet.jpg' },
    { name: 'Turkcell', src: '/turkcell.png' },
    { name: 'Atom', src: '/atom.png' },
    { name: 'İBB', src: '/ibb.png' },
  ]

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
    <div className="min-h-screen bg-slate-50 text-slate-900">
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
  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-slate-100/80 z-10" />

  {/* Koyu arka plan */}
  <div className="absolute inset-0 bg-white/35 z-20" />

  {/* İçerik */}
  <div className="relative z-30 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-700">
        IPSS TECH
      </h1>
      <p className="text-2xl text-slate-700 mb-8 max-w-3xl">
        Modern teknolojilerle işletmenizi geleceğe taşıyoruz. İnternet ve Altyapı, Sinyalizasyon ve Ağır Bakım, Makine ve Teçhizat alanlarında güçlü saha operasyonlarımızı; web yazılımları, görüntü işleme, robotik ve yapay zeka çözümleriyle entegre biçimde sunuyoruz.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:fix@ipsstech.com.tr"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-300/40 transition-all"
        >
          İletişime Geç
        </a>
        <Link
          to="/internet-ve-altyapi"
          className="inline-block px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-all"
        >
          Saha Çözümlerimiz
        </Link>
      </div>
    </motion.div>
  </div>
</section>


      <section className="py-14 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">
            Çalışma Ortaklarımız
          </h2>
          <div className="partner-marquee">
            <div className="partner-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="partner-logo-item"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-14 md:h-16 w-auto object-contain opacity-90"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>






      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Hakkımızda
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-r from-white to-slate-100 border border-slate-200 mb-10 shadow-sm"
          >
            <p className="text-sm uppercase tracking-wider text-blue-600 mb-3">Biz Kimiz?</p>
            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              IPSS TECH olarak altyapı, sinyalizasyon, ağır bakım ve ileri teknoloji çözümlerini tek çatı altında sunan çok disiplinli bir mühendislik ve uygulama ekibiyiz.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Saha operasyon gücümüzü yazılım ve yapay zeka kabiliyetiyle birleştirerek kurumların dijital dönüşüm, altyapı modernizasyonu ve operasyonel verimlilik hedeflerine doğrudan katkı sağlıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Misyonumuz</h3>
              <p className="text-slate-600 leading-relaxed">
                Yenilikçi, sürdürülebilir ve ölçülebilir teknoloji çözümleriyle iş süreçlerini iyileştirmek; kurumlara hız, verimlilik ve güven kazandırmak.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Vizyonumuz</h3>
              <p className="text-slate-600 leading-relaxed">
                Türkiye’de saha operasyonları ve ileri teknoloji uygulamalarını entegre sunabilen öncü ve güvenilir çözüm markası olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <button
                  onClick={() => { handleNavigation(service.link) }}
                  className="inline-block hover:cursor-pointer px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-all"
                >
                  Detaylı Bilgi
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Saha Performansımız
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Son dönem altyapı, bakım ve saha operasyon çalışmalarımızdan öne çıkan çıktılar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="p-5 rounded-xl border border-slate-200 bg-white text-center hover:border-blue-300 transition-all shadow-sm">
                <p className="text-sm text-slate-500 mb-2">{item.label}</p>
                <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              </div>
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
                image: '/Aycell.png',
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
                className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-700">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-100/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Projelerinizi Hayata Geçirelim
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            İşletmeniz için özel yazılım çözümleri geliştirmek için bizimle iletişime geçin
          </p>
          <a
            href="mailto:fix@ipsstech.com.tr"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-300/40 transition-all"
          >
            fix@ipsstech.com.tr
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home 