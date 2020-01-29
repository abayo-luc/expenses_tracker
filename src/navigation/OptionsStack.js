import {createStackNavigator} from 'react-navigation-stack';
import OptionsScreens from '../screens/Options';

export default createStackNavigator(
  {
    Options: {
      screen: OptionsScreens,
    },
  },
  {
    initialRouteName: 'Options',
    headerMode: 'none',
  },
);
