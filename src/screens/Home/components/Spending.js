import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Subheading, Text, Headline, useTheme} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
  },
  headline: {
    letterSpacing: 2,
  },
  text: {
    letterSpacing: 1,
    marginRight: 5,
  },
});
const Spending = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Subheading style={[styles.text]}>Your spending</Subheading>
      <Headline style={styles.headline}>Rwf 24058.00</Headline>
      <View style={styles.row}>
        <Text style={[styles.text, styles.caption, {color: colors.accent}]}>
          39.8%
        </Text>
        <Text style={[styles.text]}>this week</Text>
      </View>
    </View>
  );
};

export default Spending;
