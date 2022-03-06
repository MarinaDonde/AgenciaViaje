import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Destinos from './components/pages/Destinos'
import Promocoes from './components/pages/Promocoes'


import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/Destinos"  element={<Destinos />} />
          <Route path="/Promocoes" element={<Promocoes />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
