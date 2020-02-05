import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from '../components/Icon';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth * 2,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    padding: 10,
    letterSpacing: 2,
  },
});
const DatePicker = () => {
  const {colors} = useTheme();
  const [state, setState] = useState({
    date: new Date(),
    mode: 'date',
    show: false,
  });
  const _setDate = (event, date) => {
    date = date || state.date;
    setState({
      ...state,
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };
  const _showDatePicker = mode => {
    setState({
      ...state,
      show: true,
      mode,
    });
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.background, borderColor: colors.grey},
      ]}>
      <TouchableOpacity onPress={_showDatePicker}>
        <View style={styles.buttonContent}>
          <Icon name="calendar" color={colors.accent} />
          <Text style={styles.text}>
            {new Date(state.date).toLocaleDateString('en-GB')}
          </Text>
        </View>
      </TouchableOpacity>
      {state.show && (
        <DateTimePicker
          value={state.date}
          maximumDate={new Date()}
          mode={state.mode}
          display="default"
          locale="es-GB"
          onChange={_setDate}
          textColor="#FF8"
        />
      )}
    </View>
  );
};

export default DatePicker;
