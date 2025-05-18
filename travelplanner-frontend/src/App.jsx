import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PreferencesPage from './pages/PreferencesPage';
import RecommendationsPage from './pages/RecommendationsPage';
import Navbar from './components/Navbar';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans transition-all">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/preferences"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <div className="max-w-4xl mx-auto p-4">
                    <PreferencesPage />
                  </div>
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/recommendations"
            element={
              <PrivateRoute>
                <>
                  <Navbar />
                  <div className="max-w-4xl mx-auto p-4">
                    <RecommendationsPage />
                  </div>
                </>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
