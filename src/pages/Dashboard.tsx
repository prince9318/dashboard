import { DollarSign, ShoppingBag, Store, Bike, TrendingUp, Clock } from 'lucide-react';
import StatCard from '../components/Dashboard/StatCard';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Orders"
          value="1,234"
          icon={ShoppingBag}
          trend="12% from yesterday"
          trendUp={true}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Total Revenue"
          value="$45,678"
          icon={DollarSign}
          trend="8% from yesterday"
          trendUp={true}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard
          title="Active Restaurants"
          value="156"
          icon={Store}
          trend="3 new today"
          trendUp={true}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
        />
        <StatCard
          title="Delivery Partners"
          value="89"
          icon={Bike}
          trend="45 active now"
          trendUp={true}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Recent Orders</h3>
            <button className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <ShoppingBag size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Order #{1000 + i}</p>
                    <p className="text-sm text-slate-600">Restaurant {i}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-slate-900">${(25 + i * 10).toFixed(2)}</p>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Performance Metrics</h3>
            <TrendingUp size={20} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Order Success Rate</span>
                <span className="text-sm font-bold text-slate-900">94%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">Customer Satisfaction</span>
                <span className="text-sm font-bold text-slate-900">88%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-600">On-Time Delivery</span>
                <span className="text-sm font-bold text-slate-900">91%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-2 mb-1">
              <Clock size={18} className="text-orange-600" />
              <span className="text-sm font-medium text-orange-900">Avg. Delivery Time</span>
            </div>
            <p className="text-2xl font-bold text-orange-600">28 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
