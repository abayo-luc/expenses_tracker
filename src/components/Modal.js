import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  empty: {
    flex: 1,
  },
});
const ModalContainer = ({children, visible, containerStyle, onDismiss}) => {
  return (
    <Portal layered>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={[styles.container, containerStyle]}>
        <View style={styles.contentContainer}>
          <TouchableWithoutFeedback onPress={onDismiss}>
            <View style={styles.empty} />
          </TouchableWithoutFeedback>
          {children}
        </View>
      </Modal>
    </Portal>
  );
};
ModalContainer.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};
export default ModalContainer;
