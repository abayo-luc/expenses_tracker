import {StyleSheet} from 'react-native';

export const transStyles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth * 1.2,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    width: '53%',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftActions: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
