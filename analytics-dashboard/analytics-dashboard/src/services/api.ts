import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

/**
 * Axios instance with default configuration
 */
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

/**
 * API service methods
 */
export const apiService = {
  // GET request
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.get<T>(url, config)
  },

  // POST request
  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.post<T>(url, data, config)
  },

  // PUT request
  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.put<T>(url, data, config)
  },

  // PATCH request
  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.patch<T>(url, data, config)
  },

  // DELETE request
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return api.delete<T>(url, config)
  },
}

/**
 * Dashboard API endpoints
 */
export const dashboardApi = {
  getOverview: () => apiService.get('/dashboard/overview'),
  getRevenue: (period: string) => apiService.get(`/dashboard/revenue?period=${period}`),
  getTrafficSources: () => apiService.get('/dashboard/traffic-sources'),
  getRecentTransactions: (page: number, limit: number) =>
    apiService.get(`/dashboard/transactions?page=${page}&limit=${limit}`),
}

/**
 * Analytics API endpoints
 */
export const analyticsApi = {
  getPageViews: (dateRange: string) => apiService.get(`/analytics/page-views?range=${dateRange}`),
  getDailyActiveUsers: (dateRange: string) => apiService.get(`/analytics/dau?range=${dateRange}`),
  getDeviceStats: () => apiService.get('/analytics/devices'),
  getBrowserStats: () => apiService.get('/analytics/browsers'),
}

/**
 * Reports API endpoints
 */
export const reportsApi = {
  getReports: () => apiService.get('/reports'),
  createReport: (data: { name: string; type: string }) => apiService.post('/reports', data),
  downloadReport: (id: string) => apiService.get(`/reports/${id}/download`, { responseType: 'blob' }),
}

export default api
