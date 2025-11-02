import { Search, Filter, Eye, Edit, Ban } from 'lucide-react';
import { useState } from 'react';

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234-567-8900',
      role: 'customer',
      status: 'active',
      joinedDate: '2024-01-10',
      totalOrders: 45,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 234-567-8901',
      role: 'customer',
      status: 'active',
      joinedDate: '2024-01-12',
      totalOrders: 23,
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@pizzaparadise.com',
      phone: '+1 234-567-8902',
      role: 'restaurant_owner',
      status: 'active',
      joinedDate: '2024-01-05',
      totalOrders: 0,
    },
    {
      id: '4',
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      phone: '+1 234-567-8903',
      role: 'customer',
      status: 'blocked',
      joinedDate: '2024-01-08',
      totalOrders: 12,
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    const colors = {
      customer: 'bg-blue-100 text-blue-800',
      restaurant_owner: 'bg-purple-100 text-purple-800',
      admin: 'bg-red-100 text-red-800',
    };
    return colors[role as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-yellow-100 text-yellow-800',
      blocked: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
          <p className="text-slate-600 mt-1">Manage all users and their permissions</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search users by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Roles</option>
            <option>Customer</option>
            <option>Restaurant Owner</option>
            <option>Admin</option>
          </select>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Blocked</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
            <Filter size={20} className="text-slate-600" />
            <span className="font-medium text-slate-700">Filters</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">User</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Contact</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Role</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Joined Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Orders</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{user.name}</p>
                        <p className="text-sm text-slate-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">{user.phone}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${getRoleBadgeColor(user.role)}`}>
                      {user.role.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">{user.joinedDate}</td>
                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{user.totalOrders}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-orange-100 text-orange-600 rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
                        <Ban size={16} />
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
