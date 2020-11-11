import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
} from 'react-native';

import Router from './src/router';

function App() {
  return(
      <View style={styles.container}>
        <Router />
      </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
