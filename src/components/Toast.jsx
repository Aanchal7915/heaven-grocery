import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-[#053D23] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-[#D4A51C]/40 text-sm font-semibold">
        <CheckCircle className="w-5 h-5 text-[#D4A51C]" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export default Toast;
