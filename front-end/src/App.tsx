import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Importando CSS
import GlobalStyle from './styles/global';

// Importando os Hooks
import AppProvider from './hooks/index';

// Importando as Rotas
import Routes from './routes/index';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
