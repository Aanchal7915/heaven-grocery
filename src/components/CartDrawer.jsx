import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-[#0B6338] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-[#D4A51C]" />
              <div>
                <h2 className="text-lg font-bold">Your Product List</h2>
                <p className="text-xs text-green-100">{totalCount} item{totalCount !== 1 ? 's' : ''} selected</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 text-[#0B6338] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={36} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Your inquiry list is empty</h3>
                <p className="text-sm text-gray-500 mb-6">Browse our fresh products and add items to request a quote.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[#0B6338] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#07542e] transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-gray-100 items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-gray-200" />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                    <p className="text-xs text-[#0B6338] font-semibold">₹{item.price} / {item.unit}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-md bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-bold text-gray-800 px-1">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-md bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
              <div className="flex justify-between text-sm font-semibold text-gray-700">
                <span>Estimated Value (Demo)</span>
                <span className="text-base text-[#0B6338] font-bold">₹{totalPrice}</span>
              </div>
              <p className="text-[11px] text-gray-500 leading-tight">
                *Prices shown are estimated sample rates for wholesale & retail inquiries.
              </p>
              <Link
                to="/contact"
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-[#0B6338] hover:bg-[#07542e] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-colors text-sm"
              >
                Send Bulk Purchase Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
