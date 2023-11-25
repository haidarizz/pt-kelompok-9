import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Pesan from './pages/Pesan';
import Identitas from './pages/Identitas';
import Rincian from './pages/Rincian';
import Pembayaran from './pages/Pembayaran';
import Final from './pages/Final';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pesan" element={<Pesan/>}/>
        <Route path="/identitas" element={<Identitas/>}/>
        <Route path="/rincian" element={<Rincian/>}/>
        <Route path="/pembayaran" element={<Pembayaran/>}/>
        <Route path="/final" element={<Final/>}/>
      </Routes>
    </Router>
  );
}

export default App;
