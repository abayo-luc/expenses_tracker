import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '../../components/Container';
import styles from './styles';
import FloatingButton from './components/FloatingButton';
const HomeScreen = () => {
  return (
    <Container>
      <View style={styles.container}>
        <Text>Hello HOme</Text>
        <View style={styles.floatingButton}>
          <FloatingButton />
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;
