import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'

export default function ProductsPage() {
  return (
    <div className="bg-[#f3f6ff] dark:bg-neutral-950 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Products />
      </main>
      <Footer />
    </div>
  )
}
