import { Link } from 'react-router-dom'

const MachineryEquipment = () => {
  const equipmentList = [
    {
      title: 'Bobcat Loder',
      count: 4,
      detail: 'Dar alan kazı, dolgu ve malzeme transferinde hızlı manevra kabiliyeti sağlar.',
    },
    {
      title: 'Beko Loder',
      count: 2,
      detail: 'Kazı ve yükleme operasyonlarında çok amaçlı saha kullanımına uygundur.',
    },
    {
      title: 'Ekskavatör 40 TON',
      count: 1,
      detail: 'Ağır kazı ve yüksek hacimli güzergâh açma işlerinde ana üretim makinesidir.',
    },
    {
      title: 'Takeuchi Mini Ekskavatör',
      count: 2,
      detail: 'Sınırlı erişimli bölgelerde hassas kazı ve altyapı hazırlık işlerinde kullanılır.',
    },
    {
      title: 'Tek-Çift Kabin Kamyonet',
      count: 16,
      detail: 'Ekip, ekipman ve sarf malzeme sevkiyatında saha mobilitesini güçlendirir.',
    },
    {
      title: 'Asfalt Kesme',
      count: 16,
      detail: 'Kesit doğruluğu yüksek yol açma ve yüzey hazırlık işlemlerini destekler.',
    },
    {
      title: 'Hilti Kırıcı',
      count: 16,
      detail: 'Sert zemin ve beton kırımı gereken noktasal müdahalelerde etkin çözüm sunar.',
    },
    {
      title: 'Jeneratör 5,5kVA',
      count: 16,
      detail: 'Enerji altyapısının sınırlı olduğu sahalarda kesintisiz güç desteği sağlar.',
    },
    {
      title: 'Kompaktör',
      count: 16,
      detail: 'Dolgu sonrası zemin sıkıştırma ile uzun ömürlü ve güvenli altyapı standardı oluşturur.',
    },
  ]

  const usageAreas = [
    'FTTx ve FTTB saha imalatları',
    'Kazı, kanal ve güzergâh hazırlığı',
    'Asfalt kesme ve zemin geri kazanım işleri',
    'Enerji ihtiyacı olan mobil saha operasyonları',
    'Bakım, deplase ve acil müdahale süreçleri',
    'Paralel yürütülen çoklu şantiye organizasyonları',
  ]

  const operationFlow = [
    'Saha keşfi ve ekip planlama',
    'Makine-teçhizat sevki ve hazırlık',
    'İmalat, bakım veya deplase uygulaması',
    'Kalite kontrol, raporlama ve kapanış',
  ]

  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="inline-block px-4 py-2 mb-5 rounded-full border border-purple-500/40 bg-gray-800/60 text-sm tracking-wide text-purple-300">
            Operasyonel Güç ve Saha Kapasitesi
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 leading-tight">
            Makine ve Teçhizat
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
            16 Saha ekibi ile eş zamanlı ve kesintisiz imalat kapasitesi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70 backdrop-blur-sm">
              <p className="text-sm text-purple-300 mb-1">Saha Ekibi</p>
              <p className="text-3xl font-bold text-white">16</p>
            </div>
            <div className="p-5 rounded-xl border border-blue-500/40 bg-gray-800/70 backdrop-blur-sm">
              <p className="text-sm text-blue-300 mb-1">Ekipman Kalemi</p>
              <p className="text-3xl font-bold text-white">9</p>
            </div>
            <div className="p-5 rounded-xl border border-purple-500/40 bg-gray-800/70 backdrop-blur-sm">
              <p className="text-sm text-purple-300 mb-1">Operasyon Modeli</p>
              <p className="text-2xl font-bold text-white">Eş Zamanlı</p>
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
            Makine ve Teçhizat Listesi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700/80 hover:border-purple-500/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/25 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/15 border border-purple-500/40 flex items-center justify-center text-purple-300 text-xl">
                    ⚙
                  </div>
                  <span className="px-3 py-1 rounded-full text-base font-bold border border-blue-500/40 bg-blue-500/10 text-blue-200 min-w-12 text-center">
                    {item.count}
                  </span>
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
            Kullanım Alanları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usageAreas.map((area, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              >
                <p className="text-gray-200 leading-relaxed">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Operasyon Akışı
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationFlow.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 text-center"
              >
                <p className="text-sm text-purple-300 mb-2">Adım {index + 1}</p>
                <p className="text-white font-semibold leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MachineryEquipment
