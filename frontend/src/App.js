import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Pesan from './pages/Pesan';
import Identitas from './pages/Identitas';
import Rincian from './pages/Rincian';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pesan" element={<Pesan/>}/>
        <Route path="/identitas" element={<Identitas/>}/>
        <Route path="/rincian" element={<Rincian/>}/>
      </Routes>
    </Router>
  );
}

export default App;
