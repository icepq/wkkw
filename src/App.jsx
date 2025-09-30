import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Description from './pages/Description';
import Recruitment from './pages/recruitment';
import Extensions from './pages/Extensions';
import Inquiry from './pages/Inquiry';
import './App.css';

function App() {
  return (
    <div className="App">
      <main style={{ paddingTop: '80px' }}>
        <Header />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/extensions" element={<Extensions />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </div>
  );
}

export default App;