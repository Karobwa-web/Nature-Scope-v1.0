import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const formatUGX = (amount) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 overflow-hidden flex flex-col group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
        {product.is_service && (
          <span className="absolute top-2 left-2 bg-nature-700 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            Service Booking
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-nature-600 font-medium mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`} className="font-semibold text-gray-900 hover:text-nature-700 transition line-clamp-1 mb-1">
          {product.title}
        </Link>
        <p className="text-xs text-gray-500 mb-2">by <span className="font-medium text-gray-700">{product.vendor}</span></p>

        <div className="flex items-center gap-1 text-xs text-amber-500 mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-gray-700">{product.rating}</span>
          <span className="text-gray-400">({product.reviews_count})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="text-base font-bold text-gray-900">
            {formatUGX(product.price_ugx)}
          </div>
          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className="p-2 bg-nature-50 text-nature-700 hover:bg-nature-600 hover:text-white rounded-lg transition"
            title="Add to Cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
