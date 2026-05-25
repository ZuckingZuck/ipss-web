import { Link } from 'react-router-dom'

const SignalizationHeavyMaintenance = () => {
  const serviceItems = [
    {
      title: 'AĞIR BAKIM',
      icon: '🛠️',
      detail: 'Saha ekipmanları ve sinyalizasyon bileşenleri için planlı/periyodik ağır bakım süreçleri yürütülür.',
    },
    {
      title: 'SİNYALİZASYON',
      icon: '🚦',
      detail: 'Kavşak ve yol ağlarında sinyalizasyon kurulumu, revizyonu ve süreklilik odaklı işletme desteği sağlanır.',
    },
    {
      title: 'MOBİL EDS',
      icon: '📷',
      detail: 'Mobil denetim sistemlerinin saha entegrasyonu, devreye alma süreçleri ve operasyonel teknik desteği verilir.',
    },
    {
      title: 'KAVŞAK İMALAT',
      icon: '🧭',
      detail: 'Kavşak noktalarında altyapı imalatı, sinyal direk konumlandırma ve düzenleme işleri uçtan uca yönetilir.',
    },
    {
      title: 'LEVHA TABELA DİREK',
      icon: '🪧',
      detail: 'Yol güvenliği ve yönlendirme standartlarına uygun levha, tabela ve direk uygulamaları gerçekleştirilir.',
    },
    {
      title: 'TRAFİK',
      icon: '🚧',
      detail: 'Saha uygulamalarında trafik güvenliği, geçici yönlendirme ve operasyon koordinasyonu kontrollü şekilde sağlanır.',
    },
  ]

  const operationFlow = [
    'Saha etütü ve ihtiyaç analizi',
    'Uygulama planı ve ekip organizasyonu',
    'İmalat / bakım / devreye alma uygulaması',
    'Kontrol, raporlama ve sürdürülebilir destek',
  ]

  return (
    <div className="light-page min-h-screen">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="inline-block px-4 py-2 mb-5 rounded-full border border-purple-500/40 bg-gray-800/60 text-sm tracking-wide text-purple-300">
            Belediye Projelerinde Yüklenici Deneyimi
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 leading-tight">
            Sinyalizasyon ve Ağır Bakım
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl leading-relaxed">
            İBB ve büyükşehir belediye projelerinde sinyalizasyon, ağır bakım ve saha uygulama süreçlerinde aktif ve sürdürülebilir operasyon deneyimine sahibiz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl border border-gray-700 bg-gray-800/65 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wider text-purple-300 mb-2">İBB Deneyimi</p>
              <p className="text-gray-200 leading-relaxed">
                İSBAK Marmara Bölgesi İBB Sinyalizasyon ve Ağır Bakım işlerinde ANA YÜKLENİCİ olarak görev alınmaktadır.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-700 bg-gray-800/65 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">Bölgesel Operasyon</p>
              <p className="text-gray-200 leading-relaxed">
                Aynı kapsamda Muğla Büyükşehir Belediyesi projeleri aktif olarak yürütülmektedir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70 backdrop-blur-sm">
              <p className="text-sm text-purple-300 mb-1">Hizmet Başlığı</p>
              <p className="text-3xl font-bold text-white">6</p>
            </div>
            <div className="p-5 rounded-xl border border-blue-500/40 bg-gray-800/70 backdrop-blur-sm">
              <p className="text-sm text-blue-300 mb-1">Proje Türü</p>
              <p className="text-3xl font-bold text-white">Sinyal + Bakım</p>
            </div>
            <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70 backdrop-blur-sm">
              <p className="text-sm text-purple-300 mb-1">Uygulama Modeli</p>
              <p className="text-2xl font-bold text-white">Planlı / Sürekli</p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-block px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Çalışma Alanları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700/80 hover:border-purple-500/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/40 flex items-center justify-center text-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mt-3 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Operasyon Akışı
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationFlow.map((step, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 text-center">
                <p className="text-sm text-purple-300 mb-2">Adım {index + 1}</p>
                <p className="text-white font-semibold leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Saha Operasyonlarında Güvenilir Çözüm
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sinyalizasyon ve ağır bakım ihtiyaçlarınız için planlama, uygulama ve sürdürülebilir destek süreçlerinde yanınızdayız.
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

export default SignalizationHeavyMaintenance
