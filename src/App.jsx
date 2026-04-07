import Register from './auth/components/Register';
import Login from './auth/Login'
import Catalog from './catalog/Catalog'
import Cart from './cart/Cart'
import AdminProducts from './admin/AdminProducts'
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/catalog" 
          element={
            <ProtectedRoute>
              <Catalog />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/products" 
          element={
            <ProtectedRoute requireAdmin>
              <AdminProducts />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </CartProvider>
  );
}

export default App;