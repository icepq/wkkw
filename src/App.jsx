import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Description from './pages/Description';
import './App.css';

function App() {
  return (
    <div className="App">
      <main style={{ paddingTop: '80px' }}>
        <Header />
      </main>
      <Routes>
        <Route path="/wkkw/" element={<Home />} />
        <Route path="/wkkw/description" element={<Description />} />
        {/* <Route path="/wkkw/recruitment" element={<Recruitment />} /> */}
        {/* <Route path="/wkkw/extensions" element={<Extensions />} /> */}
      </Routes>
    </div>
  );
}

export default App;