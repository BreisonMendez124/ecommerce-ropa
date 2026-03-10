import ProductCard from "../components/productCard/ProductCard";
import Navbar from "../components/navbar/Navbar";
import { useCart } from "../context/CartContext";

export default function Catalog() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Camisa Oversize",
      price: 29.99,
      image: "https://cdn.pixabay.com/photo/2024/02/25/13/30/shoes-8595773_1280.jpg",
    },
    {
      id: 2,
      name: "Chaqueta Denim",
      price: 59.99,
      image: "https://cdn.pixabay.com/photo/2012/04/13/14/55/jacket-32714_1280.png",
    },
    {
      id: 3,
      name: "Camisa Casual",
      price: 45.99,
      image: "https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png",
    },
    {
      id: 4,
      name: "Pantalón",
      price: 39.99,
      image: "https://cdn.pixabay.com/photo/2013/07/13/11/32/pants-158358_1280.png",
    },
    {
      id: 5,
      name: "Zapatos - Convers",
      price: 58.12,
      image: "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg",
    },
    {
      id: 6,
      name: "Vestido rosa",
      price: 10.12,
      image: "https://cdn.pixabay.com/photo/2014/03/24/13/41/prom-dress-294042_1280.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Catálogo de Ropa
          </h1>
          <p className="text-gray-600 text-lg">
            Descubre las últimas tendencias en moda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}