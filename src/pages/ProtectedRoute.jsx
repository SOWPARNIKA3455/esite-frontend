import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('authToken');
  const isValidToken = token && token !== 'fake_token';

  console.log('ProtectedRoute check: ', token, isValidToken);

  if (!isValidToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;