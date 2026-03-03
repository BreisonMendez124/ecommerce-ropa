import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("¡Las contraseñas no coinciden!");
            return;
        }
        console.log("Registrando usuario:", formData.email);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-sm border-0 p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '12px' }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Crear cuenta</h2>
                    <p className="text-muted small">Únete a nuestra tienda y empieza a comprar</p>
                </div>

                <form onSubmit={handleRegister}>
                    {/* Campo Correo */}
                    <div className="mb-3">
                        <label className="form-label small fw-bold">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="correo@ejemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Campo Contraseña */}
                    <div className="mb-3">
                        <label className="form-label small fw-bold">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Mínimo 6 caracteres"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Confirmar Contraseña */}
                    <div className="mb-4">
                        <label className="form-label small fw-bold">Confirmar contraseña</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Repite tu contraseña"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mb-3" style={{ borderRadius: '8px' }}>
                        Registrarse
                    </button>
                </form>

                <div className="text-center mt-2">
                    <span className="text-muted small">¿Ya tienes una cuenta? </span>
                    <a href="/" className="text-primary small fw-bold text-decoration-none">Inicia sesión</a>
                </div>
            </div>
        </div>
    );
};

export default Register;