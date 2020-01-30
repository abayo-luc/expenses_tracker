import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  heder: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  transactions: {
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    marginVertical: 5,
  },
  floatingButton: {
    position: 'absolute',
    zIndex: 80,
    bottom: 0,
    alignSelf: 'center',
  },
  listHeaderContainer: {
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  listFooter: {
    height: 30,
  },
});
