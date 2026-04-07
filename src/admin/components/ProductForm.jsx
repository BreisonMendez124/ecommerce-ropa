import { useState, useEffect } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function ProductForm({ product, onSubmit, onCancel, loading }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    imagen_url: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        nombre: product.nombre || '',
        descripcion: product.descripcion || '',
        precio: product.precio || '',
        stock: product.stock || '',
        imagen_url: product.imagen_url || ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nombre del producto"
        type="text"
        name="nombre"
        placeholder="Ej: Camisa Oversize"
        value={formData.nombre}
        onChange={handleChange}
        required
      />

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Descripción
        </label>
        <textarea
          name="descripcion"
          placeholder="Descripción del producto"
          value={formData.descripcion}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          required
        />
      </div>

      <Input
        label="Precio"
        type="number"
        name="precio"
        placeholder="0.00"
        step="0.01"
        min="0"
        value={formData.precio}
        onChange={handleChange}
        required
      />

      <Input
        label="Stock"
        type="number"
        name="stock"
        placeholder="0"
        min="0"
        value={formData.stock}
        onChange={handleChange}
        required
      />

      <Input
        label="URL de la imagen"
        type="url"
        name="imagen_url"
        placeholder="https://ejemplo.com/imagen.jpg"
        value={formData.imagen_url}
        onChange={handleChange}
      />

      <div className="flex space-x-3 pt-4">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? 'Guardando...' : product ? 'Actualizar' : 'Crear'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
          Cancelar
        </Button>
      </div>
    </form>
  );
}
