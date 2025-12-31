import { FileText, Download, Calendar, Plus } from 'lucide-react'

const reports = [
  {
    id: 1,
    name: 'Monthly Revenue Report',
    type: 'Revenue',
    date: '2024-01-15',
    status: 'completed',
  },
  {
    id: 2,
    name: 'User Acquisition Report',
    type: 'Users',
    date: '2024-01-14',
    status: 'completed',
  },
  {
    id: 3,
    name: 'Marketing Campaign Analysis',
    type: 'Marketing',
    date: '2024-01-13',
    status: 'processing',
  },
  {
    id: 4,
    name: 'Q4 Performance Summary',
    type: 'Performance',
    date: '2024-01-10',
    status: 'completed',
  },
  {
    id: 5,
    name: 'Customer Churn Report',
    type: 'Users',
    date: '2024-01-08',
    status: 'completed',
  },
]

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Reports
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Generate and download custom reports
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors">
          <Plus size={20} />
          Create Report
        </button>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: 'Revenue Report', desc: 'Sales and revenue metrics' },
          { name: 'User Report', desc: 'User growth and engagement' },
          { name: 'Marketing Report', desc: 'Campaign performance' },
        ].map((template) => (
          <div
            key={template.name}
            className="card p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <FileText size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {template.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {template.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="card">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Reports
          </h2>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <FileText size={20} className="text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">
                    {report.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {report.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    report.status === 'completed'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}
                >
                  {report.status}
                </span>
                <button
                  disabled={report.status !== 'completed'}
                  className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
