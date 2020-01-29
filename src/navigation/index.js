import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import HomeStack from './HomeStack';
import OptionStack from './OptionsStack';
import TabIcon from '../components/TabIcon';
import theme from '../utils/theme';
const preFix = Platform.OS === 'ios' ? 'ios' : 'md';

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabIcon focused={focused} name={`${preFix}-home`} />
  ),
};
OptionStack.navigationOptions = {
  tabBarLabel: 'Options',
  tabBarIcon: ({focused}) => (
    <TabIcon focused={focused} name={`${preFix}-options`} />
  ),
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
