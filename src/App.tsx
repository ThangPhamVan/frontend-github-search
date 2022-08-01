import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import RouterComponent from './routers';
import ThemeContainer from './components/layout/theme';
import Loading from './components/common/loading';
import { ErrorBoundary } from './components/common/errorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <ThemeContainer>
            <RouterComponent />
          </ThemeContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
