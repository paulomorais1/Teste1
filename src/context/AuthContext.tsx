import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o tipo do contexto
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Criando o contexto
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

// Definindo o tipo das props do AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Componente de provedor do contexto de autenticação
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Lógica de autenticação
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Lógica de logout
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
