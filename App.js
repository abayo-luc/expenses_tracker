import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Container from './src/components/Container';
import theme from './src/utils/theme';
import Navigation from './src/navigation';
const App = () => (
  <PaperProvider theme={theme}>
    <Container>
      <Navigation />
    </Container>
  </PaperProvider>
);

export default App;
