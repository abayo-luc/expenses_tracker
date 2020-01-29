import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
const FloatingButton = ({onPress}) => {
  const {colors} = useTheme();
  return (
    <FAB
      style={styles.fab}
      small={false}
      icon={() => (
        <View style={styles.iconContainer}>
          <Icon name="ios-add" color={colors.black} size={26} />
        </View>
      )}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    margin: 5,
    alignSelf: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
  },
});

export default FloatingButton;
