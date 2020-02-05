import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {TextInput, useTheme, Button} from 'react-native-paper';
import DatePicker from '../../../components/DatePicker';
import {saveNewTransactions} from '../../../store/actions/transaction.actions';
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    minHeight: DEVICE_HEIGHT * 0.3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    margin: 10,
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 5,
    width: '40%',
    alignSelf: 'flex-end',
  },
});
const NewTransaction = ({onSave}) => {
  const {colors} = useTheme();
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const _handleSave = () => {
    onSave({title, date, amount});
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      <View style={styles.content}>
        <TextInput
          label="Title"
          value={title}
          mode="outlined"
          onChangeText={setTitle}
        />
        <TextInput
          label="Rwf"
          value={amount}
          mode="outlined"
          keyboardType="numeric"
          onChangeText={setAmount}
          style={styles.input}
        />
        <DatePicker onChange={setDate} date={date} />
        <Button
          mode="outlined"
          onPress={_handleSave}
          style={[styles.button, {backgroundColor: colors.accent}]}>
          Save
        </Button>
      </View>
    </View>
  );
};

export default connect(
  null,
  {onSave: saveNewTransactions},
)(NewTransaction);
