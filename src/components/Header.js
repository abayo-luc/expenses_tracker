import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Headline} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
});
const Header = () => {
  return (
    <View style={styles.container}>
      <Headline>Hello Luc</Headline>
      <Avatar.Image
        size={46}
        source={{
          uri: 'https://avatars1.githubusercontent.com/u/20681465?s=460&v=4',
        }}
      />
    </View>
  );
};

export default Header;
