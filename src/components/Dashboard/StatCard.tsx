import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  iconBgColor: string;
  iconColor: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
  iconBgColor,
  iconColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
          {trend && (
            <p className={`text-sm mt-2 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        <div className={`${iconBgColor} p-3 rounded-lg`}>
          <Icon className={iconColor} size={24} />
        </div>
      </div>
    </div>
  );
}
