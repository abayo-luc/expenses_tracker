import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
const TabIcon = ({name, focused}) => {
  const {colors} = useTheme();
  return (
    <Icon name={name} color={focused ? colors.accent : colors.grey} size={25} />
  );
};

export default TabIcon;
