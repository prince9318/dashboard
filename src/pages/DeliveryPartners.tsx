import { Search, Plus, Star, MapPin, Phone, Mail, Edit } from 'lucide-react';
import { useState } from 'react';

export default function DeliveryPartners() {
  const [searchTerm, setSearchTerm] = useState('');

  const deliveryPartners = [
    {
      id: '1',
      name: 'Alex Turner',
      email: 'alex.turner@delivery.com',
      phone: '+1 234-567-8910',
      vehicleType: 'Motorcycle',
      vehicleNumber: 'ABC-1234',
      status: 'available',
      rating: 4.8,
      totalDeliveries: 342,
      currentLocation: 'Downtown Area',
    },
    {
      id: '2',
      name: 'Maria Garcia',
      email: 'maria.garcia@delivery.com',
      phone: '+1 234-567-8911',
      vehicleType: 'Bicycle',
      vehicleNumber: 'BIC-5678',
      status: 'busy',
      rating: 4.9,
      totalDeliveries: 278,
      currentLocation: 'North Side',
    },
    {
      id: '3',
      name: 'James Wilson',
      email: 'james.wilson@delivery.com',
      phone: '+1 234-567-8912',
      vehicleType: 'Scooter',
      vehicleNumber: 'SCT-9012',
      status: 'offline',
      rating: 4.6,
      totalDeliveries: 195,
      currentLocation: 'East District',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      available: 'bg-green-100 text-green-800',
      busy: 'bg-orange-100 text-orange-800',
      offline: 'bg-slate-100 text-slate-800',
    };
    return colors[status as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Delivery Partner Management</h2>
          <p className="text-slate-600 mt-1">Manage and track all delivery partners</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus size={20} />
          Add Delivery Partner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-1">Available</p>
              <h3 className="text-3xl font-bold text-green-600">
                {deliveryPartners.filter(p => p.status === 'available').length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-1">On Delivery</p>
              <h3 className="text-3xl font-bold text-orange-600">
                {deliveryPartners.filter(p => p.status === 'busy').length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600 mb-1">Offline</p>
              <h3 className="text-3xl font-bold text-slate-600">
                {deliveryPartners.filter(p => p.status === 'offline').length}
              </h3>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search delivery partners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Status</option>
            <option>Available</option>
            <option>Busy</option>
            <option>Offline</option>
          </select>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Vehicles</option>
            <option>Motorcycle</option>
            <option>Bicycle</option>
            <option>Scooter</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryPartners.map((partner) => (
            <div key={partner.id} className="border border-slate-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {partner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{partner.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium text-slate-700">{partner.rating}</span>
                      <span className="text-xs text-slate-500">({partner.totalDeliveries})</span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${getStatusColor(partner.status)}`}>
                  {partner.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone size={14} />
                  <span>{partner.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail size={14} />
                  <span className="truncate">{partner.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={14} />
                  <span>{partner.currentLocation}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-500">Vehicle</p>
                  <p className="text-sm font-medium text-slate-900">{partner.vehicleType}</p>
                  <p className="text-xs text-slate-600">{partner.vehicleNumber}</p>
                </div>
                <button className="p-2 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-lg transition-colors">
                  <Edit size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
