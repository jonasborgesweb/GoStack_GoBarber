import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      // Carregando as informações já contidas no localStorage
      const [token, user] = await AsyncStorage.multiGet([
        '@GoBarber:tokeb',
        '@GoBarber:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);

      // Teste Teste
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    // Pegando os dados do usuario Logado
    const { token, user } = response.data;

    // Salvando os dados do usuario no LocalStorage
    await AsyncStorage.multiSet([
      ['@GoBarber:token', token],
      ['@GoBarbaer:user', JSON.stringify(user)],
    ]);

    // Salvando os dados do usuario na aplicação no Estado
    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@GoBarber:token', '@GoBarbaer:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
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
