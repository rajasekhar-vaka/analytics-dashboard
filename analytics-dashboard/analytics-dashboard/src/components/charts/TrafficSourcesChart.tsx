import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { cn } from '../../utils/cn'

interface TrafficSource {
  name: string
  value: number
  color: string
}

interface TrafficSourcesChartProps {
  data: TrafficSource[]
  className?: string
}

export default function TrafficSourcesChart({ data, className }: TrafficSourcesChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload
      const percentage = ((item.value / total) * 100).toFixed(1)
      return (
        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
          <p className="text-sm font-medium text-slate-900 dark:text-white">
            {item.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {item.value.toLocaleString()} visits ({percentage}%)
          </p>
        </div>
      )
    }
    return null
  }

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-col gap-2 mt-4">
        {payload.map((entry: any, index: number) => {
          const item = data[index]
          const percentage = ((item.value / total) * 100).toFixed(1)
          return (
            <div key={entry.value} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {entry.value}
                </span>
              </div>
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {percentage}%
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn('card p-6', className)}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Traffic Sources
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Where your visitors come from
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <CustomLegend payload={data.map((item) => ({ value: item.name, color: item.color }))} />
    </div>
  )
}
