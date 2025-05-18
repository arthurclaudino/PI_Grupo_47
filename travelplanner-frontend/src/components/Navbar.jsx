import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/preferences" className="hover:underline">Preferências</Link>
          <Link to="/recommendations" className="hover:underline">Recomendações</Link>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}