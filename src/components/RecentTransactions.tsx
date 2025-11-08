import React from 'react';
import { ArrowUpRightIcon, ArrowDownLeftIcon, XCircleIcon } from 'lucide-react';
export function RecentTransactions() {
  const transactions = [{
    id: 1,
    type: 'credit',
    description: 'Payment received from Zenith Corp',
    amount: 450000,
    date: 'Today, 11:30 AM',
    status: 'completed'
  }, {
    id: 2,
    type: 'debit',
    description: 'Salary payment - November',
    amount: 1250000,
    date: 'Today, 9:15 AM',
    status: 'completed'
  }, {
    id: 3,
    type: 'credit',
    description: 'Transfer from GTBank',
    amount: 75000,
    date: 'Yesterday, 4:22 PM',
    status: 'completed'
  }, {
    id: 4,
    type: 'debit',
    description: 'Utility bill payment',
    amount: 35000,
    date: 'Yesterday, 2:10 PM',
    status: 'completed'
  }, {
    id: 5,
    type: 'debit',
    description: 'Transfer to Access Bank',
    amount: 125000,
    date: 'Nov 18, 3:45 PM',
    status: 'failed'
  }];
  return <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h3>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
            View all
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {transactions.map(transaction => <div key={transaction.id} className={`p-6 hover:bg-gray-50 transition-colors ${transaction.status === 'failed' ? 'bg-red-50/30' : ''}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.status === 'failed' ? 'bg-red-100' : transaction.type === 'credit' ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {transaction.status === 'failed' ? <XCircleIcon className="w-5 h-5 text-red-600" /> : transaction.type === 'credit' ? <ArrowDownLeftIcon className="w-5 h-5 text-green-600" /> : <ArrowUpRightIcon className="w-5 h-5 text-gray-600" />}
                </div>
                <div>
                  <p className={`font-medium ${transaction.status === 'failed' ? 'text-red-900' : 'text-gray-900'}`}>
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${transaction.status === 'failed' ? 'text-red-600' : transaction.type === 'credit' ? 'text-green-600' : 'text-gray-900'}`}>
                  {transaction.type === 'credit' ? '+' : '-'}₦
                  {transaction.amount.toLocaleString()}
                </p>
                {transaction.status === 'failed' && <p className="text-xs text-red-600 mt-1">Failed</p>}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}