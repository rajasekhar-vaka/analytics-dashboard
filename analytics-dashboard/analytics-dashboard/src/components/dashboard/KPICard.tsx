import { ReactNode, useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '../../utils/cn'

interface KPICardProps {
  title: string
  value: number
  format?: 'number' | 'currency' | 'percent'
  trend?: number
  trendDirection?: 'up' | 'down' | 'neutral'
  icon?: ReactNode
  className?: string
  loading?: boolean
}

export default function KPICard({
  title,
  value,
  format = 'number',
  trend,
  trendDirection = 'neutral',
  icon,
  className,
  loading = false,
}: KPICardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  // Animate number counting up
  useEffect(() => {
    if (loading) return

    const duration = 1000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, loading])

  const formatValue = (val: number) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(val)
      case 'percent':
        return `${val.toFixed(1)}%`
      default:
        return new Intl.NumberFormat('en-US').format(val)
    }
  }

  const getTrendIcon = () => {
    switch (trendDirection) {
      case 'up':
        return <TrendingUp size={16} />
      case 'down':
        return <TrendingDown size={16} />
      default:
        return <Minus size={16} />
    }
  }

  const getTrendColor = () => {
    switch (trendDirection) {
      case 'up':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30'
      case 'down':
        return 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30'
      default:
        return 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700'
    }
  }

  if (loading) {
    return (
      <div className={cn('card p-6', className)}>
        <div className="skeleton h-4 w-24 rounded mb-3" />
        <div className="skeleton h-8 w-32 rounded mb-2" />
        <div className="skeleton h-4 w-16 rounded" />
      </div>
    )
  }

  return (
    <div className={cn('card p-6 hover:shadow-md transition-shadow', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {formatValue(displayValue)}
          </p>
          {trend !== undefined && (
            <div className="flex items-center gap-1.5 mt-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
                  getTrendColor()
                )}
              >
                {getTrendIcon()}
                {Math.abs(trend)}%
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                vs last month
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
