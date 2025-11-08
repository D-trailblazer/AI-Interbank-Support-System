import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2Icon } from 'lucide-react';
export function ProcessingTransfer() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/failed');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <div className="min-h-screen bg-gray-50 w-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <Loader2Icon className="w-10 h-10 text-white animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Processing your transfer…
        </h2>
        <p className="text-gray-600">
          Please wait while we complete your transfer
        </p>
      </div>
    </div>;
}