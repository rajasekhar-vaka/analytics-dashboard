import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react'
import KPICard from '../components/dashboard/KPICard'
import RevenueChart from '../components/charts/RevenueChart'
import TrafficSourcesChart from '../components/charts/TrafficSourcesChart'
import DataTable from '../components/common/DataTable'

// Mock data
const revenueData = [
  { date: 'Jan 1', revenue: 45000, orders: 120 },
  { date: 'Jan 5', revenue: 52000, orders: 145 },
  { date: 'Jan 10', revenue: 48000, orders: 132 },
  { date: 'Jan 15', revenue: 61000, orders: 165 },
  { date: 'Jan 20', revenue: 55000, orders: 148 },
  { date: 'Jan 25', revenue: 67000, orders: 178 },
  { date: 'Jan 30', revenue: 72000, orders: 195 },
  { date: 'Feb 5', revenue: 69000, orders: 185 },
  { date: 'Feb 10', revenue: 78000, orders: 210 },
  { date: 'Feb 15', revenue: 85000, orders: 228 },
  { date: 'Feb 20', revenue: 82000, orders: 220 },
  { date: 'Feb 25', revenue: 91000, orders: 245 },
  { date: 'Mar 1', revenue: 95000, orders: 255 },
]

const trafficSources = [
  { name: 'Direct', value: 4500, color: '#3b82f6' },
  { name: 'Organic Search', value: 3200, color: '#10b981' },
  { name: 'Social Media', value: 2100, color: '#f59e0b' },
  { name: 'Referral', value: 1800, color: '#8b5cf6' },
  { name: 'Email', value: 1200, color: '#ec4899' },
]

const transactions = [
  {
    id: '1',
    customer: 'John Smith',
    email: 'john@example.com',
    amount: 1250,
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: '2',
    customer: 'Sarah Johnson',
    email: 'sarah@example.com',
    amount: 890,
    status: 'pending',
    date: '2024-01-14',
  },
  {
    id: '3',
    customer: 'Mike Wilson',
    email: 'mike@example.com',
    amount: 2100,
    status: 'completed',
    date: '2024-01-14',
  },
  {
    id: '4',
    customer: 'Emily Brown',
    email: 'emily@example.com',
    amount: 750,
    status: 'failed',
    date: '2024-01-13',
  },
  {
    id: '5',
    customer: 'David Lee',
    email: 'david@example.com',
    amount: 1800,
    status: 'completed',
    date: '2024-01-13',
  },
  {
    id: '6',
    customer: 'Lisa Chen',
    email: 'lisa@example.com',
    amount: 3200,
    status: 'completed',
    date: '2024-01-12',
  },
  {
    id: '7',
    customer: 'James Taylor',
    email: 'james@example.com',
    amount: 450,
    status: 'pending',
    date: '2024-01-12',
  },
  {
    id: '8',
    customer: 'Anna Martinez',
    email: 'anna@example.com',
    amount: 1650,
    status: 'completed',
    date: '2024-01-11',
  },
]

const columns = [
  {
    key: 'customer' as const,
    header: 'Customer',
    sortable: true,
    render: (value: string, row: typeof transactions[0]) => (
      <div>
        <p className="font-medium">{value}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{row.email}</p>
      </div>
    ),
  },
  {
    key: 'amount' as const,
    header: 'Amount',
    sortable: true,
    render: (value: number) => (
      <span className="font-medium">
        ${value.toLocaleString()}
      </span>
    ),
  },
  {
    key: 'status' as const,
    header: 'Status',
    sortable: true,
    render: (value: string) => {
      const statusColors = {
        completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
        failed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      }
      return (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            statusColors[value as keyof typeof statusColors]
          }`}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )
    },
  },
  {
    key: 'date' as const,
    header: 'Date',
    sortable: true,
  },
]

export default function Dashboard() {
  const handleExport = () => {
    // Export logic here
    console.log('Exporting data...')
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <KPICard
          title="Total Revenue"
          value={125430}
          format="currency"
          trend={12.5}
          trendDirection="up"
          icon={<DollarSign size={24} />}
        />
        <KPICard
          title="Total Users"
          value={8420}
          format="number"
          trend={8.2}
          trendDirection="up"
          icon={<Users size={24} />}
        />
        <KPICard
          title="Total Orders"
          value={1842}
          format="number"
          trend={-2.4}
          trendDirection="down"
          icon={<ShoppingCart size={24} />}
        />
        <KPICard
          title="Conversion Rate"
          value={3.24}
          format="percent"
          trend={0.5}
          trendDirection="up"
          icon={<TrendingUp size={24} />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RevenueChart data={revenueData} className="lg:col-span-2" />
        <TrafficSourcesChart data={trafficSources} />
      </div>

      {/* Transactions Table */}
      <DataTable
        columns={columns}
        data={transactions}
        pageSize={5}
        onExport={handleExport}
      />
    </div>
  )
}
