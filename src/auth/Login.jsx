import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login Data:" : "Register Data:", formData);
    navigate("/catalog");
  };

  const handleRegister = ( ) => {
    navigate("/register");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">
          {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="ejemplo@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="********"
              required
              minLength="6"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Ingresar" : "Registrarse"}
          </button>
        </form>

        <div className="text-center mt-3">
          <small>
            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
            <button
              className="btn btn-link p-0 ms-2"
              onClick={() => handleRegister()}
            >
              {isLogin ? "Regístrate" : "Inicia sesión"}
            </button>
          </small>
        </div>
      </div>
    </div>
  );
}