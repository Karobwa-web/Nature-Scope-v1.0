import React from 'react';
import { Leaf, ShieldCheck, Truck, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Leaf className="w-5 h-5 text-nature-500" />
              <span>Nature Scope</span>
            </div>
            <p className="text-sm text-gray-400">
              East Africa's curated multi-vendor marketplace connecting you directly with trusted herbalists, organic farmers, and wellness practitioners.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Marketplace</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Organic Foods & Nutrition</li>
              <li>Indigenous Herbal Extracts</li>
              <li>Cold-Pressed Shea & Oils</li>
              <li>Kampala Spa Appointments</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Vendors & Partners</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Apply as a Vendor</li>
              <li>Vendor Guidelines & KYC</li>
              <li>Commission & Payout Policy</li>
              <li>Logistics & Courier Partners</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Payment & Security</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-yellow-400" /> MTN Mobile Money</span>
              <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-red-400" /> Airtel Money Uganda</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-400" /> Escrow Protected Payments</span>
              <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-blue-400" /> Regional Delivery (SafeBoda & Couriers)</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; 2026 Nature Scope Marketplace. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Crafted with pride for Uganda and East Africa.</p>
        </div>
      </div>
    </footer>
  );
}
