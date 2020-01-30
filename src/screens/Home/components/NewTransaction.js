import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TextInput, useTheme, Button} from 'react-native-paper';
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    minHeight: DEVICE_HEIGHT * 0.2,
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
  const [state, setState] = useState({title: '', amount: ''});
  return (
    <View style={[styles.container, {backgroundColor: colors.surface}]}>
      <View style={styles.content}>
        <TextInput
          label="Title"
          value={state.title}
          mode="outlined"
          onChangeText={text => setState({...state, title: text})}
        />
        <TextInput
          label="Rwf"
          value={state.amount}
          mode="outlined"
          onChangeText={text => setState({...state, amount: text})}
          style={styles.input}
        />
        <Button
          mode="outlined"
          onPress={() => {
            onSave();
          }}
          style={[styles.button, {backgroundColor: colors.accent}]}>
          Save
        </Button>
      </View>
    </View>
  );
};

export default NewTransaction;
