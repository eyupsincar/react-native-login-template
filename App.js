import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  StyleSheet,
  View,
} from 'react-native';

import Router from './src/router';

function App() {
  return(
    <NavigationContainer>
      <View style={styles.container}>
        <Router />
      </View>
    </NavigationContainer>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
