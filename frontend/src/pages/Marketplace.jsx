import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

const ALL_PRODUCTS = [
  {
    id: 'prod-001',
    title: 'Pure Nilotica Shea Butter (250g)',
    slug: 'pure-nilotica-shea-butter',
    category: 'Natural Skincare & Haircare',
    vendor: 'Karamoja Organics',
    price_ugx: 28000,
    stock_quantity: 45,
    rating: 4.9,
    reviews_count: 32,
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Cold-pressed virgin shea butter sourced sustainably from wild Vitellaria nilotica trees in Northern Uganda.'
  },
  {
    id: 'prod-002',
    title: 'Organic Moringa Oleifera Leaf Powder (200g)',
    slug: 'organic-moringa-leaf-powder',
    category: 'Herbal Remedies & Tinctures',
    vendor: 'Nile Valley Herbals',
    price_ugx: 18500,
    stock_quantity: 110,
    rating: 4.8,
    reviews_count: 54,
    image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    description: '100% pure organic moringa leaves, shade dried and finely milled to preserve dense multivitamins and antioxidants.'
  },
  {
    id: 'prod-003',
    title: 'Raw Mountain Forest Honey (500ml)',
    slug: 'raw-mountain-forest-honey',
    category: 'Organic Foods & Nutrition',
    vendor: 'Rwenzori Apiaries',
    price_ugx: 25000,
    stock_quantity: 60,
    rating: 5.0,
    reviews_count: 78,
    image_url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Unprocessed, unfiltered multi-floral raw honey harvested from wild hives in the Rwenzori foothills.'
  },
  {
    id: 'prod-004',
    title: 'Deep Tissue Herbal Aromatherapy (60 Mins)',
    slug: 'deep-tissue-herbal-aromatherapy',
    category: 'Spa & Holistic Therapies',
    vendor: 'Entebbe Botanical Wellness Spa',
    price_ugx: 95000,
    stock_quantity: 12,
    is_service: true,
    rating: 4.9,
    reviews_count: 19,
    image_url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    description: 'Therapeutic full-body massage using indigenous infused herbal massage oils for chronic stress relief and muscle recovery.'
  },
  {
    id: 'prod-005',
    title: 'Cold-Pressed Baobab Seed Oil (100ml)',
    slug: 'cold-pressed-baobab-oil',
    category: 'Natural Skincare & Haircare',
    vendor: 'Karamoja Organics',
    price_ugx: 35000,
    stock_quantity: 30,
    rating: 4.7,
    reviews_count: 22,
    image_url: 'https://images.unsplash.com/photo-1608248597359-2c7094b8e235?auto=format&fit=crop&w=600&q=80',
    description: 'Intense rejuvenating facial oil rich in omega fatty acids and vitamin C.'
  }
];

const CATEGORIES = [
  'All',
  'Organic Foods & Nutrition',
  'Herbal Remedies & Tinctures',
  'Natural Skincare & Haircare',
  'Spa & Holistic Therapies'
];

export default function Marketplace({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Wellness Marketplace</h1>
          <p className="text-sm text-gray-500 mt-1">Authentic regional wellness remedies, organic foods, and holistic services</p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search remedies, oils, spas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-nature-600 focus:ring-1 focus:ring-nature-600"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition ${
              selectedCategory === cat
                ? 'bg-nature-700 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(prod => (
          <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-sm">No wellness products found matching your search.</p>
        </div>
      )}
    </div>
  );
}
