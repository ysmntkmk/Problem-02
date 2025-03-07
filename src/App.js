let count = 0
// Görevler:
// - Global count değişkeni yerine useState veya useReducer hook'unu kullanarak tartışma numaralarını güvenli şekilde yönetin.
// - Tartışma listesi (Discussions) ve tartışma kartı (Discussion) bileşenlerini modüler hale getirip ayrı dosyalara taşıyın.
// - Mock bir veri seti oluşturarak tartışma kartlarını dinamik hale getirin ve veri tabanından geliyormuş gibi yapı kurun.
// - Hem React temellerine hem de Tailwind CSS yapısına bağlı kalarak bileşenlerinizi geliştirin.
// - Uygulamanın beklenen çıktısını görmek için public klasöründe yer alan preview.png dosyasını inceleyebilirsiniz.

import Discussions from './components/Discussions';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-center py-4">Tartışmalar</h1>
      <Discussions />  {/* Discussions bileşenini burada render ediyoruz */}
    </div>
  );
}

export default App;
