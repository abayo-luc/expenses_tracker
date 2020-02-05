import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Container from '../../components/Container';
import Header from './components/Header';
import Balance from './components/Balance';
import SubBalance from './components/SubBalance';
import OptionsLists from './components/OptionsList';
import styles from './styles';
const OptionsScreen = () => {
  return (
    <Container>
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Balance />
          <View style={styles.expandingRow}>
            <SubBalance />
            <SubBalance />
            <SubBalance />
            <SubBalance />
          </View>
          <OptionsLists />
        </ScrollView>
      </View>
    </Container>
  );
};

export default OptionsScreen;
