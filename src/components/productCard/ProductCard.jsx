export default function ProductCard({ product, addToCart }) {
  const imageUrl = product.imagen_url || 'https://via.placeholder.com/300x300?text=Sin+Imagen';
  
  return (
    <div className="group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col transform hover:-translate-y-2">
        <div className="relative overflow-hidden h-64">
          <img
            src={imageUrl}
            alt={product.nombre}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ${product.precio}
          </div>
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              ¡Últimas {product.stock} unidades!
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                Agotado
              </span>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
            {product.nombre}
          </h3>
          {product.descripcion && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.descripcion}
            </p>
          )}
          
          <button
            onClick={() => addToCart(product)}
            disabled={product.stock === 0}
            className={`mt-auto w-full font-semibold py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 ${
              product.stock === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{product.stock === 0 ? 'Agotado' : 'Agregar al carrito'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}