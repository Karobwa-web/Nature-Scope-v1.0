import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, Truck, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();

  const product = {
    id: id || 'prod-001',
    title: 'Pure Nilotica Shea Butter (250g)',
    category: 'Natural Skincare & Haircare',
    vendor: 'Karamoja Organics',
    vendorDistrict: 'Moroto / Kampala',
    price_ugx: 28000,
    stock_quantity: 45,
    rating: 4.9,
    reviews_count: 32,
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    description: 'Cold-pressed virgin shea butter sourced sustainably from wild Vitellaria nilotica trees in Northern Uganda. Unlike Western African shea, Nilotica contains a much higher concentration of olein, resulting in a luxurious, silky-smooth butter that melts on contact with skin.',
    benefits: [
      'Deep cellular moisturization for sensitive and eczema-prone skin',
      'Rich in vitamins A, E, and natural phytosterols',
      '100% pure, unrefined, and chemical-free',
      'Directly supports women harvester cooperatives in Karamoja'
    ]
  };

  const formatUGX = (amount) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/marketplace" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-nature-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
          <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="text-xs font-semibold text-nature-700 uppercase tracking-wider mb-2">{product.category}</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-4">
            Vendor: <span className="font-semibold text-gray-800">{product.vendor}</span> ({product.vendorDistrict})
          </p>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center text-amber-500 text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="ml-1 font-bold text-gray-800">{product.rating}</span>
            </div>
            <span className="text-sm text-gray-400">({product.reviews_count} verified customer reviews)</span>
          </div>

          <div className="text-3xl font-extrabold text-nature-800 mb-6">
            {formatUGX(product.price_ugx)}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="border-t border-b border-gray-100 py-4 mb-6">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Wellness Benefits:</h4>
            <ul className="space-y-1 text-xs text-gray-600">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onAddToCart && onAddToCart(product)}
              className="flex-1 bg-nature-600 hover:bg-nature-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <Link
              to="/checkout"
              className="flex-1 bg-warm-500 hover:bg-warm-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition"
            >
              Buy with Mobile Money
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
