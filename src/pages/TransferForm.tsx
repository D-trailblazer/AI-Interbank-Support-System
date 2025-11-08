import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CheckCircleIcon } from 'lucide-react';
import { Header } from '../components/Header';
export function TransferForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bank: 'GTBank',
    accountNumber: '',
    beneficiaryName: '',
    amount: '',
    description: ''
  });
  const [isValidated, setIsValidated] = useState(false);
  const handleAccountNumberChange = (value: string) => {
    setFormData({
      ...formData,
      accountNumber: value
    });
    if (value.length === 10) {
      setTimeout(() => {
        setFormData({
          ...formData,
          accountNumber: value,
          beneficiaryName: 'Adebayo Okonkwo'
        });
        setIsValidated(true);
      }, 1000);
    } else {
      setIsValidated(false);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/processing');
  };
  return <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={() => navigate('/')} className="flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Send Money</h1>
          <p className="text-gray-600 mb-8">
            Transfer funds to any Nigerian bank account
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Bank
              </label>
              <select value={formData.bank} onChange={e => setFormData({
              ...formData,
              bank: e.target.value
            })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>GTBank</option>
                <option>Access Bank</option>
                <option>First Bank</option>
                <option>UBA</option>
                <option>Zenith Bank</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number
              </label>
              <input type="text" maxLength={10} value={formData.accountNumber} onChange={e => handleAccountNumberChange(e.target.value)} placeholder="Enter 10-digit account number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            {isValidated && <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-900">
                    Account Verified
                  </p>
                  <p className="text-sm text-green-700">
                    {formData.beneficiaryName}
                  </p>
                </div>
              </div>}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">₦</span>
                <input type="text" value={formData.amount} onChange={e => setFormData({
                ...formData,
                amount: e.target.value
              })} placeholder="0.00" className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (Optional)
              </label>
              <input type="text" value={formData.description} onChange={e => setFormData({
              ...formData,
              description: e.target.value
            })} placeholder="What is this payment for?" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <button type="submit" disabled={!isValidated || !formData.amount} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              Send Money
            </button>
          </form>
        </div>
      </main>
    </div>;
}