import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { AuthContextType } from '@/types/AuthContextType';
import { User } from '@/types/UserType';
import { Admin } from '@/types/AdminType';
import { DecodedToken } from '@/types/DecodedTokenType';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [admin, setAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userToken = localStorage.getItem('userToken');
      const adminToken = localStorage.getItem('adminToken');
      if (userToken) {
        try {
          const decodedToken = jwtDecode<DecodedToken>(userToken);
          const loggedUser: any = decodedToken;
          setUser({
            id: loggedUser.id,
            name: loggedUser.name,
            email: loggedUser.email,
            posts: []
          });
        } catch (error) {
          console.error('Erro ao decodificar token:', error);
        }
      }
      if (adminToken) {
        try {
          const decodedToken = jwtDecode<DecodedToken>(adminToken);
          const loggedAdmin: any = decodedToken;
          setAdmin({
            id: loggedAdmin.id,
            name: loggedAdmin.name,
            email: loggedAdmin.email
          });
        } catch (error) {
          console.error('Erro ao decodificar token:', error);
        }
      }
    }
  }, []);

  const login = (token: string) => {
    if (typeof window !== 'undefined') {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        localStorage.setItem('userToken', token);
        localStorage.setItem('loggedUser', JSON.stringify(decodedToken));
        const loggedUser: any = decodedToken;
        setUser({
          id: loggedUser.id,
          name: loggedUser.name,
          email: loggedUser.email,
          posts: []
        });
        window.location.href = "/profile";
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
      }
    }
  };

  const loginAdmin = (token: string) => {
    if (typeof window !== 'undefined') {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        localStorage.setItem('adminToken', token);
        localStorage.setItem('loggedAdmin', JSON.stringify(decodedToken));
        const loggedAdmin: any = decodedToken;
        setAdmin({
          id: loggedAdmin.id,
          name: loggedAdmin.name,
          email: loggedAdmin.email
        });
        window.location.href = "/dashboard";
      } catch (error) {
        console.error('Erro ao decodificar token:', error);
      }
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userToken');
      localStorage.removeItem('loggedUser');
      localStorage.removeItem('adminToken');
      localStorage.removeItem('loggedAdmin');
    }
    setUser(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ user, admin, login, loginAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
