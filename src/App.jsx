import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Description from './pages/Description';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ paddingTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />
        </Routes>
      </main>
      <Home />
    </div>
  );
}

export default App;