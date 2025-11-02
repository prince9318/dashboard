import { Plus, Search, Star, MapPin, Phone, Mail, Edit, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';

export default function Restaurants() {
  const [searchTerm, setSearchTerm] = useState('');

  const restaurants = [
    {
      id: '1',
      name: 'Pizza Paradise',
      email: 'contact@pizzaparadise.com',
      phone: '+1 234-567-8900',
      address: '123 Main St, New York, NY',
      cuisine: 'Italian',
      rating: 4.5,
      status: 'active',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?w=200',
    },
    {
      id: '2',
      name: 'Burger House',
      email: 'info@burgerhouse.com',
      phone: '+1 234-567-8901',
      address: '456 Oak Ave, Los Angeles, CA',
      cuisine: 'American',
      rating: 4.2,
      status: 'active',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200',
    },
    {
      id: '3',
      name: 'Sushi Central',
      email: 'hello@sushicentral.com',
      phone: '+1 234-567-8902',
      address: '789 Pine Rd, San Francisco, CA',
      cuisine: 'Japanese',
      rating: 4.8,
      status: 'active',
      image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?w=200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Restaurant Management</h2>
          <p className="text-slate-600 mt-1">Manage all restaurants and their details</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus size={20} />
          Add Restaurant
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search restaurants by name, cuisine, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded">
                    {restaurant.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{restaurant.name}</h3>
                    <p className="text-sm text-slate-600">{restaurant.cuisine}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded">
                    <Star size={14} className="text-yellow-600 fill-yellow-600" />
                    <span className="text-sm font-medium text-yellow-900">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin size={16} />
                    <span>{restaurant.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone size={16} />
                    <span>{restaurant.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail size={16} />
                    <span>{restaurant.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                    <Eye size={16} />
                    <span className="text-sm font-medium">View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors">
                    <Edit size={16} />
                    <span className="text-sm font-medium">Edit</span>
                  </button>
                  <button className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
