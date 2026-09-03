import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: 'prod-001',
    title: 'Pure Nilotica Shea Butter (250g)',
    slug: 'pure-nilotica-shea-butter',
    category: 'Natural Skincare & Haircare',
    vendor: 'Karamoja Organics',
    price_ugx: 28000,
    rating: 4.9,
    reviews_count: 32,
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-002',
    title: 'Organic Moringa Oleifera Leaf Powder (200g)',
    slug: 'organic-moringa-leaf-powder',
    category: 'Herbal Remedies & Tinctures',
    vendor: 'Nile Valley Herbals',
    price_ugx: 18500,
    rating: 4.8,
    reviews_count: 54,
    image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-003',
    title: 'Raw Mountain Forest Honey (500ml)',
    slug: 'raw-mountain-forest-honey',
    category: 'Organic Foods & Nutrition',
    vendor: 'Rwenzori Apiaries',
    price_ugx: 25000,
    rating: 5.0,
    reviews_count: 78,
    image_url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'prod-004',
    title: 'Deep Tissue Herbal Aromatherapy (60 Mins)',
    slug: 'deep-tissue-herbal-aromatherapy',
    category: 'Spa & Holistic Therapies',
    vendor: 'Entebbe Botanical Spa',
    price_ugx: 95000,
    is_service: true,
    rating: 4.9,
    reviews_count: 19,
    image_url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
  }
];

export default function Home({ onAddToCart }) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nature-50 via-white to-warm-50 py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nature-100 text-nature-800 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Uganda's Curated Wellness Destination</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight mb-6">
              Authentic Holistic Wellness, Directly from Verified Regional Creators.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover cold-pressed Nilotica shea, pure indigenous herbal remedies, certified organic superfoods, and Kampala spa wellness sessions.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 bg-nature-600 hover:bg-nature-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition"
              >
                <span>Explore Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/vendor-dashboard"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-xl border border-gray-200 transition"
              >
                <span>Sell on Nature Scope</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-nature-50 text-nature-600 rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Vetted & Authentic</h3>
              <p className="text-xs text-gray-600">Every organic farmer and herbalist undergoes KYC and quality moderation before listing.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-warm-100 text-warm-600 rounded-lg">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Empowering Local Producers</h3>
              <p className="text-xs text-gray-600">Fair-trade economics directly supporting Northern Uganda shea cooperatives and regional beekeepers.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-yellow-50 text-yellow-700 rounded-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">MoMo & Escrow Protected</h3>
              <p className="text-xs text-gray-600">Pay securely using MTN MoMo or Airtel Money. Funds remain in escrow until safe delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Remedies & Wellness Products</h2>
            <p className="text-sm text-gray-500">Curated choices loved by East African wellness seekers</p>
          </div>
          <Link to="/marketplace" className="text-sm font-semibold text-nature-600 hover:text-nature-800 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
