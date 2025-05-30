import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, X } from 'lucide-react';

const AlertMessage = ({ type, message, onDismiss }) => {
  const bgColor = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' :
                  type === 'error' ? 'bg-red-100 border-red-400 text-red-700' :
                  'bg-blue-100 border-blue-400 text-blue-700';
  const Icon = type === 'success' ? CheckCircle : type === 'error' ? XCircle : AlertTriangle;

  if (!message) return null;

  return (
    <div className={`border-l-4 p-4 rounded-md shadow-sm ${bgColor} my-4`} role="alert">
      <div className="flex items-center">
        <Icon size={20} className="mr-3" />
        <p className="flex-grow">{message}</p>
        {onDismiss && (
          <button onClick={onDismiss} className="ml-4 text-current hover:opacity-75">
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertMessage;