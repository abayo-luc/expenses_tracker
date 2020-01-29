import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Container from '../../components/Container';
import styles from './styles';
import Modal from '../../components/Modal';
import FloatingButton from './components/FloatingButton';
import NewTransaction from './components/NewTransaction';
const HomeScreen = () => {
  const [isModalVisible, toggleModal] = useState(false);
  return (
    <Container>
      <View style={styles.container}>
        <Text>Hello HOme</Text>
        <Modal
          visible={isModalVisible}
          onDismiss={() => toggleModal(false)}
          children={<NewTransaction />}
        />
        <View style={styles.floatingButton}>
          <FloatingButton onPress={() => toggleModal(true)} />
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;
