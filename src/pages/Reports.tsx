import { TrendingUp, DollarSign, ShoppingBag, Users, Download, Calendar } from 'lucide-react';

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Reports & Analytics</h2>
          <p className="text-slate-600 mt-1">View detailed insights and performance metrics</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <Download size={20} />
          Export Report
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-slate-600" />
            <span className="font-medium text-slate-900">Date Range:</span>
          </div>
          <input
            type="date"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <span className="text-slate-600">to</span>
          <input
            type="date"
            className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
            Apply
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900">$124,567</h3>
            </div>
          </div>
          <p className="text-sm text-green-600">↑ 15.3% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Orders</p>
              <h3 className="text-2xl font-bold text-slate-900">8,432</h3>
            </div>
          </div>
          <p className="text-sm text-green-600">↑ 12.5% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="text-purple-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-600">New Customers</p>
              <h3 className="text-2xl font-bold text-slate-900">1,245</h3>
            </div>
          </div>
          <p className="text-sm text-green-600">↑ 8.2% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-orange-600" size={24} />
            </div>
            <div>
              <p className="text-sm text-slate-600">Avg Order Value</p>
              <h3 className="text-2xl font-bold text-slate-900">$34.20</h3>
            </div>
          </div>
          <p className="text-sm text-red-600">↓ 2.1% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Performing Restaurants</h3>
          <div className="space-y-4">
            {[
              { name: 'Pizza Paradise', revenue: 15420, orders: 342 },
              { name: 'Burger House', revenue: 12350, orders: 298 },
              { name: 'Sushi Central', revenue: 11890, orders: 256 },
              { name: 'Thai Kitchen', revenue: 9670, orders: 213 },
              { name: 'Mexican Grill', revenue: 8540, orders: 187 },
            ].map((restaurant, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{restaurant.name}</p>
                    <p className="text-sm text-slate-600">{restaurant.orders} orders</p>
                  </div>
                </div>
                <p className="font-semibold text-slate-900">${restaurant.revenue.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Order Status Distribution</h3>
          <div className="space-y-4">
            {[
              { status: 'Delivered', count: 6234, percentage: 74, color: 'bg-green-500' },
              { status: 'In Progress', count: 1456, percentage: 17, color: 'bg-orange-500' },
              { status: 'Cancelled', count: 542, percentage: 6, color: 'bg-red-500' },
              { status: 'Pending', count: 200, percentage: 3, color: 'bg-yellow-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.status}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {item.count} ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Revenue Trends</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {[42, 65, 58, 73, 68, 82, 75, 88, 79, 91, 85, 95].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-lg hover:from-orange-600 hover:to-orange-400 transition-all cursor-pointer" style={{ height: `${height}%` }}></div>
              <span className="text-xs text-slate-600">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
