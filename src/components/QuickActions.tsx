import React from 'react';
import { PhoneIcon, FileTextIcon, CreditCardIcon, HeadphonesIcon } from 'lucide-react';
export function QuickActions() {
  const actions = [{
    icon: PhoneIcon,
    label: 'Airtime',
    color: 'bg-green-50 text-green-600'
  }, {
    icon: FileTextIcon,
    label: 'Pay Bills',
    color: 'bg-purple-50 text-purple-600'
  }, {
    icon: CreditCardIcon,
    label: 'Cards',
    color: 'bg-orange-50 text-orange-600'
  }, {
    icon: HeadphonesIcon,
    label: 'Support',
    color: 'bg-blue-50 text-blue-600'
  }];
  return <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map(action => <button key={action.label} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
            <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {action.label}
            </span>
          </button>)}
      </div>
    </div>;
}