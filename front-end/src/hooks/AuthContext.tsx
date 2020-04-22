import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    // Carregando as informações já contidas no localStorage
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarbaer:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    // Pegando os dados do usuario Logado
    const { token, user } = response.data;

    // Salvando os dados do usuario no LocalStorage
    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarbaer:user', JSON.stringify(user));

    // Salvando os dados do usuario na aplicação no Estado
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarbaer:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('use Auth must be within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
