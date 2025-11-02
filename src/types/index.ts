export interface Restaurant {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cuisine: string;
  rating: number;
  status: 'active' | 'inactive' | 'pending';
  openingHours: string;
  deliveryTime: string;
  minimumOrder: number;
  image: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  isVeg: boolean;
  isAvailable: boolean;
  preparationTime: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  restaurantId: string;
  restaurantName: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'dispatched' | 'delivered' | 'cancelled';
  deliveryAddress: string;
  orderDate: string;
  deliveryPartnerId?: string;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
}

export interface OrderItem {
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'restaurant_owner' | 'admin';
  status: 'active' | 'inactive' | 'blocked';
  joinedDate: string;
  totalOrders: number;
}

export interface DeliveryPartner {
  id: string;
  name: string;
  email: string;
  phone: string;
  vehicleType: string;
  vehicleNumber: string;
  status: 'available' | 'busy' | 'offline';
  rating: number;
  totalDeliveries: number;
  currentLocation?: string;
}

export interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  activeRestaurants: number;
  activeDeliveryPartners: number;
  pendingOrders: number;
  todayOrders: number;
  todayRevenue: number;
  averageDeliveryTime: number;
}
