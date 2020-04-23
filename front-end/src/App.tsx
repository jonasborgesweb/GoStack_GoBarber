import React from 'react';

// Importando CSS
import GlobalStyle from './styles/global';

// Importando os Hooks
import AppProvider from './hooks/index';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
