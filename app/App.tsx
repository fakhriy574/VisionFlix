import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import AppNavigation from './src/routes';

// hide yellow box
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} />
      <AppNavigation />
      <FlashMessage position="bottom" />
    </>
  );
};

export default App;
