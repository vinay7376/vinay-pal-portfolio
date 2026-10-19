import { FEATURED_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

const API_BASE = '/api';
const DIRECT_BACKEND = 'http://127.0.0.1:5051/api';

const resilientFetch = async (endpoint, options = {}) => {
  // 1. Try Vite Proxy route first (/api/...)
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      signal: AbortSignal.timeout(3000),
    });
    // If proxy returned 500 / 502 / 504, upstream backend was likely unreachable via proxy
    if (res.status >= 500) {
      throw new Error(`Proxy error ${res.status}`);
    }
    return await res.json();
  } catch (proxyErr) {
    // 2. Fallback to direct backend URL (http://127.0.0.1:5051/api/...)
    try {
      const directRes = await fetch(`${DIRECT_BACKEND}${endpoint}`, {
        ...options,
        signal: AbortSignal.timeout(3000),
      });
      return await directRes.json();
    } catch (directErr) {
      throw new Error(directErr.message || proxyErr.message);
    }
  }
};

export const checkServerHealth = async () => {
  try {
    const data = await resilientFetch('/health');
    return data;
  } catch (error) {
    return {
      status: 'offline',
      database: { status: 'offline' },
      message: error.message,
    };
  }
};

export const fetchProjects = async () => {
  try {
    const data = await resilientFetch('/projects');
    return data.data || FEATURED_PROJECTS;
  } catch (error) {
    return FEATURED_PROJECTS;
  }
};

export const submitContactForm = async (formData) => {
  let data;
  try {
    data = await resilientFetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  } catch (err) {
    throw new Error('Backend server is temporarily unreachable. Please reach out directly at vphandia7376@gmail.com.');
  }

  if (!data || !data.success) {
    const errorMsg = data && data.errors ? data.errors.join(', ') : (data && data.message) || 'Submission failed';
    throw new Error(errorMsg);
  }

  return data;
};
