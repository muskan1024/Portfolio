import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Global error handling
    const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
    console.error('API Error:', errorMessage);
    return Promise.reject(error);
  }
);

// Contact Form API
export const submitContactForm = async (data) => {
  try {
    const response = await api.post('/contact', data);
    return { success: true, data: response };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to send message' 
    };
  }
};

// Blog APIs
export const getBlogPosts = async () => {
  try {
    const response = await api.get('/blogs');
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await api.get(`/blogs/${id}`);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Analytics API (optional)
export const trackVisitor = async (data) => {
  try {
    const response = await api.post('/analytics/visit', data);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Newsletter subscription (optional)
export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post('/newsletter/subscribe', { email });
    return { success: true, data: response };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to subscribe' 
    };
  }
};

export default api;
