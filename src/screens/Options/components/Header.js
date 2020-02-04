import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, useTheme, Text, Caption} from 'react-native-paper';
import Icon from '../../../components/Icon';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    margin: 10,
  },
});
const Header = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            source={{
              uri:
                'https://avatars1.githubusercontent.com/u/20681465?s=460&v=4',
            }}
          />
        </View>
        <View style={styles.info}>
          <Text>Charles Clack</Text>
          <Caption>Last transaction 12.11</Caption>
        </View>
      </View>
      <View>
        <Icon name="menu" color={colors.accent} size={25} />
      </View>
    </View>
  );
};
export default Header;
