import React from 'react';

function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="flex items-start justify-between p-4 mb-4 text-sm text-red-800 bg-red-50 border-l-4 border-red-500 rounded-r-lg shadow-sm transition-all duration-200">
      <div className="flex items-start gap-3">
        <svg 
          className="w-5 h-5 text-red-500 shrink-0 mt-0.5" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
            clipRule="evenodd" 
          />
        </svg>
        <div>
          <span className="font-semibold block mb-0.5">Validation Error</span>
          <p className="text-red-700 leading-relaxed">{message}</p>
        </div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="text-red-400 hover:text-red-600 p-1 rounded-md transition-colors"
          title="Dismiss alert"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;