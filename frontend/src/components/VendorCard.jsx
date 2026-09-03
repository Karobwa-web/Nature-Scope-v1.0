import React from 'react';
import { Star, MapPin, CheckCircle } from 'lucide-react';

export default function VendorCard({ vendor }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-1.5 font-bold text-gray-900">
            <span>{vendor.business_name}</span>
            <CheckCircle className="w-4 h-4 text-nature-600 fill-nature-50" />
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{vendor.district}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-xs text-amber-700 font-semibold">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{vendor.rating}</span>
        </div>
      </div>

      <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
        {vendor.description}
      </p>

      <div className="text-xs font-medium text-nature-700 hover:text-nature-900 cursor-pointer">
        View {vendor.products_count} listed wellness products &rarr;
      </div>
    </div>
  );
}
