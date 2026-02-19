import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Hero from './Hero'
import Business from './Business'
import NexivoWidget from './NexivoWidget'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ position: 'fixed', top: 10, right: 10, zIndex: 10000, background: 'rgba(0,0,0,0.8)', padding: '10px 20px', borderRadius: '8px' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/business" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Business</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/business" element={<Business />} />
      </Routes>
      <NexivoWidget />
    </BrowserRouter>
  )
}

export default App
