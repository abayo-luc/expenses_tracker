import {DarkTheme, DefaultTheme} from 'react-native-paper';
import {black001, black002, grey600, black, white} from './colors';
const isDark = true;
const theme = isDark ? DarkTheme : DefaultTheme;
const customColors = {
  primary: isDark ? white : black,
  accent: '#76ecbe',
  background: isDark ? black002 : white,
  black: black001,
  grey: grey600,
};
export default {
  ...theme,
  dark: isDark,
  mode: 'adaptive',
  roundness: 4,
  colors: {
    ...theme.colors,
    ...customColors,
  },
  animation: {
    scale: 1.0,
  },
};
