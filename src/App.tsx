import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import RouterComponent from './routers';

import { ErrorBoundary } from './components/common';
import ThemeContainer from './components/layout/theme';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContainer>
            <RouterComponent />
          </ThemeContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
