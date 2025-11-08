import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircleIcon, MessageCircleIcon } from 'lucide-react';
import { Header } from '../components/Header';
export function TransferFailed() {
  
  const time = "time";
  const navigate = useNavigate();
  return <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-red-50 border-b border-red-100 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <XCircleIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-900">
                  Pending
                </h2>
                <p className="text-sm text-red-700">
                  Network timeout
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Beneficiary</span>
                  <span className="font-medium text-gray-900">
                    Adebayo Okonkwo
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bank</span>
                  <span className="font-medium text-gray-900">GTBank</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium text-gray-900">₦50,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium text-gray-900">
                    {time}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => navigate('/support')} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center space-x-2">
              <MessageCircleIcon className="w-5 h-5" />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </main>
    </div>;
}