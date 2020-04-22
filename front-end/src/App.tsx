import React from 'react';

// Importando CSS
import GlobalStyle from './styles/global';

// Importação Contexto
import { AuthProvider } from './hooks/AuthContext';

import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
