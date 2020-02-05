import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Card, Title, Caption, useTheme, Headline} from 'react-native-paper';
import Icon from '../../../components/Icon';
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    width: '98%',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginHorizontal: 5,
    letterSpacing: 2,
  },
});

const Balance = () => {
  const {colors} = useTheme();
  return (
    <Card elevation={3} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Icon name="wallet" color={colors.accent} size={36} />
          <Headline style={styles.title}>
            {parseInt(Math.random(0.1, 0.5) * 10000, 10)} Rwf
          </Headline>
        </View>
        <Caption>BK saving account</Caption>
      </View>
    </Card>
  );
};

export default Balance;
