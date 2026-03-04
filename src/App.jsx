
import Register from './auth/components/register';
import Login from './auth/login'
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