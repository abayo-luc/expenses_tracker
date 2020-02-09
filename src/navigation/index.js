import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {useTheme} from 'react-native-paper';
import HomeStack from './HomeStack';
import OptionStack from './OptionsStack';
import TabIcon from '../components/Icon';

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => <TabIcon focused={focused} name="home" />,
};
OptionStack.navigationOptions = {
  tabBarLabel: 'Options',
  tabBarIcon: ({focused}) => <TabIcon focused={focused} name="options" />,
};
const TabBarComponent = props => {
  const {colors} = useTheme();
  const allProps = {
    ...props,
    activeTintColor: colors.accent,
    style: {
      ...props.style,
      borderTopColor: colors.grey,
      backgroundColor: colors.surface,
    },
  };
  return <BottomTabBar {...allProps} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      HomeStack,
      OptionStack,
    },
    {
      tabBarComponent: props => <TabBarComponent {...props} />,
      lazy: true,
      tabBarOptions: {
        adaptive: true,
      },
    },
  ),
);
