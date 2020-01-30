import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  transactions: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  floatingButton: {
    position: 'absolute',
    zIndex: 80,
    bottom: 0,
    alignSelf: 'center',
  },
});
