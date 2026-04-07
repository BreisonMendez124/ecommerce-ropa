import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Button from '../components/button/Button';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import { productService, authService } from '../services/api';

export default function AdminProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (!user || user.id_rol !== 1) {
      alert('Acceso denegado. Solo administradores.');
      navigate('/catalog');
      return;
    }
    loadProducts();
  }, [navigate]);

  const loadProducts = async () => {
    try {
      const response = await productService.getAll();
      if (response.success) {
        setProducts(response.data);
      } else {
        setError('Error al cargar productos');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSubmit = async (productData) => {
    setFormLoading(true);
    setError('');

    try {
      let response;
      if (editingProduct) {
        response = await productService.update(editingProduct.id, productData);
      } else {
        response = await productService.create(productData);
      }

      if (response.success) {
        setShowForm(false);
        setEditingProduct(null);
        loadProducts();
      } else {
        setError(response.message || 'Error al guardar producto');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
      console.error('Error saving product:', err);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return;

    try {
      const response = await productService.delete(id);
      if (response.success) {
        loadProducts();
      } else {
        setError(response.message || 'Error al eliminar producto');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
      console.error('Error deleting product:', err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
    setError('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Administración de Productos
            </h1>
            <p className="text-gray-600">Gestiona el catálogo de productos</p>
          </div>
          <Button onClick={handleCreate}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nuevo Producto
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {showForm && (
          <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
            </h2>
            <ProductForm
              product={editingProduct}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
              loading={formLoading}
            />
          </div>
        )}

        {products.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No hay productos registrados</p>
          </div>
        ) : (
          <ProductTable
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
