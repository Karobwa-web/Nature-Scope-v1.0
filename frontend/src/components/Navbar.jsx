import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Leaf, Search, User } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-nature-700 font-bold text-xl tracking-tight">
            <div className="w-9 h-9 rounded-full bg-nature-100 flex items-center justify-center text-nature-700">
              <Leaf className="w-5 h-5" />
            </div>
            <span>Nature Scope</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/marketplace" className="hover:text-nature-700 transition">Marketplace</Link>
            <Link to="/marketplace?category=organic" className="hover:text-nature-700 transition">Organic Foods</Link>
            <Link to="/marketplace?category=herbal" className="hover:text-nature-700 transition">Herbal Remedies</Link>
            <Link to="/marketplace?category=spa" className="hover:text-nature-700 transition">Spa & Therapies</Link>
            <Link to="/vendor-dashboard" className="text-nature-600 hover:text-nature-800 transition">Vendor Portal</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/marketplace" className="p-2 text-gray-600 hover:text-nature-700 rounded-full hover:bg-gray-100 transition">
              <Search className="w-5 h-5" />
            </Link>
            <Link to="/checkout" className="relative p-2 text-gray-600 hover:text-nature-700 rounded-full hover:bg-gray-100 transition">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-nature-600 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-nature-700">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
