import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Switch, useTheme} from 'react-native-paper';
import {connect} from 'react-redux';
import {changeTheme} from '../../../store/actions/theme.actions';
import Icon from '../../../components/Icon';
const styles = StyleSheet.create({
  listSection: {
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const OptionsList = ({theme, handleTheme}) => {
  const darkMode = theme === 'dark';
  const {colors} = useTheme();
  const [notify, setNotification] = useState(false);
  const _handleThemeChange = () => {
    const appTheme = darkMode ? 'white' : 'dark';
    handleTheme(appTheme);
  };
  return (
    <List.Section title="Actions" style={styles.listSection}>
      <List.Item
        title="Notification"
        description="Large expense alert"
        left={props => (
          <View {...props} style={styles.iconContainer}>
            <Icon
              {...props}
              name={`notifications${!notify ? '' : '-off'}`}
              color={colors.accent}
              size={28}
            />
          </View>
        )}
        color={colors.accent}
        right={props => (
          <Switch
            value={notify}
            onValueChange={() => {
              setNotification(!notify);
            }}
          />
        )}
      />
      <List.Item
        title="Theme"
        description={darkMode ? 'Dark on' : 'Dark off'}
        left={props => (
          <View {...props} style={styles.iconContainer}>
            <Icon
              {...props}
              name="color-palette"
              color={colors.accent}
              size={28}
            />
          </View>
        )}
        right={props => (
          <Switch value={theme === 'dark'} onValueChange={_handleThemeChange} />
        )}
      />
    </List.Section>
  );
};

const mapStateToProps = ({theme}) => ({
  theme: theme.theme,
});
export default connect(
  mapStateToProps,
  {handleTheme: changeTheme},
)(OptionsList);
