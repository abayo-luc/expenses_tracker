import {DarkTheme} from 'react-native-paper';
import {black001, black002} from './colors';
export default {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  roundness: 4,
  colors: {
    ...DarkTheme.colors,
    primary: '#fff',
    accent: '#76ecbe',
    background: black002,
    black: black001,
  },
  animation: {
    scale: 1.0,
  },
};
