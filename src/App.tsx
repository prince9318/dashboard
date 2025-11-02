import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Restaurants from './pages/Restaurants';
import MenuItems from './pages/MenuItems';
import Orders from './pages/Orders';
import Users from './pages/Users';
import DeliveryPartners from './pages/DeliveryPartners';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'restaurants':
        return <Restaurants />;
      case 'menu':
        return <MenuItems />;
      case 'orders':
        return <Orders />;
      case 'users':
        return <Users />;
      case 'delivery':
        return <DeliveryPartners />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
