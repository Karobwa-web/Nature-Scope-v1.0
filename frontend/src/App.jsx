import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import ProductDetail from './pages/ProductDetail';
import VendorDashboard from './pages/VendorDashboard';
import Checkout from './pages/Checkout';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-stone-50/50">
      <div>
        <Navbar cartCount={cart.length} />
        <main>
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/marketplace" element={<Marketplace onAddToCart={handleAddToCart} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}
