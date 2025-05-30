import React, { useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import LoadingSpinner from './components/LoadingSpinner';
import AlertMessage from './components/AlertMessage';
import DashboardPage from './pages/DashboardPage';
import AuthPage from './pages/AuthPage';
import CustomersPage from './pages/CustomersPage';
import ProductsPage from './pages/ProductsPage';
import InvoicesListPage from './pages/InvoicesListPage';
import InvoiceFormPage from './pages/InvoiceFormPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'login': return <AuthPage />;
      case 'dashboard': return <DashboardPage />;
      case 'customers': return <CustomersPage />;
      case 'products': return <ProductsPage />;
      case 'invoices': return <InvoicesListPage />;
      case 'new-invoice': return <InvoiceFormPage />;
      case 'profile': return <ProfilePage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div>
      <h1>GST Biller App (Full Split)</h1>
      {renderPage()}
    </div>
  );
};

export default App;
