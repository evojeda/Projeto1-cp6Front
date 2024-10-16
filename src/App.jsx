import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
// import Home from './routes/Home';
// import Produtos from './routes/Produtos';
// import Sobre from './routes/Sobre';
// import Contato from './routes/Contato';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
