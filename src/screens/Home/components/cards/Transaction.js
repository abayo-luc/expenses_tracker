import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Text,
  Avatar,
  useTheme,
  Caption,
  Paragraph,
  Theme,
} from 'react-native-paper';
import Icon from '../../../../components/Icon';
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
    justifyContent: 'center',
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
      theme={Theme}>
      <View style={styles.avatar}>
        <Avatar.Image
          size={42}
          source={{
            uri:
              item.avatar ||
              'https://res.cloudinary.com/dghepsznx/image/upload/v1549123822/WhatIf/placeholder-image.jpg',
          }}
        />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1}>{item.title}</Text>
        <Caption>{new Date(item.date).toDateString()}</Caption>
      </View>
      <View style={styles.amount}>
        <Paragraph adjustsFontSizeToFit={true}>Rwf {item.amount}.00</Paragraph>
      </View>
    </View>
  );
};

export default Transaction;
