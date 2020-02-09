import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistors} from './src/store';
import AppContainer from './src';

const App = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistors}>
      <AppContainer />
    </PersistGate>
  </ReduxProvider>
);

export default App;
