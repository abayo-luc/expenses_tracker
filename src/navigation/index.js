import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import HomeStack from './HomeStack';
import OptionStack from './OptionsStack';
import TabIcon from '../components/Icon';
import theme from '../utils/theme';

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => <TabIcon focused={focused} name="home" />,
};
OptionStack.navigationOptions = {
  tabBarLabel: 'Options',
  tabBarIcon: ({focused}) => <TabIcon focused={focused} name="options" />,
};
const TabBarComponent = props => <BottomTabBar {...props} />;

export default createAppContainer(
  createBottomTabNavigator(
    {
      HomeStack,
      OptionStack,
    },
    {
      tabBarComponent: props => (
        <TabBarComponent
          {...props}
          style={{
            borderTopColor: theme.colors.grey,
            backgroundColor: theme.colors.surface,
          }}
        />
      ),
      lazy: true,
      tabBarOptions: {
        adaptive: true,
        activeTintColor: theme.colors.accent,
        style: {
          backgroundColor: theme.colors.black,
        },
      },
    },
  ),
);
