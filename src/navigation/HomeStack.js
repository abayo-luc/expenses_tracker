import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/Home';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);
