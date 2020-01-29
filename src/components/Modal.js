import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
const ModalContainer = ({children, visible, containerStyle, onDismiss}) => {
  return (
    <Portal layered>
      <View style={styles.contentContainer}>
        <Modal
          visible={visible}
          onDismiss={onDismiss}
          contentContainerStyle={[styles.container, containerStyle]}>
          {children}
        </Modal>
      </View>
    </Portal>
  );
};
ModalContainer.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};
export default ModalContainer;
