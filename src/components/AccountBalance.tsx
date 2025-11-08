import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
export function AccountBalance({
  onTransferClick
}: {
  onTransferClick?: () => void;
}) {
  return <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-blue-100 text-sm mb-2">Total Balance</p>
          <h2 className="text-4xl font-bold mb-1">₦2,847,650.00</h2>
          <p className="text-blue-100 text-sm">Account: 0123456789</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm">
          Corporate Account
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={onTransferClick} className="flex-1 bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
          <ArrowUpIcon className="w-5 h-5" />
          <span>Transfer Money</span>
        </button>
        <button className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-colors">
          View Statement
        </button>
      </div>
    </div>;
}