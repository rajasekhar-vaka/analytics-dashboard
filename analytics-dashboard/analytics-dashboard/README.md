# Real-Time Analytics Dashboard

A modern, responsive analytics dashboard built with React 18, TypeScript, and Tailwind CSS. Features real-time data visualization, interactive charts, and a clean, professional UI.

![React](https://img.shields.io/badge/React-18.2-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)

## 🎯 Live Demo

[View Live Demo](https://analytics-dashboard-demo.vercel.app)

![Dashboard Preview](docs/dashboard-preview.png)

## ✨ Features

- **📊 Interactive Charts** - Line, Bar, Area, and Pie charts using Recharts
- **⚡ Real-Time Updates** - WebSocket integration for live data streaming
- **🌙 Dark/Light Mode** - Theme toggle with system preference detection
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🔍 Advanced Filtering** - Date range picker, search, and category filters
- **📈 KPI Cards** - Animated counters with trend indicators
- **🗂️ Data Tables** - Sortable, paginated tables with export functionality
- **🔔 Notifications** - Toast notifications for alerts and updates
- **🎨 Modern UI** - Clean design with smooth animations

## 🏗️ Architecture

```
src/
├── components/           # Reusable UI components
│   ├── charts/          # Chart components (Line, Bar, Pie, Area)
│   ├── common/          # Common components (Button, Card, Modal)
│   ├── dashboard/       # Dashboard-specific components
│   └── layout/          # Layout components (Sidebar, Header)
├── hooks/               # Custom React hooks
│   ├── useWebSocket.ts  # Real-time data hook
│   ├── useTheme.ts      # Theme management hook
│   └── useDebounce.ts   # Debounce utility hook
├── services/            # API and data services
│   ├── api.ts           # REST API client
│   └── websocket.ts     # WebSocket service
├── context/             # React Context providers
│   ├── ThemeContext.tsx # Theme state management
│   └── AuthContext.tsx  # Authentication state
├── pages/               # Page components
├── utils/               # Utility functions
└── styles/              # Global styles
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rajasekhar-vaka/analytics-dashboard.git
cd analytics-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 with Hooks |
| Language | TypeScript 5.0 |
| Styling | Tailwind CSS 3.4 |
| Charts | Recharts |
| State Management | React Context + useReducer |
| HTTP Client | Axios |
| Real-time | WebSocket |
| Build Tool | Vite 5.0 |
| Icons | Lucide React |
| Date Handling | date-fns |
| Testing | Vitest + React Testing Library |

## 📊 Dashboard Sections

### 1. Overview Dashboard
- Revenue, Users, Orders, Conversion KPIs
- Revenue trend chart (7-day/30-day/90-day)
- Traffic sources breakdown
- Recent transactions table

### 2. Analytics Page
- Detailed metrics with date range selection
- Comparative analysis (vs previous period)
- Geographic distribution map
- Device and browser breakdown

### 3. Reports Page
- Customizable report builder
- Export to CSV/PDF
- Scheduled report generation
- Historical data comparison

## 🎨 Component Examples

### KPI Card

```tsx
<KPICard
  title="Total Revenue"
  value={125430}
  format="currency"
  trend={12.5}
  trendDirection="up"
  icon={<DollarSign />}
/>
```

### Line Chart

```tsx
<LineChart
  data={revenueData}
  xKey="date"
  yKey="revenue"
  color="#3B82F6"
  showGrid
  animate
/>
```

### Data Table

```tsx
<DataTable
  columns={columns}
  data={transactions}
  sortable
  paginate
  pageSize={10}
  onExport={handleExport}
/>
```

## 🔧 Configuration

### Environment Variables

```env
VITE_API_URL=http://localhost:3001/api
VITE_WS_URL=ws://localhost:3001
VITE_ENABLE_MOCK=true
```

### Theme Customization

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
}
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## 📱 Responsive Design

| Breakpoint | Description |
|------------|-------------|
| `sm` (640px) | Mobile landscape |
| `md` (768px) | Tablet |
| `lg` (1024px) | Desktop |
| `xl` (1280px) | Large desktop |

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t analytics-dashboard .
docker run -p 3000:3000 analytics-dashboard
```

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 2.5s
- **Bundle Size**: < 200KB (gzipped)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rajasekhar Reddy Vaka**
- LinkedIn: [rajasekharreddy-vaka](https://linkedin.com/in/rajasekharreddy-vaka)
- GitHub: [@rajasekhar-vaka](https://github.com/rajasekhar-vaka)
- Email: raja191913@outlook.com

---

Built with ⚛️ React for developers who love clean, performant dashboards.
