import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/utils/theme';
import Navigation from './src/navigation';
const App = () => (
  <PaperProvider theme={theme}>
    <Navigation />
  </PaperProvider>
);

export default App;
