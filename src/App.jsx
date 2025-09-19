// App.jsx (使用例)

import React from 'react';
import Header from './components/header'; // 作成したHeaderコンポーネントをインポート
import './App.css'; // アプリ全体のスタイルなど

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* ここにメインコンテンツが入ります */}
        <h1>ようこそ！</h1>
        <p>これはメインコンテンツのエリアです。</p>
      </main>
    </div>
  );
}

export default App;