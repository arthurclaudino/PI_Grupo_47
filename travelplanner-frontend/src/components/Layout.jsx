import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;
