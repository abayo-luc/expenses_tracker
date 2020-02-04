import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import {useTheme} from 'react-native-paper';
const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
const TabIcon = ({name, focused = false, size = 25, color}) => {
  const {colors} = useTheme();
  return (
    <Icon
      name={`${prefix}-${name}`}
      color={color ? color : focused ? colors.accent : colors.grey}
      size={size}
    />
  );
};

export default TabIcon;
