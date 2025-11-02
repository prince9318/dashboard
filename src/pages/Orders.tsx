import { Search, Filter, Eye, Download } from 'lucide-react';
import { useState } from 'react';

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: '1001',
      customerName: 'John Doe',
      restaurantName: 'Pizza Paradise',
      items: 3,
      totalAmount: 45.99,
      status: 'pending',
      orderDate: '2024-01-15 10:30 AM',
      paymentMethod: 'Card',
      deliveryAddress: '123 Main St, New York',
    },
    {
      id: '1002',
      customerName: 'Jane Smith',
      restaurantName: 'Burger House',
      items: 2,
      totalAmount: 29.99,
      status: 'preparing',
      orderDate: '2024-01-15 11:15 AM',
      paymentMethod: 'Cash',
      deliveryAddress: '456 Oak Ave, Los Angeles',
    },
    {
      id: '1003',
      customerName: 'Mike Johnson',
      restaurantName: 'Sushi Central',
      items: 5,
      totalAmount: 78.50,
      status: 'dispatched',
      orderDate: '2024-01-15 09:45 AM',
      paymentMethod: 'Card',
      deliveryAddress: '789 Pine Rd, San Francisco',
    },
    {
      id: '1004',
      customerName: 'Sarah Williams',
      restaurantName: 'Pizza Paradise',
      items: 1,
      totalAmount: 15.99,
      status: 'delivered',
      orderDate: '2024-01-15 08:30 AM',
      paymentMethod: 'Card',
      deliveryAddress: '321 Elm St, Chicago',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-blue-100 text-blue-800',
      preparing: 'bg-purple-100 text-purple-800',
      ready: 'bg-cyan-100 text-cyan-800',
      dispatched: 'bg-orange-100 text-orange-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return colors[status as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Order Management</h2>
          <p className="text-slate-600 mt-1">Track and manage all customer orders</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Download size={20} />
          Export Orders
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by order ID, customer name, or restaurant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Preparing</option>
            <option>Ready</option>
            <option>Dispatched</option>
            <option>Delivered</option>
            <option>Cancelled</option>
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
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Order ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Restaurant</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Items</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Total</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Date & Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Payment</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 font-medium text-slate-900">#{order.id}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{order.customerName}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{order.restaurantName}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{order.items}</td>
                  <td className="py-3 px-4 text-sm font-medium text-slate-900">${order.totalAmount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded capitalize ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-600">{order.orderDate}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{order.paymentMethod}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-orange-100 text-orange-600 rounded-lg transition-colors">
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-600">Showing 1 to 4 of 4 orders</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 text-slate-700 text-sm font-medium">
              Previous
            </button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded text-sm font-medium">
              1
            </button>
            <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 text-slate-700 text-sm font-medium">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
