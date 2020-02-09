/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from '../components/Icon';
const isIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth * 2,
    marginVertical: 5,
    borderRadius: 5,
  },
  pickerContainer: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth * 2,
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
const DatePicker = ({onChange, date}) => {
  const {colors} = useTheme();
  const [show, setShow] = useState(isIOS);
  const _handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    onChange(currentDate);
    setShow(isIOS ? true : false);
  };
  const _showDatePicker = () => {
    setShow(true);
  };

  return (
    <View>
      {!isIOS ? (
        <View style={[styles.container, {borderColor: colors.grey}]}>
          <TouchableOpacity onPress={_showDatePicker}>
            <View style={styles.buttonContent}>
              <Icon name="calendar" color={colors.accent} />
              <Text style={styles.text}>
                {new Date(date).toLocaleDateString('en-GB')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.container, {borderColor: 'transparent'}]}>
          <View style={styles.buttonContent}>
            <Icon name="calendar" color={colors.accent} />
            <Text style={styles.text}>
              {new Date(date).toLocaleDateString('en-GB')}
            </Text>
          </View>
        </View>
      )}
      <View
        style={
          isIOS && [
            styles.pickerContainer,
            {
              backgroundColor: colors.background,
              borderColor: colors.grey,
            },
          ]
        }>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={_handleChange}
            initialValue={new Date()}
            maximumDate={new Date()}
          />
        )}
      </View>
    </View>
  );
};

export default DatePicker;
