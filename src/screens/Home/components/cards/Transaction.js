import React from 'react';
import {View} from 'react-native';
import {
  Text,
  Avatar,
  useTheme,
  Caption,
  Paragraph,
  Theme,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {transStyles as styles} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from '../../../../components/Icon';
import {deleteTransaction} from '../../../../store/actions/transaction.actions';
const Transaction = ({item, handleDelete}) => {
  const {colors, roundness} = useTheme();
  const LeftActions = () => {
    return (
      <View style={styles.leftActions}>
        <TouchableOpacity onPress={() => handleDelete(item._id)}>
          <Icon name="trash" size={32} color={colors.red} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <Swipeable renderLeftActions={LeftActions}>
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
          <Paragraph adjustsFontSizeToFit={true}>
            Rwf {item.amount}.00
          </Paragraph>
        </View>
      </View>
    </Swipeable>
  );
};

export default connect(
  null,
  {handleDelete: deleteTransaction},
)(Transaction);
