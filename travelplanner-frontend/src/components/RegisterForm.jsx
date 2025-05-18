import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      // 1. Realiza o cadastro
      await axios.post('http://localhost:3001/api/auth/register', {
        email,
        password,
      });

      // 2. Auto login após o cadastro
      const res = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      alert('Cadastro e login realizados com sucesso!');
      setEmail('');
      setPassword('');

      // 3. Redireciona para a tela de preferências
      navigate('/preferences');
    } catch (error) {
      const message = error.response?.data?.error ?? 'Erro desconhecido';
      alert('Erro ao registrar/login: ' + message);
    }
  }

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Criar conta no TravelPlanner
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
        Cadastrar
      </button>
    </form>
  );
}

export default RegisterForm;
