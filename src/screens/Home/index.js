import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Container from '../../components/Container';
import styles from './styles';
import Modal from '../../components/Modal';
import FloatingButton from './components/FloatingButton';
import NewTransaction from './components/NewTransaction';
import Header from '../../components/Header';
import Spending from './components/Spending';
import Transaction from './components/cards/Transaction';
import Chart from './components/Chart';
import {fetchTransactions} from '../../store/actions/transaction.actions';
const data = [...Array(10).keys()].map(item => ({
  id: `item-${item}`,
  title: `item ${item}`,
}));

const HomeScreen = ({isFetching, fetchData}) => {
  const [isModalVisible, toggleModal] = useState(false);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
          <Spending />
        </View>
        <View style={styles.transactions}>
          <FlatList
            data={data}
            ListHeaderComponent={
              <View style={styles.listHeaderContainer}>
                <Chart />
              </View>
            }
            renderItem={({item}) => <Transaction item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
            ListFooterComponent={<View style={styles.listFooter} />}
          />
        </View>
        <View style={styles.floatingButton}>
          <FloatingButton onPress={() => toggleModal(true)} />
        </View>
        <Modal
          visible={isModalVisible}
          onDismiss={() => toggleModal(false)}
          children={<NewTransaction onSave={() => toggleModal(false)} />}
        />
      </View>
    </Container>
  );
};
const mapStateToProps = ({transactions}) => ({
  ...transactions,
});
export default connect(
  mapStateToProps,
  {fetchData: fetchTransactions},
)(HomeScreen);
