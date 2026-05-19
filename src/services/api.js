const API_URL = 'https://dj48qer95x11.cloudfront.net/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

export const authService = {
  async register(userData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  async login(credentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    if (data.success && data.data.token) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.usuario));
    }
    return data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};

export const productService = {
  async getAll() {
    const response = await fetch(`${API_URL}/productos`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  async getById(id) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  async create(productData) {
    const response = await fetch(`${API_URL}/productos`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData)
    });
    return response.json();
  },

  async update(id, productData) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData)
    });
    return response.json();
  },

  async delete(id) {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return response.json();
  }
};

export const tipoIdentificacionService = {
  async getAll() {
    const response = await fetch(`${API_URL}/tipos-identificacion`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};

export const roleService = {
  async getAll() {
    const response = await fetch(`${API_URL}/roles`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};
