import {useState, useEffect} from 'react';
import {DarkTheme, DefaultTheme} from 'react-native-paper';
import {black001, black002, grey600, black, white, red500} from './colors';
const defaultAppTheme = {
  theme: DefaultTheme,
  colors: {
    primary: black,
    accent: '#76ecbe',
    background: white,
    surface: white,
    black: black001,
    grey: grey600,
  },
};
export default (theme = 'light') => {
  const [appTheme, setAppTheme] = useState(defaultAppTheme);

  useEffect(() => {
    const newAppTheme = {
      ...defaultAppTheme,
    };
    if (theme === 'dark') {
      newAppTheme.theme = DarkTheme;
      newAppTheme.colors = {
        ...newAppTheme.colors,
        primary: white,
        background: black002,
        surface: black001,
      };
    }
    setAppTheme(newAppTheme);
  }, [theme]);
  return {
    ...appTheme.theme,
    dark: theme === 'dark',
    mode: 'adaptive',
    roundness: 4,
    colors: {
      ...appTheme.theme.colors,
      ...appTheme.colors,
      red: red500,
    },
    animation: {
      scale: 1.0,
    },
  };
};
