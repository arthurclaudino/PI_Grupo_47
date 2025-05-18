import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-4">
        <RegisterForm />
      </div>
    </div>
  );
}