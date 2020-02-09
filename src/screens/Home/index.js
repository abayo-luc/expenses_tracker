import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ProgressBar, useTheme} from 'react-native-paper';
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
const HomeScreen = ({isFetching, fetchData, transactions}) => {
  const {colors} = useTheme();
  const [isModalVisible, toggleModal] = useState(false);
  useEffect(() => {
    toggleModal(false);
  }, [isFetching]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Container>
      <View style={styles.container}>
        {isFetching && <ProgressBar color={colors.accent} indeterminate />}
        <View style={styles.header}>
          <Header />
          <Spending />
        </View>
        <View style={styles.transactions}>
          <FlatList
            ListHeaderComponent={
              <View style={styles.listHeaderContainer}>
                <Chart />
              </View>
            }
            data={Object.values(transactions)}
            renderItem={({item}) => <Transaction item={item} />}
            keyExtractor={item => item._id}
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
