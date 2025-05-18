import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TravelPreferencesForm() {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    duration: '',
    interests: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao salvar preferências');

      alert('Preferências salvas com sucesso!');
      navigate('/recommendations');
    } catch (error) {
      alert('Erro ao salvar preferências: ' + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Preferências de Viagem
      </h2>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Destino desejado</label>
        <input
          name="destination"
          placeholder="Destino desejado"
          value={formData.destination}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Orçamento</label>
        <input
          type="number"
          name="budget"
          placeholder="Orçamento"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Duração (em dias)</label>
        <input
          type="number"
          name="duration"
          placeholder="Duração (em dias)"
          value={formData.duration}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Interesses</label>
        <input
          name="interests"
          placeholder="Praia, cultura, aventura..."
          value={formData.interests}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Salvar Preferências
      </button>
    </form>
  );
}

export default TravelPreferencesForm;