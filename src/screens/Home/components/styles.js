import {StyleSheet, Dimensions} from 'react-native';
const {height: DEVICE_HEIGHT} = Dimensions.get('window');
export const newTransStyles = StyleSheet.create({
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
