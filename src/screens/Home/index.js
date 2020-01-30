import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import Container from '../../components/Container';
import styles from './styles';
import Modal from '../../components/Modal';
import FloatingButton from './components/FloatingButton';
import NewTransaction from './components/NewTransaction';
import Header from '../../components/Header';
import Spending from './components/Spending';
import Transaction from './components/cards/Transaction';

const data = [...Array(10).keys()].map(item => ({
  id: `item-${item}`,
  title: `item ${item}`,
}));

const HomeScreen = () => {
  const [isModalVisible, toggleModal] = useState(false);
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
          <Spending />
        </View>
        <View style={styles.transactions}>
          <FlatList
            data={data}
            renderItem={({item}) => <Transaction item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <Modal
          visible={isModalVisible}
          onDismiss={() => toggleModal(false)}
          children={<NewTransaction onSave={() => toggleModal(false)} />}
        />
        <View style={styles.floatingButton}>
          <FloatingButton onPress={() => toggleModal(true)} />
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;
