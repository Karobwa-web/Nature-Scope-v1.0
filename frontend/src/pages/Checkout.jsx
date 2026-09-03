import React, { useState } from 'react';
import { ShieldCheck, Smartphone, CreditCard, CheckCircle } from 'lucide-react';

export default function Checkout({ cart = [] }) {
  const [paymentMethod, setPaymentMethod] = useState('mtn_momo');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = 28000;
  const deliveryFee = 5000;
  const total = subtotal + deliveryFee;

  const handlePayment = (e) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-nature-100 text-nature-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Prompt Sent!</h2>
        <p className="text-gray-600 text-sm mb-6">
          Please check your phone ({phoneNumber || '256770000000'}) and enter your PIN to approve the transaction of <span className="font-bold text-gray-900">UGX {total.toLocaleString()}</span>.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 text-left">
          <strong>Escrow Guarantee:</strong> Your funds will remain in safe escrow until your organic products are safely delivered to your address.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Checkout & Payment</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Delivery Information */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">1. Delivery Address (Uganda)</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" defaultValue="Monday Obadiah" className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-nature-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Delivery Address / Landmark</label>
                <input
                  type="text"
                  placeholder="e.g. Plot 14 Bugolobi or Ntinda Shopping Centre"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-nature-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Phone (For Courier)</label>
                <input
                  type="tel"
                  placeholder="077... / 075..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-nature-600"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">2. Select Payment Method</h3>
            <div className="space-y-3">
              <label className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition ${paymentMethod === 'mtn_momo' ? 'border-nature-600 bg-nature-50/50' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" value="mtn_momo" checked={paymentMethod === 'mtn_momo'} onChange={() => setPaymentMethod('mtn_momo')} />
                  <Smartphone className="w-5 h-5 text-yellow-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">MTN Mobile Money (MoMo)</div>
                    <div className="text-xs text-gray-500">Instant push prompt to your MTN phone</div>
                  </div>
                </div>
              </label>

              <label className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition ${paymentMethod === 'airtel_money' ? 'border-nature-600 bg-nature-50/50' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" value="airtel_money" checked={paymentMethod === 'airtel_money'} onChange={() => setPaymentMethod('airtel_money')} />
                  <Smartphone className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Airtel Money Uganda</div>
                    <div className="text-xs text-gray-500">Instant USSD PIN prompt</div>
                  </div>
                </div>
              </label>

              <label className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition ${paymentMethod === 'card' ? 'border-nature-600 bg-nature-50/50' : 'border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">Credit / Debit Card (PesaPal)</div>
                    <div className="text-xs text-gray-500">Visa, Mastercard accepted</div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-fit">
          <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm pb-4 border-b border-gray-100">
            <div className="flex justify-between text-gray-600">
              <span>Pure Nilotica Shea Butter (x1)</span>
              <span className="font-medium text-gray-900">UGX 28,000</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Kampala Standard Courier</span>
              <span className="font-medium text-gray-900">UGX 5,000</span>
            </div>
          </div>

          <div className="flex justify-between text-base font-bold text-gray-900 py-4">
            <span>Total</span>
            <span className="text-nature-700">UGX {total.toLocaleString()}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-nature-600 hover:bg-nature-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Confirm & Pay UGX {total.toLocaleString()}
          </button>

          <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-4 justify-center">
            <ShieldCheck className="w-4 h-4 text-nature-600" />
            <span>Escrow protected checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
