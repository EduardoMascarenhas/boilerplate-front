// src/components/protectedRoute.tsx

import { useEffect, useState } from 'react';
import { useAuth } from '../apollo/auth-context';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth()
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will only run on the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Optionally render something else before client-side code runs
    return <p>Carregando...</p>;
  }

  if (auth.user) {
    return <>{children}</>;
  } else {
    window.location.href = '/login' 
  }
};

export default ProtectedRoute;
