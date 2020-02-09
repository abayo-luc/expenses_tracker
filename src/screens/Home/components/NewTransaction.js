import React, {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {TextInput, useTheme, Button, HelperText} from 'react-native-paper';
import DatePicker from '../../../components/DatePicker';
import {saveNewTransactions} from '../../../store/actions/transaction.actions';
import isEmpty from '../../../utils/isEmpty';
import {newTransStyles as styles} from './styles';
import notify from '../../../utils/Notify';
const NewTransaction = ({onSave}) => {
  const {colors} = useTheme();
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({title: false, amount: false});

  //notify user for bigger expense
  const handleLargeExpenseAlert = id =>
    notify(id, 'Large Expense Alert', `You spend Rwf ${amount} for ${title}`);

  // send data to redux action and update the state
  const _handleSave = () => {
    setErrors({title: false, amount: false});
    if (isEmpty(title) || isEmpty(amount)) {
      return setErrors({title: isEmpty(title), amount: isEmpty(amount)});
    }
    onSave({title, date, amount}, handleLargeExpenseAlert);
  };
  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      <View style={styles.content}>
        <View>
          <TextInput
            label="Title"
            value={title}
            mode="outlined"
            onChangeText={setTitle}
          />
          <HelperText type="error" visible={errors.title}>
            Title can't be empty
          </HelperText>
        </View>
        <View>
          <TextInput
            label="Rwf"
            value={amount}
            mode="outlined"
            keyboardType="numeric"
            onChangeText={setAmount}
            style={styles.input}
          />
          <HelperText type="error" visible={errors.amount}>
            Amount can't be empty
          </HelperText>
        </View>
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
const mpaStateToProps = () => ({});
// eslint-disable-next-line prettier/prettier
export default connect(mpaStateToProps, {onSave: saveNewTransactions})(
  NewTransaction,
);
