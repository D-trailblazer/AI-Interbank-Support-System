import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { TransferForm } from './pages/TransferForm';
import { ProcessingTransfer } from './pages/ProcessingTransfer';
import { TransferFailed } from './pages/TransferFailed';
import { SupportChat } from './pages/SupportChat';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transfer" element={<TransferForm />} />
        <Route path="/processing" element={<ProcessingTransfer />} />
        <Route path="/failed" element={<TransferFailed />} />
        <Route path="/support" element={<SupportChat />} />
      </Routes>
    </BrowserRouter>;
}