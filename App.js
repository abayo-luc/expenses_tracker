import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store';
import AppContainer from './src';

const App = () => (
  <ReduxProvider store={store}>
    <AppContainer />
  </ReduxProvider>
);

export default App;
