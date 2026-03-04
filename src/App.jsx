import Register from './auth/components/Register';
import Login from './auth/Login'
import Catalog from './catalog/Catalog'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;