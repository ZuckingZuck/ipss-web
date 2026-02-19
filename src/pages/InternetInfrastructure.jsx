import { Link } from 'react-router-dom'

const InternetInfrastructure = () => {
  const infrastructureHeadings = [
    'FTTx',
    'FTTB Dönüşüm',
    'Güzerga Bakım',
    'DATA CENTER (POP)',
    'AİRPON',
  ]

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="inline-block px-4 py-2 mb-5 rounded-full border border-purple-500/40 bg-gray-800/60 text-sm tracking-wide text-purple-300">
            Kurumsal Altyapı Çözümleri
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 leading-tight">
            İnternet ve Altyapı
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl leading-relaxed">
            POP kurulum, FTTx altyapı ve bireysel imalat süreçlerinde yüksek teknik yeterlilik ve saha tecrübesiyle hizmet veriyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-5 rounded-xl border border-gray-700 bg-gray-800/65 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wider text-purple-300 mb-2">Hizmet Kapsamı</p>
              <p className="text-gray-200 leading-relaxed">
                POP kurulum, FTTx altyapı ve bireysel imalat süreçlerinde uçtan uca operasyonel destek sağlanmaktadır.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-700 bg-gray-800/65 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">Proje Rolleri</p>
              <p className="text-gray-200 leading-relaxed">
                Türknet projelerinde doğrudan yüklenici, Turkcell projelerinde ise bölgesel çözüm ortağı ve alt yüklenici firmalar aracılığıyla aktif görev alınmaktadır.
              </p>
            </div>
          </div>

          <div className="mb-10 p-6 md:p-8 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm shadow-lg shadow-purple-900/30">
            <p className="text-sm uppercase tracking-wider text-purple-300 mb-2">Öne Çıkan Performans</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Backbone ve Bireysel Altyapı İmalat Performansı (2023–2025)
            </h3>
            <p className="text-gray-200 mb-6">
              2023–2025 yılları arasında başarıyla tamamlanan altyapı imalat çıktılarımız.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70">
                <p className="text-sm text-purple-300 mb-1">Backbone Kazı İmalatı</p>
                <p className="text-3xl font-bold text-white">92 km</p>
              </div>
              <div className="p-5 rounded-xl border border-blue-500/40 bg-gray-800/70">
                <p className="text-sm text-blue-300 mb-1">HomePass Bireysel Altyapı</p>
                <p className="text-3xl font-bold text-white">114.000</p>
              </div>
              <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70">
                <p className="text-sm text-purple-300 mb-1">HomePass FTTB Dönüşüm</p>
                <p className="text-3xl font-bold text-white">32.000</p>
              </div>
            </div>
          </div>

          <div className="mb-10 p-6 md:p-8 rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm shadow-lg shadow-blue-900/30">
            <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">Saha Ulaştırma Performansı</p>
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              12600 DEPLASE İLE 630 BAZ İSTASYONUNA VE 920 KURUMSAL FİRMAYA SUPERONLINE FİBER HİZMETİNİ ULAŞTIRMIŞ BULUNMAKTAYIZ
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-5 rounded-xl border border-blue-500/40 bg-gray-800/70 text-center">
                <p className="text-sm text-blue-300 mb-1">Kurumsal</p>
                <p className="text-3xl font-bold text-white">920</p>
              </div>
              <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70 text-center">
                <p className="text-sm text-purple-300 mb-1">Fibersite</p>
                <p className="text-3xl font-bold text-white">630</p>
              </div>
              <div className="p-5 rounded-xl border border-blue-500/40 bg-gray-800/70 text-center">
                <p className="text-sm text-blue-300 mb-1">Deplase</p>
                <p className="text-3xl font-bold text-white">12600</p>
              </div>
            </div>
          </div>

          <div className="mb-10 p-6 md:p-8 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-900/30 to-blue-900/20 backdrop-blur-sm shadow-lg shadow-purple-900/30">
            <p className="text-sm uppercase tracking-wider text-purple-300 mb-2">Saha Yaygınlığı</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Güzergâh Kazı ve Saha Yaygınlığı (2023–2025)
            </h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Başakşehir başta olmak üzere 9 ilçede toplam 480 km güzergâh kazı çalışması tamamlanmıştır.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70 text-center">
                <p className="text-sm text-purple-300 mb-1">İlçe Sayısı</p>
                <p className="text-3xl font-bold text-white">9</p>
              </div>
              <div className="p-5 rounded-xl border border-blue-500/40 bg-gray-800/70 text-center">
                <p className="text-sm text-blue-300 mb-1">Güzergâh Kazı</p>
                <p className="text-3xl font-bold text-white">480 km</p>
              </div>
            </div>
          </div>

          <div className="mb-10 p-6 md:p-8 rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm shadow-lg shadow-blue-900/30">
            <p className="text-sm uppercase tracking-wider text-blue-300 mb-2">Bakım Faaliyetleri</p>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Asya Bölgesi Güzergâh Bakım Faaliyetleri (2024)
            </h4>
            <div className="text-gray-200 space-y-1 mb-4 text-lg">
              <p>• 1.200 km şehir içi</p>
              <p>• 400 km şehir dışı</p>
            </div>
            <p className="text-gray-300 text-lg">
              Toplam 1.600 km güzergâh bakım çalışması tamamlanmıştır.
            </p>
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
            ALTYAPI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureHeadings.map((title, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all text-center"
              >
                <div className="text-3xl mb-3 text-purple-300">●</div>
                <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Altyapınızı Geleceğe Taşıyalım
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            İşletmeniz için güvenli, sürdürülebilir ve yüksek performanslı internet altyapısı tasarlamak için bizimle iletişime geçin.
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

export default InternetInfrastructure
