import Button from '../../components/button/Button';

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Descripción</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Precio</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Stock</th>
            <th className="px-6 py-3 text-center text-sm font-semibold">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-900">{product.id}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {product.nombre}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                {product.descripcion}
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-purple-600">
                ${product.precio}
              </td>
              <td className="px-6 py-4 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.stock === 0 
                    ? 'bg-red-100 text-red-800' 
                    : product.stock <= 5 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {product.stock}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex justify-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(product)}
                  >
                    Editar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onDelete(product.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
