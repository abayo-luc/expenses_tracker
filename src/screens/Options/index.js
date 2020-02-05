import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Container from '../../components/Container';
import Header from './components/Header';
import Balance from './components/Balance';
import SubBalance from './components/SubBalance';
import {List, Switch, useTheme} from 'react-native-paper';
import Icon from '../../components/Icon';
import {changeTheme} from '../../store/actions/theme.actions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 25,
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  listSection: {
    width: '100%',
  },
  expandingRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const OptionsScreen = ({handleTheme, theme}) => {
  const darkMode = theme === 'dark';
  const {colors} = useTheme();
  const [notify, setNotification] = useState(false);
  const _handleThemeChange = () => {
    const appTheme = darkMode ? 'white' : 'dark';
    handleTheme(appTheme);
  };
  return (
    <Container>
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Balance />
          <View style={styles.expandingRow}>
            <SubBalance />
            <SubBalance />
            <SubBalance />
            <SubBalance />
          </View>
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
                <Switch
                  value={theme === 'dark'}
                  onValueChange={_handleThemeChange}
                />
              )}
            />
          </List.Section>
        </ScrollView>
      </View>
    </Container>
  );
};
const mapStateToProps = ({theme}) => ({
  theme: theme.theme,
});
export default connect(
  mapStateToProps,
  {handleTheme: changeTheme},
)(OptionsScreen);
