import React from 'react'
import Navbar from './components/navbar'
import Products from './components/Products'
import Footer from './components/Footer'
import { ShoppingCart } from 'lucide-react';

function App() {
  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
    
    </div>
  )
}

export default App