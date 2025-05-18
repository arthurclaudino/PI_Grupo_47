import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RouteRecommendations() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoutes = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        alert('Você precisa estar logado para ver recomendações.');
        navigate('/');
        return;
      }

      try {
        const response = await fetch('http://localhost:3001/api/routes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar roteiros');
        }

        const data = await response.json();
        setRoutes(data);
      } catch (error) {
        alert('Erro ao buscar roteiros: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Recomendações de Roteiros
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Carregando recomendações...</p>
      ) : routes.length === 0 ? (
        <p className="text-center text-gray-600">Nenhum roteiro encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {routes.map((route, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {route.destination}
              </h3>
              <p className="text-gray-700">
                Duração: {route.duration} dias
              </p>
              <p className="text-gray-700">
                Preço: R${route.price}
              </p>
              <p className="text-gray-600 italic">
                Interesses: {route.interests}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RouteRecommendations;
