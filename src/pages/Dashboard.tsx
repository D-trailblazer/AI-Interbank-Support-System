import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountBalance } from '../components/AccountBalance';
import { QuickActions } from '../components/QuickActions';
import { RecentTransactions } from '../components/RecentTransactions';
import { Header } from '../components/Header';
export function Dashboard() {
  const navigate = useNavigate();
  const userFirstName = 'James';
  return <div className="min-h-screen bg-gray-50 w-full">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Good afternoon, {userFirstName}
          </h1>
          <p className="text-gray-600">Welcome back to your dashboard</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <AccountBalance onTransferClick={() => navigate('/transfer')} />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
        <RecentTransactions />
      </main>
    </div>;
}

