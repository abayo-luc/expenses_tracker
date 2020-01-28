import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Container = ({children}) => {
  const {colors, dark} = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Container;
