import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function Register() {
    const navigate = useNavigate();
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
        navigate("/catalog");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Crear cuenta</h2>
                    <p className="text-gray-600">Únete a nuestra tienda y empieza a comprar</p>
                </div>

                <form onSubmit={handleRegister}>
                    <Input
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        placeholder="correo@ejemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        label="Contraseña"
                        type="password"
                        name="password"
                        placeholder="Mínimo 6 caracteres"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength="6"
                    />

                    <Input
                        label="Confirmar contraseña"
                        type="password"
                        name="confirmPassword"
                        placeholder="Repite tu contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <Button type="submit" className="w-full" size="lg">
                        Registrarse
                    </Button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        ¿Ya tienes una cuenta?{" "}
                        <button
                            onClick={() => navigate("/")}
                            className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                        >
                            Inicia sesión
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}