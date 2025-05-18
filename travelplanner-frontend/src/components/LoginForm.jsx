import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      alert('Login realizado com sucesso!');
      setEmail('');
      setPassword('');
      navigate('/preferences');
    } catch (error) {
      const message = error.response?.data?.error ?? 'Erro desconhecido';
      alert('Erro ao fazer login: ' + message);
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Login
      </h2>

      <div>
        <label className="block text-gray-700 font-medium mb-1">E-mail</label>
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}

export default LoginForm;
