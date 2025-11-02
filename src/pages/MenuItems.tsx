import { Plus, Search, Edit, Trash2, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function MenuItems() {
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    {
      id: '1',
      name: 'Margherita Pizza',
      restaurantName: 'Pizza Paradise',
      category: 'Pizza',
      price: 12.99,
      isVeg: true,
      isAvailable: true,
      preparationTime: 25,
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?w=200',
    },
    {
      id: '2',
      name: 'Cheeseburger',
      restaurantName: 'Burger House',
      category: 'Burgers',
      price: 9.99,
      isVeg: false,
      isAvailable: true,
      preparationTime: 15,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200',
    },
    {
      id: '3',
      name: 'California Roll',
      restaurantName: 'Sushi Central',
      category: 'Sushi',
      price: 14.99,
      isVeg: false,
      isAvailable: true,
      preparationTime: 20,
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?w=200',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Menu Management</h2>
          <p className="text-slate-600 mt-1">Manage all menu items across restaurants</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus size={20} />
          Add Menu Item
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Categories</option>
            <option>Pizza</option>
            <option>Burgers</option>
            <option>Sushi</option>
            <option>Desserts</option>
          </select>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Restaurants</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Item</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Restaurant</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Price</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Type</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Prep Time</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="font-medium text-slate-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">{item.restaurantName}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{item.category}</td>
                  <td className="py-3 px-4 text-sm font-medium text-slate-900">${item.price}</td>
                  <td className="py-3 px-4">
                    {item.isVeg ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                        <Leaf size={12} />
                        Veg
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                        Non-Veg
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        item.isAvailable
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.isAvailable ? 'Available' : 'Unavailable'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">{item.preparationTime} min</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-orange-100 text-orange-600 rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
