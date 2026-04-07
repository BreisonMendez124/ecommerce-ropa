import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { authService, tipoIdentificacionService } from '../../services/api';

export default function Register() {
    const navigate = useNavigate();
    const [tiposIdentificacion, setTiposIdentificacion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        numero_identificacion: '',
        email: '',
        password: '',
        confirmPassword: '',
        id_tipo_identificacion: '',
        id_rol: 2 // Cliente por defecto
    });

    useEffect(() => {
        loadTiposIdentificacion();
    }, []);

    const loadTiposIdentificacion = async () => {
        try {
            const response = await tipoIdentificacionService.getAll();
            if (response.success) {
                setTiposIdentificacion(response.data);
            }
        } catch (err) {
            console.error("Error cargando tipos de identificación:", err);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("¡Las contraseñas no coinciden!");
            return;
        }

        setLoading(true);

        try {
            const { confirmPassword, ...registerData } = formData;
            const response = await authService.register(registerData);

            if (response.success) {
                alert("Registro exitoso. Por favor inicia sesión.");
                navigate("/");
            } else {
                setError(response.message || "Error al registrar usuario");
            }
        } catch (err) {
            setError("Error de conexión con el servidor");
            console.error("Register error:", err);
        } finally {
            setLoading(false);
        }
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

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-3">
                    <Input
                        label="Nombre"
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        label="Apellido"
                        type="text"
                        name="apellido"
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Tipo de Identificación
                        </label>
                        <select
                            name="id_tipo_identificacion"
                            value={formData.id_tipo_identificacion}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            required
                        >
                            <option value="">Selecciona un tipo</option>
                            {tiposIdentificacion.map((tipo) => (
                                <option key={tipo.id} value={tipo.id}>
                                    {tipo.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Input
                        label="Número de Identificación"
                        type="text"
                        name="numero_identificacion"
                        placeholder="12345678"
                        value={formData.numero_identificacion}
                        onChange={handleChange}
                        required
                    />

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

                    <Button type="submit" className="w-full mt-6" size="lg" disabled={loading}>
                        {loading ? "Registrando..." : "Registrarse"}
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