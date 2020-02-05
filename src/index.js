import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {connect} from 'react-redux';
import Navigation from './navigation';
import themeUtils from './utils/theme';
const AppContainer = ({theme}) => {
  const appTheme = themeUtils(theme);
  return (
    <PaperProvider theme={appTheme}>
      <Navigation />
    </PaperProvider>
  );
};
const mapStateToProps = ({theme}) => {
  return {
    theme: theme.theme,
  };
};
export default connect(
  mapStateToProps,
  null,
)(AppContainer);
