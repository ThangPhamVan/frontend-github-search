import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './Store';
import { PersistGate } from 'redux-persist/integration/react';
import RouterComponent from './Routers';

import { ErrorBoundary } from './Components/Common';
import ThemeContainer from './Components/Layout/Theme';

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
