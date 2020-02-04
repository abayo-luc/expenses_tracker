import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Card, Caption, useTheme, Headline, Title} from 'react-native-paper';
const {width: DEVICE_WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: DEVICE_WIDTH / 55,
    marginVertical: 10,
    width: DEVICE_WIDTH / 2.5,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    marginHorizontal: 5,
    letterSpacing: 2,
  },
});

const SubBalance = () => {
  return (
    <Card elevation={3} style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>
          {parseInt(Math.random(0.1, 0.5) * 1040, 10)} Rfw
        </Title>
        <Caption>BK saving account</Caption>
      </View>
    </Card>
  );
};

export default SubBalance;
