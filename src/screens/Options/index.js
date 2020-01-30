import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '../../components/Container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const OptionsScreen = () => {
  return (
    <Container>
      <View style={styles.container}>
        <Text>Hello Options</Text>
      </View>
    </Container>
  );
};

export default OptionsScreen;
