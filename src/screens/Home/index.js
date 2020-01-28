import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const {colors} = useTheme();
  return (
    <View style={[{flex: 1, backgroundColor: colors.background}]}>
      <Text>Hello HOme</Text>
    </View>
  );
};

export default HomeScreen;
