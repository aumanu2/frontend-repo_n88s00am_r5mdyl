import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import Offers from './pages/Offers'
import Quote from './pages/Quote'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
