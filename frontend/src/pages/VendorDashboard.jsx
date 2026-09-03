import React from 'react';
import { Package, DollarSign, TrendingUp, Users, PlusCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function VendorDashboard() {
  const stats = [
    { label: 'Total Revenue', value: 'UGX 4,850,000', icon: DollarSign, change: '+14% this month' },
    { label: 'Pending Orders', value: '7', icon: Clock, change: 'Requires dispatch' },
    { label: 'Active Listings', value: '18', icon: Package, change: '2 low in stock' },
    { label: 'Customer Rating', value: '4.9 / 5.0', icon: TrendingUp, change: 'Based on 48 reviews' }
  ];

  const recentOrders = [
    { id: 'ORD-8921', customer: 'Sarah N.', items: 'Nilotica Shea Butter x2', total: 'UGX 56,000', status: 'Processing', gateway: 'MTN MoMo' },
    { id: 'ORD-8920', customer: 'David K.', items: 'Organic Moringa Powder', total: 'UGX 18,500', status: 'Shipped', gateway: 'Airtel Money' },
    { id: 'ORD-8918', customer: 'Amina M.', items: 'Forest Honey (500ml)', total: 'UGX 25,000', status: 'Delivered', gateway: 'MTN MoMo' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Vendor Management Portal</h1>
          <p className="text-sm text-gray-500 mt-1">Karamoja Organics | Verified Holistic Creator</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-nature-600 hover:bg-nature-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition">
          <PlusCircle className="w-4 h-4" />
          <span>Add New Product / Service</span>
        </button>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{s.label}</span>
                <div className="p-2 bg-nature-50 text-nature-700 rounded-lg">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-nature-600 font-medium">{s.change}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Recent Customer Orders</h3>
          <span className="text-xs text-nature-700 font-semibold cursor-pointer">View All Orders</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-5 py-3">Order ID</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3">Total</th>
                <th className="px-5 py-3">Payment</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-3 font-semibold text-gray-900">{order.id}</td>
                  <td className="px-5 py-3 text-gray-600">{order.customer}</td>
                  <td className="px-5 py-3 text-gray-600">{order.items}</td>
                  <td className="px-5 py-3 font-medium text-gray-900">{order.total}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded bg-yellow-50 text-yellow-800">
                      {order.gateway}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-nature-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
