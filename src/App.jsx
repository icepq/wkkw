// App.jsx (使用例)

import Header from './components/Header';
import './App.css'; // アプリ全体のスタイルなど

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <h1>ようこそ！</h1>
        <p>これはメインコンテンツのエリアです。</p>
      </main>
    </div>
  );
}

export default App;