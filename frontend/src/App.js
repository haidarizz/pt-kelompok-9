import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Pesan from './pages/Pesan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pesan" element={<Pesan/>}/>
      </Routes>
    </Router>
  );
}

export default App;
