import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Avatar, useTheme, Caption, Title} from 'react-native-paper';
import theme from '../../../../utils/theme';
const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth / 2,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    width: '53%',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const Transaction = ({item}) => {
  const {colors, roundness} = useTheme();
  return (
    <View
      style={[
        styles.container,
        {borderColor: colors.accent, borderRadius: roundness},
      ]}
      theme={theme}>
      <View style={styles.avatar}>
        <Avatar.Image
          size={42}
          source={{
            uri: 'https://avatars1.githubusercontent.com/u/20681465?s=460&v=4',
          }}
        />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1}>{item.title}</Text>
        <Caption>04/19/19 - 3:32pm</Caption>
      </View>
      <View style={styles.amount}>
        <Title adjustsFontSizeToFit={true}>Rwf 74,7890</Title>
      </View>
    </View>
  );
};

export default Transaction;
