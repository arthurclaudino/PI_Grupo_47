import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-4">
        <LoginForm />
        <p className="mt-4 text-center text-gray-700">
          Não tem cadastro?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Cadastre-se agora
          </a>
        </p>
      </div>
    </div>
  );
}